// Enhanced by Onkar - Added focusMode and darkMode state management
// src/context/AppContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // ── Theme ──────────────────────────────────────────────────────────────────
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("sf_dark");
    return saved !== null ? JSON.parse(saved) : true; // default dark
  });

  useEffect(() => {
    localStorage.setItem("sf_dark", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  // ── Sidebar ────────────────────────────────────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((s) => !s);

  // ── Focus Mode ─────────────────────────────────────────────────────────────
  const [focusMode, setFocusMode] = useState(false);
  const toggleFocusMode = () => setFocusMode((f) => !f);

  // ── Watch History ──────────────────────────────────────────────────────────
  const [watchHistory, setWatchHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sf_history") || "[]");
    } catch {
      return [];
    }
  });

  const addToHistory = useCallback((video) => {
    setWatchHistory((prev) => {
      const filtered = prev.filter((v) => v.id !== video.id);
      const entry = { ...video, watchedAt: new Date().toISOString(), watchDuration: Math.floor(Math.random() * 40) + 5 };
      const updated = [entry, ...filtered].slice(0, 50);
      localStorage.setItem("sf_history", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = () => {
    setWatchHistory([]);
    localStorage.removeItem("sf_history");
  };

  // ── Search ─────────────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState("");

  // ── Notifications ──────────────────────────────────────────────────────────
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode, toggleDarkMode,
        sidebarOpen, toggleSidebar, setSidebarOpen,
        focusMode, toggleFocusMode,
        watchHistory, addToHistory, clearHistory,
        searchQuery, setSearchQuery,
        notification, showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
