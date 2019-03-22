import React from 'react';
import Accordion from './Accordion';

const getQuerySlide = () => {
    return window.location.search.slice(1).split('&').reduce((val, el) => {
        const param = el.split('=');
        return {...val, ...{[param[0]]: param[1]}};
    }, {});
};

const App = () => {
    const {slide} = getQuerySlide();
    return <Accordion activeSlide={parseInt(slide, 10)} />;
};

export default App;
