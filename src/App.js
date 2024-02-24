import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CvPage from './pages/CvPage';
import Projects from './pages/Projects';
import Funny from "./pages/Funny";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='site-container'>
        <header className='site-header'>
          <Menu />
        </header>
        <main className='site-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cvpage" element={<CvPage />} />
            <Route path="/projects" element={< Projects />} />
            <Route path="/funny" element={< Funny />} />
          </Routes>
        </main>
        <footer className='site-footer'>
          <Footer />
        </footer>
      </div>
    </Router >
  );
}