// src/components/LoopComponents/VideoEmbed.jsx
export default function VideoEmbed({ video, title = "Video", itemClass, thumbnail }) {
  function getVimeoEmbedUrl(videoUrl) {
    const match = videoUrl.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`;
    }
    return videoUrl;
  }
  
  // Use the provided thumbnail if available; otherwise, show a default text
  const summaryContent = thumbnail ? (
    <img src={thumbnail} alt={`${title} thumbnail`} className="w-full h-auto" />
  ) : (
    <span className="p-4 text-xl">▶ {title} (Click to play)</span>
  );

  return (
    <details className={`${itemClass} video-embed`} style={{ cursor: 'pointer' }}>
      <summary>{summaryContent}</summary>
      <iframe
        src={getVimeoEmbedUrl(video)}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title={title}
        loading="lazy"
        allowFullScreen
      />
    </details>
  );
}
