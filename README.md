
# Artheist Labs Website

## Project info

**URL**: https://lovable.dev/projects/27e3996c-f06b-488b-87e8-662396c5e855

## How to Customize Content

This README provides detailed instructions on how to modify all text, links, images, and content throughout the website.

### 📝 Text Content Customization

All main text content is located in `src/components/MainHomepage.tsx`. Here's where to find and edit each section:

#### Hero Section (Lines ~50-80)
```typescript
// Company name
<span className="inline-block glitch-text">ARTHEIST LABS</span>

// Main tagline
We Make Arry's NFT

// Intro paragraph
Creative powerhouse behind Arry's NFT, pioneering innovation at the intersection of art, technology, and blockchain...
```

#### Vision Section (Lines ~130-150)
```typescript
// Section title
OUR VISION

// Vision content
At Artheist Labs, we envision Arry's NFT as a brand that seamlessly blends digital art...
```

#### Commitment Section (Lines ~170-200)
```typescript
// Section title
OUR COMMITMENT

// Commitment content
We believe NFTs are more than digital assets; they are a gateway to creativity...
```

#### Mission Section (Lines ~220-240)
```typescript
// Section title
OUR MISSION

// Mission content
Our mission is to revolutionize the NFT space while driving real-world impact...
```

#### NFT Education Section (Lines ~260-290)
```typescript
// Section title
WHAT ARE NFTs?

// Three educational cards
{ title: "DIGITAL OWNERSHIP", desc: "Non-Fungible Tokens represent..." }
{ title: "CREATIVE REVOLUTION", desc: "NFTs have revolutionized..." }
{ title: "FUTURE OF ART", desc: "The NFT market has grown..." }
```

#### Floating Banners
```typescript
// Line ~85: Side banner
"No Wahala, just NFTs & vibes | Naija sauce"

// Line ~250: Center banner
"The heist has begun | 2025 Flex | #Creative Heist"

// Line ~200: Info box
"They are a gateway to creativity, innovation, and real-world utility..."
```

### 🖼️ Image and Media Customization

#### Logo (Navigation & Hero)
```typescript
// Line ~45: Navigation logo
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/ARTHEIST-LOGO-ANI2.gif"
```

#### Animated GIFs
```typescript
// Line ~80: Hero rotating ball
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/BALL-ROTATE.gif"

// Line ~150: Vision section animation
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-5-1.gif"

// Line ~190: Commitment section animation
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/WEBSITE-ANIMATIONS-3-1.gif"

// Line ~320: Team section "Follow Us"
src="https://www.artheistlabs.com/wp-content/uploads/2025/04/Follow-Us-4.gif"
```

#### Video
```typescript
// Line ~110: Main video
src="https://www.artheistlabs.com/wp-content/uploads/2025/02/Artheist-video.mp4"
```

#### Team Member Images (Lines ~25-40)
```typescript
const teamMembers = [
  { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST13.png", name: "Creative Director", role: "Lead Visionary" },
  { img: "https://www.artheistlabs.com/wp-content/uploads/2025/04/AARTHEIST15.png", name: "Tech Architect", role: "Blockchain Engineer" },
  // ... add or remove team members here
];
```

### 🔗 Links and Social Media

#### Navigation Links (Lines ~55-65)
```typescript
// Current navigation items
['About', 'Team', 'NFT', 'Contact']

// To add new nav items, add to this array and create corresponding sections with matching IDs
```

#### Footer Social Links (Lines ~400-410)
```typescript
// X (Twitter)
href="https://x.com/artheistlabs"

// Discord
href="https://discord.gg/7rauUTmSYq"

// Instagram
href="https://www.instagram.com/artheistlabs"
```

#### Contact Button (Line ~380)
```typescript
// Call-to-action button text
CONTACT THE LAB

// To make it functional, add onClick handler:
onClick={() => window.location.href = 'mailto:contact@artheistlabs.com'}
```

### 🎨 Team Section Customization

#### Adding New Team Members
1. Add new image URL to the `teamMembers` array (line ~25)
2. Include name and role:
```typescript
{ img: "NEW_IMAGE_URL", name: "Team Member Name", role: "Their Role" }
```

#### Removing Team Members
1. Simply delete the corresponding object from the `teamMembers` array

#### Changing Team Member Details
1. Edit the `name` and `role` fields in the `teamMembers` array

### ⚙️ Technical Customization

#### Section IDs and Navigation
Each section has an ID that corresponds to navigation:
- `#hero` - Hero section
- `#vision` - Vision section  
- `#commitment` - Commitment section
- `#mission` - Mission section
- `#nft` - NFT education section
- `#team` - Team section
- `#contact` - Contact section

#### Animation Timings
Animation delays can be adjusted by modifying the `transitionDelay` values:
```typescript
style={{ transitionDelay: `${index * 100}ms` }}
```

#### Colors and Styling
The website uses a strict black and white color scheme defined in `src/index.css`. Key classes:
- `.glitch-text` - Glitch animation for text
- `.animate-float` - Floating animation for images
- `.animate-glitch` - Glitch effect on hover

### 🔧 Advanced Customization

#### Adding New Sections
1. Create a new section with unique ID:
```typescript
<section id="new-section" data-scroll-section>
  {/* Your content */}
</section>
```

2. Add corresponding navigation link
3. Add section to intersection observer logic

#### Modifying Animations
Animation classes are defined in `src/index.css`. You can:
- Adjust animation durations
- Change animation types
- Add new custom animations

#### Responsive Behavior
The site uses Tailwind CSS responsive classes:
- `md:` prefix for medium screens and up
- `lg:` prefix for large screens and up
- Grid layouts automatically adjust for mobile

## Development Commands

```sh
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Intersection Observer API** - Scroll animations

## Deployment

Simply open [Lovable](https://lovable.dev/projects/27e3996c-f06b-488b-87e8-662396c5e855) and click on Share → Publish.

## Custom Domain

To connect a custom domain, navigate to Project > Settings > Domains and click Connect Domain.

---

For more detailed editing instructions or advanced customizations, refer to the [Lovable Documentation](https://docs.lovable.dev/).
