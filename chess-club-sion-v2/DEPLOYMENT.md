# Deployment Instructions for Chess Club Sion Website

## Quick Deployment

1. Run the deployment script:
   ```powershell
   ./deploy.ps1
   ```

2. Upload files to Infomaniak:
   - Connect to your Infomaniak FTP server
   - Navigate to your web root directory
   - Upload all files from `chess-club-deployment/`

## Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Upload the contents of `dist/` to your Infomaniak hosting

## Important Notes

- This is a static site, so no server configuration is needed
- Make sure to upload ALL files including hidden files like `.htaccess` if present
- The site uses client-side routing, so you may need to configure your server to redirect all routes to index.html

## Data Updates

To update player ELO ratings or match data:

1. Run your existing scrapers:
   - `python web-scrapper-fide/elo_scrapper.py`
   - `python web-scrapper-FSE-ligue/FSE-ligue-data-extractor.py`

2. Update the data files in `src/data/`

3. Rebuild and redeploy the site

## Development

To run the site locally:
```bash
npm run dev
```

The site will be available at http://localhost:5173/