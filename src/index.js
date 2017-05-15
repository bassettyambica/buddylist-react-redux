import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './js/components/App';
import reducer from './js/reducers/reducer.js';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
// import {createStore} from "redux";
// import buddiesApp from "./js/reducers/reducer.js";
// import {addBuddyToList, expandBuddy, deleteBuddy}  from "./js/actions/index.js";
//
// let store = createStore(buddiesApp);
//
// console.log(store.getState());
// store.dispatch(addBuddyToList({"firstName": "Sandeep","lastName": "kumar"}));
// store.dispatch(addBuddyToList({"firstName": "Ambica","lastName": "Sandeep"}));
// store.dispatch(addBuddyToList({"firstName": "Isha","lastName": "Padmarao"}));
// console.log(store.getState());
// //store.dispatch(expandBuddy(1));
// //console.log(store.getState());
// store.dispatch(deleteBuddy(1));
// console.log(store.getState());
