from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=45)


class Product(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE)
    categoryId = models.ForeignKey(
        Category, on_delete=models.SET_DEFAULT, default=0)
    name = models.CharField(max_length=45)
    quantity = models.IntegerField(default=0)
    minQuantity = models.IntegerField(default=0)

