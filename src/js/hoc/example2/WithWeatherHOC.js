import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
const getWeather = ()=>{
    return new Promise((done, fail)=>{
        setTimeout(()=>{
            done({
                temperature: 12,
                humidity: 50
            })
        }, 2000);
    });
};

export default (Component) => {
    class WithWeather extends React.Component {

        state = {
            temperature: null,
            humidity: null,
            loaded: false
        };

        componentDidMount(){
            getWeather().then((values)=>{
                this.setState({...values, loaded: true});
            })
        }

        render(){
            return this.state.loaded ? <Component {...this.state} {...this.props} /> : <div>Loading...</div>
        }
    }
    // Use a displayName that identifies this as a HOC
    WithWeather.displayName = `withWeather(${getDisplayName(
        Component,
    )})`;

    // Make sure all refs are forwarded to the right
    // component.
    function forwardRef (props, ref) {
        return <WithWeather {...props} forwardRef={ref}/>;
    }

    // Also set the displayName on the forwardRef function,
    // which will cause the ForwardRef component to show
    // up as `ForwardRef(witErrorBoundary(Foo))`
    // in the devtools.
    forwardRef.displayName = WithWeather.displayName;

    const ForwardRef = React.forwardRef(forwardRef);

    // Hoist all non-React static methods from the
    // WrappedComponent. If you're using forwardRef, make
    // sure you hoist the statics to the component returned
    // by ForwardRef, not the component it wraps!
    hoistStatics(ForwardRef, Component);
    return ForwardRef;
}