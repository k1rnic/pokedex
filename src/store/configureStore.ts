/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './index';

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer(), preloadedState, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
