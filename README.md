# Rohini Sondole — Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui** — the same tech stack as [Varun Sonawane's portfolio](https://varun-sonawane-portfolio.vercel.app/), customized with your data.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/rohini-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project" → Import your repo
   - Click "Deploy" — that's it!
   - You'll get a free URL like `rohini-sondole.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain (e.g., `rohinisondole.com`)

## 📝 Things to Customize

### Must Update:
- **`components/sections/hero-section.tsx`** — Update LinkedIn, GitHub, and email URLs
- **`components/sections/contact-section.tsx`** — Verify all contact links
- **`public/resumes/`** — Replace with your actual latest resume PDFs
- **`app/layout.tsx`** — Update OpenGraph URL after deployment

### Optional Enhancements:
- Add a profile photo in `public/images/` and reference it in the hero section
- Add GitHub project links to `projects-section.tsx` where `githubUrl` is currently `null`
- Add a custom favicon/logo in `public/images/`
- Connect Google Analytics via Vercel Analytics (already set up)

## 🏗 Project Structure

```
rohini-portfolio/
├── app/
│   ├── globals.css          # Theme & animations (teal/emerald accent)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── navigation.tsx       # Fixed navbar with resume dropdown
│   ├── sections/
│   │   ├── hero-section.tsx       # Hero with typewriter effect & stats
│   │   ├── projects-section.tsx   # 6 featured projects
│   │   ├── experience-section.tsx # Cisco, Cybage, TCS with expand/collapse
│   │   ├── skills-section.tsx     # 6 skill categories
│   │   ├── about-section.tsx      # Education, certifications, focus
│   │   └── contact-section.tsx    # Contact links & footer
│   └── ui/                  # shadcn/ui components (copied from Varun's)
├── public/
│   └── resumes/             # Your resume PDFs
└── package.json
```

## 🎨 Theme

The portfolio uses a **dark theme with teal/emerald accents** (differentiated from Varun's neutral gray). The color scheme is defined in `app/globals.css` using CSS custom properties with oklch colors.

## 📄 Data Sources

All content is populated from your two resumes:
- **Data Engineering Resume** — Focused on cloud platforms, pipelines, data governance
- **ML Engineering Resume** — Focused on ML systems, MLOps, deep learning

The experience bullets combine the strongest points from both versions.
