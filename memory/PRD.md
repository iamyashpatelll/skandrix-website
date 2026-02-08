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
- Header.jsx - Sticky navigation with scroll effect
- Footer.jsx - Company info and links
- Home.jsx - Complete landing page with all sections
- Technology.jsx - Services page with accordion
- Startups.jsx - Startup stages with visual cards
- Connect.jsx - Contact page with form

**Data Layer:**
- mock.js - All mock data (services, process steps, impact stories, tech services, startup stages)

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
- Contact form with toast notifications (frontend only)
- Smooth scroll behavior
- Hover animations on cards and images
- Responsive grid layouts

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
