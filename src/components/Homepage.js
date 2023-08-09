import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <main className="">
        <header className="bg-hero bg-cover h-60 px-32 py-4">
          <h1 className="text-yellow text-3xl font-serif font-bold">
            Little Lemon
          </h1>
          <h4 className="text-white text-xl">Chicago</h4>
          <p className="text-white w-80 py-4">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
        </header>
        {/* <Link className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4" to="/">
          Reserve a Table
        </Link> */}
        <h3 className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4">
          Reserve a Table
        </h3>
      </main>
    </>
  );
};

export default Homepage;
