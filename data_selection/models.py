from __future__ import unicode_literals
from django.db import models

from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class UserDataSelection(models.Model):
	user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
	name = models.CharField(help_text="Name of the data selection", max_length = 80, null=False, blank=False)
	created = models.DateTimeField(help_text = "Date of creation", null=False, blank=False, auto_now_add=True)
	updated = models.DateTimeField(help_text = "Date of last update", null=False, blank=False, auto_now=True)
	
	class Meta:
		ordering = ["-updated"]
		get_latest_by = "updated"
		unique_together = (("user", "name"),)
		db_table = "user_data_selection"
		
	def __unicode__(self):
		return u"%s by %s on %s" % (self.name, self.user.username, self.created)
	
	@property
	def number_items(self):
		return sum(data_selection.number_items for data_selection in self.data_selections.all())

	
	@property
	def dataset_names(self):
		return self.data_selections.values_list("dataset", flat=True).distinct()
	

class DataSelection(models.Model):
	user_data_selection = models.ForeignKey(UserDataSelection, related_name = "data_selections", on_delete=models.CASCADE) # If the UserDataSelection is deleted, delete also the DataSelection
	dataset = models.TextField(help_text="The dataset name for the selection")
	query_string = models.TextField(help_text="Query string for the data selection", max_length=2000, null=True, blank=True)
	metadata_oids = ArrayField(models.BigIntegerField('Observation ID', help_text = 'Unique number for the observation metadata, usually in the form YYYYMMDDHHMMSS'), help_text = "List of metadata oids", null=True, blank=True)
	created = models.DateTimeField(help_text = "Date of creation", null=False, blank=False, auto_now_add=True)
	number_items = models.IntegerField(help_text = "Number of items in the data selection", null=True, blank=True)
	
	class Meta:
		db_table = "data_selection"
		
	def __unicode__(self):
		return u"%s for %s" % (self.dataset, self.user_data_selection)


