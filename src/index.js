import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { countReducer } from './redux/reducer';

const Middleware = [logger];

const rootReducer = combineReducers({
    count: countReducer
});

const store = createStore(rootReducer,applyMiddleware(...Middleware));


ReactDOM.render(
  <Provider store={store}>
      <App /> 
  </Provider>
    ,
  document.getElementById('root')
);


