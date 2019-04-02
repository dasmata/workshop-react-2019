import React from 'react';
import Context from './Context';

export default () => (
    <Context.Consumer>
        {(context)=>(
            <a href={'javascript://'} onClick={context.onShowForm}>+ Add element</a>
        )}
    </Context.Consumer>
);