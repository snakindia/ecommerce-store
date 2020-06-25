import React, { Suspense, lazy , useEffect , useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = lazy(() => import('./App'));
const About = lazy(() => import('./pages/about/About'));
const ContactBody = lazy(() => import('./components/Contact/ContactBody'));
const SignUpPage = lazy(() => import('./components/Signup/SignUpPage'));


const Router = () =>{

     return (
        <BrowserRouter>
            
            <TopBar />
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactBody} />
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
            </Suspense>
            <Footer/>
        </BrowserRouter>
    );
} 
export default Router;