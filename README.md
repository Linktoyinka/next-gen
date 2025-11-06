# 🚀 NextGen - Digital Agency Website

This repository contains the source code for the "NextGen" digital solutions agency website, a modern, professional portfolio and marketing site built with Next.js.

**Live Deployment:** [**https://next-gen-liart-iota.vercel.app/**](https://next-gen-liart-iota.vercel.app/)

![NexGen Website Screenshot](https://next-gen-liart-iota.vercel.app/images/website-shot.png)

## 📖 About The Project

**NextGen** is the front-end for a digital solutions agency with the slogan "Digital Solutions That Drive Success." The website serves as a portfolio to showcase the agency's services, previous work, and client testimonials.

Its primary goal is to attract new clients by presenting a professional online presence.

### ✨ Key Features

* **Service Listings:** Displays the agency's core services (Web Design, Mobile App Development, Web Development, Digital Marketing).
* **Portfolio Showcase:** A "Our Works" section detailing past projects, the technologies used, and team members.
* **Client Trust:** Features client testimonials, company metrics (e.g., projects completed, happy clients), and an FAQ section.
* **Modern UI:** Built with Next.js and `next/font` (Geist) for a fast, optimized, and responsive user experience.
* **Navigation:** A complete multi-page layout including `/services`, `/projects`, `/about`, `/blog`, and `/contact-us`.

### 📁 Project Structure
Here is an overview of the project's folder structure, reflecting the Next.js App Router and component organization.
````
next-gen/
├── app/
│   ├── (main)/           # Main route group with shared layout
│   │   ├── about/        # /about route
│   │   ├── blog/         # /blog route
│   │   ├── contact-us/   # /contact-us route
│   │   ├── projects/     # /projects route
│   │   ├── services/     # /services route
│   │   ├── layout.js     # Shared layout for (main) group
│   │   └── page.js       # Homepage component (/)
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
│
├── components/           # Reusable React components
│   ├── layout/           # Components like Header, Footer
│   ├── sections/         # Homepage sections (Hero, Services, etc.)
│   └── ui/               # General-purpose UI (Button, Card, etc.)
│
├── lib/                  # Utility functions, constants, etc.
│   └── data.js           # Static data (testimonials, services)
│
├── public/               # Static assets
│   ├── icons/
│   ├── images/
│   ├── logo/
│   └── works/
│
├── .gitignore            # Files to ignore in git
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
└── README.md             # This file
````

### 🛠️ Built With

* [**Next.js**](https://nextjs.org/) (using the App Router)
* [**React**](https://reactjs.org/)
* [**JavaScript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [**next/font (Geist)**](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 🏁 Getting Started

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Linktoyinka/next-gen.git
    cd next-gen
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create a production build and run the server:

```bash
npm run build
npm start
