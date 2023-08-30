import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="px-20 xl:px-60 py-4 text-green font-bold flex items-center">
      <img src={logo} alt="Nav logo"></img>
      <div className="container mx-auto">
        <ul className="flex justify-end md:space-x-4 lg:space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav


// max-w-screen-sm
