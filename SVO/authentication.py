from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authentication  import BaseAuthentication
from rest_framework import exceptions

# TODO maybe make a mix between django with csrf protection


class EmailAuthentication(BaseAuthentication):
	'''Authenticate the request by email. If user does not exists, create it.'''
	def authenticate(self, request):
		import pdb; pdb.set_trace()
		
		# The email can be set in the post or in the header
		email = request.POST.get('email', request.META.get('EMAIL', ''))
		if not email:
			raise exceptions.AuthenticationFailed('No email provided.')
		
		# Set the user as the part before the @
		# Set the password as the part after the @
		username, password = email.split('@', 1)
		
		# Check if the user exists with that same email
		user = authenticate(username=username, password=password)
		if user is None:
			# Create the user
			User.objects.create_user(username, email=request.META.get('EMAIL'), password=password)
			user = authenticate(username=username, password=password)
		if user.is_active:
			return (user, None)
		else:
			raise exceptions.AuthenticationFailed('User inactive.')
		
		return super(LoginForm, self).form_valid(form)
