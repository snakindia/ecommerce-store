import { createStore, applyMiddleware, combineReducers } from 'redux';
import asyncReducer from './reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notificationReducer from './components/Notification/notification.reducer';

const logger = createLogger({ collapsed: true });
const rootReducer = combineReducers({
  asyncReducer,
  notification: notificationReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
