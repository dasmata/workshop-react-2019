import React, { Component } from 'react';
import Context from './Context';

export default class Form extends Component {
    state = {text: ''};

    componentDidUpdate () {
        this.nameInput.focus();
    }

    render () {
        return (<Context.Consumer>
            {({onAdd, showForm}) => (<div style={{display: showForm ? 'block' : 'none'}}>
                <input
                    type={'text'}
                    placeholder={'item text'}
                    value={this.state.text}
                    ref={(input) => { this.nameInput = input; }}
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <button onClick={() => {
                    if (this.state.text.trim() !== '') {
                        onAdd(this.state.text);
                        this.setState({text: ''});
                    }
                }}>Add
                </button>
            </div>)}
        </Context.Consumer>);
    }
}