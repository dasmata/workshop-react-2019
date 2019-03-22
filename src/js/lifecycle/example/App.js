import React from "react";
import Loader from "./Loader";


class App extends React.Component {

    state = {
        loading: true
    };

    static getDerivedStateFromProps(props, state){
        return state;
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    shouldComponentUpdate(){

    }

    componentDidUpdate(){

    }

    render(){
        return <Loader loading={this.state.loading} />;
    }
}

export default App;