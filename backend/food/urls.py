from django.urls import include, path
from . import views

urlpatterns = [
    path('colazione', views.colazione_view),

]