from django.shortcuts import render

def home_view(request):
    context = {
        "title": "Home Page",
        "message": "Welcome to your Django site!"
    }
    return render(request, "frontend2/home.html", context)

def about_view(request):
    return render(request, 'frontend2/about.html')

def product_view(request):
    return render(request, 'frontend2/products.html')

def services_view(request):
    return render(request, 'frontend2/services.html')

def contact_view(request):
    return render(request, 'frontend2/contact.html')

def market_insight_view(request):
    return render(request, 'frontend2/market-insights.html')
