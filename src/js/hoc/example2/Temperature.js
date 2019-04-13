import React from 'react'
import withWeather from './WithWeatherHOC';

const Temperature =  (props) => (
    <div>{props.temperature}</div>
);

export default withWeather(Temperature);