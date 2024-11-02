- create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a Server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update script inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)


- initialize git
- .gitinit
- create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions : /hello, /, hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE, API Calls and test them on Postman
- Explore routing and use of ?, +, (), * in the routes
- use of regex in routes /a, /.*fly$/
- Reading the query parms in routes
- Reading the dynamic routes


- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rH5);
- What is middleware? Why we use middleware?
- How express JS basically handles requests behind the scenes
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all users, except /user/login
- Error Handling using app.use("/", (err, req, res, next) ={});


- Create a free cluster on MongoDB offical website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to the database before starting application on 7777
- create a userSchema & userModel
- Create POST /signup API to add data to database
- Push some documents using API calls from postman
- Error handling using try and catch

