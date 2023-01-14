import React from "react";

export default function ShadowOverlay() {
  return (
    <div className="fixed left-0 top-0 h-full w-full z-50 pointer-events-none bg-shadow-gradient"></div>
  );
}
