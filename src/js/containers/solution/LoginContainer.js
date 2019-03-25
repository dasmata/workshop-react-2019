import React from 'react';
import Loader from './Loader/index';
import LoginComponent from './LoginComponent';

const submitLogin = (username, password) => {
    return new Promise((done, fail) => {
        setTimeout(() => {
            done();
        }, 2000);
    });
};

class LoginContainer extends React.Component {
    state = {
        username: '',
        password: '',
        loading: false,
    };

    submit = () => {
        if (this.state.username === '' || this.state.password === '') {
            console.error('Invalid form data');
            return;
        }
        this.setState({loading: true}, () => {
            submitLogin(this.state.username, this.state.password).then(() => {
                this.props.onLogin({
                    'username': this.state.username,
                    'password': this.state.password,
                });
            });
        });
    };

    render () {
        return (<Loader loading={this.state.loading}>
            <LoginComponent
                onFieldChange={(field) => this.setState(field)}
                onSubmit={this.submit}
                username={this.state.username}
                password={this.state.password}
            />
        </Loader>);
    }
}

export default LoginContainer;