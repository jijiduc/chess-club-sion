const path = require('path');

module.exports = {
  entry: {
    tournoi: './src/components/TournoiVisualisation.jsx'
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Ne PAS ajouter de configuration externals ici pour que React soit inclus dans le bundle
  // Pour le débogage pendant le développement
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  // Mode peut être défini via la ligne de commande
  mode: process.env.NODE_ENV || 'production'
};