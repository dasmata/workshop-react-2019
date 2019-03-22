import React, { Fragment } from 'react';
import Counter from "./Counter";

class App extends React.Component {

    state = {
        visible: false,
    };

    toggleText = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    render () {
        const {visible} = this.state;
        return (
            <div>
                {visible && <div>This text's visibility is controlled by state</div>}
                <div>
                    <div><a href={'javascript://'} onClick={this.toggleText}>{visible ? 'Hide' : 'Show'}</a></div>
                </div>
                <Counter visible={visible} />
            </div>
        );
    }

}

export default App;