const path = require('path');

module.exports = {
  entry: {
    tournoi: './src/components/TournoiVisualisation.jsx',
    cse: './src/components/CSEVisualisation.jsx'  // Add new entry point for CSE
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Pour le débogage pendant le développement
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  // Mode peut être défini via la ligne de commande
  mode: process.env.NODE_ENV || 'production'
};