// Enhanced by Prithviraj - Improved hover effects and responsivenesshe
// Updated by Prithviraj - Added grid/list variants support
// src/components/VideoCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Clock, MoreVertical } from "lucide-react";

export default function VideoCard({ video, variant = "grid" }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (variant === "list") {
    return (
      <Link to={`/watch/${video.id}`} className="flex gap-3 group hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-xl p-2 transition-all duration-200">
        {/* Thumbnail */}
        <div className="relative w-40 h-24 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800 shrink-0">
          {!imgLoaded && !imgError && <div className="absolute inset-0 shimmer" />}
          <img
            src={video.thumbnail}
            alt={video.title}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true); }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          />
          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
              <span className="text-2xl">🎬</span>
            </div>
          )}
          <span className="absolute bottom-1 right-1 text-white text-xs bg-black/70 px-1 py-0.5 rounded font-mono">
            {video.duration}
          </span>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0 py-0.5">
          <p className="text-sm font-semibold line-clamp-2 text-zinc-900 dark:text-zinc-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {video.title}
          </p>
          <p className="text-xs text-zinc-500 mt-1">{video.channel}</p>
          <p className="text-xs text-zinc-400 mt-0.5">{video.views} views · {video.uploadedAt}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/watch/${video.id}`} className="group block card-hover">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        {!imgLoaded && !imgError && <div className="absolute inset-0 shimmer" />}
        <img
          src={video.thumbnail}
          alt={video.title}
          onLoad={() => setImgLoaded(true)}
          onError={() => { setImgError(true); setImgLoaded(true); }}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />
        {imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900 text-white">
            <span className="text-4xl mb-2">🎬</span>
            <span className="text-xs opacity-60">{video.category}</span>
          </div>
        )}

        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 text-white text-xs bg-black/80 px-1.5 py-0.5 rounded font-mono font-medium">
          {video.duration}
        </span>

        {/* Category tag */}
        <span className="absolute top-2 left-2 text-xs bg-brand-500/90 text-white px-2 py-0.5 rounded-full font-semibold backdrop-blur-sm">
          {video.category}
        </span>

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-transparent border-l-zinc-900 ml-1" />
          </div>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex gap-3 mt-3 px-1">
        {/* Channel avatar */}
        <div className="shrink-0 mt-0.5">
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-9 h-9 rounded-full ring-2 ring-brand-500/20"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{video.channel}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <Eye size={11} /> {video.views}
            </span>
            <span className="text-zinc-300 dark:text-zinc-600 text-xs">•</span>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <Clock size={11} /> {video.uploadedAt}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
