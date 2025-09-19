# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('set_points/', views.set_points, name='set_points'),
    path('cricket/', views.cricket, name='cricket'),
    path('free_set_points/', views.free_set_points, name='free_set_points'),
    path('statistics/', views.statistics, name='statistics'),
    path('user/', views.users, name='users')
]