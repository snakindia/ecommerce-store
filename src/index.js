import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import "./index.css";
<<<<<<< HEAD
import "./layout.css";
=======
import "./assets/css/layout.css"
>>>>>>> a0eef61416b5cd56c9d93e91b7cfb43064050b7c
import App from "./App";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();