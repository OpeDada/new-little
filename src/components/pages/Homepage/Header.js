import { Link } from "react-router-dom";
import food from "../../../assets/headerfood.jpg";

const Header = () => {
  return (
    <header className="bg-hero bg-cover h-64 px-20 xl:px-60 py-3 flex justify-between">
      <section>
        <h1 className="text-yellow text-3xl font-serif font-bold">
          Little Lemon
        </h1>
        <h4 className="text-white text-xl">Chicago</h4>
        <p className="text-white w-82 py-8 pr-4">
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        {/* <Link className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4" to="/">
          Reserve a Table
        </Link> */}
        <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
          Reserve a Table
        </button>
      </section>
      <div className="">
        <img
          src={food}
          alt="Header food"
          className="rounded-lg object-cover w-96 max-h-80 mt-4"
        />
      </div>
    </header>
  );
};

export default Header;