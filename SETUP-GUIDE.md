# 🚀 Quick Start Guide - Electrica Website

## Welcome!
Thank you for choosing Electrica! This guide will help you get your professional electrical services website up and running in minutes.

## 📋 Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js version 18 or higher ([Download here](https://nodejs.org/))
- ✅ A code editor (VS Code recommended)
- ✅ Basic terminal/command line knowledge

To check your Node.js version:
```bash
node --version
```

## 🎯 Step-by-Step Installation

### Step 1: Navigate to Project
Open your terminal and navigate to the project folder:
```bash
cd d:\electrica
```

### Step 2: Install Dependencies
Install all required packages:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- React Icons
- Framer Motion (animations)

**Wait time**: 2-5 minutes depending on your internet speed.

### Step 3: Start Development Server
Run the development server:
```bash
npm run dev
```

### Step 4: View Your Website
Open your browser and go to:
```
http://localhost:3000
```

🎉 **Congratulations!** Your website is now running!

## 🎨 Customization Checklist

### Essential Changes (Do These First!)

#### 1. Update Contact Information
**File**: `components/Header.tsx`
- Line 36-37: Update phone number
- Line 40: Update email address

**File**: `components/Contact.tsx`
- Line 63: Update address
- Line 72-73: Update phone numbers
- Line 83-84: Update email addresses
- Line 93-96: Update business hours

**File**: `components/Footer.tsx`
- Line 79-80: Update address
- Line 84: Update phone number
- Line 90: Update email

#### 2. Change Company Name & Logo
- Search for "ELECTRICA" and replace with your company name
- Add your logo to `public/` folder
- Update logo reference in `Header.tsx` and `Footer.tsx`

#### 3. Update SEO Information
**File**: `app/layout.tsx`
- Line 5: Update page title
- Line 6: Update description
- Line 7: Update keywords

#### 4. Customize Colors
**File**: `tailwind.config.js`
- Lines 11-21: Update color scheme to match your brand

#### 5. Modify Services
**File**: `components/Services.tsx`
- Lines 8-43: Update services, descriptions, and features

#### 6. Update Pricing
**File**: `components/Pricing.tsx`
- Lines 7-55: Modify pricing plans and features

## 📸 Adding Your Own Images

### Where to Add Images
1. Create an `images` folder in `public/`:
```bash
mkdir public\images
```

2. Add your images to this folder

3. Update image paths in components:
```typescript
// Change from:
src="https://images.unsplash.com/..."

// To:
src="/images/your-image.jpg"
```

### Recommended Image Sizes
- **Hero Section**: 1920x1080px
- **Services Icons**: 512x512px (or use React Icons)
- **Team Photos**: 400x400px (square)
- **Project Photos**: 1200x800px
- **Testimonial Photos**: 200x200px (square)

## 🗺️ Add Google Maps

### Get Your Embed Code
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe code

### Add to Website
**File**: `components/Contact.tsx`
Replace lines 118-120 with your iframe:
```html
<iframe 
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="300"
  className="rounded-xl"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
></iframe>
```

## 📧 Connect Contact Form

### Option 1: EmailJS (Free & Easy)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email template
3. Install EmailJS:
```bash
npm install @emailjs/browser
```
4. Update `Contact.tsx` with EmailJS code

### Option 2: Formspree (Free)
1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Update form action in `Contact.tsx`

### Option 3: Your Own Backend
Modify the `handleSubmit` function in `Contact.tsx` to call your API.

## 🚀 Deployment Options

### Deploy to Vercel (Easiest - Free)
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! You get a free `.vercel.app` URL

### Deploy to Netlify
1. Push code to GitHub
2. Go to [Netlify](https://www.netlify.com)
3. Click "Add new site"
4. Connect GitHub repository
5. Click "Deploy"

### Custom Domain
Both Vercel and Netlify allow you to connect your own domain:
1. Buy domain from provider (GoDaddy, Namecheap, etc.)
2. Add domain in hosting dashboard
3. Update DNS records as instructed

## 🔧 Common Issues & Solutions

### Issue: "npm not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 3000 already in use
**Solution**: Use different port:
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution**: These are just warnings during development. They won't affect the website. To fix:
```bash
npm install
```

### Issue: Images not loading
**Solution**: 
1. Check image paths are correct
2. For external images, add domain to `next.config.js`:
```javascript
images: {
  domains: ['yourdomain.com'],
}
```

## 📱 Testing Your Website

### Test on Different Devices
1. **Desktop**: Normal browser view
2. **Mobile**: Use browser DevTools (F12) → Toggle device toolbar
3. **Tablet**: Test with DevTools or real device

### Browser Testing
Test on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari (if on Mac)
- ✅ Edge

### Performance Check
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Aim for scores above 90

## 🎯 Next Steps

### Week 1
- [ ] Update all contact information
- [ ] Add your company logo
- [ ] Replace placeholder images
- [ ] Update services and pricing
- [ ] Test contact form

### Week 2
- [ ] Connect Google Maps
- [ ] Set up Google Analytics
- [ ] Add real testimonials
- [ ] Update team photos and info
- [ ] Test on all devices

### Week 3
- [ ] Purchase domain name
- [ ] Deploy to production
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Submit to Google Search Console
- [ ] Share on social media

## 💡 Pro Tips

1. **Regular Backups**: Push to GitHub regularly
2. **Test Locally**: Always test changes locally before deploying
3. **Mobile First**: Most visitors will be on mobile
4. **Fast Loading**: Optimize images before uploading
5. **SEO**: Update meta tags for better search rankings

## 📞 Need Help?

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Quick Commands Reference
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for issues
npm run lint
```

## ✨ Make It Your Own!

This website is fully customizable. Don't be afraid to:
- Change colors and fonts
- Add new sections
- Modify layouts
- Add animations
- Include your brand personality

**Remember**: The best website is one that represents YOUR business authentically!

---

## 🎉 Ready to Launch?

Once you've customized everything:
1. Run `npm run build` to create production build
2. Deploy to Vercel/Netlify
3. Connect your domain
4. Start getting customers!

**Good luck with your electrical services business! ⚡**

---

*Last updated: 2025*
