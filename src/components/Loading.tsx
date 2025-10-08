import React, { useEffect, useState } from "react";
import logo from "@/assets/techverse-logo.jpg";

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  const [visible, setVisible] = useState<boolean>(show);

  useEffect(() => {
    if (!show) {
      // fade out smoothly
      const timer = setTimeout(() => setVisible(false), 500); // matches transition duration
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Logo spinning */}
      <img
        src={logo}
        alt="Tech Verse Logo"
        className="h-24 w-24 animate-spin-slow relative z-10"
        style={{
          background: "linear-gradient(90deg, #00C6FF, #0072FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      />

      {/* Glow ring */}
      <div className="absolute h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 opacity-20 animate-pulse z-0"></div>

      <p className="mt-4 text-blue-600 font-semibold text-lg animate-pulse">
        Loading Tech Verse...
      </p>
    </div>
  );
};

export default Loading;
