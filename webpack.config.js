const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'source-map',
};
