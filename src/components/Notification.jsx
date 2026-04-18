// src/components/Notification.jsx
import React from "react";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Notification() {
  const { notification, showNotification } = useApp();
  if (!notification) return null;

  const icons = { success: CheckCircle, error: AlertCircle, info: Info };
  const colors = {
    success: "bg-brand-500 text-white",
    error:   "bg-red-500 text-white",
    info:    "bg-zinc-800 text-white",
  };
  const Icon = icons[notification.type] || Info;

  return (
    <div className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium animate-slide-up ${colors[notification.type]}`}>
      <Icon size={16} />
      {notification.message}
      <button onClick={() => showNotification(null)} className="ml-1 opacity-70 hover:opacity-100">
        <X size={14} />
      </button>
    </div>
  );
}
