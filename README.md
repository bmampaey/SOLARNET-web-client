SOLARNET Virtual Observatory (SVO)
==================================
The SVO is an application supported by the [SOLARNET](http://www.solarnet-east.eu/) project, funded by the European Commission’s FP7 Capacities Programme under the Grant Agreement 312495.

It's purpose is to make solar observations from different instruments and sources accessible from a common interface to the scientific community.

The first version was released in February 2016, and the second version is currently in active development

SVO Webapp
----------
The SVO Webapp is accessible at the url ...TBD.../SVO/

It allows to search and display the metadata of the [SOLARNET data archive](https://github.com/bmampaey/SDA). It also allows to create/read/update/delete data selections and to download these data selection through ftp.

The Webapp has been made so that it's usage is intuitive. 

Documentation is accessible at TBD.


Adding a new dataset
--------------------

Metadata for a dataset will use a default search form and default display, but it can be overriden to specilize for the specificity of the dataset.

For this add a new file in the folder metadata called {dataset id}.js and define a configuration service that has the same name as the dataset id.

The service can define the following properties
 - *columns*: a list of columns titles and the corresponding metadata field name
 - *form_template*: a path to a a specific search form template
 - *form_config*: any information necessary to render the form
 - *parse_search_criteria*: a method to parse the search criteria of the search form
 - ** 

None of these properties is mandatory.