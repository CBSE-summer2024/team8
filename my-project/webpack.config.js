const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development', // Set mode to 'development' or 'production'
  entry: {
    'lit-app': './src/lit-app/index.js',
    'react-app': './src/react-app/index.js',
    'vue-app': './src/vue-app/index.js',
    'angular-app': './src/angular-app/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // قاعدة لملفات Vue
        loader: 'vue-loader',
      },
      {
        test: /\.js$/, // قاعدة لملفات JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // قاعدة لملفات CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/, // قاعدة لملفات TypeScript
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  
  
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      open: true,
    },


  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  
};
