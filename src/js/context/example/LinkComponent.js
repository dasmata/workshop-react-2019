import React from 'react';
import Context from './LinkContext';

export default () => (
    <Context.Consumer>
        {(ctx)=>{
           return (<a href={'javascript://'} onClick={ctx.onClick}>click me!</a>);
        }}
    </Context.Consumer>
)
