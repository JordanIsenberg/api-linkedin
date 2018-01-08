// LinkedIn API - Node Application

// NPM - LinkedIn, Request
var fs = require('fs');
var linkedin = require('linkedin');
var request = require('request');

// Retrieve Sign-In Information from keys.js file
var config = require('./keys.js');

// Getting linkedin constructor
// var client = new linkedin(config);

// Search parameters - required for get function for linkedin profile information
// client.get( {

// });