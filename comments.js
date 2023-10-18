// Create web server with Node.js
// Run with: node comments.js
// Access with: http://localhost:3000

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

	var pathname = url.parse(request.url).pathname;
	var query = url.parse(request.url).query;
	var queryObj = qs.parse(query);
	var name = queryObj['name'];

	console.log("Request for " + pathname + " received.");
	console.log("Query: " + query
