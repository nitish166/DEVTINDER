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


- install cookies-parse
- just send a dummy cookies to user
- create GET /profile API and check if you get the cookies back
- install jsonwebtoken
- In login API, after email and password validation, create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- userAuth middleware
- Add the userAuth middleware in profile and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create UserSchema method to comparepassword(passwordInputByUser)


- Explore tinder APIs
- Create a list all API you can think of in Dev Tinder
- Group multiple routes under repective routers
- Explore documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make you validate all data in every POST, PATCH apis

- Create a connection request Schema
- Send Connection Request API
- Proper Validation of Data
- Think about all corner cases
- $or query $and query in mongooes 
- schema.pre("save") function 
- Read this articles about compound indexes - https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/?msockid=0650a1c664c36fc431c5b094656b6e34
- Why should we not create a lot of indexes in DB?
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What is pro and cons of creating indexes?
- ALWAYS THINK ABOUT CORNER CASES


- Writes code with proper validation for POST /request/review/status/:requestId
- Thought process - POST vs GET
- Read about ref and populate
- Create GET /user/requests/received with all the checks 
- Create GET /user/connection with all the checks 


- Logic for GET /feed API
- Explore the $nin, $and, $ne and other query operatorator
- Pagination


NOTES:

/feed?page=1&limit=10 => 1-10 => .skip(0) & .limit(10)
/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)
/feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(10)

skip = (page - 1)*limit;







