#Aristotle API

## Citizen contact information 

    https://s3.amazonaws.com/lincolnlabs.com/aristotle_api_documentation.pdf
    
# OpenSecrets API

## Contribution information

    http://www.opensecrets.org/resources/create/api_doc.php

# SendHub API

##Text message and telephony API

    http://apidocs.sendhub.com/
    
# 3Taps API

## Public facts and data storage

    http://docs.3taps.com/
    
# Eventbrite API

## Create and host events

    http://developer.eventbrite.com/

# Sunlight Foundation API

## State and federal legistlative transperancy 

    http://sunlightfoundation.com/api/

# OpenGov

    https://github.com/opengovfoundation

## Liberate the Law

    https://law.resource.org/pub/us/code/ar/
    http://legix.info/us-ca/codes/root.html
    https://law.resource.org/pub/us/code/co/
    https://law.resource.org/pub/us/code/ga/
    https://law.resource.org/pub/us/code/id/
    https://law.resource.org/pub/us/code/ms/
    https://github.com/opengovfoundation/marylandcode
    https://law.resource.org/pub/us/code/dc/

## Semantically Rich ("Deep") XML on all US Congress Bills

    http://deepbills.cato.org/download

## State codes

    https://github.com/statedecoded/statedecoded

# LincolnLabs API (in progress)

## Global options

### Limit (default 10)
By default the limit is 10 on a call, but you can change that by setting `limit` in the query params:

    ?limit=20

### Sort (Default a)
By default the sorting is done alphabetically from a-z. You can change this by passing in:

    ?sort=z

to get reverse alphabetical order.

### Parameters
All parameters are regular expressions.

For example, if you call all world leaders by name:

    http://api.lincolnlabs.com:8080/leaders/name/(a|b)

you are able to use the OR assignment and get all results for both.

## /agencies
Agencies

### All
To get all agencies:

    http://api.lincolnlabs.com:8080/agencies

### Name

    http://api.lincolnlabs.com:8080/name/:name

### Type
To get an agency by type:

    http://api.lincolnlabs.com:8080/type/:type

Type may be:

- "Congress"
- "Defense"
- "Department of State"
- "Executive"
- "Foreign Embassy"
- "Health and Human Services"
- "Smithsonian"
- "U.S. Embassy"

## /leaders
World Leaders

### All
To get all world leaders:

    http://api.lincolnlabs.com:8080/leaders

### Country
To get all world leaders by country:

    http://api.lincolnlabs.com:8080/leaders/country/:country

With `:country` being the country you wish to query.

### Name
To get all world leaders by name:

    http://api.lincolnlabs.com:8080/leaders/name/:name

With `:name` being the name you wish to query.

### Title
To get all world leaders by title:

    http://api.lincolnlabs.com:8080/leaders/title/:title

With `:title` being the title you wish to query.

## /states
States

### All
To get all states:

    http://api.lincolnlabs.com:8080/states

### Specific state

    http://api.lincolnlabs.com:8080/states/:state

Example:

    http://api.lincolnlabs.com:8080/states/tx
