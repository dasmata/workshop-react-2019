import React from 'react';
import DeleteElement from './DeleteElement';

export default ({items, onDelete}) => (
    <ul>
        {items.map((el) => {
            return (<li key={el.id}>
                <span>{el.text}</span> | <DeleteElement onDelete={() => onDelete(el)}/>
            </li>);
        })}
    </ul>
)