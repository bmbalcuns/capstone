from django.urls import path
from . import views

app_name = 'kib_app'
urlpatterns = [
    path('', views.check, name='check')
]