import React from 'react';
import {Route} from 'react-router-dom';
import Bot from "../../bot/Bot";

// import Home from '../../home/Home'

const Main = () => <>

    {/*<Route to="/" component={Home}/>*/}
    <Route to="/" component={Bot}/>

</>;

export default Main;