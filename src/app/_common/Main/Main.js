import React from 'react';
import {Route} from 'react-router-dom';
import Bot from "../../bot/Bot";
import Home from '../../home/Home'

const Main = () => <>

    <Route exact path="/" component={Bot}/>
    <Route exact path="/y0ush0u1dn0th4v3gu3ss3d" component={Home}/>

</>;

export default Main;