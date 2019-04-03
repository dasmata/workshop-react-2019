import React from 'react';

export default (props) => (props.render ? props.render() : props.children())