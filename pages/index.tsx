import HeadTitle from "@/components/shared/HeadTitle";
import Head from "next/head";

interface HomePageProps {
  products: [];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <>
      <HeadTitle title="Shop-app" />
      <main className="p-2">
        <h1>Next Shop</h1>
      </main>
    </>
  );
};

export default HomePage;
