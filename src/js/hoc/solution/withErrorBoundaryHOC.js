import React, { Component, Fragment } from 'react';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withErrorBoundary (WrappedComponent) {
    class ErrorBoundary extends Component {

        state = {
            error: null,
            errorInfo: null,
        };

        componentDidCatch (error, errorInfo) {
            this.setState({error, errorInfo});
        }

        render () {
            const {error, errorInfo} = this.state;
            return (
                <Fragment>
                    {!error && <WrappedComponent {...this.props} />}
                    {error && <div>
                        Something went wrong!
                        <details style={{whiteSpace: 'pre-wrap'}}>
                            {error.toString()}
                            <br/>
                            {errorInfo && errorInfo.componentStack}
                        </details>
                    </div>}
                </Fragment>
            );
        }

    }

    // Use a displayName that identifies this as a HOC
    ErrorBoundary.displayName = `withErrorBoundary(${getDisplayName(
        WrappedComponent,
    )})`;

    // Make sure all refs are forwarded to the right
    // component.
    function forwardRef (props, ref) {
        return <ErrorBoundary {...props} forwardRef={ref}/>;
    }

    // Also set the displayName on the forwardRef function,
    // which will cause the ForwardRef component to show
    // up as `ForwardRef(witErrorBoundary(Foo))`
    // in the devtools.
    forwardRef.displayName = ErrorBoundary.displayName;

    const ForwardRef = React.forwardRef(forwardRef);

    // Hoist all non-React static methods from the
    // WrappedComponent. If you're using forwardRef, make
    // sure you hoist the statics to the component returned
    // by ForwardRef, not the component it wraps!
    hoistStatics(ForwardRef, WrappedComponent);
    return ForwardRef;
}

export default withErrorBoundary;