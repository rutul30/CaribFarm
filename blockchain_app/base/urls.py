from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('main/',views.mainPage, name='mainPage'),
    path('signup/',views.signup, name='signup'),
    #path('photos/<str:pk>/', views.viewPhoto,name='photo'),
    
]