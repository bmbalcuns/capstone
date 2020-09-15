from rest_framework import permissions

class IsUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.favorite == request.user or obj.hide == request.user
