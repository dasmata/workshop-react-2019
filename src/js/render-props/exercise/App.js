/**
 *
 */

import React, { Component } from 'react';
import './App.css';

import Fetch from './Fetch';

class App extends Component {
    render() {
        return <Fetch url={"www.google.com"} />;
    }
}

export default App;
