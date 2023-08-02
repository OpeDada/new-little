import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className="px-32 py-4 text-green font-bold flex items-center">
      <img src={logo} alt="Nav logo"></img>
      <div className="container mx-auto">
        <ul className="flex justify-end md:space-x-4 lg:space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav


// max-w-screen-sm
