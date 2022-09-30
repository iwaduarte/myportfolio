import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import SideBar from './app/_common/SideBar/SideBar';
import Home from './app/home/Home';
import About from './app/about/About';
import Articles from './app/articles/Articles';
import Projects from './app/projects/Projects';
import NavBar from './app/_components/NavBar/NavBar';

const { home } = styles;

function App() {
  return (
    <div className={home}>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
