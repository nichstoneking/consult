# Ballast - Frontend UI Kit

> **Frontend-Only Version** - A beautiful, modern financial management UI built with Next.js 15, React 19, and Tailwind CSS.

This is a **pure frontend** demonstration of Ballast's user interface. All backend logic, database, and authentication have been removed to provide a clean, ready-to-use UI kit.

## 🎨 What's Included

### ✅ Complete UI Components
- 50+ beautifully crafted components using shadcn/ui
- Fully responsive layouts
- Dark/light theme support
- Smooth animations with Framer Motion
- Professional icons from Tabler Icons

### ✅ Marketing Website
- Stunning landing page with bento grid layout
- Animated hero section
- Feature showcases
- Pricing section
- Testimonials
- FAQ section
- Blog with MDX support
- Legal pages (Privacy, Terms, etc.)
- Help center

### ✅ Design System
- Consistent color palette
- Typography scale
- Spacing system
- Component variants
- Accessible UI components

## 🚀 Quick Start

```bash
# The project is already set up with node_modules
# Just start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Marketing pages
│   │   ├── page.tsx          # Landing page
│   │   ├── blog/             # Blog system
│   │   ├── about/            # About page
│   │   ├── help/             # Help center
│   │   ├── legal/            # Legal pages
│   │   └── waitlist/         # Waitlist page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── sections/             # Landing page sections
│   ├── blog/                 # Blog components
│   ├── mdx/                  # MDX components
│   ├── *-animation.tsx       # Feature animations
│   └── ...                   # Other components
│
├── lib/
│   ├── config.tsx            # Site configuration
│   ├── utils.ts              # Utilities
│   └── construct-metadata.ts # SEO helpers
│
└── data/                     # Static data
```

## 🎯 Use Cases

This frontend kit is perfect for:

1. **Design System Showcase** - Demonstrate your component library
2. **UI/UX Portfolio** - Show off your design skills
3. **Rapid Prototyping** - Build mockups quickly
4. **Client Presentations** - Present polished interfaces
5. **Static Site Deployment** - Deploy to Vercel/Netlify
6. **Component Library** - Extract components for other projects
7. **Learning Resource** - Study modern React patterns

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **React:** Version 19
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Content:** MDX with Content Collections
- **Icons:** Tabler Icons, Lucide React
- **Typography:** Geist Sans & Geist Mono fonts

## 📦 Key Features

### Components
- Responsive navigation with mobile menu
- Animated bento grid layouts
- Interactive pricing cards
- Testimonial carousels
- Feature showcases
- Call-to-action sections
- Blog post cards
- Newsletter signup forms

### Styling
- CSS variables for theming
- Dark mode support
- Smooth transitions
- Hover effects
- Loading states
- Toast notifications

### Content
- MDX-powered blog
- Syntax highlighting for code blocks
- Table of contents generation
- Reading time estimation
- SEO-optimized metadata

## 🎨 Customization

All configuration is centralized in `/src/lib/config.tsx`:

```typescript
export const siteConfig = {
  name: "Your App Name",
  description: "Your description",
  url: "https://yoursite.com",
  // ... customize everything
}
```

### Theme Customization

Edit `/src/app/globals.css` to modify:
- Color palette
- Typography
- Spacing
- Border radius
- Shadows

## 📝 Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
# Push to GitHub and connect to Vercel
# Or use Vercel CLI
vercel
```

The site is fully static and can also be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- GitHub Pages

## 📚 Documentation

- **FRONTEND-ONLY.md** - Details about what was removed
- **STYLING-GUIDE.md** - Styling conventions (if exists)
- Component documentation in each file

## 🤝 Contributing

Feel free to use this as a base for your projects! Customize, extend, and build amazing things.

## 📄 License

Check the LICENSE.md file for details.

## 🙏 Credits

- Design inspired by modern SaaS applications
- Components built on shadcn/ui
- Icons from Tabler Icons and Lucide
- Animations powered by Framer Motion

---

**Note:** This is a frontend-only version. No database, authentication, or API calls are made. Perfect for showcasing UI/UX work or as a starting point for your own project.

Enjoy building! 🚀
