import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Header } from '../components/header/Header';
import { BottomNavigation } from '../components/nav';
import { Filter } from '../components/ui/Filter';

const SectionColors = () => {
  return (
    <section className="p-4">
      <div className="flex gap-2 flex-col">
        <div className="w-12 md:w-16 h-12 md:h-16 rounded bg-gray-100"></div>
        <div className="w-12 md:w-16 h-12 md:h-16 rounded bg-gray-100"></div>
        <div className="w-12 md:w-16 h-12 md:h-16 rounded bg-gray-100"></div>
        <div className="w-12 md:w-16 h-12 md:h-16 rounded bg-gray-100"></div>
      </div>
    </section>
  );
};

const SectionPreview = () => {
  return (
    <section className="p-4 flex flex-col gap-4 items-center">
      <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-200 rounded-lg">
      </div>
      <div className='bg-gray-100 w-40 h-5'>
      </div>
    </section>
  );
};


const Detail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <Header />
      <main className='my-4 mb-48' >
        <div className='flex gap-4 flex-col items-center'>
          <div className='bg-gray-100 w-40 h-5'></div>
          <div className='bg-gray-100 w-80 h-10'></div>
        </div>
        <div className='flex md:gap-4 justify-center py-8'>
          <SectionColors />
          <SectionPreview />
        </div>
        <Filter options={["1", "2", "3", "4", "5"]} selectedOption={["3"]} onOptionChange={() => null} filter='2' />
      </main>
      <footer className="fixed bottom-0 left-0 bg-white w-full flex justify-center gap-4 items-center">
        <div className="bg-gray-100 w-32 h-24 my-4"></div>
        <div className='bg-gray-100 w-16 h-32 my-4'></div>
        <div className='bg-gray-100 w-32 h-32 my-4'></div>
      </footer>
    </Layout>
  );
};

export default Detail;
