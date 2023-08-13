import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/pages/Homepage/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto ">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
