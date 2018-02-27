import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.setState({
      lat: 0,
      lon: 0,
      value: 0
    });
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
    require('dotenv').config();
    const API_KEY = process.env;

    const url = `https://api.darksky.net/forecast/${API_KEY}/0,0`
    axios.get(url)
      .then(res => {
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>

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
