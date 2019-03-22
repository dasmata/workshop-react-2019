import React from "react";

export default class Counter extends React.Component {

    static getDerivedStateFromProps(props, state){
        const key = props.visible ? "visibleCount" : "hiddenCount";
        return {
            [key] : state[key] + 1
        }
    };

    state = {
        visibleCount: 0,
        hiddenCount: 0
    };

    render(){
        const {visible} = this.props;
        const count = visible ? this.state.visibleCount : this.state.hiddenCount;

        return (
            <div>The {visible ? "visible" : "hidden"} count is {count}</div>

        )
    }
}