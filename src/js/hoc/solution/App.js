/**
 * Create a Higher order component that ads the ErrorBoundary
 * behaviour
 */
import React from 'react';
import Fetch from './Fetch';

export default class App extends React.Component {

    render () {
        return (<div>
            <h1>Error boundry exercise</h1>
            <Fetch url="http://test.com">
                {({loading, error, data}) => {
                    return loading === true ? <p>Loading...</p> : <p>{data.object.text}</p>;
                }}
            </Fetch>
            <div>The text after the button</div>
        </div>);
    }
}