from django.urls import path

from . import views

app_name = 'users'
urlpatterns = [
    path('create/', views.SignUpView.as_view(), name='create'),
]