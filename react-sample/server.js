var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var proxy = require('http-proxy-middleware');
var btoa = require('btoa')
var bodyParser = require('body-parser');
var express = require('express');
var url = require('url');

var DashboardConfig = require('./app/PiDashboardConfig.json');

var auth = DashboardConfig.settings.auth;

var host = "https://" + auth.org +"."+auth.domain;

var app = null;

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

var startWebpackServer = function(auth) {
  console.log("Start Webpack Server");
  var options = {headers:{}};
  if (auth.ltpa) {
      options.headers["Cookie"] = "LtpaToken2="+auth.ltpa;
  } else {
      options.headers["Authorization"] = "Basic " + btoa(auth.apiKey + ':' + auth.apiToken);
  }

  if (app) {
    app.close();
  }
  app = new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: false,
      historyApiFallback: true,
      // It suppress error shown in console, so it has to be set to false.
      quiet: false,
      // It suppress everything except error, so it has to be set to false as well
      // to see success build.
      noInfo: false,
      stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      },
      proxy: {
        '/api/**': {
          target: host ,
          changeOrigin: true,
          secure: false,
          headers: options.headers
      }
    }
  })

  app.listen(3001, '0.0.0.0', function (err) {
      if (err) {
          console.log(err);
      }

    console.log('Listening at localhost:3001');
  })
};

var server = express();
var bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(bodyParser.text());
server.use(allowCrossDomain);

server.post('/setcredentials', function(req, res) {
  console.log("---------------------");
  console.log("BODY - ", req.body);
  var payload = req.body;
  var newAuth = {};
  if (payload.org && payload.org != auth.org) newAuth.org = payload.org;
  if (payload.ltpa && payload.ltpa != auth.ltpa) newAuth.ltpa = payload.ltpa;
  if (payload.domain && payload.domain != auth.domain) newAuth.domain = payload.domain;
  if (payload.id && payload.id != auth.id) newAuth.id = payload.id;
  if (payload.apiKey && payload.apiKey != auth.apiKey) newAuth.apiKey = payload.apiKey;
  if (payload.apiToken && payload.apiToken != auth.apiToken) newAuth.apiToken = payload.apiToken;
  console.log("Org: " + payload.org);
  console.log("Ltpa: " + payload.ltpa);
  console.log("Domain: " + payload.domain);
  console.log("User: " + payload.id);
  console.log("ApiKey: " + payload.apiKey);
  console.log("ApiToken: " + payload.apiToken);

  if (Object.keys(newAuth).length > 0) {
    for (var i in newAuth) {
      auth[i] = newAuth[i];
    }
    startWebpackServer(auth);
  }
  res.send({});
});
server.use('/**', proxy({target: 'http://localhost:3001', changeOrigin: true}));


console.log(config.output.publicPath);

server.listen(3000);

startWebpackServer(auth);
