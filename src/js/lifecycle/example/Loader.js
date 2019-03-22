import React from "react";
import Loader from 'react-loaders';
import 'loaders.css/src/animations/line-scale.scss';


export default (props) => (
    <React.Fragment>
        {props.loading && <Loader type={"line-scale"} active={true} />}
        {!props.loading && props.children}
    </React.Fragment>
)
