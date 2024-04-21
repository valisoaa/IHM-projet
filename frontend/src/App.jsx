import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

// IMPORTER LE MODULE AOS
import "../node_modules/aos/dist/aos.css";
import AOS from "aos";
import Auth from "./pages/Auth";
import Footer from "./partials/Footer";
import Currency from "./pages/Currency";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
