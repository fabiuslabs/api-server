#Aristotle 



# LincolnLabs API (in progress)

## Start the server

    npm install
    node server

## Global options

### Limit (default 10)
By default the limit is 10 on a call, but you can change that by setting `limit` in the query params:

    ?limit=20

### Parameters
All parameters are regular expressions.

For example, if you call all world leaders by name:

    http://api.lincolnlabs.com/leaders/name/(a|b)

you are able to use the OR assignment and get all results for both.

## /agencies
Agencies

### All
To get all agencies:

    http://api.lincolnlabs.com/agencies

### Type
To get an agency by type:

    http://api.lincolnlabs.com/type/:type

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

    http://api.lincolnlabs.com/leaders

### Country
To get all world leaders by country:

    http://api.lincolnlabs.com/leaders/country/:country

With `:country` being the country you wish to query.

### Name
To get all world leaders by name:

    http://api.lincolnlabs.com/leaders/name/:name

With `:name` being the name you wish to query.

### Title
To get all world leaders by title:

    http://api.lincolnlabs.com/leaders/title/:title

With `:title` being the title you wish to query.
