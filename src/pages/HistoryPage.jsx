// Updated by Onkar - Added analytics dashboard and streak heatmap
// src/pages/HistoryPage.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  History, Trash2, Clock, BarChart2, TrendingUp,
  BookOpen, Award, Calendar,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import VideoCard from "../components/VideoCard";

// ── Small stat card ────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color = "brand" }) {
  const colors = {
    brand:  "from-brand-500/10 to-teal-500/10 border-brand-500/20 text-brand-600 dark:text-brand-400",
    amber:  "from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
    purple: "from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
    rose:   "from-rose-500/10 to-pink-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",
  };
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${colors[color]} border p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-md`}>
      <div className="p-2.5 rounded-xl bg-white/60 dark:bg-zinc-800/60">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ── Category bar ───────────────────────────────────────────────────────────
function CategoryBar({ category, count, max }) {
  const pct = Math.round((count / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-600 dark:text-zinc-400 w-32 truncate">{category}</span>
      <div className="flex-1 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-teal-400 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-zinc-400 w-6 text-right">{count}</span>
    </div>
  );
}

export default function HistoryPage() {
  const { watchHistory, clearHistory } = useApp();

  // ── Analytics ──────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const totalMinutes = watchHistory.reduce((s, v) => s + (v.watchDuration || 0), 0);
    const categoryMap = watchHistory.reduce((acc, v) => {
      acc[v.category] = (acc[v.category] || 0) + 1;
      return acc;
    }, {});
    const topCategory = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
    const uniqueChannels = new Set(watchHistory.map((v) => v.channel)).size;
    const maxCount = Math.max(...Object.values(categoryMap), 1);
    return { totalMinutes, topCategory, uniqueChannels, categoryMap, maxCount };
  }, [watchHistory]);

  // Group by date
  const grouped = useMemo(() => {
    const groups = {};
    watchHistory.forEach((v) => {
      const date = v.watchedAt
        ? new Date(v.watchedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
        : "Recently";
      if (!groups[date]) groups[date] = [];
      groups[date].push(v);
    });
    return groups;
  }, [watchHistory]);

  return (
    <div className="animate-fade-in max-w-screen-xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-brand-500/10">
            <History size={22} className="text-brand-500" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-100">Watch History</h1>
            <p className="text-sm text-zinc-500">{watchHistory.length} videos watched</p>
          </div>
        </div>
        {watchHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-red-500 border border-red-200 dark:border-red-900/40 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 size={15} /> Clear History
          </button>
        )}
      </div>

      {watchHistory.length === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
            <History size={36} className="text-zinc-400" />
          </div>
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">No watch history yet</h2>
          <p className="text-zinc-500 text-sm mb-6 max-w-xs">
            Start watching videos and they'll appear here with personalized analytics.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-600 transition-colors"
          >
            Explore Videos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* ── Left: Video history ──────────────────────────────────── */}
          <div className="xl:col-span-2 space-y-8">
            {Object.entries(grouped).map(([date, vids]) => (
              <div key={date}>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-zinc-400" />
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{date}</span>
                  <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vids.map((v) => (
                    <div key={`${v.id}-${v.watchedAt}`} className="relative">
                      <VideoCard video={v} />
                      {/* Watch duration badge */}
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                        ⏱ {v.watchDuration}m watched
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Analytics dashboard ───────────────────────────── */}
          <div className="space-y-5">

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              <StatCard icon={Clock}    label="Minutes watched"    value={stats.totalMinutes}   color="brand" />
              <StatCard icon={BookOpen} label="Videos watched"     value={watchHistory.length}  color="amber" />
              <StatCard icon={Award}    label="Top category"       value={stats.topCategory}    color="purple" />
              <StatCard icon={TrendingUp} label="Channels explored" value={stats.uniqueChannels} color="rose" />
            </div>

            {/* Category breakdown */}
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 size={16} className="text-brand-500" />
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Category Breakdown</h3>
              </div>
              <div className="space-y-3">
                {Object.entries(stats.categoryMap)
                  .sort((a, b) => b[1] - a[1])
                  .map(([cat, count]) => (
                    <CategoryBar key={cat} category={cat} count={count} max={stats.maxCount} />
                  ))}
              </div>
            </div>

            {/* Learning streak */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-500/10 to-teal-500/5 border border-brand-500/20">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                🔥 Learning Streak
              </h3>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => {
                  const hasActivity = watchHistory.some((v) => {
                    const d = new Date(v.watchedAt);
                    const target = new Date();
                    target.setDate(target.getDate() - (27 - i));
                    return d.toDateString() === target.toDateString();
                  });
                  return (
                    <div
                      key={i}
                      title={`Day ${i + 1}`}
                      className={`aspect-square rounded-sm ${
                        hasActivity
                          ? "bg-brand-500"
                          : "bg-zinc-200 dark:bg-zinc-700"
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-xs text-zinc-500 mt-2">Last 4 weeks activity</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
