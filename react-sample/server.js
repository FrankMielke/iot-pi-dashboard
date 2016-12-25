var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var proxy = require('http-proxy-middleware');
var btoa = require('btoa')

var DashboardConfig = require('./app/PiDashboardConfig.json');

var auth = DashboardConfig.settings.auth;
var host = "https://" + auth.org +"."+auth.domain;

var options = {headers:{}};

if (auth.ltpa) {
      options.headers["Cookie"] = "LtpaToken2="+auth.ltpa;
    } else {
       options.headers["Authorization"] = "Basic " + btoa(auth.apiKey + ':' + auth.apiToken);
    }
console.log(options);

var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
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
}).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3000');
})
