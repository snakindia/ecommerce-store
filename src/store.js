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
import compareReducer from './components/Compare/compare.reducer';
import productService from './components/ProductServices/productservice.reducer';
import projects from './components/Projects/projects.reducer';
import industries from './components/Industries/industries.reducer';
import representus from './components/RepresentUs/store/Reducer';

const logger = createLogger({ collapsed: true });
const rootReducer = combineReducers({
    asyncReducer,
    notification: notificationReducer,
    auth,
    hotDeals,
    category: categoryReducer,
    clients: Clients,
    news: newsReducer,
    compare: compareReducer,
    productService: productService,
    projects,
    industries,
    representus
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;
