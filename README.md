# Electrica - Professional Electrical Services Website

A modern, fully responsive Next.js website for electrical services businesses. Built with TypeScript, Tailwind CSS, and React.

![Electrica Preview](https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=600&fit=crop)

## 🌟 Features

### Complete Professional Website
- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Built-in meta tags and structured data
- **Fast Performance** - Optimized with Next.js 14 and Tailwind CSS

### Key Sections
1. **Hero Section** - Eye-catching landing with call-to-action
2. **Services** - Detailed electrical services showcase
3. **About Us** - Company information and credentials
4. **Why Choose Us** - Key differentiators and benefits
5. **Projects** - Portfolio with category filtering
6. **Testimonials** - Client reviews and satisfaction stats
7. **Team** - Meet the electricians
8. **Pricing** - Transparent pricing plans
9. **FAQ** - Common questions with accordion
10. **Contact** - Multi-channel contact form
11. **Footer** - Complete site navigation and info

### Technical Features
- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🔍 SEO friendly
- ♿ Accessibility focused
- 🎭 Smooth animations
- 📧 Contact form ready
- 🗺️ Map integration ready
- 🔒 TypeScript for type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the repository**
```bash
cd electrica
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
electrica/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # About section
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── Projects.tsx        # Portfolio with filtering
│   ├── Testimonials.tsx    # Client reviews
│   ├── Team.tsx            # Team members
│   ├── Pricing.tsx         # Pricing plans
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#FFB800',  // Your brand color
    dark: '#E6A600',
    light: '#FFC933',
  },
  secondary: {
    DEFAULT: '#1A1A2E',  // Dark color
    light: '#16213E',
  },
}
```

### Content
- **Contact Info**: Update phone, email, address in `Header.tsx`, `Contact.tsx`, and `Footer.tsx`
- **Company Name**: Search and replace "Electrica" throughout the project
- **Services**: Modify the services array in `Services.tsx`
- **Team Members**: Update team data in `Team.tsx`
- **Testimonials**: Edit testimonials in `Testimonials.tsx`
- **Pricing**: Adjust pricing plans in `Pricing.tsx`

### Images
Replace placeholder Unsplash images with your own:
- Add images to `public/images/`
- Update image paths in components
- Recommended sizes:
  - Hero: 1920x1080px
  - Services: 600x400px
  - Team: 400x400px
  - Projects: 800x600px

## 🔧 Configuration

### SEO & Metadata
Update in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your description',
  keywords: 'your, keywords',
  // ... more metadata
}
```

### Google Maps Integration
Replace the map placeholder in `Contact.tsx` with Google Maps embed:
```html
<iframe 
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="300"
  style="border:0;"
  allowFullScreen
  loading="lazy"
></iframe>
```

### Contact Form
Integrate with your backend or email service:
- Update `handleSubmit` function in `Contact.tsx`
- Add email service (SendGrid, Mailgun, etc.)
- Or connect to your backend API

## 📦 Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build in `.next/` folder.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect repository and deploy
- **AWS**: Use Amplify or S3 + CloudFront
- **Custom Server**: Build and run with Node.js

## 🎯 Features to Add

### Immediate Enhancements
- [ ] Connect contact form to email service
- [ ] Add Google Maps with your location
- [ ] Replace placeholder images with real photos
- [ ] Add your actual business information
- [ ] Set up Google Analytics
- [ ] Add blog section
- [ ] Implement live chat
- [ ] Add booking/scheduling system

### Advanced Features
- [ ] Customer portal/login
- [ ] Online payment integration
- [ ] Service request tracking
- [ ] Automated email notifications
- [ ] CMS integration (Contentful, Sanity)
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Support

For support, email support@electrica.com or create an issue in the repository.

## 📄 License

This project is ready for commercial use. Customize and deploy as your own!

## 🌟 Credits

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Images**: [Unsplash](https://unsplash.com/)

---

**Built with ❤️ for electrical service professionals**

Ready to launch your electrical services business online? Get started now!
