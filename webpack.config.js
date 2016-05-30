var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static');
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: {
    app: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    sourceMapFilename: "[file].map",
    publicPath: '/static/'
  },
  externals: {
    react: "React"
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CommonsChunkPlugin({
      name: ["app"]
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = config;