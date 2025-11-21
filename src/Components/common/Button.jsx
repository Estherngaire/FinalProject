import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variants
  const variants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-yellow text-purple- hover:bg-purple-50 focus:ring-gold",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
