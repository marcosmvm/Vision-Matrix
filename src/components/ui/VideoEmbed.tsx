"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title?: string;
}

function getEmbedUrl(src: string): { type: "embed"; url: string } | { type: "native"; url: string } {
  // YouTube
  const ytMatch = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return {
      type: "embed",
      url: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`,
    };
  }

  // Vimeo
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return {
      type: "embed",
      url: `https://player.vimeo.com/video/${vimeoMatch[1]}?dnt=1`,
    };
  }

  // Native video (MP4 or other)
  return { type: "native", url: src };
}

export default function VideoEmbed({ src, poster, title }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = getEmbedUrl(src);

  if (video.type === "embed") {
    return (
      <div className="relative w-full rounded-lg overflow-hidden bg-black border border-white/10">
        {!isPlaying && poster ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="relative w-full aspect-video group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${poster})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center"
              >
                <Play size={28} className="text-black ml-1" />
              </motion.div>
            </div>
            {title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium">{title}</p>
              </div>
            )}
          </button>
        ) : (
          <div className="relative w-full aspect-video">
            <iframe
              src={`${video.url}${video.url.includes("?") ? "&" : "?"}autoplay=1`}
              title={title || "Video"}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    );
  }

  // Native HTML5 video
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-black border border-white/10">
      <video
        className="w-full aspect-video"
        controls
        poster={poster}
        preload="metadata"
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {title && (
        <div className="p-3 bg-[var(--background-secondary)]">
          <p className="text-white text-sm font-medium">{title}</p>
        </div>
      )}
    </div>
  );
}
