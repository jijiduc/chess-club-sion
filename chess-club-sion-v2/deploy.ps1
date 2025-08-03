# Build the application
Write-Output "Building the application..."
npm run build

# Create deployment directory
Write-Output "Creating deployment directory..."
New-Item -ItemType Directory -Force -Path "../chess-club-deployment"

# Copy built files
Write-Output "Copying built files..."
Copy-Item -Recurse "dist/*" "../chess-club-deployment/"

Write-Output "Build complete! Files are ready in chess-club-deployment/"
Write-Output "You can now upload the contents of chess-club-deployment/ to your Infomaniak hosting via FTP."
Write-Output ""
Write-Output "FTP Instructions:"
Write-Output "1. Connect to your Infomaniak FTP server"
Write-Output "2. Navigate to your web root directory (usually 'web' or 'public_html')"
Write-Output "3. Upload all files from chess-club-deployment/"
Write-Output "4. Your new site will be live!"