// Final polish by Prithviraj - Improved sidebar animations and mobile responsiveness
// Enhanced by Prithviraj - Added navigation links and category list
// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, History, Flame, BookOpen, Code, Brain,
  Server, Database, Cpu, GitBranch, Layers,
} from "lucide-react";
import { useApp } from "../context/AppContext";

const NAV_LINKS = [
  { icon: Home,    label: "Home",          path: "/" },
  { icon: Flame,   label: "Trending",      path: "/?cat=trending" },
  { icon: History, label: "Watch History", path: "/history" },
];

const CATEGORIES = [
  { icon: Code,     label: "React",          path: "/?cat=React" },
  { icon: BookOpen, label: "JavaScript",     path: "/?cat=JavaScript" },
  { icon: Brain,    label: "Machine Learning",path: "/?cat=Machine+Learning" },
  { icon: Database, label: "Data Science",   path: "/?cat=Data+Science" },
  { icon: Server,   label: "DevOps",         path: "/?cat=DevOps" },
  { icon: Cpu,      label: "Algorithms",     path: "/?cat=Algorithms" },
  { icon: Layers,   label: "System Design",  path: "/?cat=System+Design" },
  { icon: GitBranch,label: "Web Dev",        path: "/?cat=Web+Dev" },
  { icon: BookOpen, label: "Python",         path: "/?cat=Python" },
];

export default function Sidebar() {
  const { sidebarOpen } = useApp();
  const location = useLocation();

  if (!sidebarOpen) return null;

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" && !location.search;
    return location.pathname + location.search === path;
  };

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col overflow-y-auto no-scrollbar z-40 transition-all duration-300 animate-slide-up hidden md:flex">
      {/* Main Nav */}
      <nav className="p-3 space-y-1">
        {NAV_LINKS.map(({ icon: Icon, label, path }) => (
          <Link
            key={label}
            to={path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
              isActive(path)
                ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <Icon size={18} className={isActive(path) ? "text-brand-500" : "group-hover:scale-110 transition-transform"} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mx-3 my-1 border-t border-zinc-200 dark:border-zinc-800" />

      {/* Categories */}
      <div className="p-3">
        <p className="px-3 py-1 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
          Categories
        </p>
        <div className="space-y-1">
          {CATEGORIES.map(({ icon: Icon, label, path }) => (
            <Link
              key={label}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 group ${
                location.search === `?cat=${encodeURIComponent(label)}`
                  ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                  : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4">
        <div className="rounded-xl bg-gradient-to-br from-brand-500/20 to-teal-500/10 border border-brand-500/20 p-3 text-center">
          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">StreamFlow Pro</p>
          <p className="text-xs text-zinc-500 mt-0.5">Ad-free · Offline · HD</p>
          <button className="mt-2 w-full py-1.5 rounded-lg bg-brand-500 text-white text-xs font-semibold hover:bg-brand-600 transition-colors">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
