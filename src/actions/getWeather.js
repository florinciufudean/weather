import axios from 'axios';
import * as actionTypes from './actionTypes';

const headers = {
  'Content-Type': 'application/json',
};

export function getWeather() {
  //function to get the weather from London
  return async function (dispatch) {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ad232c5285db15075e3e2ece306f1649', 
      	{}, 
      	{ headers: headers})
      .then(function (response) {
        dispatch({
          type: actionTypes.GET_WEATHER,
          weather: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
