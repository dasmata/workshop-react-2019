/**
 * LIFECYCLE EXERCISE
 *
 * Add the necessary lifecycle methods to list in order to
 * hide the loader and activate the restart button
 */

import React from 'react';
import Loader from './Loader';
import List from './List';

import './App.scss';

class App extends React.Component {

    state = {
        loading: true,
    };

    restart = ()=>{
        this.setState({loading: true});
    };

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <React.Fragment>
                {this.state.loading && <Loader loading={this.state.loading} /> }
                <List onData={(data)=>{
                    if(data.length > 0){
                        this.setState({loading: false})
                    }
                }} />
            </React.Fragment>
        );
    }
}

export default App;