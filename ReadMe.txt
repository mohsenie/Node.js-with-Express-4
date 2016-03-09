This is a demo APP using socket.io with node.js and express 4 engine.
It simply demonstrates the use of web sockets to stream real-time data which is posted to an exposed endpoint on the same server.
once data is posted it will be streamed to all browser listeners which is implemented using Angular.

To Run the app :

first install Node.js and dependencies as per below.

> npm install
> npm install -g bower --save

Setup a local MySql instance and run the supplied "database.sql" to create required table structure. Make sure to change "/modules/Database.js" to reflect database connection parameters.

After everything is setup run the app: 

> node app.js

the app exposes an endpoint for JSON submissions over post. this can be tested by visiting below url:

http://localhost:3000/partials/submit_test

for remote JSON submissions send JSON over POST to: 

http://localhost:3000/exposed

If you submit data over post to http://localhost:3000/exposed it will in real-time update the graph which is done using Angular-charts 
