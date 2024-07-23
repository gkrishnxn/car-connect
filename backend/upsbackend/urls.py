# backend/upsbackend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cars/', include('cars.urls')), 
    path('car-search/', include('carSearch.urls')),
]
