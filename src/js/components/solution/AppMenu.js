import React, { Component } from 'react';

export default class AppMenu extends Component {

    handleItemClick = (idx) => {
        if (!!this.props.config[idx]) {
            console.log(this.props.config[idx]);
            typeof this.props.onClick === 'function' && this.props.onClick(this.props.config[idx]);
        } else {
            console.error(`Invalid menu item index: ${idx}`);
        }
    };

    render () {
        const {config} = this.props;
        return (<header>
            <ul>
                {config.map((el, idx) => {
                    return (<li key={`${idx}_${el}`}>
                        <a href={'javascript://'} onClick={()=>this.handleItemClick(idx)} title={el}>{el}</a>
                    </li>);
                })}
            </ul>
        </header>);
    }
}