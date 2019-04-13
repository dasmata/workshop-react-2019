import React, {useContext} from 'react';
import ListContext from './listContext';

export default () => {
    const {items} = useContext(ListContext);

    return (
        <ul>
            {items.map((el, idx)=>{
                return <li key={idx}>{`${el.title} - ${el.description}`}</li>
            })}
        </ul>
    )
}