import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom';

import combinedStore from './reducers/'

import AppComponent from './containers/AppComponent';

import mySaga from './sagas'

import './App.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;
