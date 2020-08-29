import * as actionTypes from '../actions/actionTypes';

const initialState = {
  weather: {},
};

const weather = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_WEATHER:
        return Object.assign({}, state, {
          weather: action.weather
        })
      default:
        return state
    }
  }
  
  export default weather