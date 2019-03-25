import React from 'react';
import LoginContainer from './LoginContainer';
import WelcomeComponent from './WelcomeComponent';

class App extends React.Component {

    state = {
        user: null,
    };

    onLogin = (user) => {
        this.setState({user});
    };

    render () {
        return this.state.user === null ? (<LoginContainer onLogin={this.onLogin}/>) : (<WelcomeComponent username={this.state.user.username}/>);
    }
}

export default App;