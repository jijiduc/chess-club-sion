const path = require('path');

module.exports = {
  entry: {
    tournoi: './src/components/TournoiVisualisation.jsx',
    cse: './src/components/CSEVisualisation.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.csv$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  mode: process.env.NODE_ENV || 'production'
};