from rest_framework import serializers
from kib_app.models import Drink


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'image_thumb_url', 'name', 'description', 'ingredients', 'measurements', 'preparation']