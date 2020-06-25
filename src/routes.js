import React, { Suspense, lazy , useEffect , useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {API_URL} from './constants/appConstant'

const App = lazy(() => import('./App'));
const About = lazy(() => import('./pages/about/About'));
const ContactBody = lazy(() => import('./components/Contact/ContactBody'));
const SignUpPage = lazy(() => import('./components/Signup/SignUpPage'));


const Router = () =>{

    const [dynamicMenu, setDynamicMenu] = useState(null);
    
    useEffect(() => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(API_URL+"/theme/settings")
      .then(function (response) {
        // handle success
        const {data} = response;
        setDynamicMenu(data);
        
      })

    }, [])

     return (
        <BrowserRouter>
            
            <TopBar />
            {dynamicMenu && <NavBar dynamicMenu={dynamicMenu} />}
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactBody} />
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
            </Suspense>
            {dynamicMenu && <Footer dynamicMenu={dynamicMenu} />}
        </BrowserRouter>
    );
} 
export default Router;