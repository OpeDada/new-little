import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="px-20 xl:px-60 bg-green h-80 text-white ">
        <div className="flex justify-between items-center pb-8">
          <img src={logo} alt="" className="h-48 pt-8" />
          <ul className="footer-links pt-8">
            <p>Navigation</p>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <ul className="footer-links">
            <p>Contact</p>
            <li>
              <a href="/">Address</a>
            </li>
            <li>
              <a href="/about">Phone number</a>
            </li>
            <li>
              <a href="/menu">Email</a>
            </li>
          </ul>
          <ul className="footer-links">
            <p>Social Media</p>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/about">Linkedin</a>
            </li>
            <li>
              <a href="/menu">Instagram</a>
            </li>
          </ul>
        </div>
        <p className="items-end">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
