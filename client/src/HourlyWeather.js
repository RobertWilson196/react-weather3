import React from "react";
import { convertTimeStamp } from "./utils";

const HourlyWeather = props => {
  return (
    <section>
        <li>
          <ul>
            {props.data.map((hour, index)=> 
            <li key={index}> 
              Time: {convertTimeStamp(hour.time)}
              Temperature: {(hour.temperature)}&deg;F
            </li>)}
          </ul>
        </li>
    </section>
  );
};

export default HourlyWeather;
