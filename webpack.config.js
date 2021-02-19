const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|bmp)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(s[ac]ss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new htmlWebPackPlugin({
      template: __dirname + '/build/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
};
