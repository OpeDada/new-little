import Header from "./Header";
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"

const Homepage = () => {
  return (
    <>
      <main className="">
        <Header />
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Homepage;
