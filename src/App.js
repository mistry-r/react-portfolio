import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
