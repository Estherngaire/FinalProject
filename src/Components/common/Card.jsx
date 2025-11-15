import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`border rounded shadow p-4 ${className}`}>
    {children}
  </div>
);

export default Card;
