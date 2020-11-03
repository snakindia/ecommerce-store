import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import { StickyContainer } from 'react-sticky';
import MetaContainer from './components/MetaData';
import Notification from './components/Notification';
import Accounts from './components/Accounts/Accounts';
import Shop from './components/Shop';
import Cart from './components/Shop/Cart';
import Checkout from './components/Shop/Checkout/Checkout';
import Detail from './components/Shop/Detail';
import PrivateRoute from './PrivateRoute';
import Category from './components/Category';
import NewsDetail from './components/News/NewsDetail';
import EventDetail from './components/Events/EventDetail';
import Dynamic from './components/Dynamic/Dynamic';
import RepresentUs from './components/RepresentUs/RepresentUs';
import ProgressBar from './components/ProgressBar'
import Loader from './components/Loader/Loader'
import SubscriptionPopUp from './components/SubscriptionPopUp/SubscriptionPopUp';
import {setLoading} from './actions/fetchActions';
import {getCart} from './components/Shop/store/Actions';
import {getOrderStatus} from './components/Accounts/store/Actions';
import axios from 'axios';
import scrollToEl from './utils/scrollToEl';
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

const Routes = (props) => {
     useEffect(() => {
          const timer = setTimeout(() => {
          const currentTime = localStorage.getItem("currentTime");
            let timeDiff = Date.now() - currentTime;
        }, 1000);
        props.getCart()
        props.getOrderStatus()
  }, []);
  axios.interceptors.request.use(function(req) {
    
    // Do something before request is sent
    props.setLoading(true)
    return req;
  }, function (error) {
    props.setLoading(false)
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  //console.log(response)
    props.setLoading(false)
    return response;
  }, function (error) {
    props.setLoading(false)
    return Promise.reject(error);
  });
useEffect(()=>{
  scrollToEl('#root', -600, 1)
},[])
  const [t, setT]=useState((new Date().getTime()));
  const myRef = useRef(null) 
  const {loading, auth_loading}=props
    return (
      <BrowserRouter>
      <ProgressBar />
        <div ref={myRef}>
         
         {(loading || auth_loading) &&  <Loader />}
        <StickyContainer>
            <Notification />
            
            
                <MetaContainer>
                
                    <div className="top-header navbar-fixed">
                   
                        {/* <SubscriptionPopUp />*/}
                        <MobileMenu t={t}/>
                        <TopBar />
                        <NavBar setT={setT} myRef={myRef}/>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                      {auth_loading===false ? 
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
                            
                            <PrivateRoute path="/verify-user/:token" component={VerifyUser} />
                            
                            
                            <Route path="/shop/cart" component={Cart} />
                            <Route path="/shop/checkout" component={Checkout} />
                            <Route path="/shop/:id" component={Detail} />
                            <Route path="/shop" component={Shop} />
                            
                            <Route path="/category/:id" component={Shop} />
                            <Route path="/category" component={Category} />
                            <Route path="/newsdetail/:slug" component={NewsDetail} />
                            <Route path="/eventdetail/:slug" component={EventDetail} />

                            <Route path="/news" component={News} />
                            <Route path="/events" component={Events} />
                            <Route path="/compare" component={Compare} />
                            <Route path="/represent-us" component={RepresentUs} />
                            <Route path="/industries" component={Industries} />
                            {props.authenticated ? <Route path="/accounts" component={Accounts} />: <Redirect to="/" />}
                            <Dynamic />
                            
                        </Switch>
                        :null }
                    </Suspense>
                    {props.footer ? <Footer />:null}
                </MetaContainer>
           
        </StickyContainer>
        </div>
        </BrowserRouter>
    );
};
const mapStateToProps = state => ({
    loading: state.asyncReducer.loading,
    footer: state.asyncReducer.footer,
    authenticated: state.auth.authenticated,
    auth_loading: state.auth.auth_loading,
  });
  
  const mapDispatchToProps = dispatch => ({
    setLoading:payload=>dispatch(setLoading(payload)),
    getOrderStatus:()=>dispatch(getOrderStatus()),
    getCart:()=>dispatch(getCart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes);
