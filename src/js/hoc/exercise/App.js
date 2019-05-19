/**
 * Create a Higher order component, called withErrorBoundary that ads an
 * error boundary to Fetch component.
 *
 * Fetch should be exported as withErrorBoundary(Fetch)
 *
 * App's render method should be cleaner and easier to read without
 * unnecessary boilerplate represented by the ErrorBoundry component.
 */
import React from 'react';
import Fetch from './Fetch';
import ErrorBoundary from './ErrorBoundary';

const App = (props) => (<div>
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

export default App;
