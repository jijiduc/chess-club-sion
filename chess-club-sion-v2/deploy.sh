#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Create deployment directory
echo "Creating deployment directory..."
mkdir -p ../chess-club-deployment

# Copy built files
echo "Copying built files..."
cp -r dist/* ../chess-club-deployment/

echo "Build complete! Files are ready in chess-club-deployment/"
echo "You can now upload the contents of chess-club-deployment/ to your Infomaniak hosting via FTP."
echo ""
echo "FTP Instructions:"
echo "1. Connect to your Infomaniak FTP server"
echo "2. Navigate to your web root directory (usually 'web' or 'public_html')"
echo "3. Upload all files from chess-club-deployment/"
echo "4. Your new site will be live!"