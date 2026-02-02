"""
URL configuration for registration project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app1 import views

urlpatterns = [
    path('', views.indexpage, name='index'),
    path('signup/', views.SignUpView, name='signup'),
    path('login/', views.LoginView, name='login'),
    path('home/', views.homepage, name='home'),
    path('logout/', views.LogoutView, name='logout'),
    path('viewcart/', views.viewcart, name='viewcart'),
    path('place-order/', views.place_order, name='place_order'),
    path('admin/', admin.site.urls),
]
