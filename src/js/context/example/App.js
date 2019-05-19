import React from 'react';
import CustomComponent from './CustomComponent';
import Context from './LinkContext';

export default class App extends React.Component {

    state = {
        onClick : (e)=>console.log(e)
    };

    getValue () {
        return this.state;
    }

    render () {
        return (
            <Context.Provider value={this.getValue()}>
                <CustomComponent />
                <div>

                </div>
            </Context.Provider>
        );
    }
}