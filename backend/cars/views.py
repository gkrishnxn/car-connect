# backend/cars/views.py

from rest_framework import generics
from django_filters import rest_framework as filters
from .models import Car
from .serializers import CarSerializer

class CarFilter(filters.FilterSet):
    model = filters.CharFilter(field_name='model', lookup_expr='icontains')
    location = filters.CharFilter(field_name='location', lookup_expr='icontains')
    year = filters.NumberFilter(field_name='year', lookup_expr='exact')
    fuel_type = filters.CharFilter(field_name='fuel_type', lookup_expr='icontains')
    transmission = filters.CharFilter(field_name='transmission', lookup_expr='icontains')

    class Meta:
        model = Car
        fields = ['model', 'location', 'year', 'fuel_type', 'transmission']

class CarList(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filterset_class = CarFilter
 