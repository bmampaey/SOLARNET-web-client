from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie import fields

from .resources import ResourceMeta
from data_selection.models import UserDataSelection, DataSelection

class UserDataSelectionResource(ModelResource):
	'''RESTful resource for model UserDataSelection'''
	
	data_selections = fields.ToManyField('data_selection.resources.DataSelectionResource', 'data_selections', full = True)
	
	class Meta(ResourceMeta):
		queryset = UserDataSelection.objects.all()
		resource_name = 'user_data_selection'
		filtering = {
			'user': ALL_WITH_RELATIONS,
			'name': ALL,
			'created' : ALL,
			'updated' : ALL,
		}

class DataSelectionResource(ModelResource):
	'''RESTful resource for model DataSelection'''
	
	user_data_selection = fields.ToOneField(UserDataSelectionResource, 'user_data_selection')
	
	class Meta(ResourceMeta):
		queryset = DataSelection.objects.all()
		resource_name = 'data_selection'
		filtering = {
			'user_data_selection' : ALL_WITH_RELATIONS,
			'dataset' : ALL_WITH_RELATIONS,
			'query_string' : ALL,
			'metadata_oids' : ALL,
			'created' : ALL,
			'number_items' : ALL,
		}