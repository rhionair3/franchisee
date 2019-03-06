const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/franchisee-fe/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'franchisee.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3033,
    historyApiFallback: true,
    contentBase: path.join(__dirname, './public'),
    compress: true,
    proxy: {
      '/api/**': {
        target: "http://localhost:9090",
        pathRewrite: {
          "^/api": "/api/"
        },
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/imgs/favicon.png'
    })
  ]
};