# Quick Start Guide

Get your portfolio up and running in 5 minutes!

**Using WSL?** See [WSL_SETUP.md](WSL_SETUP.md) for WSL-specific instructions.

---

## Step 1: Install Dependencies

```bash
cd portfolio-react
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

## Step 2: Copy Your Articles

Copy your article HTML files from the original Streamlit app:

```bash
# On WSL/Linux/Mac
cp ../articles/*.html public/articles/

# Or if you prefer, copy one level up
cp ../articles/*.html ./public/articles/
```

Or manually copy all `.html` files from the `articles` folder to `portfolio-react/public/articles/`

## Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Deploy to Vercel

### Quick Deploy (2 minutes):

1. Create a GitHub account if you don't have one
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create a repository on GitHub, then:
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com)
4. Sign up with GitHub
5. Click "Add New Project"
6. Import your repository
7. Click "Deploy"
8. Done! Your site is live 🎉

Your site will be at: `https://your-project-name.vercel.app`

## Common Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check for code issues
```

## Project Structure

```
portfolio-react/
├── src/
│   ├── app/              # Pages (add new pages here)
│   └── components/       # Reusable components
├── public/
│   └── articles/         # Put your HTML articles here
└── package.json          # Dependencies
```

## Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Change this!
    // ...
  }
}
```

### Add a New Page

1. Create `src/app/new-page/page.tsx`
2. Add to navigation in `src/components/Navigation.tsx`

### Update Content

Edit the page files in `src/app/[page-name]/page.tsx`

## Need Help?

- Check [README.md](README.md) for full documentation
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment details
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

## What's Different from Streamlit?

- ✅ Much faster loading
- ✅ Beautiful modern design
- ✅ Mobile-friendly
- ✅ Better SEO
- ✅ Professional animations
- ✅ Free hosting on Vercel
- ✅ Custom domain support
- ✅ Automatic HTTPS

Enjoy your new portfolio! 🚀
