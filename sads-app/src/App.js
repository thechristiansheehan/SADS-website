import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Calendar from './Calendar.jsx';
import Resources from './Resources.jsx';

function App() {
  return (
    <div className="App"  style={{
          fontFamily: '"Riona Sans Black", monospace',
        }}>
          <NavBar />
          <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
          <Footer />
    </div>
  );
}

export default App;
