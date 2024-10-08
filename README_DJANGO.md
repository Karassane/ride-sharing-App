### TO generate and configure RDJANGO Python Application :

# Create a virtual environment :

python3 -m venv user_auth_env

# Activate the environment :

source user_auth_env/bin/activate

# Install Django :

pip install django

# Create Django project :

django-admin startproject user_auth_service .

### ConfigurE Django to operate with Next.js :

# \*\* Install dependencies :

pip install djangorestframework
pip install django-cors-headers

# \*\* Generate requirements file :

pip freeze > requirements.txt

### Create a first API "test_api" (we create it in the same folder which contains manage.py script) :

python manage.py startapp test_api
than we add "test_api", in the liste INSTALLED_APPS [] in settings.py file
