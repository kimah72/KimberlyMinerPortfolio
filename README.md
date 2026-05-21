# Kimberly Miner — Developer Portfolio

A personal portfolio site built with React to showcase my projects, skills, education, and certifications as a software developer. This site represents my journey from hand-coding GeoCities pages in the late 90s to building full-stack applications today.

To run locally:
```bash
npm install
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

[Software Demo Video](https://youtu.be/opUQCIYhGG8)

# Web Pages

This is a single-page application (SPA) with smooth scroll navigation between sections:

- **Hero** — Name, tagline, and an SVG graphic. First impression and brand statement.
- **Featured Projects** — Three highlighted projects (time_and_space™, Quiltforge™, Rooted Upright™) displayed as cards with tech stack, status, and links.
- **Module Grid** — Six course-based projects mapped to BYU-Idaho curriculum modules, displayed in a responsive card grid.
- **About** — Personal background, developer origin story, and what drives my work.
- **Education** — BYU-Idaho degree progress, relevant coursework, and self-taught background.
- **Certificates** — Professional certificates from BYU-Idaho and AWS, with Credly verification link.
- **Skills** — Tech stack organized by category (languages, frameworks, databases, tools, concepts) displayed as a tag cloud.
- **Contact** — Working contact form with validation, honeypot spam protection, and AWS SES/Nodemailer backend integration.
- **Footer** — GitHub and LinkedIn links, copyright year, and a hidden easter egg.

All sections are dynamically rendered from JavaScript data arrays — adding a new project or skill requires only adding an object to the relevant array.

# Development Environment

- **React** (Create React App) — component-based UI
- **CSS** — custom properties (variables), per-component stylesheets, responsive design
- **React Icons** — icon library for theme toggle
- **Google Fonts** — Playfair Display, Poppins, Nunito
- **AWS SES + Nodemailer** — contact form email backend
- **Git + GitHub** — version control

# Useful Websites

* [React Documentation](https://react.dev)
* [Google Fonts](https://fonts.google.com)
* [Coolors](https://coolors.co) — color palette generator
* [React Icons](https://react-icons.github.io/react-icons)
* [WAVE Accessibility Tool](https://wave.webaim.org)
* [Lighthouse](https://developer.chrome.com/docs/lighthouse)
* [Credly](https://credly.com) — certificate verification

# Future Work

* Add mint accent to cloud-specific skill tags (AWS, DynamoDB, Cognito)
* Optimize Lighthouse SEO score (currently 82, target 90+)
* Light theme polish