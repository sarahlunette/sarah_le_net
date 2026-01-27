# Sarah LE NET - Portfolio & Blog

A beautiful, modern portfolio and blog application built with Next.js, React, TypeScript, and Tailwind CSS. Converted from the original Streamlit application with enhanced design and user experience.

## Features

- **Beautiful, Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Article System**: Multi-language article support (French/English) with beautiful reading experience
- **Fast Performance**: Built with Next.js for optimal performance
- **Easy Deployment**: Configured for seamless deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or navigate to the portfolio-react folder:

```bash
cd portfolio-react
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-react/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── articles/           # Articles page and individual article routes
│   │   ├── entrepreneurship/   # Entrepreneurship section
│   │   ├── events/             # Events section
│   │   ├── hackathons/         # Hackathons section
│   │   ├── resume/             # Resume & Career section
│   │   ├── teaching/           # Teaching section
│   │   ├── jaune-rouge/        # La Jaune et La Rouge section
│   │   ├── x-urgence/          # X-Urgence Écologique section
│   │   ├── trips/              # Trips section
│   │   ├── theater/            # Theater section
│   │   ├── photography/        # Photography section
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/             # Reusable components
│       └── Navigation.tsx      # Navigation component
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## Deploying to Vercel (Recommended)

Vercel is the recommended platform for deploying this Next.js application. It's created by the team behind Next.js and offers:

- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Continuous deployment from Git
- Free tier available

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Sign up for Vercel** (if you haven't already):
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push your code to a Git repository**:
   ```bash
   cd portfolio-react
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

3. **Import your project on Vercel**:
   - Click "Add New Project" in your Vercel dashboard
   - Import your Git repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

4. **Done!** Your site will be live at `https://your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd portfolio-react
   vercel
   ```

3. Follow the prompts to deploy your application

### Custom Domain

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to the "Domains" tab
3. Add your custom domain
4. Update your DNS settings as instructed

## Alternative Deployment Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy!

### Static Export to Any Host

The app is configured for static export, so you can deploy it anywhere:

```bash
npm run build
```

This creates an `out` directory that can be served by any static hosting service (AWS S3, GitHub Pages, etc.)

## Adding Articles

To add articles to the application:

1. Place HTML article files in the `public/articles` directory
2. Follow the naming convention: `ArticleName_(French_Version).html` or `ArticleName_(English_Version).html`
3. Update the articles list in `src/app/articles/page.tsx` to include your new articles
4. The articles will automatically appear in the articles page

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Typography

The article typography is customized using Tailwind Typography plugin. Edit styles in `src/app/globals.css`:

```css
.prose-article {
  /* Your custom article styles */
}
```

### Animations

Animations are implemented using Framer Motion. Edit animation variants in individual page components.

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all categories
- **Image Optimization**: Automatic image optimization (when using Next.js Image component)
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pages are statically generated for maximum performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Sarah LE NET. All rights reserved.

## Support

For issues or questions, please contact Sarah LE NET.

## Differences from Original Streamlit App

- **Modern UI**: Complete redesign with modern, professional interface
- **Better Performance**: Significantly faster page loads and interactions
- **Mobile-First**: Responsive design that works beautifully on all devices
- **SEO Optimized**: Better search engine optimization
- **Professional Styling**: Beautiful gradient backgrounds, shadows, and animations
- **Enhanced Article Reading**: Improved typography and reading experience
- **No Server Required**: Can be deployed as a static site

## Future Enhancements

- [ ] Add blog CMS integration
- [ ] Implement search functionality
- [ ] Add contact form
- [ ] Integrate with analytics
- [ ] Add more interactive elements
- [ ] Implement dark mode toggle
