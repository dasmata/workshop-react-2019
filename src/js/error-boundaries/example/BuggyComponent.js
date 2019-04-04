import React, {useState} from 'react';


export default () => {
    const [count, setCount] = useState(0);

    if(count === 5){
        throw new Error("Oh NOOOO!");
    }

    return (
        <button onClick={()=>setCount(count+1)}>clicked {count}!</button>
    )
}