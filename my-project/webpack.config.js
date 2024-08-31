const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader'); // تأكد من استيراد VueLoaderPlugin بشكل صحيح

module.exports = {
  mode: 'development',
  entry: {
    'react-app': './src/react-app/index.js',
    'lit-app': './src/lit-app/index.js',
    'angular-app': './src/angular-app/index.js',
    'vue-app': './src/vue-app/index.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader', // إذا كنت تستخدم Vue، تأكد من وجود هذا اللودر
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new VueLoaderPlugin(), // تأكد من إضافة VueLoaderPlugin هنا إذا كنت تستخدم Vue
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
