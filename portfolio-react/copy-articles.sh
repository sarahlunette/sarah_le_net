#!/bin/bash

# Script to copy article files from the parent articles directory
# For WSL/Linux/Mac

echo "Copying article HTML files..."

# Copy all HTML files from parent articles directory
cp ../articles/*.html public/articles/

# Count copied files
count=$(ls public/articles/*.html 2>/dev/null | wc -l)

echo "✓ Copied $count article files to public/articles/"
echo "Done!"
