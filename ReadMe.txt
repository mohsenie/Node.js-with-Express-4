first install Node.js then install all dependancies as below.

> npm install
> npm install -g bower --save

if you don't have Mysql installed, setup a locall MySql instance and run supplied "database.sql"
to create the required table. Make sure to change "/modules/Database.js" to reflect database connection parameters.

After everything is installed run the app: 

> node app.js

the app exposese an endpoint for JSON submissions over post this can be tested by seeing the below link:

http://localhost:3000/partials/submit_test

for remote JASON submissions please send JASON over POST to: 

http://localhost:3000/exposed

after submission and in real time the graph which is done using Angular-chart will automatically 
update and show the lastest rates. Also there is a select menu in the page which can be used
to choose the currency for which exchange rates are required.
