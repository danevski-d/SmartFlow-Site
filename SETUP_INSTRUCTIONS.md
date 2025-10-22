# SmartFlow Automation Agency - Setup Instructions

## Website Overview
This is a modern, fully responsive one-page landing page for SmartFlow Automation Agency, built with React, TypeScript, and Tailwind CSS.

## Features Implemented
✅ **Hero Section** - Stunning background image with dark gradient wash, compelling headline and CTA  
✅ **Animated Logo Carousel** - Infinite horizontal scroll with fade effects showcasing integration partners  
✅ **About Section** - Clear mission statement and agency description  
✅ **Why Choose Us** - 4 benefit cards with icons (Communication, Affordable, AI-Powered, Fast Support)  
✅ **Pricing Section** - 3-tier pricing cards (Basic €150, Medium €400, Pro €900+) with hover effects  
✅ **Contact Form** - Full form validation with shadcn/ui components and Calendly integration  
✅ **Smooth Scroll Navigation** - Sticky header with anchor links to all sections  
✅ **Scroll Animations** - Fade-up effects triggered by Intersection Observer  
✅ **Fully Responsive** - Mobile-first design that works perfectly on all devices  

## Required Setup Steps

### 1. Update Calendly Link
The contact form currently uses a placeholder Calendly link. You need to:

1. Create a Calendly account at https://calendly.com
2. Set up a new event type (e.g., "Free Automation Audit")
3. Get your Calendly scheduling link
4. Update the link in `client/src/pages/home.tsx`:

```typescript
const calendlyLink = "https://calendly.com/YOUR-USERNAME/YOUR-EVENT-TYPE";
```

Replace `YOUR-USERNAME/YOUR-EVENT-TYPE` with your actual Calendly details.

### 2. Update Contact Email (Optional)
The contact section displays `dragan.danevski@ymail.com`. If you want to change this:

1. Open `client/src/pages/home.tsx`
2. Search for "dragan.danevski@ymail.com"
3. Replace with your preferred email address

### 3. Customize Content (Optional)
You can easily customize:
- **Pricing Plans**: Update prices and features in the Pricing Section
- **Service Benefits**: Modify the "Why Choose Us" cards
- **About Text**: Update your agency description
- **Brand Colors**: Edit `client/src/index.css` (primary color is teal/blue)

## How to Run

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **View Website**:
   Open your browser to `http://localhost:5000`

## Technical Stack
- **Frontend Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Form Handling**: react-hook-form + zod validation
- **Animations**: Framer Motion principles with CSS transitions
- **Icons**: Lucide React

## Design Guidelines
The website follows professional design guidelines including:
- Consistent spacing and typography
- Accessible color contrasts (WCAG AA compliant)
- Smooth hover and active state interactions
- Responsive breakpoints optimized for all devices
- Intersection Observer for scroll-triggered animations

## Performance Features
- Optimized images with proper formats
- Lazy loading for sections
- Efficient CSS animations
- Minimal JavaScript bundle
- SEO-optimized meta tags

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment
This website is ready to deploy to any static hosting platform:
- Replit (one-click deployment)
- Vercel
- Netlify
- GitHub Pages

---

## Need Help?
If you have questions or need customization assistance, contact the developer or refer to the comprehensive code comments in `client/src/pages/home.tsx`.
