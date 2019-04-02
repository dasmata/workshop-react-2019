import React, { Component } from 'react';

export default class Form extends Component {
    state = {text: ''};

    componentDidUpdate () {
        this.nameInput.focus();
    }

    render () {
        return (<div style={{display: this.props.show ? 'block' : 'none'}}>
            <input
                type={'text'}
                placeholder={'item text'}
                value={this.state.text}
                ref={(input) => { this.nameInput = input; }}
                onChange={(e) => this.setState({text: e.target.value})}
            />
            <button onClick={() => {
                if (this.state.text.trim() !== '') {
                    this.props.onAdd(this.state.text);
                    this.setState({text: ''});
                }
            }}>Add
            </button>
        </div>);
    }
}