
# Artheist Labs Website

## Project info

**URL**: https://lovable.dev/projects/27e3996c-f06b-488b-87e8-662396c5e855

## 🎯 Complete Guide to Customizing Your Website

This comprehensive guide will help you customize every aspect of your Artheist Labs website, from text content to production deployment.

### 📝 How to Edit All Text Content

#### Hero Section Text
**File**: `src/components/HeroSection.tsx`
- **Company Name** (Line ~80): Change `"ARTHEIST LABS"` 
- **Main Tagline** (Line ~110): Change `"We Make Arry's NFT"`
- **Quote** (Line ~130): Change `"No Wahala, just NFTs & vibes | Naija sauce"`
- **Banner Text** (Line ~140): Change `"The heist has begun | 2025 Flex | #Creative Heist"`

#### About Section Text
**File**: `src/components/AboutSection.tsx`
- Section titles and descriptions
- Vision, Mission, and Commitment content blocks
- All paragraph text and headings

#### Team Section
**File**: `src/components/TeamSection.tsx` (Lines ~8-20)
```typescript
const teamMembers = [
  { 
    img: "IMAGE_URL", 
    name: "MEMBER_NAME", 
    role: "MEMBER_ROLE" 
  },
  // Add or remove team members here
];
```
- **Section Title** (Line ~70): Change `"OUR TEAM"`
- **Subtitle** (Line ~80): Change `"MEET OUR TEAM OF ALCHEMISTS"`

#### NFT Section Text
**File**: `src/components/NFTSection.tsx`
- Educational content cards
- Timeline information (2017-2019, 2020-2021, 2022-2024)
- Market statistics and quotes

#### Navigation Menu
**File**: `src/components/Navigation.tsx`
- Menu items and links
- Logo and branding elements

#### Footer Content
**File**: `src/components/Footer.tsx`
- Copyright text
- Social media links
- Contact information

### 🔗 How to Edit All Links

#### Social Media Links
**File**: `src/components/Footer.tsx`
```typescript
// X (Twitter)
href="https://x.com/artheistlabs"

// Discord
href="https://discord.gg/7rauUTmSYq"

// Instagram
href="https://www.instagram.com/artheistlabs"
```

#### Internal Navigation
**File**: `src/components/Navigation.tsx`
- Update navigation menu items
- Modify section anchor links (#about, #team, #nft, etc.)

#### External Resources
Throughout the components, update any external links:
- Documentation links
- Partner websites
- Resource pages

### 🖼️ How to Change Images and Media

#### Logo Updates
```typescript
// Main logo in Navigation.tsx
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
```

#### Video Background
```typescript
// Hero section video in HeroSection.tsx
src="https://www.artheistlabs.com/wp-content/uploads/2025/02/Artheist-video.mp4"
```

#### Team Member Photos
Update the `teamMembers` array in `src/components/TeamSection.tsx` with new image URLs.

#### Animation GIFs
Replace any animated elements by updating their `src` attributes in the respective component files.

### 🎨 How to Customize Styling

#### Colors and Themes
**File**: `src/index.css`
- CSS custom properties (--background, --foreground, etc.)
- Color scheme definitions
- Design system variables

#### Fonts
**File**: `src/index.css` (Lines ~1-5)
```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
```

#### Animations
**File**: `src/index.css` (Lines ~50+)
- Custom keyframe animations
- Transition effects
- Hover states

### ⚙️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🚀 Preparing for Production

#### 1. Environment Setup
Create a `.env` file for environment variables:
```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

#### 2. Build Optimization
```bash
# Create optimized production build
npm run build
```

#### 3. Performance Checks
- Test all animations and interactions
- Verify responsive design on all devices
- Check loading times for images and videos
- Test all external links

#### 4. SEO Optimization
**File**: `index.html`
- Update meta tags
- Add proper title and description
- Include Open Graph tags
- Add favicon and manifest files

### 🌐 Hosting on cPanel File Manager

#### Step 1: Build Your Project
```bash
npm run build
```
This creates a `dist` folder with all production files.

#### Step 2: Prepare Files for Upload
1. Locate the `dist` folder in your project
2. Compress it into a ZIP file for easier upload
3. Alternatively, upload individual files

#### Step 3: Upload to cPanel
1. **Login to cPanel** → File Manager
2. **Navigate** to `public_html` (or your domain's root folder)
3. **Delete** any existing website files (index.html, etc.)
4. **Upload** your ZIP file or drag & drop the `dist` folder contents
5. **Extract** the ZIP file if you uploaded one
6. **Move** all files from the `dist` folder to the root directory

#### Step 4: File Structure After Upload
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── favicon.ico
└── [other static files]
```

#### Step 5: Configure Domain Settings
1. **Check** that your domain points to the correct directory
2. **Set** index.html as the default document
3. **Test** the website by visiting your domain

#### Step 6: SSL Certificate (Recommended)
1. **Enable** SSL in cPanel
2. **Force HTTPS** redirects
3. **Update** any hardcoded HTTP links

### 🔧 Troubleshooting Common Issues

#### Build Errors
- Check for TypeScript errors: `npm run type-check`
- Verify all imports are correct
- Ensure all dependencies are installed

#### Upload Issues
- Check file permissions (755 for folders, 644 for files)
- Ensure .htaccess file is properly configured
- Verify all paths are relative, not absolute

#### Performance Issues
- Optimize images before uploading
- Use appropriate video formats and compression
- Consider using a CDN for large assets

### 📱 Mobile Responsiveness

The website is built with responsive design using Tailwind CSS:
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Testing**: Use browser dev tools to test different screen sizes

### 🎭 Animation Customization

**File**: `src/index.css`
- Modify existing animations
- Add new keyframe animations
- Adjust timing and easing functions

### 📊 Analytics Integration

To add Google Analytics or other tracking:
1. **Add** tracking script to `index.html`
2. **Configure** environment variables
3. **Test** in production environment

### 🔄 Continuous Updates

#### Making Changes
1. **Edit** files locally
2. **Test** with `npm run dev`
3. **Build** with `npm run build`
4. **Upload** new `dist` folder contents to cPanel

#### Version Control
Consider using Git for version control:
1. **Initialize**: `git init`
2. **Commit** changes regularly
3. **Push** to GitHub/GitLab for backup

### 🆘 Support Resources

- **Lovable Documentation**: https://docs.lovable.dev/
- **React Documentation**: https://reactjs.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

### 📋 Pre-Launch Checklist

- [ ] All text content updated
- [ ] All images and media optimized
- [ ] All links tested and working
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] SSL certificate installed
- [ ] Analytics configured
- [ ] Contact forms functional
- [ ] Social media links verified

## Technology Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and development server

## Deployment

Simply open [Lovable](https://lovable.dev/projects/27e3996c-f06b-488b-87e8-662396c5e855) and click on Share → Publish for quick deployment, or follow the cPanel instructions above for custom hosting.

## Custom Domain

To connect a custom domain, navigate to Project > Settings > Domains and click Connect Domain in Lovable, or configure DNS settings in your hosting provider for cPanel hosting.

---

For additional help or advanced customizations, refer to the [Lovable Documentation](https://docs.lovable.dev/) or contact support.
