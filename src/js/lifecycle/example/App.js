import React from 'react';
import Loader from './Loader';
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

class App extends React.Component {

    state = {
        loading: true,
        data: [],
    };

    static getDerivedStateFromProps (props, state) {
        return state;
    }

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            fetchExternalData().then((data) => {
                this.setState({data: this.state.data.concat(data), loading: false});
            });
        }, 1000);
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextState.loading !== this.state.loading
            || nextState.data.length !== this.state.data.length;
    }

    render () {
        console.count('render');
        return <Loader loading={this.state.loading}>
            <ul>
                {this.state.data.map((el, idx) => {
                    return <li key={idx}>{el.title}</li>;
                })}
            </ul>
        </Loader>;
    }
}

export default App;