import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducer";
import secureLocalStorage from "react-secure-storage";


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    secureLocalStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}

export function loadFromLocalStorage() {
  try {
    const serializedState = secureLocalStorage.getItem("state");
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
      <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
