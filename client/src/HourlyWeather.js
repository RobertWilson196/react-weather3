import React from "react";
import { convertTimeStamp } from "./utils";

const HourlyWeather = props => {
  return (
    <section>
        <li>
          <ul>
            Time: {props.data.map((hour, index)=> 
            <li key={index}> 
              {convertTimeStamp(hour.time)}
            </li>)}
          </ul>
          <ul>
            Temperature: {props.data.map((hour, index) => 
            <li key={index}>
              {(hour.temperature)}&deg;F
            </li>)}
          </ul>
        </li>
    </section>
  );
};

export default HourlyWeather;
