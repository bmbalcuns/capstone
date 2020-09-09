from rest_framework import generics
from django.contrib.auth.models import User

from kib_app.models import Drink
from .serializers import DrinkSerializer, UserSerializer

class ListDrink(generics.ListCreateAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer

class DetailDrink(generics.RetrieveUpdateDestroyAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer

class ListUser(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class DetailUser(generics.RetrieveUpdateAPIView):
    def get_object(self):
        return self.request.user
    serializer_class = UserSerializer