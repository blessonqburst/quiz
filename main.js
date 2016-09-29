import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Instructions from './src/components/Instructions.jsx';
import Questionfirst from './src/components/Questionfirst.jsx';
import Result from './src/components/Result.jsx';
import { createStore } from 'redux';
import App from './src/components/App.jsx';
import Reduxstate from './reducers/reducer.js';

let store = createStore(Reduxstate);
ReactDOM.render((
  <Provider store = {store}>
    <Router history = {browserHistory}>
      <Route path = "/" component = {App}/>
      <Route path = "instructions" component = {Instructions} />
      <Route path = "question" component = {Questionfirst} />
      <Route path = "result" component = {Result} />
    </Router>
 </Provider>
 ), document.getElementById('app'));
