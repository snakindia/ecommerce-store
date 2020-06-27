import React, { Suspense, lazy , useEffect , useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { StickyContainer } from 'react-sticky';

const App = lazy(() => import('./App'));
const About = lazy(() => import('./pages/about/About'));
const ContactBody = lazy(() => import('./components/Contact/ContactBody'));
const ProductBody = lazy(() => import('./components/Product/ProductBody'));
const BrandBody = lazy(() => import('./components/Brand/BrandBody'));
const SignUpPage = lazy(() => import('./components/Signup/SignUpPage'));

const Router = () =>{

     return (

        <StickyContainer style={{overflowY: "auto"}} >
            <BrowserRouter>

                <TopBar />
                <NavBar />
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={App} />
                    {/* <Route path="/:param1/:param2" component={ProductService} /> */}
                    {/* <Route path="/productserive/:param1/:param2/:param3" component={ProductServiceMenu} /> */}
                    <Route exact path="/home" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/about/:param1" component={About} />
                    <Route path="/product" component={ProductBody} />
                    <Route path="/brand" component={BrandBody} />
                    <Route path="/contact" component={ContactBody} />
                    <Route path="/sign-up" component={SignUpPage} />
                </Switch>
                </Suspense>
                <Footer/>
            </BrowserRouter>
        </StickyContainer>
    );
} 
export default Router;