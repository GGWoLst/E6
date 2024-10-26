
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'chats', views.ChatViewSet)
router.register(r'messages', views.MessageViewSet)

urlpatterns = router.urls