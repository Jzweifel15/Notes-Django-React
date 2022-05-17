from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getRoutes(request):
    return Response('Our API')


# Gets all Notes in DB
@api_view(['GET'])
def getNotes(request):
    return Response('NOTES')

