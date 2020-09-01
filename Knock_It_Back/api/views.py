from rest_framework import generics

from kib_app.models import Drink
from .serializers import DrinkSerializer

class ListDrink(generics.ListCreateAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer

class DetailDrink(generics.RetrieveUpdateDestroyAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
