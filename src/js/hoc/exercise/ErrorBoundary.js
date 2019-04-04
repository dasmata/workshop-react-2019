import React, {Fragment} from 'react';

export default class ErrorBoundary extends React.Component{

    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo){
        this.setState({error, errorInfo});
    }

    render(){
        const {error, errorInfo} = this.state;
        return (
            <Fragment>
                {!error && this.props.children}
                {error && <div>
                    Something went wrong!
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {error.toString()}
                        <br />
                        {errorInfo && errorInfo.componentStack}
                    </details>
                </div>}
            </Fragment>
        )
    }

}