import React from 'react';

interface NavigationProps {
  // items?: Array<{
  //   label: string;
  //   href: string;
  // }>;
  items?: string[]
}

export const BottomNavigation: React.FC<NavigationProps> = ({ items = [] }) => {
  return (
    <nav className="fixed bottom-0 left-0 md:hidden bg-white w-full p-4">
      <ul className="flex gap-4 justify-center">
        {items.map((item, index) => (
          <li key={index} className="">
            <a href={item} className="min-w-10 bg-gray-200 min-h-10 rounded-xl block">
              {/* {item} */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation