// src/components/LoopComponents/Video/VideoClient.jsx
import React, { useState } from 'react';

export default function VideoClient({ video, title = "Video", itemClass = "", featuredImage }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to generate the embed URL from a Vimeo link with autoplay enabled
  function getVimeoEmbedUrl(videoUrl) {
    const match = videoUrl.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1&badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`;
    }
    return videoUrl;
  }

  // When the thumbnail is clicked, update state to load the video
  const handlePlay = (e) => {
    e.stopPropagation();
    console.log("Play button clicked – starting video.");
    setIsPlaying(true);
  };

  // If user clicked play, load the video iframe which autoplays
  if (isPlaying) {
    return (
      <iframe
        src={getVimeoEmbedUrl(video)}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title={title}
        className={`${itemClass} video-embed aspect-video`}
        loading="lazy"
      />
    );
  }

  // Otherwise, render the featured image with an overlaid play button
  return (
    <div className={`${itemClass} video-thumbnail relative`}>
      <img
        src={featuredImage}
        alt={`Video thumbnail for ${title}`}
        className="w-full h-full object-cover pointer-events-none"
      />
      <button
        className="absolute inset-0 flex justify-center items-center bg-transparent cursor-pointer z-10"
        aria-label={`Play ${title}`}
        onClick={handlePlay}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="rgba(0,0,0,0.5)" />
          <polygon points="20,15 35,25 20,35" fill="white" />
        </svg>
      </button>
    </div>
  );
}
