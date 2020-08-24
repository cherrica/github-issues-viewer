import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { initialState } from "./initialState";
import reducer from "./combineReducers";

import AppContainer from "./AppContainer";

const rootElement = document.getElementById("root");

const { store, persistor } = configureStore(initialState, reducer);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  rootElement
);
