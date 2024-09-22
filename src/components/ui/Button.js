import React from 'react';

export const Button = ({ children, onClick, variant = "primary", className }) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold flex items-center justify-center";
  const variantStyles = variant === "outline" ? "border border-gray-300 text-gray-700" : "bg-blue-500 text-white";
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};
