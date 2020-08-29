import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import AppComponent from './../App';
 
const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      weather: {"weather" :{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":287.9,"feels_like":284.03,"temp_min":286.48,"temp_max":288.71,"pressure":1010,"humidity":67},"visibility":10000,"wind":{"speed":5.1,"deg":320},"clouds":{"all":75},"dt":1598714040,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1598677744,"sunset":1598727246},"timezone":3600,"id":2643743,"name":"London","cod":200}}
    });
 
 	store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
  	expect(component.toJSON()).toMatchSnapshot();
 
  });
});

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      weather: {"weather" : ""}
    });
 
 	store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  });
 
  it('should render with no data Redux store', () => {
  	expect(component.toJSON()).toMatchSnapshot();
  });
});