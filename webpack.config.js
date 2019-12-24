const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "style-laoder"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg$)/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin()
  ]
};
