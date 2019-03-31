import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react-redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UiReducer from './store/reducers/ui-reducer';

// localization
import { IntlProvider } from 'react-intl';
import messages from "./locale";

import ReduxThunk from 'redux-thunk' // no changes here 😀


const rootReducer = combineReducers({
  ui: UiReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en" messages={messages.en}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
