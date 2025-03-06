// src/components/Video.jsx
import PropTypes from "prop-types";

export default function Video({
  // Local file props
  src,
  thumbnail,          // local video poster image
  // YouTube + Vimeo IDs
  youtubeId,
  vimeoId,
  // shared props
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  className,
  // width = 560,
  // height = 315,
  ...rest
}) {
  // 1) If we have a Vimeo ID, render a Vimeo iframe
  if (vimeoId) {
    // Vimeo embed URL
    // Note: Add any parameters you like, e.g. autoplay, loop, etc.
    // https://developer.vimeo.com/player/embedding
    const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}`;
    return (
      <iframe
        // width={width}
        // height={height}
        src={vimeoSrc}
        className={className}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo video"
        {...rest}
      />
    );
  }

  // 2) If we have a YouTube ID, render a YouTube iframe
  if (youtubeId) {
    const youTubeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}`;
    return (
      <iframe
        // width={width}
        // height={height}
        src={youTubeSrc}
        className={className}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        {...rest}
      />
    );
  }

  // 3) Otherwise, render a local <video> element
  return (
    <video
      // width={width}
      // height={height}
      src={src}
      poster={thumbnail}
      className={className}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={muted}
      {...rest}
    />
  );
}

Video.propTypes = {
  // local file props
  src: PropTypes.string,
  thumbnail: PropTypes.string,
  // embed IDs
  youtubeId: PropTypes.string,
  vimeoId: PropTypes.string,
  // shared props
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
