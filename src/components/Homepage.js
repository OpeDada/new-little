import { Link } from "react-router-dom";
import food from "../assets/headerfood.jpg";


const Homepage = () => {
  return (
    <>
      <main className="">
        <header className="bg-hero bg-cover h-64 px-20 xl:px-60 py-3 flex justify-between">
          <div>
            <h1 className="text-yellow text-3xl font-serif font-bold">
              Little Lemon
            </h1>
            <h4 className="text-white text-xl">Chicago</h4>
            <p className="text-white w-82 py-8">
              We are a family owned Mediterranean restaurant, located on Maldove
              Street in Chicago, Illionis. We focus on traditional recipes
              served with a modern twist.
            </p>
            {/* <Link className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4" to="/">
          Reserve a Table
        </Link> */}
            <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
              Reserve a Table
            </button>
          </div>
          <div className="">
            <img
              src={food}
              alt="Header food"
              className="rounded object-cover w-72"
            />
          </div>
        </header>
      </main>
    </>
  );
};

export default Homepage;
