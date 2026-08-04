# Project Guide

## Overview

This repository contains Jay Labatorio's professional portfolio, built as a responsive single-page TanStack Start application. The primary experience lives on the home route and positions Jay's administrative, technical, data, customer support, and creative capabilities for remote clients.

## Architecture

- `src/routes/__root.tsx` defines the document shell, global metadata, fonts, and shared stylesheet.
- `src/routes/index.tsx` contains the main portfolio page, content data, filtering, theme state, navigation behavior, and Netlify contact form submission.
- `src/styles.css` contains the complete visual system, responsive layouts, themes, motion, and component styling.
- `public/contact.html` is the static form skeleton required for Netlify Forms detection.
- `public/jay-labatorio-resume.txt` is the downloadable resume placeholder.
- `content/` and the additional starter routes remain available from the original portfolio template but are not linked from the main experience.

## Coding Conventions

- Use TypeScript and functional React components.
- Keep content arrays near the top of `src/routes/index.tsx` when they are specific to the home page.
- Prefer semantic HTML, visible focus states, descriptive labels, and reduced-motion support.
- Use Lucide icons rather than custom inline SVGs.
- Keep colors, spacing, and theme tokens in CSS custom properties.
- Animate only opacity and transforms for interactive motion.
- Preserve responsive behavior at the existing `1080px`, `760px`, and `420px` breakpoints.

## Netlify Forms

The React form submits URL-encoded data to `/contact.html`. Every submitted field must also exist in `public/contact.html`, and the form name must remain `contact`. If fields are added or renamed, update both files together. The hidden honeypot field should remain in place.

## Non-Obvious Decisions

- Portfolio visuals are generated with CSS gradients and Lucide icons to keep the initial page fast and avoid unlicensed placeholder imagery.
- Theme preference is stored in `localStorage` and falls back to the operating system preference.
- Contact and social details are placeholders until verified information is provided; do not invent personal details.
- Testimonials are sample copy and are labeled as such in the interface.
