from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'kib_app'
urlpatterns = [
    path('', TemplateView.as_view(template_name="home.html"), name='home'),
    path('favorites/', TemplateView.as_view(template_name="favorites.html"), name='favorites'),
    path('hidden/', TemplateView.as_view(template_name="hidden.html"), name='hidden')
]