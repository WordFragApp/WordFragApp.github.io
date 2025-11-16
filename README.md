# WordFrag - Daily Word Puzzle Game

A modern, responsive landing page for WordFrag, a daily word-fragment puzzle game for iOS. Built with vanilla HTML, CSS, and JavaScript.

## About WordFrag

WordFrag is a daily word puzzle game where players recombine word fragments into complete words. Each puzzle presents a fixed set of fragments that can be paired to form valid English words. The core challenge is to discover the correct fragment pairs using logic, vocabulary knowledge, and color-coded feedback after each attempt.

### Game Features
- **Daily Puzzles**: One new puzzle every day, generated using date-based randomization
- **6 Attempts**: Solve each puzzle within 6 submissions
- **Smart Feedback**: Green (correct pair), Yellow (right fragments, wrong pairing), Gray (incorrect)
- **Practice Mode**: Unlimited randomly generated puzzles anytime
- **Tutorial Mode**: Hand-crafted puzzles to learn game mechanics
- **Streak Tracking**: Track your daily streak and statistics
- **Social Sharing**: Share your results with friends

## Design Overview

This website showcases the WordFrag game with a contemporary design emphasizing user experience, accessibility, and visual appeal. The design follows modern web standards and best practices.

## Key Design Features

### 1. **Color System & Theming**
- **Dual Theme Support**: Light and dark modes with seamless switching
- **CSS Variables**: Centralized color management for easy customization
- **Gradient Accents**: Eye-catching purple-to-blue gradients throughout
- **Color Palette**:
  - Primary gradient: Purple (#667eea) to Violet (#764ba2)
  - Secondary accents: Pink (#f093fb) and Blue (#4facfe)
  - Adaptive backgrounds and text colors for both themes

### 2. **Typography**
- **Font Family**: Inter (modern, professional sans-serif)
- **Font Weights**: 300, 400, 600, 700, 800 for hierarchical content
- **Responsive Sizing**: Uses `clamp()` for fluid typography
- **Readability**: Optimized line-height (1.6) and letter-spacing

### 3. **Layout & Structure**

#### Hero Section
- **Full-viewport hero** with gradient background blobs
- **Game statistics** (1 puzzle/day, 6 attempts, infinite practice mode)
- **Call-to-action buttons** with hover effects
- **Floating gradient blobs** that create depth and visual interest

#### How It Works Section
- **Grid layout** (3 columns on desktop, responsive on mobile)
- **Icon-based cards** with gradient backgrounds
- **Hover animations** with lift effect and border color change
- **6 mechanics cards** explaining gameplay:
  1. Daily Puzzles - Date-based generation
  2. Pair Fragments - Match fragments to form words
  3. Smart Feedback - Color-coded hints (green/yellow/gray)
  4. 6 Attempts - Limited submissions per puzzle
  5. Track Your Streak - Build daily streaks
  6. Practice Mode - Unlimited random puzzles

#### About Section
- **Two-column layout** with text and visual mockup
- **App mockup** showing word fragment pairing (MICRO + SCOPE = MICROSCOPE)
- **Feature checklist** highlighting key features
- **Pulsing animation** on mockup content

#### Game Modes Section
- **Three-column grid** showcasing different modes
- **Daily Puzzle**: Streak tracking, shared worldwide puzzle
- **Practice Mode**: Unlimited puzzles, no pressure
- **Tutorial Mode**: Learn mechanics with guided puzzles
- **Feature lists** for each mode with arrow bullets

#### Download Section
- **Gradient background** matching brand colors
- **Platform buttons** for App Store (iOS focus)
- **Glass-morphism effect** on download buttons

#### Footer
- **Multi-column layout** with organized links
- **Brand identity** reinforcement
- **Legal and support links**

### 4. **Interactive Elements**

#### Theme Toggle
- **Sun/moon icons** with rotation animations
- **Persistent storage** using localStorage
- **Smooth transitions** between themes
- **Icon morphing** effect when switching

#### Navigation
- **Fixed navbar** with blur backdrop
- **Animated underlines** on hover
- **Smooth scroll** to sections
- **Dynamic shadow** on scroll

#### Scroll Animations
- **Intersection Observer** for reveal animations
- **Fade-in and slide-up** effects on scroll
- **Parallax effect** on hero background blobs
- **Stats counter** animation when visible

#### Interactive Features
- **Card hover effects** with icon rotation and scale
- **Button ripple effect** on click
- **Smooth scrolling** to anchor links
- **Easter egg**: Konami code activation

### 5. **Animations**

#### CSS Animations
- `fadeInUp`: Entry animations for hero content
- `gradientShift`: Animated gradient text
- `float`: Organic movement for background blobs
- `pulse`: Subtle scaling for emphasis
- `ripple`: Click feedback for buttons

#### JavaScript Animations
- **Stats counter**: Animates numbers from 0 to target
- **Parallax scrolling**: Background elements move at different speeds
- **Theme transition**: Smooth color transitions
- **Scroll reveal**: Elements fade in as they enter viewport

### 6. **Responsive Design**

#### Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 968px (adjusted grid)
- **Mobile**: < 768px (single column, simplified navigation)

#### Mobile Optimizations
- **Hidden navigation menu** on small screens
- **Stacked layouts** for better readability
- **Touch-friendly buttons** (minimum 44px)
- **Optimized font sizes** using clamp()

### 7. **Accessibility Features**

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA labels**: For icon buttons (theme toggle)
- **Keyboard navigation**: Full support for tab navigation
- **Focus states**: Visible focus indicators
- **Color contrast**: WCAG AA compliant
- **Reduced motion**: Respects `prefers-reduced-motion`
- **Alt text ready**: Structure supports image descriptions

### 8. **Performance Optimizations**

- **CSS Variables**: Reduce redundancy and improve maintainability
- **Minimal JavaScript**: Vanilla JS, no framework overhead
- **Lazy animations**: IntersectionObserver prevents off-screen calculations
- **LocalStorage**: Cache theme preference
- **Optimized selectors**: Efficient DOM queries
- **CSS transforms**: Hardware-accelerated animations

### 9. **User Experience (UX)**

#### Visual Hierarchy
- **Clear CTAs**: Prominent "Get Started" and "Learn More" buttons
- **Progressive disclosure**: Information revealed as user scrolls
- **Consistent spacing**: Using CSS custom properties
- **Visual flow**: Guides eye from hero to features to CTA

#### Micro-interactions
- **Button hover states**: Visual feedback on interaction
- **Card elevation**: Depth changes on hover
- **Theme toggle rotation**: Playful 360° spin
- **Ripple effects**: Material design-inspired feedback

#### Brand Consistency
- **Gradient usage**: Consistent purple-blue theme
- **Logo design**: Bold "W" icon with gradient
- **Badge elements**: Rounded, accent-colored highlights
- **Icon style**: Consistent stroke-based SVG icons

### 10. **Technical Highlights**

#### Modern CSS Features
- **CSS Grid**: Complex layouts made simple
- **Flexbox**: Flexible component alignment
- **CSS Variables**: Dynamic theming
- **Backdrop-filter**: Glass-morphism effects
- **clamp()**: Responsive typography
- **background-clip**: Gradient text effects

#### JavaScript Features
- **IntersectionObserver API**: Efficient scroll detection
- **LocalStorage API**: Theme persistence
- **Event delegation**: Efficient event handling
- **RequestAnimationFrame**: Smooth counter animations
- **Template literals**: Dynamic content generation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## File Structure

```
WordFragApp.github.io/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Getting Started

Simply open `index.html` in a modern web browser. The site is static and requires no build process or dependencies.

## Contact Form Setup

The contact form on `contact-us.html` uses **FormSubmit** (a free form backend service) to send emails to **wordfraggame@gmail.com**.

### First-Time Setup (Required)

**IMPORTANT:** The first time someone submits the contact form, FormSubmit will send a verification email to `wordfraggame@gmail.com`. You MUST click the activation link in that email to enable the form.

**Steps:**
1. Have someone submit a test message through the contact form
2. Check the inbox for `wordfraggame@gmail.com`
3. Look for an email from FormSubmit with subject "Activate Form"
4. Click the activation link in the email
5. The form is now active and will send all future submissions to your email

### How It Works

- All form submissions are sent directly to `wordfraggame@gmail.com`
- Email subject line: "New Contact Form Submission - WordFrag"
- The email includes: Name, Email, and Comments
- Anti-spam honeypot field included
- No API keys or backend server required

### Features Configured

- ✅ Email notifications to wordfraggame@gmail.com
- ✅ Custom subject line
- ✅ Table-formatted emails for easy reading
- ✅ Honeypot spam protection
- ✅ AJAX submission (stays on page)
- ✅ Success/error notifications

## Customization

### Changing Colors
Edit the CSS variables in `:root` and `[data-theme="dark"]` in `style.css`:

```css
:root {
    --gradient-1: #667eea;  /* Primary gradient start */
    --gradient-2: #764ba2;  /* Primary gradient end */
    /* ... more variables */
}
```

### Modifying Content
All content is in `index.html`. Update text, links, and structure as needed.

### Adding Features
Extend functionality in `script.js` using the existing patterns for consistency.

## Game Mechanics Highlighted

The website effectively communicates WordFrag's core gameplay:

1. **Fragment Pairing**: Players combine two fragments to create complete words
2. **Feedback System**:
   - 🟢 Green: Correct pair
   - 🟡 Yellow: Both fragments are in the solution, but paired incorrectly
   - ⚫ Gray: Fragments not part of solution or misused
3. **Daily Challenge**: New puzzle every calendar day (date-based seed)
4. **Attempt Limit**: 6 submissions to solve each puzzle
5. **Multiple Modes**: Daily, Practice (infinite), and Tutorial
6. **Statistics**: Streak tracking, wins/losses, average attempts

## Platform

- **Primary**: iOS (iPhone)
- **Technology**: Xcode, Swift, SwiftUI
- **Minimum**: iOS 16+
- **Architecture**: MVVM (Model-View-ViewModel)

## Credits

- **Fonts**: Inter by Rasmus Andersson (Google Fonts)
- **Icons**: Custom SVG icons
- **Design**: Modern, minimal aesthetic inspired by popular daily puzzle games
- **Game Concept**: WordFrag Product Requirement Guide v1.1

## License

Feel free to use this template for your own projects!