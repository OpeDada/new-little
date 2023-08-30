import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/pages/Homepage/Homepage";
import ReservationPage from "./components/pages/Reservationpage/BookingForm";
import About from "./components/pages/Homepage/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
