import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { Header } from '../components/header/Header'
import { Card, Search } from '../components/ui';
import { BottomNavigation } from '../components/nav';

interface SectionFilterProps {
  options: string[];
  selectedOption: string[];  // Changed to string array
  onOptionChange: (option: string) => void;
}

const SectionFilter: React.FC<SectionFilterProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
  return (
    <section>
      <Search />
      <div className="my-4 flex gap-4 ">
        {options.map((option) => (
          <button
            key={option}
            className={`min-w-40 h-12 rounded ${selectedOption.includes(option) ? 'bg-gray-300' : 'bg-gray-100'}`}
            onClick={() => onOptionChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
};

interface SectionListeProps {
  // items: Array<{
  //   id: string;
  //   title: string;
  //   description: string;
  // }>;
  item: string
}

const SectionListe: React.FC<SectionListeProps> = ({ title, items, direction, card }) => {
  const directions = {
    x: 'flex-row',
    y: 'flex-col',
  }
  return (
    <section>
      <div className='h-20 flex items-center justify-between'>
        <h3 className='min-w-40 bg-gray-200 h-10 rounded' >{title}</h3>
        <div className='min-w-40 bg-gray-200 h-10 rounded'></div>
      </div>
      <div className={`flex ${directions[direction]} gap-4 my-4`}>
        {items.map((item, index) => <Card key={index.toString()} item={item} card={card} />)}
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main className='my-4'>
        <SectionFilter options={["1", "2", "3", "4", "5", "6"]} selectedOption={["2"]} onOptionChange={() => null} />
        <SectionListe items={["1", "2", "3", "4", "5", "6"]} title="" direction="x" card="1" />
        <SectionListe items={["1", "2", "3", "4", "5", "6"]} title="" direction="y" card="2" />
      </main>
      <footer>
        <BottomNavigation items={["profile", "detail/1", "map"]}/>
      </footer>
    </Layout>
  )
}

export default Home
