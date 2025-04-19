import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  item?: any;
  card: string;
  key?: string | number;
}

const Card = ({ /*children, className = '', onClick,*/ card = "1", /*item,*/ key }: CardProps) => {
  switch (card) {
    case "3":
      return (<div key={key} className="border p-4 rounded-lg min-h-20 min-w-80 bg-gray-200">
        <h3 className="font-bold"></h3>
        <p></p>
      </div>)
      break;


    case "2":
      return (<div key={key} className="border p-4 rounded-lg min-h-40 min-w-80 bg-gray-200">
        <h3 className="font-bold"></h3>
        <p></p>
      </div>)
      break;

    default:
      return (
        <div key={key} className="border p-4 rounded-lg min-h-80 min-w-80 bg-gray-200">
          <h3 className="font-bold"></h3>
          <p></p>
        </div>
      );
      break;
  }
};

export default Card;
