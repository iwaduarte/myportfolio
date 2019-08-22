import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../../home/Home'

const Main = () => <>

    <Route to="/" component={Home}/>

</>;

export default Main;