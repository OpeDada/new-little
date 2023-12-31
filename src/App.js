import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/pages/home/Homepage";
import ReservationPage from "./components/pages/reservation/ReservationPage";
import About from "./components/pages/home/About"
import Specials from "./components/pages/home/Specials";
import ConfirmedBooking from "./components/pages/ConfirmedBooking";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Nav />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
