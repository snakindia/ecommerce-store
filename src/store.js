import { createStore, applyMiddleware, combineReducers } from 'redux';
import asyncReducer from './reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notificationReducer from './components/Notification/notification.reducer';
import auth from './reducers/auth';
import hotDeals from './components/Shop/HotDeals/hotDeals.reducer';
import categoryReducer from './components/Category/category.reducer';
import Clients from './components/Clients/clients.reducer';
import newsReducer from './components/News/news.reducer';
const logger = createLogger({ collapsed: true });
const rootReducer = combineReducers({
  asyncReducer,
  notification: notificationReducer,
  auth,
  hotDeals,
  category: categoryReducer,
  clients: Clients,
  news: newsReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;
