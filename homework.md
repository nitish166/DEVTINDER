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

- JS object vs JSON (difference)
- Add the express.json middleware to your app
- Make our signup API dynamic to recive data from the end user
- User.findOne with duplicate email ids, which object returned
- API - GET user by email
- API - feed API - GET /feed - get all the users from the database
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documention for Model methods
- What are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user with email ID




- Explore schematype options from the documents
- add required, unique, lowercase, min, minLength, trim
- add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropiate validation on each field in schema
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup post api
- Add API validation for each field
- DATA Sanitizing - Add API validation for each field
- Install validator
- Explore validator libary function and use validator function for password, email, photoUrl
- NEVER TRUST req.body


- Validate data in Signup API
- Install bcrypt package
- Create PaswordHash using bcrypt.hash & save the user is excrupted password
- Create login API
- Compare passwords and throw erros if email and password is invalid