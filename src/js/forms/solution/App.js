import React from 'react';
import 'my.css';

export default class App extends React.Component {

    state = {
        first: '',
        error: '',
    };

    handleChange (field) {
        this.setState({
            [field.name]: field.value,
        });
    }

    validate () {
        return new Promise((done) => {
            if (this.state.first.trim() === '') {
                this.setState(
                    {error: 'This field is mandatory'},
                    () => {
                        done();
                    },
                );
            } else {
                this.setState(
                    {error: ''},
                    () => {
                        done();
                    },
                );
            }
        });
    }

    submit () {
        this.validate().then(() => {
            console.log(this.state);
        });
    }

    render () {
        return (<form onSubmit={(e) => {
                e.preventDefault();
                this.submit();
            }}>
                <label>
                    <div>1st field</div>
                    <input
                        type={'text'}
                        value={this.state.first}
                        name={'first'}
                        className={this.state.error === '' ? '' : 'error'}
                        onBlur={() => {this.validate();}}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}
                    />
                    <div>{this.state.error}</div>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}
