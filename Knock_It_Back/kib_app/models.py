from django.db import models

class Drink(models.Model):
    image_thumb_url = models.ImageField()
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    ingredients = []
    measurements = []
    preparation = models.CharField(max_length=1000)

    def __str__(self):
        return f'{self.name} {self.ingredients}'

