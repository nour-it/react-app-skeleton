import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  // items?: Array<{
  //   label: string;
  //   href: string;
  // }>;
  items?: string[]
}

export const TopNavigation: React.FC<NavigationProps> = ({ items = [] }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4 ">
        {items.map((item, index) => (
          <li key={index} className="">
            <Link to={item} className="block min-w-40 bg-gray-200 min-h-10 rounded">
              {/* {item} */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigation