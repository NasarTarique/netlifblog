//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//    </div>
//  );
//}
//
//export default App;

import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import About from "./About";
import Blog from "./Blog";
import Read from "./Read";
import Contact from "./Contact";
import Projects from "./Projects";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="home">
        <Sidebar />
        <div className="sidebar-container-padding"></div>

        <div className="main">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs/:id" element={<Read />} />
            <Route exact path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
