import React from "react";
import { convertTimeStamp } from "./utils";

const HourlyWeather = props => {
  return (
    <section>
      <ul>
        <li>Time: {convertTimeStamp(props.time)}</li>
        <li>Temperature: {props.temperature}&deg;F</li>
      </ul>
    </section>
  );
};

export default HourlyWeather;
