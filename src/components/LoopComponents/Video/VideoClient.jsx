import React, { useState, useRef, useEffect } from 'react';

export default function VideoClient({ src, title = "Video", itemClass = "", thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);

  // Helper to generate the Vimeo embed URL with autoplay enabled
  const getVimeoEmbedUrl = (videoUrl) => {
    const match = videoUrl.match(/vimeo\.com\/(\d+)/);
    return match && match[1]
      ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`
      : videoUrl;
  };

  // Attach a click handler to the play button rendered in the static markup.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const button = container.querySelector('button');
    if (!button) return;
    
    const handlePlay = (e) => {
      e.stopPropagation();
      setIsPlaying(true);
    };

    button.addEventListener('click', handlePlay);
    return () => {
      button.removeEventListener('click', handlePlay);
    };
  }, []);

  // When isPlaying is true, render the Vimeo iframe
  if (isPlaying) {
    return (
      <div ref={containerRef} className={`${itemClass} video-container relative`}>
        <iframe
          src={getVimeoEmbedUrl(src)}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title={title}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render the static thumbnail with a play button overlay.
  // (This markup can be statically rendered via Astro and hydrated as a React island.)
  return (
    <div ref={containerRef} className={`${itemClass} video-container relative`}>
      <img
        src={thumbnail}
        alt={`Video thumbnail for ${title}`}
        className="w-full h-full object-cover pointer-events-none"
      />
      <button
        className="absolute inset-0 flex justify-center items-center bg-transparent cursor-pointer z-10"
        aria-label={`Play ${title}`}
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
