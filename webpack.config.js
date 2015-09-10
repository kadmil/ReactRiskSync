var webpack = require('webpack')
var path = require('path')

module.exports = {
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css']
  },
  entry: [
      'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './src/Components/app' // Your appʼs entry point
  ],
  output: {
    path: 'public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?optional[]=runtime,optional[]=es7.decorators,optional[]=es7.classProperties,optional[]=es7.objectRestSpread'],
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    },{
      test: /\.html$/,
      loader: 'file-loader?name=[path][name].[ext]'
    }]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: 'public',
    hot: true,
  },
  postcss: {
    defaults: [require('postcss-import')({glob:true}), require('postcss-mixins'), require('postcss-simple-vars'), require('postcss-calc')(), require('postcss-color-function')(), require('postcss-nested'), require('autoprefixer-core'), require('csswring')]
  },
};
