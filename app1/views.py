from django.shortcuts import render, redirect
from django.http import HttpResponse    
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.
def indexpage(request):
    return render(request, 'index.html')

def SignUpView(request):
    if request.method == "POST":
        uname = request.POST['txtuser']
        email = request.POST['txtemail']
        password = request.POST['txtpassword']
        repassword = request.POST['txtconfirmpassword']
        if User.objects.filter(username=uname).exists():
            return HttpResponse("Username already exists. Please choose another.")
        if password != repassword:
            return HttpResponse("Passwords do not match.")
        else:
            my_user = User.objects.create_user(uname, email, password)
            my_user.save()
            return redirect("login")
    return render(request, "signup.html")

def LoginView(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['pass']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("index")
        else:
            return HttpResponse("Invalid credentials. Please try again.")
    return render(request, "index.html")

def homepage(request):
    return render(request, 'home.html')

def LogoutView(request):
    if request.method == "POST":
        logout(request)
        return redirect('login')

def viewcart(request):
    return render(request, 'viewcart.html')

def place_order(request):
    if not request.user.is_authenticated:
        messages.warning(request, "Please login first to place your order.")
        return redirect('index')  # your login page url name

    # continue with checkout
    return render(request, 'checkout.html')

