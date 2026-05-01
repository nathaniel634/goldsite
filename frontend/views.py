from django.shortcuts import render

def home_view(request):
    context = {
        "title": "Home Page",
        "message": "Welcome to your Django site!"
    }
    return render(request, "frontend/home.html", context)

def about_view(request):
    return render(request, 'frontend/about.html')
