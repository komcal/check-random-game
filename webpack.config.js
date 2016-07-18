module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        exclude: /node_nodules/,
        loader: 'babel'
      }
    ]
  },
  sassLoader: {
    includePaths: './src/sass'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  }
};
