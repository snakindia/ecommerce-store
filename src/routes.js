import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import { StickyContainer } from 'react-sticky';
import MetaContainer from './components/MetaData';
import Notification from './components/Notification';
import Shop from './components/Shop';
import PrivateRoute from './PrivateRoute';
import Category from './components/Category';
import NewsDetail from './components/News/NewsDetail';
import EventDetail from './components/Events/EventDetail';
import Dynamic from './components/Dynamic/Dynamic';
import RepresentUs from './components/RepresentUs/RepresentUs';
import SubscriptionPopUp from './components/SubscriptionPopUp/SubscriptionPopUp';

const App = lazy(() => import('./App'));
const About = lazy(() => import('./components/About/About'));
const ContactBody = lazy(() => import('./components/Contact/ContactBody'));
const ProductBody = lazy(() => import('./components/Product/ProductBody'));
const BrandBody = lazy(() => import('./components/Brand/BrandBody'));
const SignUpPage = lazy(() => import('./components/Signup/SignUpPage'));
const InnerPage = lazy(() => import('./components/InnerPage'));
const VerifyUser = lazy(() => import('./components/VerifyUser'));
const News = lazy(() => import('./components/News'));
const Events = lazy(() => import('./components/Events'));
const Compare = lazy(() => import('./components/Compare'));
const Industries = lazy(() => import('./components/Industries'));

const Router = () => {
     useEffect(() => {
          const timer = setTimeout(() => {
          const currentTime = localStorage.getItem("currentTime");
            let timeDiff = Date.now() - currentTime;
        }, 1000);
  }, []);
    
    return (
        <StickyContainer style={{ overflowY: 'auto' }}>
            <Notification />
            <BrowserRouter>
                <MetaContainer>
                    <div className="top-header navbar-fixed">
                        <SubscriptionPopUp />
                        <MobileMenu/>
                        <TopBar />
                        <NavBar />
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={App} />} />
                            {/* <Route path="/:param1/:param2" component={ProductService} /> */}
                            {/* <Route path="/productserive/:param1/:param2/:param3" component={ProductServiceMenu} /> */}
                            <Route exact path="/home" component={App} />
                            <Route path="/about" component={About} />
                            <Route path="/about/:param1" component={About} />
                            <Route path="/product" component={ProductBody} />
                            <Route path="/brand" component={BrandBody} />
                            <Route path="/contact" component={ContactBody} />
                            <PrivateRoute path="/sign-up" component={SignUpPage} />
                            <Route path="/inner-page" component={InnerPage} />
                            <Route path="/category" component={Category} />
                            <PrivateRoute path="/verify-user/:token" component={VerifyUser} />
                            <Route path="/shop" component={Shop} />
                            <Route path="/newsdetail/:slug" component={NewsDetail} />
                            <Route path="/eventdetail/:slug" component={EventDetail} />

                            <Route path="/news" component={News} />
                            <Route path="/events" component={Events} />
                            <Route path="/compare" component={Compare} />
                            <Route path="/represent-us" component={RepresentUs} />
                            <Route path="/industries" component={Industries} />
                           <Dynamic />
                        </Switch>
                    </Suspense>
                    <Footer />
                </MetaContainer>
            </BrowserRouter>
        </StickyContainer>
    );
};

export default Router;
