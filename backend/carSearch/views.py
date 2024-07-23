# carSearch/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from cars.models import Car  # Import your Car model from cars app
from cars.serializers import CarSerializer  # Import your CarSerializer from cars app

@api_view(['GET'])
def search(request):
    cars = Car.objects.all()
    
    model = request.GET.get('model')
    location = request.GET.get('location')
    year = request.GET.get('year')
    fuel_type = request.GET.get('fuel_type')
    transmission = request.GET.get('transmission')

    if model:
        cars = cars.filter(model__icontains=model)
    if location:
        cars = cars.filter(location__icontains=location)
    if year:
        cars = cars.filter(year=year)
    if fuel_type:
        cars = cars.filter(fuel_type__icontains=fuel_type)
    if transmission:
        cars = cars.filter(transmission__icontains=transmission)

    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
