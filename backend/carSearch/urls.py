# carSearch/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/search/', views.search, name='car-search'),
]
