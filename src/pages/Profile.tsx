import { Header } from "../components/header/Header";
import Layout from "../components/layout/Layout";
import { BottomNavigation } from "../components/nav";
import { Card, Input } from "../components/ui";

const items = ["1", "2", "3"]

const Profile = () => {
  return (
    <Layout>
      <Header />
      <main className='my-4 flex gap-4 flex-col md:flex-row mb-24 md:mb-0' >
        <div className="flex gap-4 flex-col flex-1 p-4">
          <div className='bg-gray-100 w-64 h-10 rounded'></div>
          <Input label="Nom" input="2" />
          <Input label="Nom" input="3" />
          <Input label="Nom" input="3" />
          <Input label="Nom" input="3" />
          <Input label="Nom" input="3" />
          <Input label="Nom" input="3" />
          <Input label="Nom" input="3" />
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg"></div>
          <div className='bg-gray-100 w-24 h-10 rounded ml-auto mt-8'></div>
        </div>
        <div className="flex flex-1 gap-4 flex-col p-4">
          <div className='bg-gray-100 w-64 h-10 rounded mb-8'></div>
          <div className="flex gap-4 flex-col">
            {items.map((item, index) => <Card key={index.toString()} item={item} card={"3"} />)}
          </div>
          <div className='bg-gray-100 w-64 h-10 rounded my-8'></div>
          <div className="flex gap-4 flex-col">
            <Input label="Nom" input="4" />
            <Input label="Nom" input="4" />
            <Input label="Nom" input="4" />
            <div className='bg-gray-100 w-24 h-10 rounded ml-auto mt-8'></div>
          </div>
        </div>
      </main>
      <footer>
        <BottomNavigation items={["profile", "detail/1", "map"]} />
      </footer>
    </Layout>
  );
};

export default Profile;
