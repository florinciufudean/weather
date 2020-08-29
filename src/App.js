import React, { Component } from 'react';
import './App.css';
import * as getWeather from './actions/getWeather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DailyWeather from './components/DailyWeather'

class App extends Component {
  componentDidMount () {
    this.props.getWeather();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          WEATHER
        </header>
        <div className="weather-body">
          <DailyWeather
            weather={this.props.localWeather}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...getWeather,
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  localWeather: state.weather.weather
});

export default connect(mapStateToProps, mapDispatchToProps)(App);