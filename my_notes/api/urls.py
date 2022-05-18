from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:pk>/edit/', views.editNote, name='edit-note'),
    path('notes/<str:pk>/delete/', views.deleteNote, name='delete-note'),
    path('notes/<str:pk>', views.getNote, name='note'),
]