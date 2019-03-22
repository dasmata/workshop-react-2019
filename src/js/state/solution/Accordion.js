import React from 'react';

const slides = [
    {title: 'slide 1', text: 'You\'ve oppened the first slide'},
    {title: 'slide 2', text: 'Praise the FSM!!! The second slide is here!'},
    {title: 'slide 3', text: 'Excellent! You\'ve made it to the 3rd slide!'},
];

export default class Accordion extends React.Component {

    state = {activeSlide : null};

    static getDerivedStateFromProps(props, state){
        if(state.activeSlide === null && !isNaN(props.activeSlide)){
            return {activeSlide: props.activeSlide};
        }
        return null
    };

    render () {
       return <dl>
            {slides.map((el, idx) => ([
                <dt key={`title_${idx}`}>
                    <a href={'javascript://'} onClick={() => this.setState({activeSlide: idx})}>{el.title}</a>
                </dt>,
                <dd key={`text_${idx}`} style={{display: this.state.activeSlide === idx ? 'block' : 'none'}}>{el.text}</dd>,
            ]))}
        </dl>;
    }

}