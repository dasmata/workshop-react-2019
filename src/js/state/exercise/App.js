/**
 * STATE EXERCISE
 *
 * Convert Accordion from a stateless component to a stateful
 * component that keeps count of the displayed slide in it's own state
 *
 * Refactor App to search the slide param on the query string and pass it down to the Accordion
 */

import React from 'react';
import Accordion from './Accordion';

class App extends React.Component {
    state = {slide: 0};

    render () {
        return <Accordion activeSlide={this.state.slide} onSlideChange={(slide) => {
            this.setState({slide});
        }}/>;
    }
}

export default App;