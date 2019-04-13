import React, {useContext} from 'react';
import ListContext from './listContext';

export default (props) => {
    const ctx = useContext(ListContext);

    return (<a href={'javascript://'} onClick={ctx.onShowForm}>Add element</a>)
}