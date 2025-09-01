# EasyPath Collections - Deployment Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://easypathcollections.com.au

# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@easypathcollections.com.au
```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4ang Deploy automatically on push

### 2. Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Add environment variables in Netlify dashboard

### 3. Traditional Hosting

1. Build the project: `npm run build`
2. Upload the built files to your web server
3. Configure your web server to serve the files

## Post-Deployment Checklist

- [ ] Set up Google Analytics with your tracking ID
- [ ] Configure contact form email delivery
- [ ] Test all forms and functionality
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Check page load speeds
- [ ] Verify SEO meta tags

## Performance Optimization

The website includes:
- ✅ Image optimization
- ✅ Code splitting
- ✅ SEO optimization
- ✅ PWA features
- ✅ Accessibility features
- ✅ Analytics tracking

## Support

For technical support, contact the development team or refer to the Next.js documentation.
