interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = '' 
}: IconProps) => {
  return (
    <span 
      className={`bg-gray-200 text-white rounded-xl w-10 h-10`}
    >
      {/* Ici vous pouvez implémenter votre logique d'icônes
          soit en utilisant une bibliothèque comme react-icons,
          soit en important des SVG personnalisés */}
      {name}
    </span>
  );
};

export default Icon;
