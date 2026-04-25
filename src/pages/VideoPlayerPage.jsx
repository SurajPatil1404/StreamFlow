// 🏁 Final Mobile Polish - Suraj | April 25
// 🔧 Mobile Responsiveness Fixes - Suraj | April 23
// src/pages/VideoPlayerPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ThumbsUp, ThumbsDown, Share2, MoreHorizontal, 
  Bell, BellOff, CheckCircle, ArrowLeft 
} from "lucide-react";
import { videos } from "../data/videos";
import VideoCard from "../components/VideoCard";
import CommentSection from "../components/CommentSection";
import { useApp } from "../context/AppContext";

export default function VideoPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToHistory, showNotification } = useApp();
  
  const video = videos.find((v) => v.id === id);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(video ? Math.floor(Math.random() * 5000) + 100 : 0);

  // Redirect if video not found
  useEffect(() => {
    if (!video) navigate("/");
  }, [video, navigate]);

  // Add to history when mounted
  useEffect(() => {
    if (video) {
      addToHistory(video);
    }
  }, [video, addToHistory]);

  if (!video) return null;

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    showNotification(
      isSubscribed ? `Unsubscribed from ${video.channel}` : `Subscribed to ${video.channel}`,
      isSubscribed ? "info" : "success"
    );
  };

  const handleLike = () => {
    if (!liked) {
      setLikesCount((prev) => prev + 1);
      setLiked(true);
      if (disliked) setDisliked(false);
    } else {
      setLikesCount((prev) => prev - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDisliked(true);
      if (liked) {
        setLikesCount((prev) => prev - 1);
        setLiked(false);
      }
    } else {
      setDisliked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showNotification("Link copied to clipboard!", "success");
  };

  // Get related videos (exclude current video)
  const relatedVideos = videos
    .filter((v) => v.id !== video.id && v.category === video.category)
    .slice(0, 8);

  return (
    <div className="animate-fade-in min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Mobile-responsive container - April 23 */}
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Left Column: Player + Info + Comments */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Back Button (Mobile Only) */}
          <button 
            onClick={() => navigate(-1)}
            className="lg:hidden flex items-center gap-2 text-sm text-zinc-500 hover:text-brand-500 mb-2 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {/* Video Embed */}
          {/* Responsive video embed - April 23 */}
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mt-2">
            {video.title}
          </h1>

          {/* Channel Info & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            
            {/* Channel Details */}
            <div className="flex items-center gap-3">
              <img 
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}&backgroundColor=00b085`} 
                alt={video.channel} 
                className="w-10 h-10 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800"
              />
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{video.channel}</h3>
                <p className="text-xs text-zinc-500">1.2M subscribers</p>
              </div>
              <button
                onClick={handleSubscribe}
                className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isSubscribed 
                    ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700" 
                    : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-1"><CheckCircle size={14} /> Subscribed</span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {/* Action Buttons */}
            {/* Mobile-optimized action buttons - April 23 */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              
              {/* Like/Dislike Group */}
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-r border-zinc-200 dark:border-zinc-700 ${
                    liked ? "text-brand-500 bg-brand-500/10" : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  <ThumbsUp size={18} /> {likesCount.toLocaleString()}
                </button>
                <button
                  onClick={handleDislike}
                  className={`px-4 py-2 transition-colors ${
                    disliked ? "text-brand-500 bg-brand-500/10" : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  <ThumbsDown size={18} />
                </button>
              </div>

              {/* Share */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors whitespace-nowrap"
              >
                <Share2 size={18} /> Share
              </button>

              {/* More */}
              <button className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full text-zinc-700 dark:text-zinc-300 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl text-sm text-zinc-700 dark:text-zinc-300">
            <div className="flex gap-2 font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.timestamp}</span>
            </div>
            {/* Line clamp for mobile readability - April 23 */}
            <p className="whitespace-pre-line line-clamp-3 sm:line-clamp-none">
              {video.description || "No description available."}
            </p>
            <button className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100 hover:underline text-xs sm:text-sm">
              Show more
            </button>
          </div>

          {/* Comments Section */}
          <CommentSection videoId={video.id} />
        </div>

        {/* Right Column: Related Videos */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 hidden lg:block">Up Next</h2>
          <div className="space-y-3">
            {relatedVideos.map((v) => (
              <Link key={v.id} to={`/watch/${v.id}`} className="block group">
                <div className="flex gap-2 items-start">
                  <div className="relative w-40 aspect-video shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img 
                      src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`} 
                      alt={v.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                      {v.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-tight group-hover:text-brand-500 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs text-zinc-500">{v.channel}</p>
                    <p className="text-xs text-zinc-500">{v.views} views • {v.timestamp}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}