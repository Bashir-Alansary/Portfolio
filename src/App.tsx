import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullProjects from './components/AllProjects/AllProjects';
import ScrollToUp from './components/ScrollToUp/ScrollToUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<FullProjects />} />
        </Routes>
        <Contact />
        <Footer />
        <ScrollToUp />
      </BrowserRouter>
    </div>
  );
}

export default App;
