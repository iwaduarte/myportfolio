import React, {useState} from 'react';
import './Home.css';
import videosList from '../_config/videosList'
import Profile from "./Profile";
import Contact from "./Contact";
import Articles from "./Articles"
import Entertainment from "./Entertainment"
// import quoteAPIList from "../bot/QuoteAPIList"; //re use ?

const Home = props => {

    return <>
        <div className="home">
            <Profile/>
            {/*<hr className="horizontal-rule"/>*/}
            <Entertainment/>
        </div>
    </>
};

export default Home;