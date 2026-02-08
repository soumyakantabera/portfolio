# Soumyakanta Bera - Professional Portfolio

A modern, responsive single-page portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Material Design principles. Deployed on GitHub Pages.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Material Design**: Elevated cards, subtle shadows, smooth transitions
- **Dark Mode**: System-aware theme with localStorage persistence
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Smooth Animations**: Intersection Observer-based scroll animations
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Accessible**: WCAG-compliant, keyboard navigation, ARIA labels
- **Performance**: Static export for fast loading times
- **Interactive**: Copy-to-clipboard functionality, smooth scroll navigation

## 📋 Sections

1. **Hero** - Introduction with CTA buttons
2. **About** - Professional summary and quick facts
3. **Experience** - Work history in timeline format
4. **Education** - Academic qualifications
5. **Skills** - Categorized technical and domain skills
6. **Certifications** - Professional certificates and courses
7. **Projects** - Featured finance and data analytics projects
8. **Contact** - Contact information with copy-to-clipboard
9. **Footer** - Social links and additional information

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/soumyakantabera/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Build & Deployment

### Local Build

Build the project for production:

```bash
npm run build
```

This creates a static export in the `out/` directory.

### Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**:
   - Any push to the `main` branch triggers automatic deployment
   - Or manually trigger via Actions tab → Deploy workflow → Run workflow

3. **Configuration for GitHub Pages**:
   - The `next.config.mjs` includes basePath and assetPrefix set to '/portfolio'
   - Update these if your repository name differs

4. **Access your site**:
   - After deployment: `https://[username].github.io/portfolio/`

## 📝 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal details (name, location, contact)
- Work experience
- Education
- Skills
- Certifications
- Projects

### Resume PDF

Replace `public/resume.pdf.txt` with your actual `resume.pdf` file.

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## 📧 Contact

**Soumyakanta Bera**
- Email: bera.soumyakanta@yahoo.com
- LinkedIn: [linkedin.com/in/soumyakantabera](https://www.linkedin.com/in/soumyakantabera/)
- Location: Florence, Italy (Available for transfer to Milan)

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
