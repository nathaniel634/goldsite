from django.urls import path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.home_view, name="home"),
    path('about-us/', views.about_view, name="about"),
    path('our-products/', views.product_view, name="products"),
    path('our-services/', views.services_view, name="services"),
    path('contact/', views.contact_view, name="contact"),
    path('market-insight/', views.market_insight_view, name="market_insight"),
]