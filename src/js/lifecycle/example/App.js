import React from "react";
import Loader from "./Loader";
import './App.scss';

const fetchExternalData = ()=>{
    console.count("fetch");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {title: "1st title"},
                {title: "second title"},
                {title: "third title"}
            ])
        }, 1000);
    });
};


class App extends React.Component {

    state = {
        loading: true,
        data: []
    };

    static getDerivedStateFromProps(props, state){
        return state;
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        setInterval(()=> {
            fetchExternalData().then((data) => {
                this.setState({[...this.state.data, ...data], loading: false});
            });
        }, 5000);
    }

    componentDidUpdate(){
    }

    componentWillUnmount(){
        //cleanup
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.loading !== this.state.loading
            || nextState.data.length !== this.state.data.length;
    }

    render(){
        console.count("render");
        return <Loader loading={this.state.loading}>
            <ul>
            {this.state.data.map((el, idx)=>{
                return <li key={idx}>{el.title}</li>
            })}
            </ul>
        </Loader>;
    }
}

export default App;