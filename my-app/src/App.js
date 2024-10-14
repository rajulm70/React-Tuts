import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#606060';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextMaster" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} /> {/* Use element prop */}
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} /> {/* Use element prop */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
