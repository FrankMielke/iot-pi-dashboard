/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var request = require('request');
var https = require('https');

// create a new express server
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

var config = {
  org: "rqkcvw",
  ltpa: null,
  domain: "internetofthings.ibmcloud.com",
  id: "a-rqkcvw-3s3upn8hk3",
  apiKey: "a-rqkcvw-3s3upn8hk3",
  apiToken: "*71l9pMWLak2dlfZcb"
}

app.post('/setcredentials', function(req, res) {
  console.log("---------------------");
  console.log("BODY - ", req.body);
  var payload = req.body;
  if (payload.org) config.org = payload.org;
  if (payload.ltpa) config.ltpa = payload.ltpa;
  if (payload.domain) config.domain = payload.domain;
  if (payload.id) config.id = payload.id;
  if (payload.apiKey) config.apiKey = payload.apiKey;
  if (payload.apiToken) config.apiToken = payload.apiToken;
  console.log("Org: " + payload.org);
  console.log("Ltpa: " + payload.ltpa);
  console.log("Domain: " + payload.domain);
  console.log("User: " + payload.id);
  console.log("ApiKey: " + payload.apiKey);
  console.log("ApiToken: " + payload.apiToken);
  res.send({});
});

app.get('/getcredentials', function(req, res) {
  console.log("---------------------");
  console.log(config);
  res.send(config);
});

// var g_org = "v0vv95.hou02-1.test";
// var g_org = "0k8dab.hou02-1.test";
// var g_org = "stpeud"; //6qkzjf;
// var g_domain = "hou02-1.test.internetofthings.ibmcloud.com"
// var g_domain = "0k8dab.hou02-1.test.internetofthings.ibmcloud.com"
// var g_apiKey = "a-0k8dab-670lskdxxi";
// var g_apiToken = "?MvKh(6b+fJl2gAS!5";
// var g_ltpaToken = null;
// Important to comment the token out and set it to null if you want to use the API token
//var g_ltpaToken = "5CkkYT/l+XbHb7H8iZUoR8eyh8Z88em4l/mco7UGYo9K27ZCMGuvKYBms7wBv7ReT80qBpwdlKgfqJBvhVx3Cn/Y5XKXe6y94BjZpzzgI5KfwLx1GjCX6CW6fMmiBNMqnzeANYJxqeQhKK+9TLXhRlwDUuodEiC6xUqZKKRtd+ywEOw0rutBZM7WdzMZi+hIRdeORohpMnPc59Dym5+TLaJFiG5dMrv5NwegA8g7cGX/zxMVyjcHiq7eVHadoIVrDJGamMDxdEoO7ObR8qAGVdovG0EWvzrbFZCksHTKxyA9P/h+UG2zTI2Zpvbdgc+CtuZYRnINcgjDTxATgXGxJg==";

app.all('/api/v000*', function(req, res) {
  var configOrg = config.org + ".";
  // Capture requests for organizations and send back our hard-coded config
  var path = req.originalUrl;
  if (req.originalUrl === '/api/v0002/auth/organizations') {
    //path = '/api/v0001';
    configOrg = "";
  }
  // TODO Do we need this?
  if (req.originalUrl === '/api/v0001/auth/') {
    res.send({
      id: config.id,
      type: "person"
    });
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  // Proxy the API request to the test stand
  try {
    var host = configOrg + config.domain;

    var options = {
      host: host,
      path: path,
      port: 443,
      method: req.method,
      withCredentials: true,
      rejectUnauthorized: false,
      headers: {
          "Content-Type" : "application/json"
      }
    };
    if (config.ltpa) {
      options.headers["Cookie"] = "LtpaToken2="+config.ltpa;
    } else {
      options.auth = config.apiKey + ':' + config.apiToken;
    }
    console.log("Board user: " + req.get('X-BoardUser'));

    console.log("---------------------");
    console.log("OPTIONS - ", options);
    console.log("BODY - ", req.body);

    var iot_req = https.request(options, function(iot_res) {
      var str = '';
      iot_res.on('data', function(chunk) {
        str += chunk;
      });
      iot_res.on('end', function() {
        if (req.originalUrl === '/api/v0001/auth/organizations' || str === "") {
          str = "[" + str + "]";
        }
        console.log("CODE - ", iot_res.statusCode)
        console.log("RESULT - ", str)
        res.status(iot_res.statusCode).send(str);
      });
    }).on('error', function(e) {
      console.log(e);
      var statusCode = e.statusCode;
      if (!statusCode) {
        statusCode = 404;
      }
      res.status(statusCode).send(e);
    });
    if (req.body) {
      var body = (typeof req.body === "object")
        ? JSON.stringify(req.body)
        : req.body
      iot_req.write(body)
    }
    iot_req.end();
  } catch (err) {
    console.log(err);
  }
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//appEnv.port = 3000;

// start server on the specified port and binding host
app.listen(appEnv.port || 3000, function() {

// print a message when the server starts listening
console.log("server starting on port " + appEnv.port);
});
