import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DesignLab from './pages/Design_Lab';
import FeatureProjects from './pages/FeatureProjects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="AppGrid">
        <header className="App-header">
          <Hamburger />
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designlab" element={<DesignLab />} />
            <Route path="/featureprojects" element={<FeatureProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
