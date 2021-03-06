var config = {
  entry: ['whatwg-fetch', './main.js'],
  output: {
      path: './',
      filename: 'index.js',
    },

  devServer: {
      inline: true,
      port: 8080,
      proxy: {
        '/data': {
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&' +
          'localIdentName=[name]__[local]___[hash:base64:5]',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
