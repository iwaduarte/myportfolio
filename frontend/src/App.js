import React, {useEffect} from 'react';
import './App.css';
import Main from "./app/_common/Main/Main";
import Footer from "./app/_common/Main/Footer";
import {createBrowserHistory} from 'history'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-163778059-1');
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search)
});


const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, []);

    return <>
        <Main/>
        <Footer/>
    </>

};


export default App;
