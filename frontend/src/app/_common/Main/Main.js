import React from 'react';
// noinspection ES6CheckImport
import {Route, Switch} from 'react-router-dom';
import Bot from "../../bot/Bot";
import Home from '../../home/Home'

const Main = () => <>
    <Switch>
        <Route exact path="/y0ush0u1dn0th4v3gu3ss3d" component={Home}/>
        <Route path="/" component={Bot}/>
    </Switch>

</>;

export default Main;