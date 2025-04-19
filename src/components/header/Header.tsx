import React from 'react';
import { TopNavigation } from '../nav';

interface HeaderProps {
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
  logoSrc?: string;
  logoAlt?: string;
}

export const Header: React.FC<HeaderProps> = ({
  // navigationItems = [],
  // logoSrc,
  // logoAlt
}) => {
  return (
    <header className="bg-white gap-4 text-white flex items-center justify-between w-full h-20 sticky top-0 z-10">
      <div className='bg-gray-200 w-40 h-10 rounded'></div>
      <TopNavigation items={["/profile", "/detail/1", "/map"]} />
      <div className='flex gap-4'>
        <div className='bg-gray-200 w-10 h-10 rounded'></div>
        <div className='bg-gray-200 w-10 h-10 rounded'></div>
      </div>
    </header>
  );
};
