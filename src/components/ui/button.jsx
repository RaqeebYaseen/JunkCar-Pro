'use client'

import React from "react";

const Button = ({
  children,
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  textColor = "#FF5722",
  borderColor = "#FF5722",
  hoverBorderColor = "#FF5722",
  hoverFillColor = "#FF5722",
  hoverTextColor = "#ffffff",
  ...props
}) => {
  const sizeMap = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      {...props}
      className={`relative overflow-hidden border-2 font-semibold rounded inline-flex items-center justify-center group transition-all duration-300 ${sizeMap[size]} ${className}`}
      style={{
        borderColor: borderColor,
      }}
    >
      {/* Fill animation */}
      <span
        className="absolute inset-0 w-0 group-hover:w-full h-full transition-all duration-300 ease-in-out z-0"
        style={{
          backgroundColor: hoverFillColor,
        }}
      ></span>

      {/* Text */}
      <span
        className="relative z-10 transition-colors duration-300"
        style={{
          color: textColor,
        }}
      >
        {children}
      </span>

      {/* Dynamic inline hover style */}
      <style jsx>{`
        button:hover {
          border-color: ${hoverBorderColor};
        }
        button:hover span {
          color: ${hoverTextColor} !important;
        }
      `}</style>
    </button>
  );
};

export default Button;
