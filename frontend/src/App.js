import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';


const API_KEY = '37ae7082326f852682b047bfc4381ace';

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    conditions: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try{
    const data = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    
    if(city && country ) {
      this.setState({
        temperature: data.data.main.temp,
        city: data.data.name,
        country: data.data.sys.country,
        humidity: data.data.main.humidity,
        conditions: data.data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        conditions: undefined,
        error: 'Please enter the city name and country name'
      })
    }
    
    } catch(error) {
      console.log(error);
    };
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          conditions={this.state.conditions}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
