// src/components/Video.jsx
// import React, { useState } from "react";
import SixWaysThumbnail from "@/assets/VSL-Thumbnail.png";

export default function Video({
  src,
  thumbnail = SixWaysThumbnail.src,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className = "w-lg",
  ...rest
}) {

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