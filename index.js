var express = require('express')
var app = express()

// Example of basic route
// respond with "hello world" when a GET request is made to the homepage
// match requests to the root route, /.
app.get('/', function (req, res) {
  res.send('Welcome to my project for learning express routes.')
})

// match requests to /about.
app.get('/about', function (req, res) {
  res.send('About: Aspiring web developer learning to make routes in Express.js framework.')
})

// accessing parameter in routing
// To define routes with route parameters, simply specify the route parameters in the path of the route
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

// another example
app.get("/user/:name",function(req,res){
  res.json({"message" : "Hello "+req.params.name});
});

// example of hyphen and dot use cases with route parameters
app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)
})

app.get('/users/:firstname.:lastname', function (req, res) {
  res.send(req.params)
})

// example of basic middleware routing
// Router middleware, mentioned it before defining routes.

app.use(function(req,res,next) {
  console.log("/middleware" + req.method);
  next();
});

app.get("/middleware",function(req,res){
  res.json({"message" : "Hello World"});
});

// Handle 404 error.
// The last middleware.
app.use("*",function(req,res){
  res.status(404).send('404 Error');
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
