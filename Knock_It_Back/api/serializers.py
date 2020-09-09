from rest_framework import serializers
from django.contrib.auth.models import User
from kib_app.models import Drink


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'image_thumb_url', 'name', 'description', 'ingredients', 'favorite', 'hide']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'favorites', 'hidden']
