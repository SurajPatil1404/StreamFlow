// Final Hero Polish - Suraj | April 25
// Updated by Suraj - Added hero banner and improved video grid responsiveness
// src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TrendingUp, Sparkles } from "lucide-react";
import { videos } from "../data/videos";
import VideoCard from "../components/VideoCard";
import CategoryFilter from "../components/CategoryFilter";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const urlCat = searchParams.get("cat") || "All";
  const [activeCategory, setActiveCategory] = useState(urlCat);

  useEffect(() => {
    setActiveCategory(urlCat);
  }, [urlCat]);

  const filtered = activeCategory === "All" || activeCategory === "trending"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  const sorted = activeCategory === "trending"
    ? [...filtered].sort((a, b) => b.viewCount - a.viewCount)
    : filtered;

  return (
    <div className="animate-fade-in">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/10 via-zinc-100 to-zinc-200 dark:from-brand-900/20 dark:via-zinc-900 dark:to-zinc-950 p-6 sm:p-10 mb-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #00d9a3 0%, transparent 60%), radial-gradient(circle at 80% 20%, #14b8a6 0%, transparent 50%)" }} />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={18} className="text-brand-400" />
            <span className="text-brand-400 text-sm font-semibold tracking-wide">SMART LEARNING</span>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
            Your personalized<br />video learning hub 🚀
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg">
            Curated programming, ML, and tech tutorials — with Focus Mode, Watch History, and Smart Recommendations.
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex gap-3 opacity-30">
          {[80, 56, 36].map((s, i) => (
            <div key={i} className="rounded-full border-2 border-brand-400/50" style={{ width: s, height: s }} />
          ))}
        </div>
      </div>

      {/* Category filter */}
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Section heading */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {activeCategory === "trending" && <TrendingUp size={18} className="text-brand-500" />}
          <h2 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100">
            {activeCategory === "All" ? "All Videos" : activeCategory === "trending" ? "Trending Now" : activeCategory}
          </h2>
          <span className="text-sm text-zinc-400">({sorted.length})</span>
        </div>
      </div>

      {/* Video grid */}
      {sorted.length === 0 ? (
        <div className="text-center py-20 text-zinc-400">
          <p className="text-5xl mb-4">🎬</p>
          <p className="text-lg font-medium">No videos in this category</p>
          <p className="text-sm mt-1">Try selecting a different category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map((video, i) => (
            <div key={video.id} style={{ animationDelay: `${i * 40}ms` }} className="animate-slide-up">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
