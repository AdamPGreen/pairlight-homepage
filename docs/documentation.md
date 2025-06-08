# Pairlight Homepage - Project Documentation

## Project Overview

Pairlight is an AI-powered speaker sourcing platform designed to revolutionize event planning and speaker selection. The platform enables event organizers to find, source, and connect with high-quality speakers who are curated, vetted, and aligned with their event agenda.

### Key Value Propositions
- **AI-Powered Speaker Matching**: Delivers ranked shortlists in minutes based on agenda, audience, and slot format
- **Intelligent Automation**: Reimagines conference organization for the AI era
- **Comprehensive Agent Suite**: Multiple AI agents working in concert for seamless event planning
- **Quality Assurance**: Curated and vetted speaker network

## Tech Stack

### Frontend Framework
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - JavaScript library for building user interfaces
- **TypeScript 5.2.2** - Static type checking

### Styling & UI
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Radix UI** - Comprehensive component library
  - Multiple Radix UI components for accessibility and consistency
- **Framer Motion 11.0.18** - Animation library
- **Lucide React** - Icon library
- **Heroicons** - Additional icon set

### Development Tools
- **ESLint 8.49.0** - JavaScript/TypeScript linting
- **PostCSS 8.4.30** - CSS processing
- **Autoprefixer 10.4.15** - CSS vendor prefixing

### Utilities & Libraries
- **clsx** - Conditional CSS class composition
- **tailwind-merge** - Tailwind CSS class merging utility
- **class-variance-authority** - Component variant handling
- **date-fns** - Date utility library
- **zod** - TypeScript schema validation
- **react-hook-form** - Form handling
- **next-themes** - Theme management (light/dark mode)

## Project Architecture

### Directory Structure
```
├── app/                    # Next.js App Router directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Reusable UI components (Radix-based)
│   ├── hero-section.tsx    # Landing page hero
│   ├── navbar.tsx          # Navigation component
│   ├── agent-suite.tsx     # AI agents showcase
│   ├── demo-card.tsx       # Interactive demo
│   └── [other components]  # Feature-specific components
├── lib/                    # Utility functions
│   └── utils.ts            # Common utilities
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
│   ├── assets/             # Images and brand assets
│   └── fonts/              # Custom fonts (Satoshi)
└── docs/                   # Documentation
```

### Component Structure
The application follows a component-based architecture with:

1. **Layout Components**: `Navbar`, `Footer`, `ThemeProvider`
2. **Section Components**: `HeroSection`, `AgentSuite`, `PricingSection`, etc.
3. **UI Components**: Radix UI-based components in `components/ui/`
4. **Feature Components**: `DemoCard`, `ProductPreview`, etc.

### Key Features

#### Pairlight Agent Suite
The platform features four main AI agents:

1. **Match Agent**: Delivers ranked shortlists based on agenda, audience, and format
2. **Recruit Agent**: Continuously scouts and qualifies new speakers
3. **Feedback Agent**: Captures post-event ratings and feedback
4. **Agenda Agent**: Suggests session titles, formats, and program flow

#### Interactive Elements
- Animated hero section with canvas-based background effects
- Responsive design across all device sizes
- Dark/light theme support
- Interactive demo cards and product previews

## Configuration

### TypeScript Configuration
- Target: ES5 with modern library support
- Module resolution: Bundler (Next.js optimized)
- Path aliases: `@/*` maps to project root
- Strict type checking enabled

### Tailwind Configuration
- Dark mode: Class-based switching
- Custom color scheme with CSS variables
- Extended theme with custom fonts (Satoshi, Inter)
- Animation support with custom keyframes
- Responsive design breakpoints

### Next.js Configuration
- **Static Export**: Configured for static site generation (`output: 'export'`)
- **Image Optimization**: Unoptimized for static deployment
- **ESLint**: Ignored during builds for faster deployment

## Deployment

### Build Configuration
The project is configured for static site generation:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

### Deployment Options
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **CDN**: Cloudflare, AWS CloudFront
- **Traditional Hosting**: Any web server capable of serving static files

## Development Guidelines

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js best practices
- **Component Structure**: Functional components with hooks
- **Styling**: Tailwind utility classes with consistent design system

### Component Development
- Use TypeScript for all components
- Implement proper prop types and interfaces
- Follow accessibility best practices (via Radix UI)
- Maintain responsive design principles
- Use semantic HTML elements

### Animation Guidelines
- Framer Motion for complex animations
- CSS animations for simple transitions
- Performance-conscious animation practices
- Reduced motion support for accessibility

### Theme Implementation
- CSS variables for color management
- Consistent spacing and typography scales
- Support for light and dark themes
- Responsive design patterns

## Performance Considerations

### Optimization Features
- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Disabled for static export compatibility
- **Bundle Splitting**: Automatic code splitting via Next.js
- **Tree Shaking**: Unused code elimination
- **Font Optimization**: Local font files with proper loading

### Best Practices
- Lazy loading for non-critical components
- Optimized animations with `will-change` CSS property
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind's purging

## SEO & Metadata

### Meta Configuration
- Dynamic title and description
- Open Graph images and metadata
- Favicon and brand assets
- Structured data for search engines

### Content Strategy
- Clear value proposition in hero section
- Feature-focused content structure
- Call-to-action optimization
- Accessibility-first approach

## Brand & Design System

### Typography
- **Primary Font**: Satoshi (local)
- **Secondary Font**: Inter (Google Fonts)
- **Font Weights**: Regular (400), Medium (500), Bold (700)

### Color Palette
- **Primary**: #6B85FE (Pairlight blue)
- **Secondary**: #8B9FFF (Light blue variant)
- **CSS Variables**: Consistent color system via HSL values

### Visual Elements
- Gradient backgrounds and animations
- Subtle shadows and depth
- Consistent border radius and spacing
- Icon consistency via Lucide and Heroicons

## Future Enhancements

### Planned Features
- Enhanced interactivity in demo sections
- Advanced animation sequences
- Performance monitoring integration
- Analytics implementation
- A/B testing framework

### Technical Improvements
- Progressive Web App (PWA) capabilities
- Enhanced accessibility features
- Internationalization support
- Content Management System integration

## Maintenance & Updates

### Regular Tasks
- Dependency updates and security patches
- Performance monitoring and optimization
- Content updates and feature additions
- Cross-browser testing and compatibility

### Monitoring
- Core Web Vitals tracking
- User experience analytics
- Error monitoring and reporting
- Performance benchmarking

---

*This documentation should be updated as the project evolves and new features are added.* 