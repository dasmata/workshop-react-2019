import React from 'react';
import CustomComponent from './CustomComponent'




export default class App extends React.Component {
    render(){
        return (<CustomComponent onClick={(e)=>console.log(e.currentTarget)}></CustomComponent>)
    }
}