import React, { useEffect } from 'react';

export default function Calendly({ calendlyUrl, minWidth = '320px', height = '610px' }) {
  useEffect(() => {
    // Check if the script already exists to avoid duplicating it
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={calendlyUrl}
      style={{ minWidth, height }}
    ></div>
  );
}

