import React from 'react';
import RadioGroup from './RadioGroup';

class App extends React.Component {

    state = {
        value: "Second"
    };

    onChange = value => {
        this.setState({ value });
    };

    render () {
        return (
            <RadioGroup onChange={this.onChange} value={this.state.value}>
                <h5>Value: {this.state.value}</h5>
                <RadioGroup.Option value={'First'} label={'1st'}/>
                <RadioGroup.Option value={'Second'}/>
                <RadioGroup.Option value={'Third'}/>
            </RadioGroup>
        );
    }

}

export default App;
