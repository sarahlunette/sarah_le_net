# WSL Setup Guide

Quick guide for setting up and running the portfolio on Windows Subsystem for Linux (WSL).

## ✅ Articles Already Copied!

Good news! Your article files have already been copied to `public/articles/`. You can skip the copy step and go straight to installation.

## Quick Start for WSL

### 1. Navigate to the project

```bash
cd portfolio-react
```

### 2. Install dependencies

```bash
npm install
```

This might take 2-3 minutes the first time.

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

Open your browser and go to: [http://localhost:3000](http://localhost:3000)

## If You Need to Copy Articles Again

Use the included script:

```bash
./copy-articles.sh
```

Or manually:

```bash
cp ../articles/*.html public/articles/
```

## Common WSL Commands

### Check Node.js version
```bash
node --version
```
Should be 18.x or higher. If not, install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### List copied articles
```bash
ls public/articles/
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

## File Paths in WSL

WSL uses Linux-style paths:
- Current directory: `./`
- Parent directory: `../`
- Home directory: `~/`

Windows paths are mounted at `/mnt/`:
- `C:\Users\sarah\Desktop` → `/mnt/c/Users/sarah/Desktop`

## Opening Files from WSL

### Open current directory in VS Code
```bash
code .
```

### Open file in VS Code
```bash
code src/app/page.tsx
```

### Open in Windows Explorer
```bash
explorer.exe .
```

## Troubleshooting

### Webpack Cache Errors

If you see `ENOENT: no such file or directory` errors related to `.next/cache`:

```bash
# Create cache directory
mkdir -p .next/cache/webpack

# Or use the start script
./start.sh
```

### Port 3000 already in use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Permission denied

```bash
# Make scripts executable
chmod +x copy-articles.sh
chmod +x start.sh
```

### npm not found

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Slow npm install

This is normal in WSL. Consider:
- Moving project to WSL filesystem: `~/projects/portfolio-react`
- This is faster than accessing Windows filesystem from WSL

## Performance Tips

### 1. Work in WSL filesystem
For better performance, keep projects in WSL home directory:
```bash
# Move to WSL home
cd ~
mkdir projects
cd projects
# Then work here
```

### 2. Use WSL 2
Make sure you're using WSL 2 (not WSL 1):
```bash
wsl --list --verbose
```

If using WSL 1, upgrade to WSL 2:
```bash
wsl --set-version Ubuntu 2
```

## Next Steps

1. ✅ Articles are copied
2. ✅ Dependencies installed
3. ✅ Server running
4. 🎨 Customize your portfolio
5. 🚀 Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions.

## Articles Included

Your portfolio includes these articles:
- Califrais (French)
- ChatGPT HRO (French)
- ChatGPT ICS (French)
- EcoAct (French)
- HighWind (French)
- Marc (French)
- Ministère de l'aménagement du territoire (French)
- Solène de Baobab Tech (French)
- Post Baobab (English)

## Happy coding! 🎉
