import React, { Component } from 'react';
import './../App.css';

class DailyWeather extends Component {
  // convert the value from fahrenheit to celsius
  temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    return Math.round(valNum-273.15);
  }

  renderWeatherConditions = (weather) => {
    if (weather.weather && weather.weather[0]) {
      return (
        <p>{weather.weather[0].main}</p>
        )
    }
    return;
  }

  renderTemperature = (weather) => {
    if (weather.main) {
      return (
        <div>
          <p>{this.temperatureConverter(weather.main.temp)}&#8451; feels like
            {' ' + this.temperatureConverter(weather.main.feels_like)}&#8451;</p>
          <p>Humidity: {weather.main.humidity + '%'}</p>
          <p>Pressure: {weather.main.pressure + 'hPa'}</p>
        </div>
        )
    }
    return;
  }

  render() {
    const { weather } = this.props;
      return (
        <div>
          <p className="weather-city">{weather.name}</p>
          {this.renderWeatherConditions(weather)}
          {this.renderTemperature(weather)}
        </div>
    )
    
  }
}


export default DailyWeather;

