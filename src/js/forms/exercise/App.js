/**
 * FORMS EXERCISE
 *
 * Write a validate function that validates the input on blur and on submit, for a non-empty value.
 * The errors should appear below the input and if there is an error, the input
 * should have the "error" class
 */

import React from 'react';

export default class App extends React.Component {

    state = {
        first: '',
    };

    handleChange (field) {
        this.setState({
            [field.name]: field.value,
        });
    }

    render () {
        return (<form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>
                    <div>1st field</div>
                    <input
                        type={'text'}
                        value={this.state.first}
                        name={'first'}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}
                    />
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}