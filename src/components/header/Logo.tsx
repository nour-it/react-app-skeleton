import React from 'react';

interface LogoProps {
  src?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ src = '/logo.png', alt = 'Logo' }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
};
