# myapp/urls.py
from django.shortcuts import redirect
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),

    path('accounts/register/', views.register_view, name='register'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),

    path('set_points/', views.set_points, name='set_points'),
    path('cricket/', views.cricket, name='cricket'),
    path('free_set_points/', views.free_set_points, name='free_set_points'),
    path('statistics/', views.statistics, name='statistics'),
    path('user/', views.users, name='users'),
    path('api/save-data/', views.save_data, name='save_data'),
]
