import React, {useState, useEffect} from 'react';
import quoteAPIList from "./QuoteAPIList.json"
import axios from 'axios';

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
        // const randomAPI = quoteAPIList[1];
        axios.get(randomAPI.url).then((res) => {
            console.log(res);
            const {fieldName, fieldAuthor} = randomAPI;
            res.data = res.data.constructor === Array
                ? res.data[0]
                : typeof res.data === "string"
                    ? JSON.parse(res.data.replace("'","u0027"))
                    : res.data;
            const quote = {...res.data, fieldName, fieldAuthor};
            setQuote(quote);
        })
    }, [refresh]);

    return <div>

        <p>{quote[quote.fieldName]}</p>
        <p>{quote[quote.fieldAuthor]}</p>
        <button onClick={()=>setRefresh(prevState => !prevState)}> Refresh</button>

    </div>

};

export default RandomQuotes;