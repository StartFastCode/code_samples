// Copyright 2016 StartFast Code
// -----------------------------------------------------------------------------
// --- RUNNING THIS SERVER
// -----------------------------------------------------------------------------
// To run this server you must have the required dependencies installed.
// Dependencies are files of code that you use to speed up development. Express
// is a dependency you're using so that that you don't have to write your own
// server. Another dependency is jQuery, you use it to make your life easier
// when writing javascript for the browser. You include it in your html by
// putting jquery in a <link></link> tag in the head of your document.
//
// To install dependencies for this project open your terminal and `cd` to the
// folder that contains this file and use the following command:
//
// npm install
//
// `npm install` will look in the package.json file and accordingly look up the
// dependencies required for this project and download the dependencies from the
// internet and put them in the /node_modules folder that you'll see when you
// look in the folder that contains this file.
//
// Once you've installed the dependencies you'll use
//
// node server.js
//
// to run the server.

// -----------------------------------------------------------------------------
// --- INTRO
// -----------------------------------------------------------------------------
// Every Express App starts by requiring Express into the file
var express = require('express');

// After Express is required into the file, every express app calls express
// to create an express app
var app = express();

// After the `app` variable is created, almost all express related code is
// executed from `app`. This means that the `express` variable is not frequently
// used.


// -----------------------------------------------------------------------------
// --- MIDDLEWARE
// -----------------------------------------------------------------------------
// Middleware is how express modifies incoming requests and outgoing responses.
// Middleware is used when you want some effect to apply to _every_ request, or
// _every_ response.

// -----------------------------------------------------------------------------
// --- MIDDLEWARE: body-parser
// -----------------------------------------------------------------------------
// By default express does not know how to parse the body of a POST request.
// Seems dumb? I agree. However, the philosophy of express has been to create
// the slimmest package possible that makes it easy to start a webserver. There
// are servers that do not need to respond to POST requests that include bodies,
// so the body parser is optional.
//
// To use body-parser, like all middleware, first we require it into our file
var bodyParser = require('body-parser');

// Next, like all middleware, we configure our app to use the body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --- ASIDE: `app.use()` is used for including middleware in our app. Within
// app.use we call the specific middleware and, sometimes, we configure a
// middlewares options {like we did above with bodyParser.urlencoded()}
// --- END


// -----------------------------------------------------------------------------
// --- MIDDLEWARE: morgan
// -----------------------------------------------------------------------------
// Named after Dexter Morgan, the character from Showtime's Hit Show with a
// Terrible Ending, is a request logger. What does that mean? Since you're
// making a webserver, you'll be getting requests for pages and for API
// responses from users. When you're developing you'll be making those requests
// yourself to test your server. Morgan will console.log information about
// incoming requests. Example output for a user who makes a GET request to the
// /hello route:
//
// GET /hello 200 7.424 ms - 9
//
// Morgan is telling us that the user made a `GET ` request to the `/hello`
// route, which responded with a status code `200` and took `7.424 ms` and had a
// content length of `9`
var morgan = require('morgan');

app.use(morgan('dev'));

// --- ASIDE: Morgan has many options for configuring what information is
// logged, but 'dev' is a suitable starter.
// --- END

// -----------------------------------------------------------------------------
// --- ROUTES
// -----------------------------------------------------------------------------
// Routes are where users go. For example: https://facebook.com/login
// `/login` is the route. In Express we define routes to tell a user what should
// happen when a user says they want to go someplace.
//
// In the HTTP world there are many methods to visit routes. GET is an HTTP
// Method. POST is another. So are PUT, PATCH, HEAD, OPTIONS, and DELETE.
//
// Imagine you had a website with user profiles and there was a user called Bob.
// To get to Bob's profile you might go to the route `users/profiles/bob`.
// That's a GET request and any time you visit a website you're making a GET
// request. Say you wanted to delete Bob's profile, you might make a DELETE
// request to the same route. If you wanted to update his profile, you might use
// PUT or PATCH (both are common methods for updating information).
//
// Web Browsers aren't built to allow users to explicitly make any type of
// request other than GET. For this, we developers uses tools. I recommend
// PostMan.

// In Express we make a route that responds to GET requests with the following
// code:
app.get('/users/profiles/bob', function(req, res){
  // `req` is short for `request`
  // `res` is short for `response`

  // every route must send a response, otherwise the connection will not close
  // and the browser will receive an error. Let's send a json response:
  res.json({
    name: 'Robert',
    last: 'Paulson',
    knownFor: 'His name'
  });
});


// -----------------------------------------------------------------------------
// --- LISTEN
// -----------------------------------------------------------------------------
// A webserver listens for requests and gives responses. A server listens for
// requests on ports. The default port for `http` requests is 80. The default
// port for `https` requests is 443. When making a production app with Express
// you'll listen on one of those ports. When you're in development mode, like we
// are now, it's more common to use a higher number port like 3000, 5000, 8000.
//
// When this app runs it will listen for requests on port 3000. When you run
// this app on your computer the domain for the server will be `localhost`.
// Localhost is a special domain that means `make a request to the IP address of
// this computer`. In our case, to view this app visit `http://localhost:3000`
// in your web browser. Since we only have one route, visit that route:
//
// http://localhost:3000/users/profiles/bob
//
// App.listen takes a callback function that will execute after the server
// starts, below we use that function to log that the server has started.
app.listen(3000, function() {
  console.log('Server has started on port 3000!');
});



// -----------------------------------------------------------------------------
// --- QUESTIONS?
// -----------------------------------------------------------------------------
// Questions are welcome, and sort've the point. Ask anything that you want to
// know more about by opening an issue on GitHub.
//
// https://www.github.com/StartFastCode/code_samples/issues











// -----------------------------------------------------------------------------
// --- UNFINISHED
// -----------------------------------------------------------------------------
// Below is some commented out code that is incomplete. It's useful to look at,
// but requires further explanation.

// REST Routes
// Wildcard get, respond to any GET request
// --useful SPAs
// --useful for errors and pages not found

/*
app.post('*', function(req, res) {
  res.json(req.body);
});

app.get('/hello/:id', function(req, res) {
  res.send(req.params.id);
});
*/
