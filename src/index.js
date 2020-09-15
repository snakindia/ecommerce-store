import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/css/demo.css';
import './assets/css/layout.css';
import './assets/css/reset.css';
import './assets/css/imagehover.css';
import './assets/css/slick.css';
import './assets/css/hover.css';
import './assets/css/slick-theme.css';
import './assets/css/fade-down.css';
import './assets/css/webslidemenu.css';
import './assets/css/custom.css';
import './assets/css/white-gry.css';
import './assets/css/product.css';


import './assets/css/pro-details.css';
import './assets/css/compare.css';

import './assets/css/shopnow.css';
import './assets/transition-css/common.css';
import './assets/transition-css/style.css';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';

//import App from "./App";

import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
