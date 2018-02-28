import React from 'react';

const HourlyWeather = (props) => 
{
    return(
    <ul>
        <li>Time: {props.time}</li>
        <li>Temperature: {props.temperature}</li>
    </ul>
    );
}

export default HourlyWeather;