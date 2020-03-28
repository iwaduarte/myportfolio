import React from 'react';
import './Home.css';
import Profile from "./Profile";
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