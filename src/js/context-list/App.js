import React from 'react';
import List from './List';

export default () => {
    return (
        <List>
            <List.Form />
            <List.Grid />
            <List.AddButton />
        </List>
    )
}