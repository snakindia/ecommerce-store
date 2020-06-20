import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./index.css";
import "./assets/css/layout.css";
import "./assets/css/reset.css";
import "./assets/css/imagehover.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/webslidemenu.css";

import App from "./App";

import Routes from './routes'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Routes /> , document.getElementById('root'));

registerServiceWorker();