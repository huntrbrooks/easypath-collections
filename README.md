# EasyPath Collections - Professional Debt Recovery Website

A fully functional, modern website for EasyPath Collections, Australia's trusted debt recovery specialists.

## 🚀 Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first approach with modern UI
- ✅ **Contact Form** - Fully functional with API endpoint and validation
- ✅ **Quote Calculator** - Interactive debt recovery cost estimator
- ✅ **Client Portal** - Secure login system with case tracking
- ✅ **Professional Navigation** - Single-page application with smooth transitions

### SEO & Performance
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **PWA Ready** - Progressive Web App with manifest
- ✅ **Fast Loading** - Optimized images and code splitting
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Analytics** - Google Analytics integration

### Content & Marketing
- ✅ **Testimonials** - Client success stories and reviews
- ✅ **Blog System** - Educational content and industry insights
- ✅ **Service Pages** - Detailed service descriptions
- ✅ **About Page** - Company story and values
- ✅ **Error Handling** - Custom 404 and error pages

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives
- **Typography**: Geist Sans & Mono fonts
- **Analytics**: Google Analytics & Vercel Analytics
- **Validation**: Zod schema validation
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading component
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # React components
│   ├── pages/            # Page components
│   ├── sections/         # Reusable sections
│   ├── shared/           # Shared components
│   └── ui/               # UI primitives
├── lib/                  # Utilities and data
└── public/               # Static assets
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Pages & Features

### Home Page (`/`)
- Hero section with clear value proposition
- Services overview with icons
- 3-step process explanation
- Trust indicators and statistics
- Client testimonials
- Latest blog posts preview
- Contact information

### About Page
- Company story and mission
- Core values with icons
- Team expertise and certifications
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Interactive quote calculator
- Pricing information
- Process breakdown
- Additional services grid

### Contact Page
- Multiple contact methods
- Functional contact form with validation
- Business hours and location
- FAQ section
- Emergency contact information

### Client Portal
- Secure login simulation
- Dashboard with case statistics
- Case tracking with progress bars
- Document download options
- Quick action buttons

## 📊 Analytics & Tracking

The website includes comprehensive analytics tracking:
- Page views and user behavior
- Form submissions
- Quote calculator usage
- Phone number clicks
- Custom events for business insights

## 🔧 Customization

### Styling
- Colors defined in `app/globals.css`
- Component styles using Tailwind classes
- Responsive breakpoints configured

### Content
- Blog posts in `lib/blog-posts.ts`
- Testimonials in `components/sections/testimonials.tsx`
- Service information in respective page components

### Configuration
- SEO metadata in `app/layout.tsx`
- Analytics configuration in `lib/analytics.ts`
- Contact form API in `app/api/contact/route.ts`

## 🚀 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions including:
- Environment variable setup
- Vercel deployment (recommended)
- Traditional hosting options
- Post-deployment checklist

## 📈 Performance

The website is optimized for:
- **Core Web Vitals** - Fast loading and interaction
- **SEO** - Search engine optimization
- **Accessibility** - WCAG compliance
- **Mobile** - Mobile-first responsive design

## 🔐 Security

- Form validation with Zod
- XSS protection
- CSRF protection
- Secure headers configuration

## 📞 Support

For technical support or customization requests, contact the development team.

---

**EasyPath Collections** - Professional debt recovery services with over 15 years of proven success in Australia.

