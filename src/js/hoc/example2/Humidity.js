import React from 'react'
import withWeather from './WithWeatherHOC';

const Humidity =  (props) => (
    <div>{props.humidity}</div>
);

export default withWeather(Humidity);