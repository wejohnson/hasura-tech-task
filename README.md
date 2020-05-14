# harusa-challenge
This is a simple React client app that pulls information from a MySQL database.

## Notes
`nodejs` must be installed

You must create a database before running the client app.  The script located at db/mysqlsampledatabase.sql can be used to create and populate the tables.

The following environment variables should be set:
* DBHOST - ipaddress of the database host
* DBNAME - name of the database
* DBUSER - the database user
* DBPASSWORD - the database user's password

## Using the  app
To run locally:
1. Run `npm install`
1. Run `npm run build`
1. Run `npm start'
1. Point browser to 'http://localhost:8080`


