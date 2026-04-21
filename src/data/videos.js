// videos.js - Static video data with YouTube IDs
// Author: Onkar | Branch: feat/onkar-data
// Updated by Onkar - Added 12 sample videos with tags and YouTube IDs for StreamFlow
// src/data/videos.js
// Static video data — uses real YouTube IDs so the embedded player works

export const CATEGORIES = [
  "All", "Web Dev", "Machine Learning", "System Design",
  "JavaScript", "Python", "DevOps", "Data Science", "React", "Algorithms"
];

export const videos = [
  {
    id: "v1",
    youtubeId: "w7ejDZ8SWv8",
    title: "React JS Full Course for Beginners | Complete All-in-One Tutorial",
    channel: "Dave Gray",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=DG&backgroundColor=00b085",
    thumbnail: `https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg`,
    views: "1.4M",
    viewCount: 1400000,
    duration: "9:00:46",
    uploadedAt: "8 months ago",
    category: "React",
    tags: ["react", "javascript", "frontend", "web dev"],
    description:
      "Learn React JS in this complete all-in-one beginner tutorial. We'll cover everything from JSX, components, state, props to hooks and context API. Perfect for anyone starting with React.",
    likes: 42000,
    subscribers: "340K",
  },
  {
    id: "v2",
    youtubeId: "rfscVS0vtbw",
    title: "Learn Python – Full Course for Beginners [Tutorial]",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg`,
    views: "34M",
    viewCount: 34000000,
    duration: "4:26:52",
    uploadedAt: "5 years ago",
    category: "Python",
    tags: ["python", "programming", "beginners", "data science"],
    description:
      "This course will give you a full introduction into all of the core concepts in Python. Follow along with the videos and you'll be a Python programmer in no time!",
    likes: 890000,
    subscribers: "8.3M",
  },
  {
    id: "v3",
    youtubeId: "qw--VYLpxG4",
    title: "Machine Learning for Everybody – Full Course",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/qw--VYLpxG4/hqdefault.jpg`,
    views: "3.8M",
    viewCount: 3800000,
    duration: "3:55:05",
    uploadedAt: "1 year ago",
    category: "Machine Learning",
    tags: ["machine learning", "AI", "python", "data science"],
    description:
      "Learn Machine Learning in this full course for beginners. You'll learn the fundamental concepts and algorithms behind ML including supervised learning, neural networks, and more.",
    likes: 110000,
    subscribers: "8.3M",
  },
  {
    id: "v4",
    youtubeId: "SqcY0GlETPk",
    title: "React TypeScript Tutorial for Beginners",
    channel: "Codevolution",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=CV&backgroundColor=008c6a",
    thumbnail: `https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg`,
    views: "920K",
    viewCount: 920000,
    duration: "1:40:37",
    uploadedAt: "2 years ago",
    category: "React",
    tags: ["react", "typescript", "frontend", "javascript"],
    description:
      "Learn how to use TypeScript with React. This tutorial covers all TypeScript fundamentals you need to build type-safe React applications from scratch.",
    likes: 28000,
    subscribers: "620K",
  },
  {
    id: "v5",
    youtubeId: "bMknfKXIFA8",
    title: "CS50's Introduction to Computer Science – Full Harvard Course",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg`,
    views: "7.1M",
    viewCount: 7100000,
    duration: "25:41:43",
    uploadedAt: "4 years ago",
    category: "Algorithms",
    tags: ["computer science", "algorithms", "programming", "harvard"],
    description:
      "Harvard University's CS50 – the world's most popular introduction to computer science and programming. Topics include abstraction, algorithms, data structures, web development, and more.",
    likes: 230000,
    subscribers: "8.3M",
  },
  {
    id: "v6",
    youtubeId: "Ke90Tje7VS0",
    title: "React State Management – Intermediate JavaScript Tutorial",
    channel: "Web Dev Simplified",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=WDS&backgroundColor=005a45",
    thumbnail: `https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg`,
    views: "560K",
    viewCount: 560000,
    duration: "21:10",
    uploadedAt: "3 years ago",
    category: "React",
    tags: ["react", "state management", "context", "hooks"],
    description:
      "State management is one of the most confusing topics in React. In this video I break down all the different options including useState, useReducer, Context API, and Redux.",
    likes: 18400,
    subscribers: "1.1M",
  },
  {
    id: "v7",
    youtubeId: "vLnPwxZdW4Y",
    title: "Python for Data Science – Course for Beginners",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/vLnPwxZdW4Y/hqdefault.jpg`,
    views: "5.6M",
    viewCount: 5600000,
    duration: "12:20:20",
    uploadedAt: "3 years ago",
    category: "Data Science",
    tags: ["python", "data science", "pandas", "numpy", "machine learning"],
    description:
      "This Python for Data Science course will teach you everything you need to know to get started with data science using Python. Covers NumPy, Pandas, Matplotlib, and Machine Learning.",
    likes: 175000,
    subscribers: "8.3M",
  },
  {
    id: "v8",
    youtubeId: "ysEN5RaKOlA",
    title: "Git and GitHub for Beginners – Crash Course",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg`,
    views: "4.2M",
    viewCount: 4200000,
    duration: "1:08:29",
    uploadedAt: "3 years ago",
    category: "DevOps",
    tags: ["git", "github", "version control", "devops"],
    description:
      "Learn the basics of Git and GitHub in this crash course for beginners. This video covers the key concepts of version control and how to use them in real projects.",
    likes: 120000,
    subscribers: "8.3M",
  },
  {
    id: "v9",
    youtubeId: "lEWLQV4x64c",
    title: "System Design Interview – Step-By-Step Guide",
    channel: "ByteByteGo",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=BBG&backgroundColor=00b085",
    thumbnail: `https://i.ytimg.com/vi/lEWLQV4x64c/hqdefault.jpg`,
    views: "910K",
    viewCount: 910000,
    duration: "15:43",
    uploadedAt: "1 year ago",
    category: "System Design",
    tags: ["system design", "interview", "backend", "architecture"],
    description:
      "Ace your system design interview with this step-by-step framework. I'll walk you through how to approach any system design question confidently and systematically.",
    likes: 33000,
    subscribers: "490K",
  },
  {
    id: "v10",
    youtubeId: "PkZNo7MFNFg",
    title: "Learn JavaScript – Full Course for Beginners",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg`,
    views: "13M",
    viewCount: 13000000,
    duration: "3:26:42",
    uploadedAt: "5 years ago",
    category: "JavaScript",
    tags: ["javascript", "web dev", "frontend", "programming"],
    description:
      "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.",
    likes: 380000,
    subscribers: "8.3M",
  },
  {
    id: "v11",
    youtubeId: "a_7Z7C_JCyo",
    title: "Full Stack Web Development for Beginners (Full Course)",
    channel: "freeCodeCamp",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=FC&backgroundColor=006e54",
    thumbnail: `https://i.ytimg.com/vi/a_7Z7C_JCyo/hqdefault.jpg`,
    views: "2.1M",
    viewCount: 2100000,
    duration: "5:04:37",
    uploadedAt: "2 years ago",
    category: "Web Dev",
    tags: ["full stack", "html", "css", "javascript", "web dev"],
    description:
      "Learn full stack web development in this complete course for beginners. We'll cover HTML, CSS, JavaScript, Node.js, Express, and MongoDB to build complete web applications.",
    likes: 68000,
    subscribers: "8.3M",
  },
  {
    id: "v12",
    youtubeId: "8hly31xKli0",
    title: "Docker Tutorial for Beginners – A Full DevOps Course",
    channel: "TechWorld with Nana",
    channelAvatar: "https://api.dicebear.com/7.x/initials/svg?seed=TN&backgroundColor=008c6a",
    thumbnail: `https://i.ytimg.com/vi/3c-iBn73dDE/hqdefault.jpg`,
    views: "3.4M",
    viewCount: 3400000,
    duration: "3:17:19",
    uploadedAt: "3 years ago",
    category: "DevOps",
    tags: ["docker", "devops", "containers", "kubernetes"],
    description:
      "Docker Tutorial for Beginners — a complete, hands-on course covering Docker concepts, commands, containerization, Docker Compose, and how Docker fits into a DevOps workflow.",
    likes: 95000,
    subscribers: "980K",
  },
];

export const getVideoById = (id) => videos.find((v) => v.id === id);

export const getRecommendations = (video, count = 6) => {
  if (!video) return videos.slice(0, count);
  return videos
    .filter((v) => v.id !== video.id)
    .sort((a, b) => {
      const aScore = a.tags.filter((t) => video.tags.includes(t)).length + (a.category === video.category ? 2 : 0);
      const bScore = b.tags.filter((t) => video.tags.includes(t)).length + (b.category === video.category ? 2 : 0);
      return bScore - aScore;
    })
    .slice(0, count);
};
