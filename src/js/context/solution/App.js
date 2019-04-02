import React, { Component, Fragment } from 'react';
import ElementsList from './ElementsList';
import Context from './Context';
import Form from './Form';
import AddButton from './AddButton';

export default class App extends Component {

    state = {
        items: [],
        showForm: false,
        deleteElement: (element) => {
            this.setState({
                items: this.state.items.filter((el) => {return el !== element;}),
            });
        },
        onShowForm: () => {
            this.setState({
                showForm: true,
            });
        },
        onAdd: (text) => {
            this.setState({
                items: [...this.state.items, {id: this.state.items.length + 1, text}],
                showForm: false,
            });
        },
    };

    getContext () {
        return this.state;
    }

    render () {
        return (
            <Context.Provider value={this.getContext()}>
                <section>
                <ElementsList/>
                </section>
                <div>
                <AddButton/>
                </div>
                <div>
                <Form/>
                </div>
            </Context.Provider>

        );
    }

}