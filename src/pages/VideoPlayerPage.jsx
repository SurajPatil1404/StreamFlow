// src/pages/VideoPlayerPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ThumbsUp, ThumbsDown, Share2, Bookmark, Bell,
  Zap, ZapOff, ChevronDown, ChevronUp, Eye, Users,
} from "lucide-react";
import { getVideoById, getRecommendations } from "../data/videos";
import { useApp } from "../context/AppContext";
import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";

export default function VideoPlayerPage() {
  const { id } = useParams();
  const video = getVideoById(id);
  const recommendations = getRecommendations(video, 8);

  const { addToHistory, focusMode, toggleFocusMode, showNotification } = useApp();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [likes, setLikes] = useState(video?.likes || 0);

  // Add to history when video loads
  useEffect(() => {
    if (video) {
      addToHistory(video);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id]);

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-6xl mb-4">😕</span>
        <h2 className="text-xl font-bold mb-2">Video not found</h2>
        <Link to="/" className="mt-4 px-5 py-2.5 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-600 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleLike = () => {
    setLiked((l) => { setLikes((c) => l ? c - 1 : c + 1); return !l; });
  };
  const handleSave = () => { setSaved((s) => !s); showNotification(saved ? "Removed from saved" : "Saved to your library ✓"); };
  const handleShare = () => { navigator.clipboard?.writeText(window.location.href); showNotification("Link copied to clipboard!"); };
  const handleSubscribe = () => { setSubscribed((s) => !s); showNotification(subscribed ? "Unsubscribed" : `Subscribed to ${video.channel} 🔔`); };

  const formatLikes = (n) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n;

  return (
    <div className="animate-fade-in max-w-screen-2xl mx-auto">
      <div className={`flex gap-6 ${focusMode ? "flex-col items-center" : "flex-col xl:flex-row"}`}>

        {/* ── Left / Main ─────────────────────────────────────────────── */}
        <div className={focusMode ? "w-full max-w-4xl" : "flex-1 min-w-0"}>

          {/* Video Player */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe
              key={id}
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Title + Meta */}
          <div className="mt-4">
            {/* Category pill */}
            <span className="inline-block px-3 py-0.5 bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold rounded-full mb-2">
              {video.category}
            </span>

            <h1 className="font-display font-bold text-xl md:text-2xl text-zinc-900 dark:text-zinc-100 leading-tight">
              {video.title}
            </h1>

            <div className="flex items-center gap-3 mt-2 text-sm text-zinc-500 flex-wrap">
              <span className="flex items-center gap-1"><Eye size={14} /> {video.views} views</span>
              <span>•</span>
              <span>{video.uploadedAt}</span>
              <span>•</span>
              <div className="flex gap-1 flex-wrap">
                {video.tags.map((t) => (
                  <span key={t} className="text-brand-500 hover:text-brand-600 cursor-pointer">#{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {/* Like / Dislike */}
            <div className="flex items-center rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 divide-x divide-zinc-200 dark:divide-zinc-700">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${liked ? "bg-brand-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
              >
                <ThumbsUp size={16} /> {formatLikes(likes)}
              </button>
              <button className="px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <ThumbsDown size={16} />
              </button>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Share2 size={16} /> Share
            </button>

            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${saved ? "border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            >
              <Bookmark size={16} className={saved ? "fill-current" : ""} />
              {saved ? "Saved" : "Save"}
            </button>

            {/* Focus Mode toggle */}
            <button
              onClick={toggleFocusMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ml-auto ${focusMode ? "border-brand-500 bg-brand-500 text-white" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            >
              {focusMode ? <ZapOff size={16} /> : <Zap size={16} />}
              {focusMode ? "Exit Focus" : "Focus Mode"}
            </button>
          </div>

          {/* Channel info */}
          <div className="flex items-center justify-between mt-5 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50">
            <div className="flex items-center gap-3">
              <img
                src={video.channelAvatar}
                alt={video.channel}
                className="w-11 h-11 rounded-full ring-2 ring-brand-500/30"
              />
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{video.channel}</p>
                <p className="text-xs text-zinc-500 flex items-center gap-1">
                  <Users size={11} /> {video.subscribers} subscribers
                </p>
              </div>
            </div>
            <button
              onClick={handleSubscribe}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                subscribed
                  ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                  : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90"
              }`}
            >
              <Bell size={14} className={subscribed ? "fill-current" : ""} />
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          {/* Description */}
          <div className="mt-4 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50">
            <p className={`text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed ${!descExpanded ? "line-clamp-3" : ""}`}>
              {video.description}
            </p>
            <button
              onClick={() => setDescExpanded((e) => !e)}
              className="flex items-center gap-1 mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {descExpanded ? <><ChevronUp size={16} /> Show less</> : <><ChevronDown size={16} /> Show more</>}
            </button>
          </div>

          {/* Comments — hidden in Focus Mode */}
          {!focusMode && <CommentSection videoId={id} />}
        </div>

        {/* ── Right / Recommendations ──────────────────────────────────── */}
        {!focusMode && (
          <aside className="xl:w-96 shrink-0">
            <h3 className="font-display font-bold text-base mb-4 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
              <span className="w-1 h-5 bg-brand-500 rounded-full inline-block" />
              Smart Recommendations
            </h3>
            <div className="space-y-2">
              {recommendations.map((rec, i) => (
                <div key={rec.id} style={{ animationDelay: `${i * 50}ms` }} className="animate-slide-up">
                  <VideoCard video={rec} variant="list" />
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
