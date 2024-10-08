from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from .views import signup_view


# Simple vue pour la page d'accueil.
def home_view(request):
    return HttpResponse("Bienvenue sur l'API de gestion des utilisateurs")


# Mapping des URLs pour l'application.
urlpatterns = [
    path("admin/", admin.site.urls),  # URL pour accéder à l'interface admin.
    path("", home_view),  # URL pour la page d'accueil de l'API.
    path("signup/", signup_view, name="signup"),  # URL pour le endpoint d'inscription.
]
