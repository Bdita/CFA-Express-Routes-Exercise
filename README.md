### About Project
  An exercise for understanding routing in Express.js. Express is a popular framework for Node.js. Routing is used for determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.

### Installation Instruction
#### Dependencies:
  * express 4.15.2: Express is a minimalist, unopinionated and flexible Node.js web application framework for Node.js that provides a robust set of features for web and mobile applications.
#### Requirements:
  This application is made using node and npm. Version are mentioned where applicable.
  * node 6.10.3 - a server side JavaScript platform built on chrome v8 Javascript engine. It allows to write javascript based application that can be run outside of the browser.
  * npm 3.10.10 - a package manager for javascript. It is used to install, share and distribute code and manage dependencies in projects.
  * nodemon (for convenience in running the server): a utility that will monitor for any changes in your source and automatically restart your server.

#### Usage Instruction
  Clone the repository.
  ```
  $ cd repoName
  $ npm install  //to install the dependencies in the local _modules folder
  $ node server.js or nodemon server.js  //to run the server
  ```

#### Code snippets from the exercise and instruction for verifying the output
  1. Route for the root.
  ```javascript
    app.get('/', function (req, res) {
    res.send('hello world')
  })
  ```
  To verify the output using your browser, type localhost:3000 .
  You should see below message.
  ```
    Welcome to my project for learning express routes.
  ```

  2. Route for about.
  ```javascript
  app.get('/about', function (req, res) {
    res.send('about')
  })
  ```  
  To verify the output using your browser, type localhost:3000/about .
  You should see below message.
  ```
    About: Aspiring web developer learning to make routes in Express.js framework.
  ```

  3. Accessing parameter in routing
  Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
  ```javascript
  app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })
  ```  
  To verify the output using your browser, type localhost:3000/users/2/books/3 .
  You should see below message.
  ```
    {"userId":"2","bookId":"3"}
  ```

  * Another use case
  ```javascript
  app.get("/user/:id",function(req,res){
    res.json({"message" : "Hello, User "+req.params.id});
  });
  ```
  To verify the output using your browser, type localhost:3000/user/yourname .
  You should see below message.
  ```
    {"message":"Hello yourname"}
  ```

  * use of hyphen with route parameters
  ```javascript
  app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params)
  })
  ```
  To verify the output using your browser, type localhost:3000/flights/Sydney-Melbourne .
  You should see below message.
  ```
    {"from":"Sydney","to":"Melbourne"}
  ```

  Since the hyphen (-) is interpreted literally, it can be used along with route parameters for useful purposes.

  * use of dot with route parameters
  ```javascript
  app.get('/users/:firstname.:lastname', function (req, res) {
    res.send(req.params)
  })
  ```
  To verify the output using your browser, type localhost:3000/users/example.smith .
  You should see below message.
  ```
    {"firstname":"example","lastname":"smith"}
  ```

  Since the dot (.) is interpreted literally, it can be used along with route parameters for useful purposes

  4. Routing middleware
  Middleware gets executed before routes get invoked. Below example is one of many possible usage for using middleware for routes. Middleware could be used to log every request before its invoked or finding out whether request is proper or not.
  ```javascript
  app.use(function(req,res,next) {
    console.log("/middleware" + req.method);
    next();
  });
  // middleware should be mentiomned before defining routes and next() function will take your app to next routes.
  app.get("/middleware",function(req,res){
    res.json({"message" : "Hello World"});
  });
  ```
  To verify the output using your browser, type localhost:3000/middleware .
  You should see below message in your server.
  ```
    /middlewareGET
  ```

  5. 404 Error
  To display 404 error when nothing is found for that particular route. This middleware at the end of all routes will get executed if none of the routes match.
  ```javascript
  app.use("*",function(req,res){
    res.status(404).send('404 Error');
  });
  ```
  To verify the output using your browser, type localhost:3000/abcd (or any other random name for which the routes are not defined) .
  You should see below message in your browser.
  ```
    404 Error
  ```
###### More routing practice exercise will be added in this repository in future.
