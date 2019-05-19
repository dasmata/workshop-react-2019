/**
 * Implement the basic CR(U)D functionality by using react context
 * Use App's state as a context containing with all the items and the callbacks
 * Use App to render the context provider and to provide the context value:
 * <Context.Provider value>
 *   <ElementsList/>
 *   <AddButton/>
 *   <Form/>
 * </Context.Provider>
 * ElementsList, AddButton and Form should all be context consumers that either
 * render elements or call callbacks that change elements list.
 *
 */
import React, { Component, Fragment } from 'react';
import ElementsList from './ElementsList';
import Form from './Form';

export default class App extends Component {

    state = {
        items: [],
        showForm: false,
    };

    deleteElement = (element) => {
        this.setState({
            items: this.state.items.filter((el) => {return el !== element;}),
        });
    };

    showForm = () => {
        this.setState({
            showForm: true,
        });
    };

    onAdd = (text) => {
        this.setState({
            items: [...this.state.items, {id: this.state.items.length + 1, text}],
            showForm: false,
        });
    };

    render () {
        return (
            <Fragment>
                <ElementsList items={this.state.items} onDelete={this.deleteElement}/>
                <a href={'javascript://'} onClick={this.showForm}>+ Add element</a>
                <Form show={this.state.showForm} onAdd={this.onAdd}/>
            </Fragment>

        );
    }

}