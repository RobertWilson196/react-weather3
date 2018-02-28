import React, { Component } from 'react';
import HourlyWeather from './HourlyWeather';
import { weather } from './services/weather';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      value: 0
    };
    this.handleLat = this.handleLat.bind(this);
    this.handleLon = this.handleLon.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  //Event Handlers
  handleLat(e)
  {
    console.log('lat');
    this.setState({
      lat: +e.target.value
    })
  }

  handleLon(e)
  {
    console.log('lon');
    this.setState({
      lon: +e.target.value
    })
  }

  getWeather(lat, lon)
  {
    weather(lat,lon)
      .then( response => 
      {
        console.log(response.data.hourly);
      })
      .catch( error =>
      {
        console.log(error);
      });

  }

  handleSubmit(e)
  {
    e.preventDefault(e);
    this.getWeather(this.lat, this.lon);

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
            {this.getWeather(50,20)};
          <label>Latitude:</label>
          <input placeholder="Enter Latitude"
                 type="number"
                 min="-90"
                 max="90"
                 step="0.001"
                 value={this.lat}
                 onChange={(e) => this.handleLat(e)} 
                  />

          <label>Longitude:</label>
          <input placeholder="Enter Longitude"
                 type="number"
                 min="-180"
                 max="180"
                 step="0.001"
                 value={this.lon}
                 onChange={(e) => this.handleLon(e)}
                  />

          <button type="submit">Calculate Weather!</button>
        </form>
      </div>
    );
  }
}

export default App;
