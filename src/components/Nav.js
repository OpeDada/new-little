import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className="py-4 px-12 text-green font-bold flex items-center">
      <img src={logo} alt="Nav logo"></img>
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
