# ⚡ ARKNIGHTS: ENDFIELD // OPERATOR PORTFOLIO DOSSIER

<div align="center">

```
  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
```

**[ TALOS-II SECTOR // CLEARANCE LEVEL 4 // ARCHIVE VER 2.0.4 ]**

[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Endfield Aesthetic](https://img.shields.io/badge/Design_System-Arknights:_Endfield-edea46?style=for-the-badge&logoColor=black)](https://endfield.hypergryph.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[Live Demo](#) • [Report Bug](https://github.com/Hieuej147/porfolio-cv/issues) • [Request Feature](https://github.com/Hieuej147/porfolio-cv/issues)

</div>

---

## 📑 Overview

A modern, high-performance personal developer portfolio engineered with **React 19**, **Vite 7**, and **Tailwind CSS v4**. 

The entire visual system is inspired by the **Arknights: Endfield (明日方舟：终末地)** industrial sci-fi aesthetic: tactical HUDs, CAD blueprint grids, chamfered polygon clip corners, discrete 10-segment telemetry gauges, high-contrast hazard yellow accents (`#edea46`), and barcode typography.

---

## 🎯 Key Highlights & Features

- **Tactical Command Navigation (`Navbar.jsx`)**:
  - Live UTC+7 Military Clock (`HH:MM:SS [UTC+7]`) with 1-second interval telemetry.
  - Chamfered clip-path tabs with active tactical badges (`01 // ABOUT`, `02 // SKILLS`, etc.).
  - Mobile HUD Drawer with backdrop blur and corner crosshairs.
- **Hero Operational Terminal (`Herosection.jsx`)**:
  - Multi-line TypeAnimation terminal prompt running dynamic engineering specializations.
  - Background typographic watermarks (`PORTFOLIO / ARCHIVES / DESIGN`).
  - Real-time System Telemetry card with FPS radar, memory allocation, and reactor status.
  - Direct call-to-action triggers linking to projects and comms dispatch.
- **Personnel Dossier (`AboutMe.jsx`)**:
  - Holographic Operator photo slot with tactical clip tags and diagonal caution stripes.
  - Personnel metadata console (Clearance Level, Operational Division, Base Location).
  - 3 Core Specialization Modules: *Full-Stack Architecture*, *Distributed Microservices*, and *Autonomous AI Workflows*.
- **Capability Matrix (`SkillsSection.jsx`)**:
  - Category filters: `ALL MODULES`, `FRONTEND`, `BACKEND`, `DEV TOOLS`.
  - Discrete **10-segment tactical LED progress bars** reflecting mastery levels.
  - Authentic high-contrast brand icons (React, Next.js, TypeScript, NestJS, Node.js, Express, Docker, PostgreSQL, VS Code, etc.).
  - Recessed tactical slot containers (`clip-corner-sm`) with neon-yellow border hover reactions.
- **Field Operations Dossiers (`ProjectsSection.jsx`)**:
  - Production-ready projects featuring live preview external links & repository links.
  - Tactical barcode identifiers (`*PROJ-END-001*`) and interactive scanline effects.
  - Global GitHub hub banner for browsing external repositories.
- **Encrypted Comm-Link Terminal (`ContactSection.jsx`)**:
  - Direct transmission channels (Email, Phone, Location, GitHub).
  - Working **EmailJS** integration with loading indicators, instant feedback states, and automated form reset.
  - Real-time transmission status badge with simulated SHA-256 / AES-GCM telemetry.
- **Dual Combat Theme Protocol (`ThemeToggle.jsx`)**:
  - Instant transition between **CAD LIGHT** (tactical technical blueprint) and **NIGHT OPS** (deep-space command station).
  - Persistent storage in `localStorage` with synchronized DOM class mutations.

---

## 🎨 Design System & Visual Tokens

The user interface follows the design tokens extracted from Figma Arknights: Endfield style:

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| **Hazard Yellow (Accent)** | `#edea46` | Primary action buttons, active tabs, telemetry LEDs |
| **Deep Carbon (Background Dark)**| `#121212` / `#000000` | Night Ops primary viewport background |
| **CAD Slate (Background Light)** | `#f5f6f8` / `#eeeeee` | CAD Blueprint daylight background |
| **Tactical Neutral** | `#929292` | Sub-labels, technical telemetry annotations |
| **Polygon Chamfers** | `clip-corner`, `clip-corner-sm` | Angular cutaway corners replacing rounded borders |
| **Shadow System** | `shadow-tactical`, `shadow-tactical-accent` | 0-blur hard offset industrial drop shadows |
| **Typography** | `Unbounded`, `Montserrat`, `JetBrains Mono`, `Libre Barcode 128` | Technical display headings and barcode readouts |

---

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Tooling
- **[React 19.1](https://react.dev/)**: Latest React runtime utilizing high-performance concurrent features.
- **[Vite 7.1](https://vitejs.dev/)**: Ultra-fast Next-Gen Frontend Tooling with instant Hot Module Replacement.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Cutting-edge CSS engine with native `@theme` directives and custom utility classes.

### Animation & UI Icons
- **[Framer Motion 12](https://www.framer.com/motion/)**: GPU-accelerated stagger containers, card transitions, and HUD overlays.
- **[Lucide React](https://lucide.dev/)**: Crisp, consistent tactical iconography.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Official brand SVG vectors (`SiNextdotjs`, `SiExpress`, `VscVscode`, `FaReact`, `SiNestjs`, etc.).
- **[React Type Animation](https://github.com/maxmarinich/react-type-animation)**: Smooth typing simulator for terminal text.

### Services & Utilities
- **[@emailjs/browser](https://www.emailjs.com/)**: Client-side encrypted email dispatching.
- **clsx** & **tailwind-merge**: Dynamic conditional class utility helper.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x` or higher (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hieuej147/porfolio-cv.git
   cd porfolio-cv
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` or `.env.local` file in the root directory and add your **EmailJS** credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to inspect the tactical HUD.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with HMR |
| `npm run build` | Compiles production bundle with tree-shaking and minification into `dist/` |
| `npm run lint` | Runs ESLint analysis across codebase |
| `npm run preview` | Spins up local HTTP server to preview the production build |

---

## 📂 Project Directory Structure

```text
porfolio-hieu/
├── public/
│   ├── favicon.svg             # Endfield yellow tactical favicon
│   └── hieudev.jpg             # Operator avatar profile photo
├── src/
│   ├── components/
│   │   ├── AboutMe.jsx         # 01 // Personnel Dossier & Specializations
│   │   ├── ContactSection.jsx  # 04 // Comm-Link Terminal & EmailJS Form
│   │   ├── Footer.jsx          # Mission Complete & Barcode Outro
│   │   ├── Herosection.jsx     # Terminal Prompt & Telemetry HUD
│   │   ├── Narbar.jsx          # Tactical Header & Real-time UTC+7 Clock
│   │   ├── ProjectsSection.jsx # 03 // Operational Records & Live Dossiers
│   │   ├── SkillsSection.jsx   # 02 // Capability Matrix & 10-Segment Gauges
│   │   ├── StartBackground.jsx # CAD Grid Matrix & Parallax Coordinates
│   │   └── ThemeToggle.jsx     # CAD LIGHT / NIGHT OPS Switcher
│   ├── lib/
│   │   └── utils.js            # cn() classnames helper
│   ├── App.jsx                 # Root layout container
│   ├── index.css               # Endfield design tokens, clip-corners & hazard stripes
│   └── main.jsx                # React root bootstrap
├── index.html                  # Google Fonts loader & SEO metadata
├── vite.config.js              # Vite configuration & path aliases (@)
├── eslint.config.js            # Strict ESLint configuration
└── package.json                # Project dependencies and run scripts
```

---

## 🌐 Deployment

The project can be deployed seamlessly to any static hosting provider:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables (`VITE_EMAILJS_*`) under **Site configuration > Environment variables**.

---

## 👤 Operator Profile

- **Callsign**: **Hieu Tran** (Operator Hieu)
- **Role**: Full-Stack Engineer & AI Architect
- **Location**: An Giang, Vietnam (UTC+7)
- **Email**: [hihigani@gmail.com](mailto:hihigani@gmail.com)
- **GitHub**: [@Hieuej147](https://github.com/Hieuej147)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Inspired by the visual aesthetic of **Arknights: Endfield** © Hypergryph / Mountain Contour.
