# TechJourney - Beginner PC and Smartphone Course

Welcome to the TechJourney project! This is a simple, modular static website designed to offer a beginner's course on PC and smartphone basics. The website provides structured course content including vocabulary, tutorials, and exercises to help users get familiar with their devices.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [How It Works](#how-it-works)
4. [Styling](#styling)
5. [Deployment](#deployment)

---

## Project Overview

TechJourney is an educational website aimed at beginners who want to learn about PCs and smartphones. The website is modular, meaning it is easy to maintain and expand over time. It features:
- Vocabulary: Key terms and definitions for beginners.
- Tutorials: Step-by-step guides on using different types of devices.
- Exercises: Interactive quizzes and exercises to help learners reinforce their knowledge.

---

## Folder Structure

The project follows a simple folder structure for easy navigation and management:


## Folder Structure

The project follows a simple folder structure for easy navigation and management:

- `/ (root)`
  - `index.html` — Homepage
  - `header.html` — Header component (to be reused across pages)
  - `footer.html` — Footer component (to be reused across pages)
  - `assets/` — Images, fonts, and other assets
  - `css/` — Stylesheets (main.css, layout.css, etc.)
  - `js/` — JavaScript files (main.js, components.js)
  - `content/` — Course content (vocabulary, tutorials, exercises)
    - `vocabulary/` — Vocabulary terms and definitions
    - `tutorials/` — Step-by-step guides
    - `exercises/` — Interactive exercises
  - `README.md` — Project overview and setup instructions

---

## How It Works

### Dynamic Components

The website loads the header and footer components dynamically using JavaScript. The content of these components (found in `header.html` and `footer.html`) is injected into each page upon loading, ensuring consistency across all pages.

### Content Management

All course content is stored under the `content/` folder. Each section (e.g., Vocabulary, Tutorials, Exercises) has its own folder with corresponding HTML files. This structure allows for easy expansion of content as the course grows.

---

## Styling

The website has a modular styling system with the following CSS files:

- `css/main.css`: The main stylesheet that includes general styles for the website.
- `css/layout.css`: Contains layout-related styles like the grid system, header, and footer.
- `css/typography.css`: Defines styles for text elements such as headings, paragraphs, and fonts.

---

## Deployment

You can host the TechJourney website on GitHub Pages for free. Just push the repository to GitHub and enable GitHub Pages in the repository settings.

