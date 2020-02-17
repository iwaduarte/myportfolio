import React, {useState, useEffect} from 'react';

import quoteAPIList from "./QuoteAPIList.json"
import axios from 'axios';


const RandomQuotes = props => {

    const [quote, setQuote] = useState({
        fieldName: "quote",
        fieldAuthor: "author",
        quote: "No quote yet. Have patience young grasshopper",
        author: "No one",
        isDefault: true
    });

    const axiosConfig = {
        headers: {'Access-Control-Allow-Origin': "*"},
    }
    useEffect(() => {
        const randomAPI = quoteAPIList[Math.floor(Math.random() * quoteAPIList.length)];
        axios.get(randomAPI.url).then((res) => {
            console.log(res);
            const {fieldName, fieldAuthor} = randomAPI;
            res.data = res.data.constructor === Array ? res.data[0]: res.data;
            const quote = {...res.data, fieldName, fieldAuthor};
            setQuote(quote);
        })
    }, []);

    return <div>

        <p>{quote[quote.fieldName]}</p>
        <p>{quote[quote.fieldAuthor]}</p>

    </div>

};

export default RandomQuotes;