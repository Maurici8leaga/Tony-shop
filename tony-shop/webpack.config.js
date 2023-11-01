const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
      {
        test: /\.webp$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.png'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@atoms': path.resolve(__dirname, 'src/atoms'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@molecules': path.resolve(__dirname, 'src/molecules'),
      '@redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@root': path.resolve(__dirname, 'src')
    }
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'error' : false,
    maxEntrypointSize: 580000,
    maxAssetSize: 580000
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    hot: true,
    static: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map'
};
