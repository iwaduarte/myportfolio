import React from 'react';
import {Route} from 'react-router-dom';
import Bot from "../../bot/Bot";
import Home from '../../home/Home'

const Main = () => <>

    <Route exact path="/" component={Bot}/>
    <Route exact path="/home" component={Home}/>

</>;

export default Main;