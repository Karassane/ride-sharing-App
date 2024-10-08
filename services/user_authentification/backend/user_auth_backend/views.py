import json  # Importation du module json pour traiter les données JSON envoyées par le frontend.
from django.http import (
    JsonResponse,
)  # Utilisé pour envoyer des réponses JSON au frontend.
from django.views.decorators.csrf import (
    csrf_exempt,
)  # Décorateur pour désactiver la protection CSRF pour cette vue (l'API).


@csrf_exempt  # Ce décorateur est utilisé pour désactiver la protection CSRF sur cette vue, car elle est utilisée pour une API.
def signup_view(request):
    if request.method == "POST":  # Vérifie si la méthode HTTP est bien un POST.
        try:
            # Charger les données JSON envoyées par le frontend (le formulaire soumis).
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            password = data.get("password")
            password_confirm = data.get("password_confirm")

            # Validation des données. S'assure que tous les champs sont remplis.
            if not name or not email or not password or not password_confirm:
                print("All field are required ! ")  # Message pour debug (serveur).
                return JsonResponse(
                    {"error": "All fields are required."}, status=400
                )  # Réponse d'erreur si un champ est vide.

            # Vérifie si les mots de passe correspondent.
            if password != password_confirm:
                print("Passwords don't match ! ")  # Message pour debug (serveur).
                return JsonResponse(
                    {"error": "Passwords do not match."}, status=400
                )  # Réponse d'erreur si les mots de passe ne correspondent pas.

            # Si tout est correct, renvoie un message de succès.
            print("Account created successfully ! ")  # Message pour debug (serveur).
            return JsonResponse(
                {"message": "Account created successfully!"},
                status=201,  # Réponse de succès.
            )

        except ValueError:  # Si une erreur JSON survient (format invalide).
            return JsonResponse(
                {"error": "Invalid JSON."}, status=400
            )  # Réponse d'erreur si le JSON est invalide.

    # Si la méthode HTTP n'est pas POST, renvoie une erreur (par exemple si un GET est effectué sur cette route).
    return JsonResponse({"error": "Invalid request method"}, status=405)
