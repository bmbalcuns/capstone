from rest_framework import serializers
from django.contrib.auth.models import User
from kib_app.models import Drink


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'image_thumb_url', 'name', 'description', 'ingredients', 'favorite', 'hide']

class NestedDrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'image_thumb_url', 'name', 'description', 'ingredients']

class UserSerializer(serializers.ModelSerializer):
    favorites_info = NestedDrinkSerializer(many=True, read_only=True, source='favorites')
    hidden_info = NestedDrinkSerializer(many=True, read_only=True, source='hidden')
    class Meta:
        model = User
        fields = ['id', 'username', 'favorites', 'favorites_info', 'hidden', 'hidden_info']

        
