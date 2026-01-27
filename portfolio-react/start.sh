#!/bin/bash

# Clean start script for the portfolio app

echo "🚀 Starting Portfolio React App..."
echo ""

# Create .next directory if it doesn't exist
if [ ! -d ".next" ]; then
  echo "📁 Creating .next directory..."
  mkdir -p .next/cache/webpack
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Start the dev server
echo "✨ Starting development server..."
echo "🌐 Open http://localhost:3000 in your browser"
echo ""

npm run dev
