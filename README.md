# 🎬 StreamFlow — Smart Video Learning Platform

<div align="center">

![StreamFlow](https://img.shields.io/badge/StreamFlow-Smart%20Video%20Learning-00d9a3?style=for-the-badge&logo=youtube&logoColor=white)

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=flat-square&logo=reactrouter)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://stream-flow-jet.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**A YouTube-inspired smart video learning platform with Focus Mode, Watch History Analytics, and Smart Recommendations.**

### 🚀 [Live Demo → https://stream-flow-jet.vercel.app/](https://stream-flow-jet.vercel.app/)

</div>

---

## 👨‍💻 Team

| Member | Role | Branch | GitHub |
|---|---|---|---|
| **Suraj Patil** | Pages & Routing Lead | `feat/suraj-pages` | [@SurajPatil1404](https://github.com/SurajPatil1404) |
| **Prithviraj** | UI Components Lead | `feat/prithviraj-ui` | [@prithviraj-1657](https://github.com/prithviraj-1657) |
| **Onkar** | Data & Context Lead | `feat/onkar-data` | [@onkarswamii](https://github.com/onkarswamii) |

---

## 📌 Table of Contents

- [About](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Pages Overview](#-pages-overview)
- [Deployment](#-deployment)
- [Git Workflow](#-git-workflow)
- [Viva Preparation](#-viva-preparation)
- [Future Scope](#-future-scope)

---

## 🧠 About the Project

### Problem Statement
> Students and self-learners using YouTube face constant distractions — ads, irrelevant recommendations, comment rabbit holes, and no way to track their actual learning progress.

### Our Solution
**StreamFlow** is a productivity-first video learning platform that solves this by offering:
- A clean, distraction-free interface
- **Focus Mode** that hides all distractions with one click
- A **Watch History Dashboard** with real learning analytics
- **Smart Recommendations** based on content similarity
- Persistent **Dark/Light Mode** for comfortable long study sessions

---

## 🌐 Live Demo

> **Deployed on Vercel — No installation needed!**

| | |
|---|---|
| 🔗 **Live URL** | [https://stream-flow-jet.vercel.app/](https://stream-flow-jet.vercel.app/) |
| 📦 **Repository** | [https://github.com/SurajPatil1404/StreamFlow](https://github.com/SurajPatil1404/StreamFlow) |

---

## ✨ Features

### 🔵 Core Features
| Feature | Description |
|---|---|
| 🏠 **Homepage Feed** | Responsive video grid with thumbnails, channel info, views, and category tags |
| ▶️ **Video Player** | Real YouTube embedded player with like, save, share, and subscribe actions |
| 💬 **Comments System** | Add, view, like, and dislike comments with expandable thread |
| 🔍 **Search** | Real-time filtering by title, channel, category, tags, and description |
| 📂 **Sidebar** | Category navigation with smooth active state animations |
| 🔔 **Notifications** | Toast notifications for user actions (saved, subscribed, copied) |

### 🟢 Advanced / Unique Features
| Feature | Description |
|---|---|
| ⚡ **Focus Mode** | One click hides sidebar, comments, and recommendations — zero distractions |
| 📊 **Watch History Dashboard** | Stat cards, category breakdown bar chart, and 28-day learning streak heatmap |
| 🤖 **Smart Recommendations** | Tag + category scoring algorithm surfaces the most relevant next videos |
| 🌙 **Dark / Light Mode** | Instant theme toggle persisted to `localStorage` |
| 🗂️ **Category Filter** | Horizontally scrollable filter chips on the homepage |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.2 | UI library — functional components only |
| **Vite** | 5.1 | Lightning-fast dev server and build tool |
| **React Router DOM** | 6.22 | Client-side routing and navigation |
| **Tailwind CSS** | 3.4 | Utility-first styling with dark mode support |
| **Context API** | built-in | Global state (theme, history, focus mode, notifications) |
| **React Hooks** | built-in | useState, useEffect, useContext, useCallback, useMemo, useRef |
| **Lucide React** | 0.363 | Icon library |
| **Vercel** | — | Deployment and hosting |

---

## 📁 Folder Structure

```
streamflow/
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx              # Main layout wrapper (Navbar + Sidebar + content)
│   │   ├── Navbar.jsx              # Top bar: logo, search, theme toggle, focus mode
│   │   ├── Sidebar.jsx             # Left sidebar: nav links + category list
│   │   ├── VideoCard.jsx           # Video card (grid variant + list variant)
│   │   ├── CommentSection.jsx      # Comments: add, view, like, dislike
│   │   ├── CategoryFilter.jsx      # Scrollable category chips
│   │   └── Notification.jsx        # Toast notification component
│   │
│   ├── pages/
│   │   ├── HomePage.jsx            # / → hero + category filter + video grid
│   │   ├── VideoPlayerPage.jsx     # /watch/:id → player + actions + recommendations
│   │   ├── HistoryPage.jsx         # /history → dashboard + analytics + streak
│   │   └── SearchPage.jsx          # /search?q= → results + trending suggestions
│   │
│   ├── context/
│   │   └── AppContext.jsx          # Global state provider + useApp() hook
│   │
│   ├── data/
│   │   └── videos.js               # 12 static videos + helper functions
│   │
│   ├── App.jsx                     # Route definitions
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Tailwind directives + custom styles
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 🌐 Option 1 — Use Live Demo (Easiest)
Visit directly → **[https://stream-flow-jet.vercel.app/](https://stream-flow-jet.vercel.app/)**
No installation needed!

### 💻 Option 2 — Run Locally

#### Prerequisites
- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **Git** → [git-scm.com](https://git-scm.com)

#### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/SurajPatil1404/StreamFlow.git

# 2. Navigate into the project
cd StreamFlow

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open your browser → **http://localhost:5173**

#### Production Build

```bash
npm run build
npm run preview
```

---

## 📸 Pages Overview

### 🏠 Home Page — `/`
Hero banner with gradient design + horizontally scrollable category filter chips + responsive video grid (1 → 2 → 3 → 4 columns). Each card shows thumbnail, duration badge, category tag, title, channel avatar, views, and upload date.

### ▶️ Video Player — `/watch/:id`
Real YouTube embedded player with autoplay + like, dislike, share, save, subscribe buttons + Focus Mode toggle + expandable video description + Smart Recommendations sidebar + full comments section.

### 📊 Watch History — `/history`
Stat cards (total minutes watched, videos watched, top category, channels explored) + category breakdown bar chart + 28-day learning streak heatmap + clear history button.

### 🔍 Search — `/search?q=...`
Filters across title, channel, category, tags, and description + related category chips + trending search suggestions when query is empty.

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

| Environment | URL |
|---|---|
| 🟢 **Production** | [https://stream-flow-jet.vercel.app/](https://stream-flow-jet.vercel.app/) |

### How We Deployed
1. Pushed final code to GitHub `main` branch
2. Connected GitHub repository to Vercel
3. Vercel auto-detected Vite + React configuration
4. Build command: `npm run build`
5. Output directory: `dist`
6. Auto-deploys on every push to `main` ✅

---

## 🌿 Git Workflow

```
main
 ├── feat/suraj-pages       ← Suraj Patil
 ├── feat/prithviraj-ui     ← Prithviraj
 └── feat/onkar-data        ← Onkar
```

**Rules followed:**
- ❌ No direct pushes to `main`
- ✅ Each member worked on their own feature branch
- ✅ Pull Requests used to merge into `main`
- ✅ Each member committed every day (April 18–24)
- ✅ Project deployed live on Vercel

---

## 🎓 Viva Preparation

### ❓ Q1: What problem does StreamFlow solve?
> YouTube is built for entertainment, not focused learning. It bombards users with ads, autoplay, and irrelevant recommendations. StreamFlow provides a distraction-free environment with Focus Mode, Watch History analytics, and study-relevant smart recommendations.

### ❓ Q2: How does Focus Mode work?
> A `focusMode` boolean is stored in `AppContext`. When toggled, components conditionally render based on this flag — `{!focusMode && <Sidebar />}`. One click hides the sidebar, comments section, and recommendations panel completely.

### ❓ Q3: How does Smart Recommendations work?
> `getRecommendations()` scores every other video: +1 for each matching tag, +2 if the category matches. Videos are sorted by score descending and top 8 are shown.
```js
const score = sharedTags.length + (sameCategory ? 2 : 0);
```

### ❓ Q4: How is Watch History stored?
> `addToHistory(video)` is called in `useEffect` when VideoPlayerPage mounts. Data saves to `localStorage` via `JSON.stringify`. HistoryPage uses `useMemo` to compute analytics (total watch time, top category, unique channels) from the history array.

### ❓ Q5: What React hooks did you use?

| Hook | Where Used |
|---|---|
| `useState` | Comments, likes, form inputs, local UI toggles |
| `useEffect` | History on page load, dark class sync to DOM |
| `useContext` | `useApp()` consumed by every component |
| `useCallback` | `addToHistory` to prevent unnecessary re-renders |
| `useMemo` | Analytics in HistoryPage, search filtering in SearchPage |
| `useRef` | Category filter scroll container |
| `useParams` | Get `:id` from URL in VideoPlayerPage |
| `useSearchParams` | Read `?q=` query from URL in SearchPage |

### ❓ Q6: Why Context API instead of prop drilling?
> Global state like `darkMode`, `watchHistory`, and `focusMode` is needed by many unrelated components across the tree. Without Context, we'd pass props through 4-5 levels of components making code messy and hard to maintain. Context API provides a clean single source of truth accessible anywhere in the app without passing props manually.

### ❓ Q7: What is the folder structure and why?
> We separated code into `components/` (reusable UI), `pages/` (one per route), `context/` (global state), and `data/` (static data). This follows the separation of concerns principle — each folder has one clear responsibility, making the codebase easy to navigate and maintain.

### ❓ Q8: How did your team collaborate?
> We used Git Feature Branch Workflow. Each member had their own branch — Suraj owned pages, Prithviraj owned UI components, and Onkar owned data and context. We committed daily and merged via Pull Requests. The project is deployed live on Vercel at stream-flow-jet.vercel.app.

### ❓ Q9: What makes StreamFlow different from YouTube?
> Three key differences:
> 1. **Focus Mode** — removes all distractions instantly
> 2. **Learning Analytics** — tracks watch time, categories, and streak
> 3. **Smart Recommendations** — based on content similarity not engagement bait

---

## 🔮 Future Scope

1. **User Authentication** — Login/signup with JWT tokens and personalized profiles
2. **Real Backend** — Node.js + Express + MongoDB replacing static data
3. **Video Upload** — Allow creators to upload and host their own content
4. **AI Summaries** — OpenAI API for auto-generated timestamps and key takeaways
5. **Spaced Repetition** — Smart reminders to re-watch based on forgetting curves
6. **Study Rooms** — Real-time collaborative viewing with live chat
7. **PWA Support** — Offline mode with service workers
8. **Accessibility** — Full WCAG 2.1 compliance and keyboard navigation

---

## 📄 License

Licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ by **Team StreamFlow**

**Newton School of Technology — Pune | College Project 2026**

[Suraj Patil](https://github.com/SurajPatil1404) · [Prithviraj Ghorpade](https://github.com/prithviraj-1657) · [Onkar Swami](https://github.com/onkarswamii)

🚀 **[View Live Project](https://stream-flow-jet.vercel.app/)**

</div>
