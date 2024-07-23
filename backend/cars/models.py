from django.db import models

class Car(models.Model):
    model = models.CharField(max_length=100)
    year = models.CharField(max_length=4, null=True, blank=True)
    kms_driven = models.CharField(max_length=100, null=True, blank=True)
    fuel_type = models.CharField(max_length=50, null=True, blank=True)
    transmission = models.CharField(max_length=50, null=True, blank=True)
    price_rs = models.CharField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=200, null=True, blank=True)
    img = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.model
