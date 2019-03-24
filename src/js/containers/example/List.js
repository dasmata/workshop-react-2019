import React from 'react';

export default ({data}) => (
    <div>
        {data.length > 0 && <ul>
            {data.map((el) => {
                return <li key={`${el.id}_${el.version}`}>{el.title} :  {el.text}</li>
            })}
        </ul>}
        {data.length === 0 && <div>No elements</div>}
    </div>
)