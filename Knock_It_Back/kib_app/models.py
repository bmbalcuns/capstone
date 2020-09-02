from django.db import models

class Favorite(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

class Hide(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

class Drink(models.Model):
    image_thumb_url = models.ImageField()
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    ingredients = []
    preparation = models.CharField(max_length=1000)
    favorite = models.ForeignKey(Favorite, on_delete=models.CASCADE)
    hide = models.ForeignKey(Hide, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.image_thumb_url} {self.name}'

    
