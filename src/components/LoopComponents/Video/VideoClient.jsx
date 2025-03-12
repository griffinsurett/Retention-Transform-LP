import React from 'react';

export default function VideoClient({ src, title = "Video", itemClass = "" }) {
  // Helper to generate the Vimeo embed URL with autoplay enabled
  const getVimeoEmbedUrl = (videoUrl) => {
    const match = videoUrl.match(/vimeo\.com\/(\d+)/);
    return match && match[1]
      ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`
      : videoUrl;
  };

  return (
    <iframe
      src={getVimeoEmbedUrl(src)}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
      className={`${itemClass} w-full h-full`}
      loading="lazy"
    />
  );
}
