# backend/cars/urls.py

from django.urls import path
from .views import CarList

urlpatterns = [
    path('api/cars/', CarList.as_view(), name='car-list'),
]
