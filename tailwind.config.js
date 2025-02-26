module.exports = {
  content: [
    './**.html',               // HTML files in root 
    './**/*.html',             // HTML in subdirectories
    './src/**/*.{js,jsx}',     // JS/JSX files in src
    './js/**/*.js'             // JS files in js directory
  ],
  // Exclude node_modules explicitly
  exclude: ['node_modules/**'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mono': ['Consolas', 'monospace'],
      },
      colors: {
        'primary': '#1a1a1a',
        'primary-dark': '#000000',
        'secondary': '#ffffff',
        'accent': '#d4af37',
        'text': '#333333',
        'text-light': '#666666',
        'background': '#f5f5f5',
        'border': '#e0e0e0',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
      }
    },
  },
  plugins: [],
};