// Refactored by Prithviraj - Integrated Navbar + Sidebar wrapper
// src/components/Layout.jsx
import React from "react";
import { useApp } from "../context/AppContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { sidebarOpen, focusMode } = useApp();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-body transition-colors duration-300">
      {/* Navbar always visible */}
      <Navbar />

      <div className="flex pt-16">
        {/* Sidebar — hidden in focus mode */}
        {!focusMode && <Sidebar />}

        {/* Main content area */}
        <main
          className={`flex-1 min-h-screen transition-all duration-300 ${
            !focusMode && sidebarOpen ? "md:ml-60" : ""
          }`}
        >
          <div className="p-4 md:p-6 animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}
