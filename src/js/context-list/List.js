import React from 'react';
import AddButton from './AddButton';
import Form from './Form';
import Grid from './Grid';

import ListContext from './listContext'

export default class List extends React.Component {

    static AddButton = AddButton;
    static Form = Form;
    static Grid = Grid;

    constructor (props) {
        super(props);
        this.state = {
            onShowForm: this.onShowForm,
            onSubmit: this.onSubmit,

            showForm: false,
            items: []
        };
    }

    onShowForm = () => {
        this.setState({showForm: true});
    };

    onSubmit = (values) => {
        this.setState({
            items: [...this.state.items, values]
        })
    }

    getValue () {
        return this.state;
    }

    render () {
        return (<ListContext.Provider value={this.getValue()}>
            {this.props.children}
        </ListContext.Provider>);
    }

}