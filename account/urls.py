from django.conf.urls import url
from django.contrib.auth.views import logout

from account.views import Login

urlpatterns = [
	url(r'login$', Login.as_view(), name='login'),
	url(r'logout$',views.logout_then_login, name='logout'),
]
