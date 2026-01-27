# Deployment Guide

This guide will help you deploy your portfolio to Vercel (recommended) or other platforms.

## Prerequisites

Before deploying, make sure you have:
1. Copied all article HTML files from `../articles/` to `public/articles/`
2. Tested the application locally with `npm run dev`
3. Created a Git repository for your project

## Deploying to Vercel (Recommended)

Vercel is the best choice for Next.js applications. It's free, fast, and requires zero configuration.

### Step 1: Prepare Your Repository

```bash
cd portfolio-react

# Initialize git if you haven't already
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio React App"

# Create a new repository on GitHub/GitLab/Bitbucket and then:
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 2: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with your GitHub, GitLab, or Bitbucket account
4. Authorize Vercel to access your repositories

### Step 3: Deploy

1. Click "Add New..." → "Project" in your Vercel dashboard
2. Import your Git repository
3. Vercel will automatically:
   - Detect that it's a Next.js project
   - Set the correct build command (`next build`)
   - Set the correct output directory
4. Click "Deploy"
5. Wait 2-3 minutes for the build to complete
6. Your site is live! 🎉

### Step 4: Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `sarahlenet.com`)
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)
5. Your site will be available at your custom domain with automatic HTTPS

## Environment Variables (If Needed)

If you need environment variables:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys)
4. Redeploy for changes to take effect

## Continuous Deployment

Once set up, Vercel will automatically:
- Deploy every push to your main branch
- Create preview deployments for pull requests
- Run builds and tests automatically
- Invalidate cache when needed

## Alternative: Deploy with Vercel CLI

If you prefer using the command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd portfolio-react

# Deploy
vercel

# Follow the prompts
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: (press enter for default)
# - Directory: ./ (press enter)
# - Override settings: No

# Deploy to production
vercel --prod
```

## Deploying to Netlify

If you prefer Netlify:

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

## Deploying to AWS Amplify

For AWS Amplify:

1. Sign in to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out`
5. Save and deploy

## Deploying as Static Site

For any static hosting (S3, GitHub Pages, etc.):

```bash
# Build the static site
npm run build

# The 'out' directory contains your static site
# Upload the contents of 'out/' to your hosting service
```

## Troubleshooting

### Build Fails

**Issue**: Build fails on deployment platform

**Solution**:
1. Make sure `package.json` has all dependencies listed
2. Check that Node.js version is 18.x or higher
3. Run `npm install` locally to verify dependencies
4. Check build logs for specific errors

### Images Not Loading

**Issue**: Images don't load after deployment

**Solution**:
1. Make sure images are in the `public/` directory
2. Reference images with `/image-name.jpg` (starting with `/`)
3. Check that file names match exactly (case-sensitive)

### Articles Not Displaying

**Issue**: Article content doesn't show

**Solution**:
1. Verify HTML files are in `public/articles/`
2. Check file naming: `ArticleName_(French_Version).html`
3. Update the article list in `src/app/articles/page.tsx`
4. Make sure article slug matches the file name

### 404 Errors

**Issue**: Pages show 404 errors

**Solution**:
1. Check that the page file exists in `src/app/`
2. Verify folder and file naming is correct
3. Rebuild and redeploy

## Performance Optimization

### Enable Analytics

Add Vercel Analytics to track performance:

```bash
npm install @vercel/analytics
```

Then add to your layout:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Image Optimization

For better performance with images:

1. Use Next.js Image component instead of `<img>`
2. Place images in `public/` directory
3. Vercel automatically optimizes images

## Monitoring

### Vercel Dashboard

Monitor your site in the Vercel dashboard:
- View deployment history
- Check analytics
- Monitor performance
- View real-time logs

### Set Up Alerts

1. Go to project settings
2. Navigate to "Integrations"
3. Add integrations for:
   - Slack notifications
   - Discord notifications
   - Email alerts

## Updating Your Site

To update your deployed site:

```bash
# Make your changes
# Commit and push
git add .
git commit -m "Update content"
git push

# Vercel automatically deploys the changes
# Check your Vercel dashboard for deployment status
```

## Cost

### Vercel Free Tier Includes:
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100 GB bandwidth/month
- Serverless Functions
- Analytics (basic)

Perfect for personal portfolios!

### When to Upgrade:
- High traffic (>100 GB/month)
- Team collaboration needed
- Advanced analytics required
- Custom serverless function limits

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `npm install` |
| Run development server | `npm run dev` |
| Build for production | `npm run build` |
| Start production server | `npm start` |
| Deploy to Vercel | `vercel` |
| Deploy to production | `vercel --prod` |

---

**Ready to deploy?** Start with Vercel for the easiest experience! 🚀
