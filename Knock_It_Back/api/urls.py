from django.urls import path

from .views import ListDrink, DetailDrink, ListUser, DetailUser

urlpatterns = [
    path('drinks/', ListDrink.as_view()),
    path('drinks/<int:pk>/', DetailDrink.as_view()),
    path('users/', ListUser.as_view()),
    path('user/', DetailUser.as_view()),
]