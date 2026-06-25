# ProjectGotham — Frontend Battle 3.0

## Overview

ProjectGotham is a responsive, SEO-ready frontend boilerplate built using React, Vite, and Tailwind CSS for Frontend Battle 3.0.

This project is prepared as a fast execution base for building polished frontend pages using a provided asset ZIP and problem statement under time pressure.

## Live Deployment

Live Link: https://iit-bb-ui-hackathon.vercel.app/

## Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript
* Vercel

## Features

* Responsive navbar
* Hero section
* Feature section
* Card grid / showcase section
* Footer
* SEO-ready title, description, and Open Graph metadata
* Public assets folder flow tested
* Production build tested with `npm run build`
* Vercel deployment tested

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FeatureSection.jsx
│   ├── CardGrid.jsx
│   └── Footer.jsx
├── assets/
├── data/
├── styles/
├── App.jsx
├── index.css
└── main.jsx

public/
└── assets/
```

## Running Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173/
```

## Building for Production

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Deployment

This project is deployed using Vercel.

Default Vercel settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Hackathon Adaptation Notes

During the actual round:

1. Replace placeholder text with the given problem statement theme.
2. Put organizer ZIP assets inside `public/assets/`.
3. Update image paths using `/assets/file-name`.
4. Update SEO title and meta description in `index.html`.
5. Run `npm run build`.
6. Push final code to GitHub.
7. Submit live deployment link and GitHub repository link.

## Submission Links

Live Website: https://iit-bb-ui-hackathon.vercel.app/
GitHub Repository: https://github.com/Dhyan-M/IIT_BB_UI_HACKATHON
