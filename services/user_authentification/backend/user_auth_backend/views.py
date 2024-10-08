# import json
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt
# def signup_view(request):
#     if request.method == "POST":
#         try:
#             # Charger le corps de la requête JSON
#             data = json.loads(request.body)
#             name = data.get("name")
#             email = data.get("email")
#             password = data.get("password")
#             password_confirm = data.get("password_confirm")

#             # Ajouter la logique de création d'utilisateur ici
#             # Par exemple, valider les mots de passe et créer l'utilisateur

#             if password != password_confirm:
#                 return JsonResponse({"error": "Passwords do not match"}, status=400)

#             # Logique de création d'utilisateur réussie (à implémenter)
#             return JsonResponse(
#                 {"message": "Account created successfully!"}, status=201
#             )

#         except json.JSONDecodeError:
#             return JsonResponse({"error": "Invalid JSON"}, status=400)

#     # Si la méthode est autre que POST, retourner une erreur
#     return JsonResponse({"error": "Invalid request method"}, status=405)

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def signup_view(request):
    if request.method == "POST":
        try:
            # Charger les données JSON
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            password = data.get("password")
            password_confirm = data.get("password_confirm")

            # Validation de base
            if not name or not email or not password or not password_confirm:
                return JsonResponse({"error": "All fields are required."}, status=400)

            if password != password_confirm:
                return JsonResponse({"error": "Passwords do not match."}, status=400)

            # Ajout de la logique de création d'utilisateur ici
            # Exemple basique de réponse de succès
            return JsonResponse(
                {"message": "Account created successfully!"}, status=201
            )

        except ValueError:
            return JsonResponse({"error": "Invalid JSON."}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)
