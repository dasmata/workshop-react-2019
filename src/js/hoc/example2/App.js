import React from 'react';
import Temperature from './Temperature';
import Humidity from './Humidity';

export default class App extends React.Component {
    componentDidMount(){
        console.log(this.refs.test);
    }
    render () {
        return (<div>
            <Temperature/>
            <Humidity/>
        </div>);
    }
}