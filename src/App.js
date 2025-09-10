import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Author from "./pages/Author/Authors";
import Featured from "./pages/Featured/Featured";
import Contact from "./pages/Contact/Contact";
import Community from "./pages/Community/Community";
import BookD from "./pages/BookD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/author" element={<Author />}/>
        <Route path="/featured" element={<Featured/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/book/:id" element={<BookD/>}/>
      </Routes>
    </Router>
  );
}

export default App;
