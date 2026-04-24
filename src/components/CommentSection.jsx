// Added like/dislike support - Suraj
// src/components/CommentSection.jsx
import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, ChevronDown, ChevronUp, Send } from "lucide-react";

const SAMPLE_COMMENTS = [
  { id: 1, user: "Arjun Sharma", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=00b085", text: "This is hands down the best tutorial I've watched. The explanations are crystal clear!", likes: 342, time: "2 days ago" },
  { id: 2, user: "Priya Mehta",  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PM&backgroundColor=008c6a", text: "Finally understood this concept after watching multiple videos. Thank you so much! 🙏", likes: 218, time: "5 days ago" },
  { id: 3, user: "Rohan Verma",  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=006e54", text: "The section at 45:30 saved me from hours of debugging. Subscribed instantly.", likes: 174, time: "1 week ago" },
  { id: 4, user: "Sneha Patil",  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SP&backgroundColor=00d9a3", text: "Could you please make a follow-up video on advanced topics? This was amazing 🔥", likes: 98,  time: "2 weeks ago" },
  { id: 5, user: "Karan Gupta",  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=KG&backgroundColor=005a45", text: "I'm a CS student and I've been watching this channel for 2 years. Consistently great content!", likes: 67,  time: "3 weeks ago" },
];

function Comment({ comment }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  return (
    <div className="flex gap-3 animate-slide-up">
      <img src={comment.avatar} alt={comment.user} className="w-9 h-9 rounded-full shrink-0 ring-2 ring-brand-500/20" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{comment.user}</span>
          <span className="text-xs text-zinc-400">{comment.time}</span>
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{comment.text}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => {
              if (!liked) { setLikes((l) => l + 1); setLiked(true); if (disliked) setDisliked(false); }
              else { setLikes((l) => l - 1); setLiked(false); }
            }}
            className={`flex items-center gap-1.5 text-xs transition-colors ${liked ? "text-brand-500" : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"}`}
          >
            <ThumbsUp size={13} /> {likes}
          </button>
          <button
            onClick={() => { setDisliked((d) => !d); if (liked) { setLikes((l) => l - 1); setLiked(false); } }}
            className={`flex items-center gap-1.5 text-xs transition-colors ${disliked ? "text-red-500" : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"}`}
          >
            <ThumbsDown size={13} />
          </button>
          <button className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors font-medium">Reply</button>
        </div>
      </div>
    </div>
  );
}

export default function CommentSection({ videoId }) {
  const [comments, setComments] = useState(SAMPLE_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      user: "You",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=YO&backgroundColor=00f5bb",
      text: newComment.trim(),
      likes: 0,
      time: "Just now",
    };
    setComments((prev) => [comment, ...prev]);
    setNewComment("");
    setFocused(false);
  };

  return (
    <div className="mt-6">
      {/* Header */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="flex items-center gap-2 mb-4 group"
      >
        <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          Comments <span className="text-zinc-400 font-normal">({comments.length})</span>
        </h2>
        {expanded ? <ChevronUp size={16} className="text-zinc-400 group-hover:text-brand-500 transition-colors" /> : <ChevronDown size={16} className="text-zinc-400 group-hover:text-brand-500 transition-colors" />}
      </button>

      {expanded && (
        <div className="space-y-5 animate-fade-in">
          {/* Improved New Comment Input - Prithviraj | April 22 */}
          <div className="flex gap-3">
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=YO&backgroundColor=00f5bb"
              alt="You"
              className="w-9 h-9 rounded-full shrink-0 ring-2 ring-brand-500/30"
            />
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onFocus={() => setFocused(true)}
                placeholder="Share your thoughts on this video..."
                rows={focused ? 3 : 1}
                maxLength={500}
                className="w-full resize-none bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 focus:border-brand-500 focus:bg-white dark:focus:bg-zinc-900 rounded-xl outline-none text-sm p-3 transition-all duration-200 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
              />
              {focused && (
                <div className="flex items-center justify-between mt-2 animate-fade-in">
                  <span className={`text-xs ${newComment.length > 450 ? 'text-orange-500 font-medium' : 'text-zinc-400'}`}>
                    {newComment.length}/500 characters
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setFocused(false); setNewComment(""); }}
                      className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!newComment.trim()}
                      className="flex items-center gap-2 px-5 py-2 bg-brand-500 text-white text-sm rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-600 hover:shadow-md transition-all duration-200"
                    >
                      <Send size={14} /> Post Comment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Comment list */}
          <div className="space-y-5">
            {comments.map((c) => <Comment key={c.id} comment={c} />)}
          </div>
        </div>
      )}
    </div>
  );
}