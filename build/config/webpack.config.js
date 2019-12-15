const path = require('path');
const webpack = require('webpack')
const { CSS, LESS, SASS, STYLUS, default: createStyleLoader } = require('../utils/createStyleLoader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const srcPath = path.resolve(__dirname, '../../src/')
const publicPath = path.resolve(__dirname, '../../public')
const distPath = path.resolve(__dirname, '../../dist')
module.exports = {
  entry: {
    app: path.resolve(__dirname, "../../src/main.js")
  },
  output: {
    filename: '[name].js',
    path: distPath
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@component': path.resolve(srcPath, './components'),
      '@views': path.resolve(__dirname, './views'),
      '@pages': path.resolve(__dirname, './pages'),
    },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 8
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'assets',
            name: '[name].[hash].[ext]',
          }
        },
      },
      createStyleLoader(CSS),
      createStyleLoader(LESS),
      createStyleLoader(SASS),
      createStyleLoader(STYLUS)
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(publicPath, './index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    // new NpmInstallPlugin({
    //   save: true
    // }),
    new FriendlyErrorsPlugin()
  ]
}