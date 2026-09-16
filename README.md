# Sevengate Group - Corporate Website

Welcome to the official repository for the **Sevengate Group** corporate website

Sevengate Group is a premier organization pioneering excellence in energy, infrastructure, and natural resources across Africa. This platform serves as the digital front door to the company's operations across four primary sectors:
- **Oil & Gas**
- **Power**
- **Construction & Infrastructure**


##  Design Philosophy
The website is built with a highly curated, premium aesthetic referred to internally as the "Gucci/Luxury Minimalist" design language. 

Key design pillars include:
- **High-Contrast Minimalism:** Stark white (`bg-background`) or pure black (`bg-foreground`) canvases.
- **Editorial Typography:** Dramatic contrast between massive, thin display headings (using `font-display`) and tiny, highly-tracked uppercase accent text.
- **Sharp & Clean UI:** Avoidance of heavy drop shadows or rounded corners in favor of razor-thin `1px` borders and sharp-edged geometry.
- **Micro-interactions:** Smooth spring animations, rotating carets on accordions, and sophisticated image zoom effects on hover using `motion/react`.

##  Tech Stack

This project is a modern Single Page Application (SPA) built with cutting-edge web technologies:
- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Routing:** TanStack Router (File-based routing)
- **Styling:** TailwindCSS
- **Animations:** Motion (formerly Framer Motion)
- **Icons:** Hugeicons

##  Project Structure

The project utilizes TanStack Router's file-based routing architecture. 

```text
src/
├── assets/             # Static images, webp files, and illustrations
├── components/         
│   ├── site/           # Main layout components (Navbar, Footer, Hero, NavigationCards)
│   └── ui/             # Reusable UI primitives
├── routes/             # File-based routing pages
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Landing Page
│   ├── about/          # About Us and Leadership pages
│   ├── career/         # Careers portal with interactive filtering
│   ├── contact/        # Contact and inquiry forms
│   └── services/       # Sector-specific pages (Oil & Gas, Power, etc.)
└── index.css           # Global Tailwind utilities and base styles
```

##  Getting Started

To run this project locally, ensure you have **Node.js** installed, then follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be running locally at `http://localhost:8080` (or the port specified by Vite).

3. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a highly optimized static bundle in the `dist/` directory.

##  Key Features
- **Interactive Service Pages:** Deep dives into each operational sector featuring animated accordions detailing service offerings and strategic approaches.
- **Dynamic Careers Portal:** A fully functional client-side filtering system for job seekers, featuring a slide-over detailed view drawer for role exploration.
- **Responsive Navigation:** A seamlessly adapting navbar with deep-linked dropdowns and a robust 4-column footer containing exact office locations across Nigeria (Abuja, Lagos, Enugu).

## 📄 License
Copyright &copy; Sevengate Group. All rights reserved.
