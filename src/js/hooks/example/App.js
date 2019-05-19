import React, { useState, useEffect } from 'react';

export default ({bla}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (<div>
        <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
    </div>);
}