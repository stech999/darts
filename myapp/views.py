# myapp/views.py
from datetime import date
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.db.models import Sum, Count
from .models import DailyStats, Throw, Game
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


@csrf_exempt
@login_required
def home_page(request):
    user = request.user

    context = {
        'user': user,
    }
    return render(request, 'myapp/home.html', context)


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Автоматически входим в систему после регистрации
            login(request, user)
            # Перенаправляем пользователя на главную страницу или страницу статистики
            return redirect('home_page')  # Или redirect('statistics')
    else:
        form = UserCreationForm()  # Отображаем пустую форму при GET-запросе

    context = {
        'form': form
    }
    return render(request, 'registration/register.html', context)


def set_points(request):
    if not request.user.is_authenticated:
        return redirect('login')
    
    users = User.objects.all()

    context = {
        'users': users,
    }

    return render(request, 'myapp/set_points.html', context)


def cricket(request):
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, 'myapp/cricket.html')


def free_set_points(request):
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, 'myapp/free_set_points.html')


def statistics(request):
    if not request.user.is_authenticated:
        return redirect('login')

    user = request.user
    today = date.today()

    # 1. Получаем суммарную статистику (очки, победы) за все время для пользователя
    overall_stats = DailyStats.objects.filter(user=user).aggregate(
        total_points=Sum('total_points'),
        total_wins=Sum('wins')
    )

    # 2. Получаем статистику по каждой игре за все время
    stats_by_game = DailyStats.objects.filter(user=user) \
        .values('game__name') \
        .annotate(
            game_points=Sum('total_points'),
            game_wins=Sum('wins')
    ) \
        .order_by('-game_points')

    # 3. Получаем статистику по каждому отдельному броску за все время
    # Это покажет, как часто игрок попадал в "1", "20" и т.д.
    throw_counts = Throw.objects.filter(
        daily_stats__user=user  # Фильтруем по пользователю через связь DailyStats
    ).values('points') \
     .annotate(count=Count('id')) \
     .order_by('-points')

    context = {
        'overall_stats': overall_stats,
        'stats_by_game': stats_by_game,
        'throw_counts': throw_counts,
        'today': today,
    }

    return render(request, 'myapp/statistics.html', context)


def users(request):
    if not request.user.is_authenticated:
        return redirect('login')

    users = User.objects.all()
    context = {
        'user': users,
    }
    return render(request, 'myapp/users.html', context)


def save_data(request):
    if request.method == 'POST':
        try:
            # 1. Получаем данные из тела запроса
            data = json.loads(request.body)

            # 2. Валидация данных (ваши проверки)
            if not isinstance(data, dict):
                return JsonResponse({'error': 'Данные должны быть объектом JSON'}, status=400)
            if 'points' not in data or not isinstance(data['points'], int):
                return JsonResponse({'error': 'Некорректное значение очков'}, status=400)

            points = data['points']

            # 3. Получаем текущего пользователя
            user = request.user
            if not user.is_authenticated:
                # 401 Unauthorized
                return JsonResponse({'error': 'Пользователь не авторизован'}, status=401)

            # 4. Получаем игру (предположим, что игра "Darts" существует)
            try:
                # Замените 'Darts' на реальное имя игры
                game = Game.objects.get(name='301')
            except Game.DoesNotExist:
                return JsonResponse({f'error': 'Игра "${game}"не найдена'}, status=404)

            # 5. Получаем или создаем DailyStats для этого пользователя, игры и даты
            today = date.today()
            daily_stats, created = DailyStats.objects.get_or_create(
                user=user,
                game=game,
                date=today,
                # Начальные значения, если создаем новую запись
                defaults={'total_points': 0, 'wins': 0, 'losses': 0}
            )

            # 6. Определяем номер броска
            last_throw = Throw.objects.filter(
                daily_stats=daily_stats).order_by('-throw_number').first()
            throw_number = 1
            if last_throw:
                throw_number = last_throw.throw_number + 1

            # 7. Создаем новый бросок
            new_throw = Throw.objects.create(
                daily_stats=daily_stats,
                throw_number=throw_number,
                points=points
            )

            # 8. Обновляем total_points в DailyStats
            daily_stats.total_points += points
            daily_stats.save()

            return JsonResponse({'message': f'Бросок на {points} очков успешно записан!', 'points_scored': points}, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Некорректный JSON'}, status=400)
        except Exception as e:
            # Логируем ошибку для отладки
            print(f"Произошла ошибка: {e}")
            return JsonResponse({'error': f'Произошла внутренняя ошибка сервера: {e}'}, status=500)
    else:
        # Если запрос не POST, возвращаем ошибку 405 (Method Not Allowed)
        return JsonResponse({'error': 'Только POST-запросы разрешены'}, status=405)
