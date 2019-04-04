/**
 * Create a Higher order component that ads the ErrorBoundary
 * behaviour
 */
import React from 'react';
import Fetch from './Fetch';
import ErrorBoundary from './ErrorBoundary';

export default class App extends React.Component {

    render () {
        return (<div>
            <h1>Error boundry exercise</h1>
            <ErrorBoundary>
                <Fetch url="http://test.com">
                    {({loading, error, data}) => {
                        return loading === true ? <p>Loading...</p> : <p>{data.object.text}</p>;
                    }}
                </Fetch>
            </ErrorBoundary>
            <div>The text after the button</div>
        </div>);
    }
}