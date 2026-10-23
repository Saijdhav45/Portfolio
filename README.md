# Sainath Jadhav — Professional Developer Portfolio & Freelance Website

A high-performance, dark-themed personal portfolio and freelance business website designed for **Sainath Jadhav** (Java Backend Developer | Spring Boot & Microservices | AI Integration).

Built using **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, engineered for high lighthouse scores, conversion-focused credibility, and frictionless public deployment to **Vercel** or **Render**.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript (strict typing)
- **Styling**: Tailwind CSS v4 + Custom Design Tokens (Subtle glassmorphism, technical dark grid motif)
- **Icons**: Lucide React + Clean Branded SVGs (GitHub, LinkedIn)
- **Animations**: Framer Motion & CSS hardware-accelerated transitions
- **Deployment**: Vercel ready (`vercel.json` included with clean URLs and security headers)
- **Code Quality**: Oxlint & TypeScript compilation (`tsc -b`) passing with 0 errors/warnings

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or later, tested with Node v24)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Saijdhav45/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Linting & Production Build
```bash
# Run linter
npm run lint

# Compile TypeScript and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Configuration: Centralized Data File

All portfolio content, project case studies, skill categories, and social links are centralized in a single typed configuration file:
📍 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

### Personal Details & Placeholders Checklist
Search for `[CONFIGURABLE` inside `src/data/portfolioData.ts` to update:
1. **Email Address**: Set `personal.email` to your active inquiry email.
2. **LinkedIn Profile**: Set `personal.linkedin` to your official LinkedIn URL.
3. **Resume File**: Place your PDF resume in [`public/resume.pdf`](./public/) or configure `personal.resumeUrl`.
4. **Availability Status**: Set `personal.isAvailableForFreelance` (`true` or `false`) to control the live availability badge in the Hero section.
5. **Project Repositories**: Update `githubUrl` under each project in `projects[]` when repos are published or made public.

---

## 🚢 Deploying to Vercel (Recommended)

### Step 1: Push Code to GitHub
1. Create a new repository on [GitHub](https://github.com/new) named `Portfolio` (or `sainath-portfolio`).
2. Run the following commands in your project folder:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Saijdhav45/Portfolio.git
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Connect your GitHub account and select your `Portfolio` repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your site will be live within ~45 seconds with global CDN and automated SSL!

### Step 3: Custom Domain (Optional)
In your Vercel Project Dashboard:
- Go to **Settings** > **Domains**.
- Enter your domain (e.g., `sainathjadhav.dev`).
- Add the CNAME / A records provided by Vercel to your DNS provider.

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg       # Custom developer SVG mark
│   ├── robots.txt        # Search engine crawl directives
│   └── sitemap.xml       # Search engine indexing
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky header with mobile drawer & theme toggle
│   │   ├── Footer.tsx      # Clean closing bar with copyright & socials
│   │   └── SocialIcons.tsx # High-contrast SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.ts # Centralized source of truth
│   ├── sections/
│   │   ├── Hero.tsx        # High-impact introduction & code architecture card
│   │   ├── About.tsx       # Philosophy, backend credibility, value props
│   │   ├── Skills.tsx      # Interactive categorized capability matrix
│   │   ├── Projects.tsx    # Case studies with expandable architecture blueprints
│   │   ├── Services.tsx    # 5 Freelance service offerings & deliverables
│   │   ├── Workflow.tsx    # 4-stage transparent development process
│   │   └── Contact.tsx     # Validated form + 1-click email copy & mailto fallback
│   ├── App.tsx             # Root component with theme state
│   ├── index.css           # Tailwind CSS imports & custom grid patterns
│   └── main.tsx            # React root mount
├── vercel.json             # Vercel SPA routing and security headers
├── .env.example            # Environment configuration template
└── vite.config.ts          # Vite configuration with Tailwind CSS plugin
```

---

## 🔒 Security & Privacy Notice
- No API keys or private credentials are embedded in this client codebase.
- The contact form utilizes client-side validation and genuine `mailto:` client drafts, preventing missing webhook failures or leaked backend endpoints.
