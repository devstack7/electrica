# Electrica - Quick Reference Card

## 🚀 Most Common Commands

```bash
# First time setup
npm install

# Start development
npm run dev

# Build for production
npm run build

# Run production
npm start
```

## 📞 Update Contact Info (Priority 1)

### Files to Edit:
1. **components/Header.tsx** (Lines 36, 37, 40)
2. **components/Contact.tsx** (Lines 63, 72-73, 83-84)
3. **components/Footer.tsx** (Lines 79-80, 84, 90)

### Replace:
- Phone: +1 (234) 567-890 → **Your phone**
- Email: info@electrica.com → **Your email**
- Address: 123 Electric Avenue, NY → **Your address**

## 🎨 Change Colors (Priority 2)

**File**: `tailwind.config.js` (Lines 11-20)

```javascript
primary: '#FFB800'    // Your main color
secondary: '#1A1A2E'  // Your dark color
```

## 📝 Update Company Info (Priority 3)

**Find & Replace** "ELECTRICA" with your company name:
- Press `Ctrl+Shift+F` in VS Code
- Type: ELECTRICA
- Replace with: YOUR COMPANY NAME

## 📸 Add Your Images

1. Create folder: `public/images`
2. Add your photos
3. Update image paths:
   - `Hero.tsx` - Main hero image
   - `About.tsx` - About section images
   - `Team.tsx` - Team photos
   - `Projects.tsx` - Project photos

## 🗺️ Add Google Maps

**File**: `components/Contact.tsx` (Line 118)

1. Get embed code from Google Maps
2. Replace the placeholder div

## 🌐 Deploy to Web

### Vercel (Recommended - Free)
```bash
1. Push to GitHub
2. Import on vercel.com
3. Deploy!
```

### Netlify
```bash
1. Push to GitHub
2. Import on netlify.com
3. Deploy!
```

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| npm not found | Install Node.js |
| Errors after install | `npm install` again |
| TypeScript errors | These are warnings, site still works |

## 📱 Test Checklist

- [ ] Desktop Chrome
- [ ] Mobile (Chrome DevTools F12)
- [ ] Update all contact info
- [ ] Test contact form
- [ ] Check all links work
- [ ] Replace images
- [ ] Test on real phone

## 🎯 Launch Checklist

- [ ] All info updated
- [ ] Images replaced
- [ ] Contact form working
- [ ] Google Maps added
- [ ] Tested on mobile
- [ ] Domain purchased
- [ ] Deployed to hosting
- [ ] SSL certificate active
- [ ] Google Analytics added

## 💡 Quick Tips

- **Backup**: Push to GitHub after every change
- **Mobile First**: Most visitors use phones
- **Test Locally**: Always test before deploying
- **Keep it Simple**: Don't over-customize at first

## 📞 Important Sections to Customize

1. ✅ Contact information (Header, Contact, Footer)
2. ✅ Company name (Find & Replace)
3. ✅ Services (Services.tsx)
4. ✅ Pricing (Pricing.tsx)
5. ✅ Team members (Team.tsx)
6. ✅ Testimonials (Testimonials.tsx)
7. ✅ About section (About.tsx)

## 🎨 Customization Difficulty

**Easy** (No coding):
- Text content
- Contact info
- Images
- Colors

**Medium** (Basic HTML/CSS):
- Layout changes
- Add sections
- Style modifications

**Advanced** (JavaScript/React):
- New features
- Backend integration
- Complex animations

## 📚 Learn More

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- React: https://react.dev

## 🎉 Ready in 30 Minutes!

1. Install (5 min): `npm install`
2. Update info (10 min): Contact details
3. Change colors (5 min): Brand colors
4. Add images (5 min): Your photos
5. Test (5 min): Run `npm run dev`

**Total: 30 minutes to a professional website!**

---

Keep this card handy while setting up your site! 🚀
