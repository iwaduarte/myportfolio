import React, { useState } from 'react';
import styles from './Home.module.css';
import Boxes from '../_components/Boxes/Boxes';
import Videos from './Videos';

const { line, main } = styles;

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className={line} />
      <div className={main}>
        <Boxes to="about" name="ABOUT ME" className="about" />
        <Boxes name="VIDEOS" className="videos" onClick={() => setModal(prevState => !prevState)} />
        {modal && <Videos onClick={() => setModal(prevState => !prevState)} />}
        <Boxes to="/articles" className="articles" name="ARTICLES" />
        <Boxes to="/projects" className="projects" name="PROJECTS" />
      </div>
    </div>
  );
};

export default Home;
