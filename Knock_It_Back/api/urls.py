from django.urls import path

from .views import ListDrink, DetailDrink

urlpatterns = [
    path('drinks/', ListDrink.as_view()),
    path('drinks/<int:pk>/', DetailDrink.as_view())
]