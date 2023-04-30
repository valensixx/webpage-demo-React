import React, { useEffect, useState } from "react";

/*TASK 3 
Create component Quotes, generating random quote from array in every 10 seconds.
The quotes are taken form array made my me.
*/

export default function Quotes() {
    const [quotes, setQuotes] = 
    useState([
    'Only actions can speak the truth.', 
    'The future belongs to those who believe in the beauty of their dreams.', 
    'If you want to go fast, go alone. If you want to go far, go together.', 
    'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    ]);
    const [quote, setQuote] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {
            let min = 0;
            let max = quotes.length - 1;
            let rndIndex = Math.floor(Math.random() * (max - min + 1)) + min;
            //console.log(rndIndex);
            setQuote(quotes[rndIndex]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {quote}
        </div>
    );
}