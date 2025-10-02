# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a **Machine Learning Workshop Website** designed for educational purposes. It's a static website built with HTML, CSS, and JavaScript, featuring Thai language content about machine learning concepts, Teachable Machine, and model evaluation techniques.

## File Structure

- `index.html` - Main website page with comprehensive ML workshop content
- `styles.css` - Complete styling with blue gradient theme, responsive design, and animations
- `script.js` - Interactive functionality including smooth scrolling, animations, and mobile menu
- `.gitattributes` - Git configuration for line ending normalization

## Development Commands

### Local Development
```bash
# Serve the website locally (any of these methods)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### File Editing
- The website is self-contained with no build process required
- Direct file editing in HTML/CSS/JS
- Preview changes by refreshing the browser

## Architecture & Design

### Frontend Stack
- **HTML5** with semantic structure and Thai language support (`lang="th"`)
- **CSS3** with modern features (Grid, Flexbox, CSS animations, gradients)
- **Vanilla JavaScript** for interactive elements and smooth scrolling

### Design System
- **Color Scheme**: Blue gradient theme (#1e3c72 to #3b82f6) 
- **Typography**: Sarabun font family for Thai text support
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Card-based layout with consistent spacing and hover effects

### Content Sections
1. Hero section with workshop title
2. Event information cards
3. Workshop agenda with numbered steps
4. ML concepts explanation with visual comparisons
5. Teachable Machine tutorial steps
6. Model evaluation metrics and confusion matrix
7. Downloads section with external links

### Interactive Features
- Smooth scrolling navigation
- Active navigation highlighting based on scroll position
- Scroll progress indicator
- Hover animations on cards and interactive elements
- Mobile-responsive navigation menu
- Intersection Observer for scroll-based animations

## Content Guidelines

- **Language**: Primary content in Thai with English technical terms
- **Educational Focus**: Machine Learning concepts for high school students
- **Tools**: Teachable Machine and Google Sheets integration
- **External Links**: Google Drive folder for workshop materials

## Browser Compatibility

- Modern browsers with CSS Grid and Flexbox support
- Mobile-responsive design for tablets and phones
- Uses web fonts (Google Fonts - Sarabun)
- Progressive enhancement approach

## Maintenance Notes

- Static website requires no server-side dependencies
- External Google Drive links may need updating
- Thai text content requires UTF-8 encoding
- CSS uses modern features that may need fallbacks for older browsers