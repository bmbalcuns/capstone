from django.db import models

class Drink(models.Model):
    image_thumb_url = models.ImageField(null=True, blank=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=5000)
    ingredients = models.CharField(max_length=1000)
    favorite = models.ForeignKey('auth.User', on_delete=models.CASCADE, null=True, blank=True, related_name='favorites')
    hide = models.ForeignKey('auth.User', on_delete=models.CASCADE, null=True, blank=True, related_name='hidden')

    def __str__(self):
        return f'{self.image_thumb_url} {self.name}'

    
