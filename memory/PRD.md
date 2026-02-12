# Skandrix Website - Product Requirements Document

## Original Problem Statement
Build a premium, minimal website for Skandrix - a business-first technology and startup growth company. The website should feel intelligent, calm, confident, and minimal, establishing Skandrix as a strategic technology partner.

## Brand Identity
- **Logo**: Typography logo - "Skandrix"
- **Font**: Montserrat (primary font family)
- **Colors**: 
  - Background: Pure White (#FFFFFF)
  - Typography: Deep Black (#000000)
  - No heavy colors or gradients
- **Design Philosophy**: Apple-style minimalism, generous whitespace, calm confidence

## Architecture & Tech Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Routing**: React Router v7

## User Personas
1. **Founders & Entrepreneurs**: Looking for technical + strategic partnership
2. **Decision Makers**: C-level executives seeking intelligent tech solutions
3. **Startups**: Pre-seed to Series A+ companies needing growth support
4. **Enterprise Clients**: Businesses requiring strategic technology consulting

## Core Requirements (Static)
1. **4 Main Pages**: Home, Technology, Startups, Connect
2. **Sticky Header**: Logo, navigation, CTA button
3. **Footer**: Company info, navigation links, social media
4. **Premium Design**: Minimal, clean, architectural feel
5. **Responsive**: Mobile-first design approach
6. **Smooth Animations**: Hover states, transitions, scroll effects

## What's Been Implemented (December 8, 2025)

### Phase 1: Frontend Development ✅
**Components Created:**
- Header.jsx - Sticky navigation with scroll effect (updated: "Core" instead of "Home")
- Footer.jsx - Company info and links
- Home.jsx - Complete landing page (now labeled as "Core" in navigation)
- Technology.jsx - Services page with accordion
- Startups.jsx - Startup stages with visual cards
- Videos.jsx - **NEW** Startup insights video library with filtering
- Connect.jsx - Contact page with form

**Data Layer:**
- mock.js - All mock data including new video content (6 startup-related videos)

**Styling:**
- Montserrat font imported via Google Fonts
- App.css - Custom styles and animations
- index.css - Tailwind configuration
- All Shadcn UI components integrated

**Features Implemented:**
- Hero section with abstract imagery
- "Why Skandrix Exists" section
- "What We Offer" - 3 service pillars
- "The Skandrix Way" - Process steps
- "Impact That Matters" - Transformation stories
- "Different by Design" - Comparison table
- Technology services with expandable accordions
- Startup growth stages with alternating layouts
- **NEW: Videos page with:**
  - Category filtering (All, Pre-Seed, Seed, Series A, Growth)
  - 6 startup-related videos with thumbnails
  - Video player modal with embedded YouTube player
  - Duration badges and category tags
  - Hover animations and play button overlay
- Contact form with toast notifications (frontend only)
- Smooth scroll behavior
- Hover animations on cards and images
- Responsive grid layouts

### Phase 2: Updates (December 8, 2025) ✅
**Navigation Changes:**
- Renamed "Home" to "Core" in header and footer
- Added "Videos" link to navigation
- Updated routing to include /videos path

## Prioritized Backlog

### P0 Features (Must Have - Next)
1. **Backend Integration**
   - Contact form submission API
   - Form data storage in MongoDB
   - Email notification on form submission
   
2. **Form Validation**
   - Email format validation
   - Required field checks
   - Error handling

### P1 Features (Should Have)
1. **Analytics Integration**
   - Google Analytics or similar
   - User behavior tracking
   - Conversion tracking

2. **SEO Optimization**
   - Meta tags for all pages
   - Open Graph tags
   - Sitemap generation
   - Schema markup

3. **Performance Optimization**
   - Image lazy loading
   - Code splitting
   - Bundle size optimization

### P2 Features (Nice to Have)
1. **CMS Integration**
   - Admin panel for content updates
   - Blog functionality
   - Case studies management

2. **Advanced Animations**
   - Parallax scrolling
   - Entrance animations
   - Scroll-triggered effects

3. **Interactive Elements**
   - Live chat integration
   - Calendly widget integration
   - Newsletter subscription

## Next Tasks
1. Build backend API for contact form
2. Integrate form with backend
3. Add email notifications
4. Testing (frontend + backend end-to-end)
5. SEO meta tags
6. Performance optimization

## API Contracts (To Be Implemented)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon."
}
```

## Mocked Data Location
- `/app/frontend/src/data/mock.js` - All website content data

## Notes
- Contact form currently works frontend-only (stores in browser, shows toast)
- All navigation and routing functional
- All pages fully responsive
- Design follows brand guidelines precisely

### Phase 3: Admin Panel + Mobile Responsiveness (December 8, 2025) ✅

**Admin Panel Features:**
- Login page at /admin/login with authentication
- Default credentials: admin@skandrix.com / Admin@123
- Protected admin dashboard at /admin/dashboard
- Content management for all pages (Core, Technology, Startups, Connect)
- Edit hero titles, subtitles, and descriptions
- Image URL management with upload UI (mock)
- Page name editing in Settings tab
- View Site and Logout buttons
- Toast notifications for save/login actions
- Mock authentication using localStorage

**Mobile Responsiveness:**
- Hamburger menu for mobile navigation
- Responsive header with mobile menu toggle
- Mobile-optimized footer layout
- All pages fully responsive (tested on 390x844 mobile viewport)
- Proper spacing and typography scaling
- Touch-friendly buttons and interactions

**Removed:**
- Videos page completely deleted (as requested)
- Removed from navigation, routing, and footer

**Admin Panel UI Components:**
- Tabs for different page sections
- Form inputs for content editing
- Image preview on URL change
- Clean admin layout separate from main site
- Admin link in footer for easy access

## Current State (MOCK Data - Frontend Only)

**Admin Panel:**
- ✅ Login authentication (mock - localStorage based)
- ✅ Content editing UI for all pages
- ✅ Image URL editing with preview
- ✅ Page name editing
- ❌ Backend API integration (pending)
- ❌ Database persistence (pending)
- ❌ Actual file upload (pending)
- ❌ Real-time content updates on main site (pending)

**Mobile Responsiveness:**
- ✅ All pages mobile responsive
- ✅ Mobile navigation menu
- ✅ Touch-optimized interactions
- ✅ Responsive images and layouts

### Phase 4: UX/UI Enhancements + SEO Content (December 8, 2025) ✅

**Major UX/UI Improvements:**
- Enhanced animations (fade-in, slide-in, scale animations)
- Improved hover effects with transform and shadow transitions
- Better touch interactions for mobile (44px minimum touch targets)
- Custom scrollbar styling
- Focus-visible states for accessibility
- Responsive typography with clamp()
- Glass morphism effects
- Smooth page transitions
- Loading skeleton animations
- Parallax-ready helper classes

**Technology/Services Page Overhaul:**
- **Desktop:** Accordion-based service cards with full expandable details
- **Mobile:** Touch-friendly carousel with swipe navigation
- Expanded from 7 to 12 comprehensive IT services:
  1. Mobile App Development
  2. Web Application Development
  3. Cloud Infrastructure & DevOps
  4. AI & Machine Learning Solutions
  5. E-Commerce Solutions
  6. UI/UX Design Services
  7. API Development & Integration
  8. Quality Assurance & Testing
  9. Cybersecurity Services
  10. Data Analytics & BI
  11. ERP & CRM Solutions
  12. Blockchain Development

**SEO-Optimized Service Content:**
- Detailed descriptions (50-100 words per service)
- Key benefits (6 points per service)
- Technology stacks for each service
- Process steps clearly defined
- Keyword-rich content for better SEO
- Proper heading hierarchy (H1, H2, H3, H4)

**Mobile Carousel Features:**
- Touch-friendly prev/next buttons
- Dot indicators showing current position
- Counter (e.g., "1 of 12")
- Smooth transitions between services
- Active state styling
- Auto-adjusted content for mobile viewing

**Dynamic Image Enhancements:**
- Hover zoom effects
- Brightness filters on hover
- Transform transitions (700ms ease)
- Group hover effects on cards
- Shadow depth changes on interaction
- Gradient overlays on images

**Improved Component Interactions:**
- Button active states with scale transform
- Card lift effect on hover (translateY)
- Icon scaling animations
- Smooth accordion expand/collapse
- CTA buttons with arrow slide effect
- Enhanced shadow transitions

**Performance & Accessibility:**
- Smooth scroll with padding-top for anchor links
- Scroll behavior optimization
- Touch device detection (disabled hover on touch)
- High contrast focus states
- Semantic HTML structure
- ARIA labels for interactive elements

### Phase 5: Interactive Animations + Startup Focus (December 8, 2025) ✅

**Hero Section Interactive Animations:**
- **Mouse tracking parallax effect:** Hero image and floating shapes follow mouse movement
- **Radial gradient spotlight:** Dynamic gradient that follows cursor position
- **Floating animated shapes:** 3 blur circles with different animation speeds
- **Parallax layers:** Multiple elements with different parallax intensity (30px, -20px, 15px)
- **Hover state transitions:** Image zoom, gradient overlays on hover
- **Smooth easing:** 300-400ms transitions with ease-out curves

**Animation Types Implemented:**
1. **Entrance Animations:**
   - Slide-up with fade (0.2s, 0.4s, 0.6s delays)
   - Fade-in for cards (0.6s with stagger)
   - Scale and rotate on hover for icons

2. **Mouse-Following Animations:**
   - Hero image parallax (30px movement)
   - Reverse parallax for shapes (-20px)
   - Background gradient spotlight
   - Glow effect around cursor position

3. **Continuous Animations:**
   - Floating shapes (6s and 8s infinite loops)
   - Breathing effect on background elements
   - Icon rotation on hover (3deg)

4. **Hover Interactions:**
   - Scale transforms (1.05x, 1.10x)
   - Shadow depth changes
   - Arrow slide on CTA buttons
   - Image zoom with gradient overlay

**Expanded Startup Content on Home Page:**
- **New "For Startups & Founders" section:**
  - Hero badge with Rocket icon
  - Compelling headline about startup dreams
  - 4 key value propositions (Pre-Seed to Series A+, MVP in 90 Days, Built to Scale, Founder-First)
  - Icon cards with hover animations
  - Black stats card with impressive metrics:
    * 90+ Startups Funded
    * $50M+ Capital Raised
    * 85% Success Rate
    * 12 Active Portfolio

- **Startup-focused messaging throughout:**
  - "We understand unique startup challenges"
  - "Strategic tech partnership at every funding stage"
  - Direct link to Startups page from Why Skandrix section
  - Founder-friendly language and positioning

**Performance Optimizations:**
- RequestAnimationFrame for smooth animations
- CSS transforms for GPU acceleration
- Debounced mouse tracking
- Transition cleanup on unmount
- Conditional animations based on hover state

**Visual Enhancements:**
- 90vh minimum height for hero section
- Gradient backgrounds with mouse interaction
- Blur effects on floating shapes (xl, 2xl, lg)
- Rounded corners (2xl, 3xl) for modern look
- Black stats card with high contrast

### Phase 6: Mobile Responsiveness Fixes (December 8, 2025) ✅

**Mobile Menu Overlay System:**
- **Backdrop with blur:** Full-screen black/50 backdrop with backdrop-blur-md
- **Clean white menu:** Fixed positioning from top-20 to bottom with white background
- **Proper z-index layering:** Backdrop z-40, menu z-40, header z-50
- **Body scroll lock:** Prevents background scrolling when menu is open
- **Smooth animations:** Fade-in (0.2s) for backdrop, slide-down (0.3s) for menu
- **Click-outside to close:** Backdrop click closes menu
- **Auto-close on navigation:** Menu closes when route changes

**Mobile Menu Improvements:**
- Large touch-friendly links (text-2xl, py-4)
- Clear visual hierarchy with font weights
- Border separators between menu items
- Full-width CTA button at bottom
- Proper spacing and padding (p-6, space-y-4)
- Active state highlighting
- Hover states for better UX

**Mobile Responsiveness Enhancements:**
- **Horizontal scroll fix:** Prevented with max-width: 100vw and overflow-x: hidden
- **Typography scaling:**
  * H1: 2rem on mobile
  * H2: 1.75rem on mobile
  * H3: 1.25rem on mobile
  * P: 1rem with proper line-height
- **Touch targets:** Minimum 44px height for all interactive elements
- **Image optimization:** Max-width 100%, height auto
- **Button sizing:** Min-height 44px enforced
- **Card padding:** Proper mobile padding adjustments

**Mobile Layout Fixes:**
- Better spacing on all pages
- Proper grid collapses on mobile
- Stack layouts for mobile (flex-col)
- Responsive images with proper sizing
- No text overlap issues
- Clear visual separation

**Animation Optimizations:**
- Menu open/close animations
- Smooth transitions without jank
- GPU-accelerated transforms
- Proper cleanup on unmount
- No layout shifts

**Testing Coverage:**
- iPhone 12 Pro (390x844)
- iPhone SE (375x667)
- All pages tested (Core, Technology, Startups, Connect)
- Menu functionality verified
- Scrolling behavior confirmed
- No horizontal overflow
- Text readability verified

### Phase 7: Animated Brain + Service Pages + Dropdown (December 8, 2025) ✅

**Animated Brain Hero Section:**
- **Custom Canvas Animation:** Real-time neural network simulation
- **Black brain outline:** Hand-drawn bezier curves forming brain shape  
- **50 moving red dots:** Simulating neurons with physics
- **Connected network:** Red lines between nearby dots (distance < 100px)
- **Smooth animation:** RequestAnimationFrame for 60fps performance
- **Dynamic movement:** Dots bounce off brain boundaries
- **Fade connections:** Line opacity based on distance
- **Responsive canvas:** Scales properly on all devices
- **Replaced static image:** No more static hero image

**Technology Dropdown Menu:**
- **Hover-activated:** Opens on mouse enter, closes on leave
- **Background blur:** white/95 with backdrop-blur-md
- **Smooth animation:** Dropdown slides from top with fade
- **All 12 services listed:** Each with title and short description
- **Clean design:** Rounded corners, shadows, hover states
- **Mobile responsive:** Shows as expanded list in mobile menu
- **ChevronDown icon:** Rotates 180deg when open

**Individual Service Pages (12 Total):**
- **Dynamic routing:** `/services/:slug` for each service
- **Comprehensive content:**
  * Hero section with service title
  * Overview with detailed description
  * Key Benefits (6 per service in grid)
  * 5-step Development Process
  * Technology Stack with REAL LOGOS
  * 4 Real-World Use Cases
  * CTA section
  
**Tech Stack with Real Logos:**
- **CDN integration:** Using devicons for all major technologies
- **Logo fallback:** Shows initials if logo fails to load
- **Technologies covered:**
  * React Native, Flutter, Swift, Kotlin
  * React, Next.js, Node.js, TypeScript
  * AWS, Azure, GCP, Docker, Kubernetes
  * TensorFlow, PyTorch, Python
  * Figma, Selenium, Jest
  * MongoDB, Firebase, GraphQL, Redis
- **Hover animations:** Logos scale on hover (110%)
- **Responsive grid:** 2-5 columns based on screen size

**Use Cases Per Service:**
1. Enterprise Solution
2. Startup MVP
3. Digital Transformation
4. Scale-Up Growth

**Process Steps (Standard 5-step):**
1. Discovery & Strategy
2. Design & Development
3. Agile Development
4. Testing & QA
5. Launch & Support

**Removed:**
- Technology.jsx page (no longer needed)
- Accordion-based service display
- Static technology listings
- /technology route

**Navigation Updates:**
- Removed "Technology" from main nav links
- Added Technology dropdown with all services
- Mobile menu shows services list under "TECHNOLOGY SERVICES"
- Footer updated (removed Technology link)

### Phase 8: Mobile Navigation Dropdown Fix (December 12, 2025) ✅

**Mobile Navigation Improvements:**
- **Click-to-Toggle Dropdown:** Technology menu item now expands/collapses on tap (mobile only)
- **New State Management:** Added `isMobileServicesOpen` state for mobile dropdown control
- **Smooth Animations:** CSS transition with max-height animation (300ms ease-in-out)
- **Chevron Indicator:** Rotates 180deg to indicate open/closed state
- **Clean Service List:** Services displayed with icons in a scrollable list within dropdown
- **Auto-Close Behavior:** Menu closes automatically when a service is selected
- **Route Change Handler:** Dropdown resets when navigating to new page
- **Desktop Unchanged:** Hover behavior on desktop remains intact (onMouseEnter/onMouseLeave)
- **Left-Aligned Menu Items:** All mobile menu items now left-aligned
- **Scrollable Services:** Services dropdown has fixed height (280px) with vertical scroll

**Test Results (iteration_1.json):**
- ✅ Hamburger menu open/close
- ✅ Technology dropdown expand/collapse on click
- ✅ Chevron animation
- ✅ Service navigation from dropdown
- ✅ Menu auto-close after selection
- ✅ Desktop hover dropdown preserved
- ✅ Mobile viewport (375px) layout correct
- **100% Frontend Test Success Rate**

**Data Test IDs Added:**
- `mobile-technology-dropdown-toggle` - Toggle button for Technology dropdown
- `mobile-service-{id}` - Individual service links in mobile dropdown
- `mobile-cta-button` - Let's Talk CTA button

### Phase 9: Startups Page Redesign + Footer Update (December 12, 2025) ✅

**Startups Page Overhaul:**
- **New Compelling Hero:** "Your first call when building something extraordinary"
- **For Visionary Founders badge** with rocket icon
- **Hero Image Section:** Large image with quote overlay
- **4 "Why Founders Choose Us" Cards:**
  - We Speak Founder
  - Speed is Everything
  - Outcome-Obsessed
  - Your Success is Ours
- **4 Journey Stages with Images:**
  - Pre-Seed: From Idea to Validation
  - Seed: Building Momentum
  - Series A: Scaling Excellence
  - Growth & Beyond: Sustaining Leadership
- **6 Founder Promises:** (black background section)
  - Authentic promises like "We'll be there at 2 AM when production breaks"
- **Inspirational Quote Section**
- **Final CTA:** "Ready to build something that matters?"
- **NO FAKE NUMBERS** - Removed generic metrics, replaced with authentic content

**Footer Updates:**
- **LinkedIn URL updated** to: https://www.linkedin.com/company/skandrix/
- **Twitter icon removed** - only LinkedIn and Email remain
- Cleaner footer with just essential social links
