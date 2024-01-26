import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Salads from "./Components/Salads";
import Soups from "./Components/Soups";
import Sandwiches from "./Components/Sandwiches";
import Desserts from "./Components/Desserts";
import Drinks from "./Components/Drinks";

import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";


function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/salads" element={<Salads />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
      </Router>
    </div>
  );
}
export default App;
