import React from 'react';

const TEST = 2;

export default (props) => (props.render ? props.render(TEST) : props.children(TEST))