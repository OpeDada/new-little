import Header from "./Header";
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="px-20 xl:px-60">
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Homepage;
