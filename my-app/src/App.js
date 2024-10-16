import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // Set default mode to 'dark'
  const [mode, setMode] = useState('dark'); // Change 'light' to 'dark'

  useEffect(() => {
    document.body.style.backgroundColor = '#606060'; // Set initial background for dark mode
  }, []); // Run once when the component mounts

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#606060';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextMaster" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
