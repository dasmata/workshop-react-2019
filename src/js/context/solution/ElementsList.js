import React from 'react';
import DeleteElement from './DeleteElement';
import Context from './Context';

export default () => (
    <Context.Consumer>
        {({items, deleteElement}) => (
            <ul>
                {items.map((el) => {
                    return (<li key={el.id}>
                        <span>{el.text}</span> | <DeleteElement onDelete={() => deleteElement(el)}/>
                    </li>);
                })}
            </ul>
        )}
    </Context.Consumer>
)