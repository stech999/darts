from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class DailyStats(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    date = models.DateField()
    total_points = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0, blank=True, null=True)

    class Meta:
        unique_together = ('user', 'game', 'date')

    def __str__(self):
        return f'{self.user.username} - {self.game.name} - {self.date}'


class Throw(models.Model):
    daily_stats = models.ForeignKey(
        DailyStats, on_delete=models.CASCADE, related_name='throws')
    throw_number = models.IntegerField()
    points = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Throw {self.throw_number}: {self.points} points"
