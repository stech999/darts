# myapp/views.py
from django.shortcuts import render
from django.contrib.auth.models import User

def home_page(request):
    return render(request, 'myapp/home.html')

def set_points(request):
    return render(request, 'myapp/set_points.html')

def cricket(request):
    return render(request, 'myapp/cricket.html')

def free_set_points(request):
    return render(request, 'myapp/free_set_points.html')

def statistics(request):
    return render(request, 'myapp/statistics.html')

def users(request):
    users = User.objects.all()
    context = {
        'user' : users,
    }
    return render(request, 'myapp/users.html', context)