// src/components/Video.jsx
// import React, { useState } from "react";
import PropTypes from "prop-types";
import SixWaysThumbnail from "@/assets/VSL-Thumbnail.png";

export default function Video({
  src,
  thumbnail = SixWaysThumbnail.src,
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className,
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
