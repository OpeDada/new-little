import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/pages/Homepage/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
