from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from django.contrib.auth.models import User

from kib_app.models import Drink
from .serializers import DrinkSerializer, UserSerializer
from .permissions import IsUser

class ListDrink(generics.ListCreateAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
    permission_classes = [IsUser]

class DetailDrink(generics.RetrieveUpdateDestroyAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
    permission_classes = [IsUser]

class ListUser(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

class DetailUser(generics.RetrieveUpdateAPIView):
    def get_object(self):
        return self.request.user
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]