import { createStore, applyMiddleware } from 'redux';
import asyncReducer from './reducers';
import thunk from 'redux-thunk';
//import logger from "redux-logger";
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });

const store = createStore(asyncReducer, applyMiddleware(thunk, logger));

export default store;
