// scripts/build-css.js
const fs = require('fs');
const path = require('path');

// Charger le manifeste CSS (directement depuis la racine du projet)
const manifestPath = path.resolve(__dirname, '..', 'css-manifest.json');
console.log('Recherche du manifeste à :', manifestPath);

// Vérifier si le fichier existe
if (!fs.existsSync(manifestPath)) {
  console.error('❌ Erreur: Le fichier css-manifest.json est introuvable');
  console.error('   Chemin recherché: ' + manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log('✅ Manifeste CSS chargé avec succès');

// Créer le contenu du fichier main.css
let mainCssContent = '/* main.css - Généré automatiquement */\n\n';

// Parcourir toutes les catégories et leurs fichiers
Object.entries(manifest).forEach(([category, files]) => {
  mainCssContent += `/* ${category.toUpperCase()} */\n`;
  
  files.forEach(file => {
    mainCssContent += `@import '${file}';\n`;
  });
  
  mainCssContent += '\n';
});

// Écrire le fichier main.css
const outputPath = path.resolve(__dirname, '..', 'css', 'main.css');
const outputDir = path.dirname(outputPath);

// S'assurer que le répertoire existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, mainCssContent);

console.log('✅ Fichier main.css généré avec succès');
console.log(`   Chemin: ${outputPath}`);