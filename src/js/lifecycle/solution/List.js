import React from 'react';
import './App.scss';

const data = [
    {title: '1st title'},
    {title: 'second title'},
    {title: 'third title'},
];

const fetchExternalData = () => {
    console.count('fetch');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.shift() || []);
        }, 100);
    });
};

class List extends React.Component {

    state = {
        data: [],
    };

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            fetchExternalData().then((data) => {
                this.setState({data: this.state.data.concat(data), loading: false});
            });
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.data.length !== this.state.data.length;
    }

    componentDidUpdate(){
        this.props.onData(this.state.data);
    }

    render () {
        return <ul>
                {this.state.data.map((el, idx) => {
                    return <li key={idx}>{el.title}</li>;
                })}
            </ul>;
    }
}

export default List;