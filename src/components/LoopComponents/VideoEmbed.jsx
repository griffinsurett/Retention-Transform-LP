// src/components/VideoEmbed.jsx
export default function VideoEmbed({ video, title = "Video", itemClass, }) {
  function getVimeoEmbedUrl(videoUrl) {
    const match = videoUrl.match(/vimeo\.com\/(\d+)/);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`;
    }
    return videoUrl;
  }
  
  return (
    <iframe
      src={getVimeoEmbedUrl(video)}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title={title}
      className={`${itemClass} video-embed aspect-video`}
    />
  );
}
