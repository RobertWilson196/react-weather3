import React, { Component } from 'react';
import HourlyWeather from './HourlyWeather';
import { weather } from './services/weather';
import { isEmptyObject } from './utils';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      value: 0,
      hourWeather: "",
      error: ""
    };

    this.handleLat = this.handleLat.bind(this);
    this.handleLon = this.handleLon.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleSubmit(e)
  {
    e.preventDefault(e);
    console.log('submit');
    weather(this.state.lat, this.state.lon)
      .then(response =>
      {
        console.log('new weather');
        this.setState({ hourWeather: response.data });
      })
      .catch(error =>
      {
        console.log(error);
        this.setState({error: "critical error"})
      });

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Latitude:</label>
          <input placeholder="Enter Latitude"
                 type="number"
                 min="-90"
                 max="90"
                 step="0.1"
                 required
                 value={this.lat}
                 onChange={(e) => this.handleLat(e)} 
                  />

          <label>Longitude:</label>
          <input placeholder="Enter Longitude"
                 type="number"
                 min="-180"
                 max="180"
                 step="0.1"
                 required
                 value={this.lon}
                 onChange={(e) => this.handleLon(e)}
                  />

          <button type="submit">Calculate Weather!</button>

          
        </form>
        { this.state.error ? <h1>{this.state.error}</h1> : '' }
        {/* <pre>{JSON.stringify(this.state.hourWeather, null, 4)}</pre> */}
        {isEmptyObject(this.state.hourWeather) ? "" :
          <HourlyWeather {...this.state.hourWeather}/> }
        

      </div>
    );
  }
}

export default App;
