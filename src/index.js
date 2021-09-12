import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { applyMiddleware,createStore} from 'redux'
import rootReducer from './redux/rootReducer'
import thunk from "redux-thunk"


let mystore=createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
