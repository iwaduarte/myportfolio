import React from 'react';
import './Home.css';
import Profile from './Profile';
import Entertainment from './Entertainment';
// import quoteAPIList from "../bot/QuoteAPIList"; //re use ?

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <Entertainment />
    </div>
  );
};

export default Home;
