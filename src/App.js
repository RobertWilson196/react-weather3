import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.setState({
      lat: 0,
      lon: 0,
    })
    this.handleLat = this.handleLat.bind(this);
    this.handleLon = this.handleLon.bind(this);
  }

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

  render() {
    return (
      <div className="App">
        <form>
          <label>Latitude:</label>
          <input onChange={(e) => handleLat(e)} type="number" />
          <label>Longitude:</label>
          <input onChange={(e) => handleLon(e)} type="number" />
          <button type="submit">Calculate Weather!</button>
        </form>
      </div>
    );
  }
}

export default App;
