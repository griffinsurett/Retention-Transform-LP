// src/components/Calendly.jsx
import React, { useState, useEffect, useRef } from "react";

export default function Calendly() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const calendlyContainerRef = useRef(null);

  const loadCalendly = () => {
    setWidgetLoaded(true);
  };

  useEffect(() => {
    if (widgetLoaded) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly && calendlyContainerRef.current) {
          window.Calendly.initInlineWidget({
            url: "https://calendly.com/retentiontransformation/nofap-consultation-session?hide_event_type_details=1&hide_gdpr_banner=1",
            parentElement: calendlyContainerRef.current,
            prefill: {},
            utm: {},
          });
        }
      };
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
          ref={calendlyContainerRef}
          style={{ minWidth: "320px", height: "610px" }}
        ></div>
      )}
    </div>
  );
}
