// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu, Search, Moon, Sun, Zap, ZapOff, Bell, History, Home, X,
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode, toggleSidebar, focusMode, toggleFocusMode, searchQuery, setSearchQuery } = useApp();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch.trim());
      navigate(`/search?q=${encodeURIComponent(localSearch.trim())}`);
    }
  };

  const clearSearch = () => {
    setLocalSearch("");
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 glass border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center h-full px-4 gap-4">
        {/* Left — hamburger + logo */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <Link to="/" className="flex items-center gap-2 select-none shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-400 to-teal-500 flex items-center justify-center shadow-md">
              <span className="text-white font-display font-bold text-sm">SF</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Stream<span className="gradient-text">Flow</span>
            </span>
          </Link>
        </div>

        {/* Centre — search bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-xl mx-auto"
        >
          <div className="relative flex items-center group">
            <Search
              size={16}
              className="absolute left-3 text-zinc-400 pointer-events-none group-focus-within:text-brand-500 transition-colors"
            />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search videos, topics, channels..."
              className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-zinc-900 outline-none text-sm transition-all duration-200 placeholder:text-zinc-400"
            />
            {localSearch && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </form>

        {/* Right — action buttons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Focus Mode */}
          <button
            onClick={toggleFocusMode}
            title={focusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
            className={`p-2 rounded-xl transition-all duration-200 ${
              focusMode
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            }`}
          >
            {focusMode ? <ZapOff size={18} /> : <Zap size={18} />}
          </button>

          {/* Dark / Light */}
          <button
            onClick={toggleDarkMode}
            title="Toggle theme"
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* History shortcut */}
          <Link
            to="/history"
            title="Watch History"
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors hidden sm:flex"
          >
            <History size={18} />
          </Link>

          {/* Home shortcut */}
          <Link
            to="/"
            title="Home"
            className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors hidden sm:flex"
          >
            <Home size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
