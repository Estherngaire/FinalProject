import React, { memo } from "react";

const ResponsiveImage = memo(function ResponsiveImage({ src, alt, className }) {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
      />
      
    </figure>
  );
});

export default ResponsiveImage;
