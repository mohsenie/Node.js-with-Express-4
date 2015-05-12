This is a demo APP using socket.io with node.js and express 4 engine.
It simply demonstrates use of web sockets to stream real-time data which is posted to a an exposed endpoint on the same server.
once data is posed it will be streamed to all browser listeners which is implemented using Angular 
To Run the app :
first install Node.js then install all dependencies as below.

> npm install
> npm install -g bower --save

if you don't have Mysql installed, setup a local MySql instance and run supplied "database.sql"
to create the required table. Make sure to change "/modules/Database.js" to reflect database connection parameters.

After everything is installed run the app: 

> node app.js

the app exposes an endpoint for JSON submissions over post this can be tested by seeing the below link:

http://localhost:3000/partials/submit_test

for remote JASON submissions please send JASON over POST to: 

http://localhost:3000/exposed

Now if you submit data over post to http://localhost:3000/exposed it will in  real time update the  graph which is done using Angular-charts 
