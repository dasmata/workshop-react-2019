/**
 * CONTAINERS EXERCISE
 *
 * Refactor the App component in such a way that all the logic
 * is moved in a LoginContainer.
 * LoginContainer should implement a on login method to notify App Componennt
 * when the login occurs so that App can display de welcome message
 */
import React from 'react';
import Loader from './Loader/index';

const submitLogin = (username, password) => {
    return new Promise((done, fail) => {
        setTimeout(() => {
            done();
        }, 2000);
    });
};

export default class App extends React.Component {

    state = {
        username: '',
        password: '',
        loading: false,
        auth: false
    };

    submit () {
        if (this.state.username === '' || this.state.password === '') {
            console.error('Invalid form data');
            return;
        }
        this.setState({loading: true}, () => {
            submitLogin(this.state.username, this.state.password).then(() => {
                this.setState({
                    loading: false,
                    auth: true
                });
            });
        });

    }

    render () {
        return (<Loader loading={this.state.loading}>
            {!this.state.auth && <form onSubmit={(e) => {
                e.preventDefault();
                this.submit();
            }}>
                <label>
                    <div>Username</div>
                    <input
                        name={'username'}
                        placeholder={'ex:johndoe2014'}
                        onChange={(e) => this.setState({username: e.target.value})}
                        value={this.state.username}
                    />
                </label>
                <label>
                    <div>Password</div>
                    <input
                        name={'password'}
                        type={'password'}
                        placeholder={'your password'}
                        onChange={(e) => this.setState({password: e.target.value})}
                        value={this.state.password}
                    />
                </label>
                <div>
                    <button>Login</button>
                </div>
            </form>}
            {this.state.auth && <h1>WELCOME {this.state.username}!!!</h1>}
        </Loader>);
    }
}