// src/components/Video.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import SixWaysThumbnail from "@/assets/VSL-Thumbnail.png";

export default function Video({
  src,
  thumbnail = SixWaysThumbnail.src,
  youtubeId,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className,
  ...rest
}) {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  // If a YouTube ID is provided, use a lazy-loading thumbnail approach.
  if (youtubeId) {
    if (!isPlayerLoaded) {
      return (
        <div
          className={className}
          onClick={() => setIsPlayerLoaded(true)}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            loading="lazy"
            style={{ width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24">
              <path fill="white" d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );
    }
    const youTubeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=${
      loop ? 1 : 0
    }`;
    return (
      <iframe
        src={youTubeSrc}
        className={className}
        title="YouTube video"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...rest}
      />
    );
  }

  // For local videos, add lazy loading via the poster attribute.
  return (
    <video
      src={src}
      poster={thumbnail}
      className={className}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      loading="lazy"
      {...rest}
    />
  );
}

Video.propTypes = {
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  youtubeId: PropTypes.string,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string,
};
