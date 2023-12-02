import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-hero bg-cover h-64 px-10 xl:px-40 sm:text-sm py-3 flex justify-between gap-4">
      <section>
        <h1 className="text-yellow lg:text-3xl font-serif font-bold">
          Little Lemon
        </h1>
        <h4 className="text-white lg:text-xl">Chicago</h4>
        <p className="text-white py-8 lg:text-base">
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        <Link
          to="/reservation"
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded lg:text-lg sm:text-sm"
        >
          Reserve a Table
        </Link>
      </section>
      <div className="w-80 md:pt-0 sm:pt-12 h-80 object-cover object-right-bottom">
        <img
          src={require("../../../assets/headerfood.jpg")}
          alt="Header food"
          className="header-img rounded-lg"
        />
      </div>
    </header>
  );
};

export default Header;


          // lg:w-1/5 md:w-3/5 sm:w-screen sm:pt-12
