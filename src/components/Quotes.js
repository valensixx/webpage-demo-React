import React, { useEffect, useState } from "react";

/*TASK 3 
Create component Quotes, generating random quote from array in every 10 seconds.
The quotes are taken form array made my me.
*/

export default function Quotes() {
    const [quotes, setQuotes] = useState(['Quote 1', 'Quote 2', 'Quote 3']);
    const [quote, setQuote] = useState('');

    useEffect(() => {
        
    },[]);

    return (
        <div>

        </div>
    );
}