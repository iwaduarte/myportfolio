import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { TiRefresh } from "react-icons/ti";

import quoteAPIList from "./QuoteAPIList.json"
import "./Bot.css"

const RandomQuotes = props => {

    const [quote, setQuote] = useState({
        fieldName: "quote",
        fieldAuthor: "author",
        quote: "No quote yet. Have patience young grasshopper",
        author: "No one",
    });

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const randomAPI = quoteAPIList[Math.floor(Math.random() * quoteAPIList.length)];
        // const randomAPI = quoteAPIList[1]; //forismatic is the problematic API here
        axios.get(randomAPI.url).then((res) => {
            console.log(res);
            const {fieldName, fieldAuthor} = randomAPI;
            res.data = res.data.constructor === Array ? res.data[0] : res.data;

            if (typeof res.data === "string") {

                try {
                    res.data = JSON.parse(res.data.replace(/'/g, "u0027")) //replace all instances by using regex "g"
                    // res.data = JSON.parse(res.data) //replace all instances by using regex "g"
                } catch (e) {
                    console.log(`Error in parsing response ${e}`);
                    res.data = {
                        [fieldName]: 'Sometimes shit happens and the best thing to do is failsafe :)',
                        [fieldAuthor]: 'myself'
                    }
                }

            }
            const quote = {...res.data, fieldName, fieldAuthor};
            setQuote(quote);
        })
    }, [refresh]);

    return <div className="bot-header">

        <p className={"bot-quote"}><span>"</span>{quote[quote.fieldName]}<span>"</span></p>
        <p className={"bot-author"}>{quote[quote.fieldAuthor]}</p>
        <TiRefresh className="bot-refresh" onClick = {() => setRefresh(prevState => !prevState)} />

    </div>

};

export default RandomQuotes;