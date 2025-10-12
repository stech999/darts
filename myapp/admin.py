from django.contrib import admin
from .models import Game, DailyStats

@admin.register(Game)
class Game(admin.ModelAdmin):
    game = ('name',)

@admin.register(DailyStats)
class DailyStats(admin.ModelAdmin):
    user = ('name')
    game = ('name')
    date = ('name')
