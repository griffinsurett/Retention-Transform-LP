// src/components/Video.jsx
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
  // 2) If we have a YouTube ID, render a YouTube iframe
  if (youtubeId) {
    const youTubeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&loop=${loop ? 1 : 0}`;
    return (
      <iframe
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
  youtubeId: PropTypes.string,
  vimeoId: PropTypes.string,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
