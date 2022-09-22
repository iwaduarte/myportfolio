import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import SideBar from './app/_common/SideBar/SideBar';
import Home from './app/home/Home';
import About from './app/about/About';
import Articles from './app/articles/Articles';
import Projects from './app/projects/Projects';

const NavBar = () => null;
/* NavBar containing:
 - linkedin
 - github
 - medium
 - dark mode

 The NavBar has to have a X component that will close to the side. ( X => < )
 The Nav will be sticky/fixed positioned on the right top corner of the screen

 - language translation (to implement later in life )
 - search (to implement later in life) :P
 */

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
