import { Header } from "../components/header/Header";
import Layout from "../components/layout/Layout";
import { BottomNavigation } from "../components/nav";
import { Card } from "../components/ui";
import { Filter } from "../components/ui";

const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Map = () => {
    return (
        <Layout>
            <Header />
            <main className='my-4 flex flex-col gap-4'>
                <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg"></div>
                <Filter options={["1", "2", "3", "4", "5"]} selectedOption={["3"]} onOptionChange={() => null} filter="3" />
                <div className="flex gap-4">
                    {items.map((item, index) => <Card key={index.toString()} item={item} card={"1"} />)}
                </div>
            </main>
            <footer>
                <BottomNavigation items={["profile", "detail/1", "map"]} />
            </footer>
        </Layout>
    );
};

export default Map;
