const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    [pkg.name]: `./src/${pkg.name}.js`
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: false } },
          'postcss-loader'
        ])
      }
    ]
  },
  devtool: false,
  plugins: [
    new ExtractTextPlugin(`${pkg.name}.css`),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BundleAnalyzerPlugin(),
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        mangle: true,
        compress: {
          warnings: false,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        },
        output: {
          comments: false
        }
      },
      exclude: [/\.min\.js$/gi]
    })
  ]
}
