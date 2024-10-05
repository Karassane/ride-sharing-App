# auth_project/urls.py

from django.contrib import admin
from django.urls import include, path
from accounts.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),  # Include the accounts app
    path('', home, name='home'),  # Map the root URL to the home view
]