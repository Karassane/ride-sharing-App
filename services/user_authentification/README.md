
# Procedure: Adding a Backend to a Frontend Component

This guide explains step by step how to integrate a backend API with a frontend component in a Next.js and Django environment. We'll use a login component as an example, but this process can be applied to any frontend component.

## Prerequisites

- A working Next.js frontend setup.
- A Django backend setup.
- Axios installed in your frontend for making HTTP requests.

### Step 1: Create a Frontend Component

In your Next.js application, create the frontend component that will interact with the backend. For example, here is a simple `Login` component:

```javascript
"use client"; // Marks this as a Client Component
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Login successful:", response.data);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
```

This component captures user input for email and password and sends it to the backend via an Axios POST request when the form is submitted.

### Step 2: Set Up the Backend in Django

On the backend, we'll create an endpoint that handles the login request. The backend will verify the user's credentials.

#### Backend Code

In `views.py`:

```python
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        try:
            # Parse JSON data
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            # Basic validation
            if not email or not password:
                return JsonResponse({"error": "Email and password are required."}, status=400)

            # Simulate credential check (in production, you should check against a database)
            if email == "fares.djelili@outlook.fr" and password == "1234":
                return JsonResponse({"message": "Login successful!"}, status=200)
            else:
                return JsonResponse({"error": "Invalid credentials."}, status=401)

        except ValueError:
            return JsonResponse({"error": "Invalid JSON."}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)
```

In `urls.py`, add the login route:

```python
from django.urls import path
from .views import login_view

urlpatterns = [
    path("login/", login_view, name="login"),
]
```

### Step 3: Modify Django's Settings (Optional)

Ensure CORS is enabled if you're making requests from a different frontend origin. In `settings.py`, add:

```python
INSTALLED_APPS = [
    # Other apps ...
    'corsheaders',
    'rest_framework',
]

MIDDLEWARE = [
    # Other middleware ...
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True
```

This setup allows your frontend to make API calls to the backend.

### Step 4: Run and Test the Application

1. Start the Django server:
   ```bash
   python manage.py runserver
   ```

2. Start the Next.js frontend:
   ```bash
   npm run dev
   ```

3. Go to the login page, enter credentials, and submit the form.

4. If the credentials match the hardcoded email and password, you should see a success message. Otherwise, an error message will be displayed.

### Summary

In this process, you:

- Built a frontend component that handles user input and sends it to a backend using Axios.
- Created a backend API in Django that receives and processes the data, simulating user login.
- Enabled CORS in Django to allow the frontend to make cross-origin requests.
