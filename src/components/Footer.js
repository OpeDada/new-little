const Footer = () => {
  return (
    <>
      <footer className="p-10 xl:px-40 bg-green h-75 text-white">
        <div className="flex justify-between items-center pb-8">
          <img
            src={require("../assets/footer-logo.png")}
            alt=""
            className="h-48 pt-8"
          />
          <ul className="footer-links pt-8">
            <p className="text-lg font-bold">Navigation</p>
            <hr />
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
            <p className="text-lg font-bold"> Contact</p>
            <hr />
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
            <p className="text-lg font-bold">Social Media</p>
            <hr />
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
        <p className="">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
