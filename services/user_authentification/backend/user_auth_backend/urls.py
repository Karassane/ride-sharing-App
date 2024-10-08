# from django.contrib import admin
# from django.urls import path
# from django.shortcuts import render  # Import de la fonction render
# from django.conf import settings
# from django.conf.urls.static import static


# # Vue pour rendre le template base.html
# def home_view(request):
#     return render(request, "base.html")  # Rendu du template base.html


# urlpatterns = [
#     path("admin/", admin.site.urls),
#     path("", home_view),  # Route pour la page d'accueil
# ]

# if settings.DEBUG:
#     urlpatterns += static(
#         settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]
#     )

from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from .views import signup_view


# Vue pour la page d'accueil
def home_view(request):
    return HttpResponse("Bienvenue sur l'API de gestion des utilisateurs")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home_view),  # Route pour la page d'accueil
    path("signup/", signup_view, name="signup"),  # Route pour le signup
]
