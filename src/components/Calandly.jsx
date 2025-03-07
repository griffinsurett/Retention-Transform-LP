// src/components/Calendly.jsx
import React, { useState, useEffect } from "react";

export default function Calendly() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  const loadCalendly = () => {
    setWidgetLoaded(true);
  };

  useEffect(() => {
    if (widgetLoaded) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [widgetLoaded]);

  return (
    <div>
      {!widgetLoaded ? (
        <button
          className="bg-primary text-white px-4 py-2 rounded-md text-xl"
          onClick={loadCalendly}
        >
          Schedule Now
        </button>
      ) : (
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/retentiontransformation/nofap-consultation-session?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "610px" }}
        ></div>
      )}
    </div>
  );
}