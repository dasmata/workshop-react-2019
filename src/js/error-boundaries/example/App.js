import React from 'react';
import BuggyComponent from './BuggyComponent';
import ErrorBoundary from './ErrorBoundary';

export default class App extends React.Component {

    render () {
        return (<div>
            <h1>Error boundry page</h1>
            <ErrorBoundary>
                <BuggyComponent/>
            </ErrorBoundary>
            <div>The text after the button</div>
        </div>);
    }

}