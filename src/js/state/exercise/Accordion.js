import React from 'react';

const slides = [
    {title: 'slide 1', text: 'You\'ve oppened the first slide'},
    {title: 'slide 2', text: 'Praise the FSM!!! The second slide is here!'},
    {title: 'slide 3', text: 'Excellent! You\'ve made it to the 3rd slide!'},
];

const Accordion = ({onSlideChange, activeSlide}) => (
    <dl>
        {slides.map((el, idx) => ([
            <dt key={`title_${idx}`}>
                <a href={'javascript://'} onClick={() => onSlideChange(idx)}>{el.title}</a>
            </dt>,
            <dd key={`text_${idx}`} style={{display: activeSlide === idx ? 'block' : 'none'}}>{el.text}</dd>,
        ]))}
    </dl>
);

export default Accordion;