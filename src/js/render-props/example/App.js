import React from 'react';
import CustomComponent from './CustomComponent'


export default class App extends React.Component {
    render(){
        return (<CustomComponent>
            {(nr)=>(<div>Test {nr}</div>)}
        </CustomComponent>)
    }
}
