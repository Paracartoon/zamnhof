from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from .models import Piatto
from .serializers import PiattoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


@api_view(['GET'])

def colazione_view(request):

	foods = Piatto.objects.filter(tipo_piatto='colazione')
	serializer = PiattoSerializer(foods, many=True)

	return Response(data=serializer.data)