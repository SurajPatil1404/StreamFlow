// src/pages/SearchPage.jsx
import React, { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, TrendingUp } from "lucide-react";
import { videos } from "../data/videos";
import VideoCard from "../components/VideoCard";
import { useApp } from "../context/AppContext";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { setSearchQuery } = useApp();

  // Update context on mount
  React.useEffect(() => { setSearchQuery(query); }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return videos;
    const q = query.toLowerCase();
    return videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        v.tags.some((t) => t.includes(q)) ||
        v.description.toLowerCase().includes(q)
    );
  }, [query]);

  // Related categories from results
  const relatedCategories = [...new Set(results.map((v) => v.category))];

  return (
    <div className="animate-fade-in max-w-screen-xl mx-auto">

      {/* Search header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
          <Search size={14} />
          <span>Search results for</span>
        </div>
        <h1 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-100">
          "{query}"
        </h1>
        <p className="text-sm text-zinc-500 mt-1">{results.length} result{results.length !== 1 ? "s" : ""} found</p>
      </div>

      {/* Related categories */}
      {relatedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {relatedCategories.map((cat) => (
            <Link
              key={cat}
              to={`/?cat=${cat}`}
              className="px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 hover:bg-brand-500/20 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">No results found</h2>
          <p className="text-zinc-500 text-sm mb-6 max-w-xs">
            We couldn't find anything for "{query}". Try different keywords or browse by category.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-600 transition-colors"
          >
            Browse All Videos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {results.map((video, i) => (
            <div key={video.id} style={{ animationDelay: `${i * 40}ms` }} className="animate-slide-up">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      )}

      {/* Trending suggestions if no query */}
      {!query && (
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} className="text-brand-500" />
            <h2 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["React hooks", "Machine learning", "System design", "Python basics", "Docker tutorial", "JavaScript ES6", "Data science", "Git tutorial"].map((term) => (
              <Link
                key={term}
                to={`/search?q=${encodeURIComponent(term)}`}
                className="px-4 py-2 rounded-full text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
              >
                🔥 {term}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
