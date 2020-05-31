import React, { useState, useEffect } from 'react';

function HooksVersion() {
    const [getDate, setDate] = useState(new Date());
    const [getCount, setCount] = useState(0);

    useEffect(() => {
        console.log("This effect will run when the component mounts & when the component updates!");
    })

    useEffect(() => {
        console.log("This will only run when the component mounts - then never again!");
    }, []);

    useEffect(() => {
        console.log("This will run whenever we update the Date");

    }, [getDate]);

    useEffect(() => {
        console.log("This will run whenever we update the count");

    }, [getCount]);

    useEffect(() => {
        console.log("This will run whenever we update the date OR when we update the count");

    }, [getDate, getCount]);

    return (
        <div>
            <h2>Values</h2>
            <p>{getDate.toLocaleDateString()}</p>
            <button onClick={() => setDate(new Date(2020, 5, 1))}>Set the Date to June 1.</button>
            <p>{getCount}</p>
            <button onClick={() => setCount(getCount + 1)}>Increment the Counter!</button>
        </div>
    );
}

export default HooksVersion;
