import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeProduct, addProduct} from '../store/Actions';
import { Next } from 'react-bootstrap/esm/PageItem';
const Login = (props) => {
    const [error, setError]= useState(false)
   const signIn =(e)=>{
       e.preventDefault();
       const el =document.getElementById('loginpopover');
       if(el){
           console.log({el})
           el.click()
       }
   }
   const onChange =(e)=>{
        const {value} =e.target;
        const isValid= (/^[a-zA-Z0-9@-_.]*$/i.test(value))
        if(isValid && value.length <=50){
            props.setEmail(value)
        }
   
   }
   const  validateEmail=()=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(props.email).toLowerCase())){
        setError(false);
        props.next(2)
    } else {
        setError(true)
    }
    }
    return (
        <div className="card-body">
        Checking out as a Guest? You'll be able to save your details to create an account with us later.
            <div className="row">
                <div className="col-lg-12" >
                    <div className="row">
                        <div className="col-sm-8 col-md-8">
                            <div className="form-group mt-3">
                                <input type="text" 
                                className="form-control input-control" 
                                value={props.email}
                                onChange={onChange}
                                name="email" placeholder="Email Address"
                                 />

                            </div>
                            {error ? 'Invalid email': null}

                        </div>
                        <div className="col-sm-4 col-md-4 padding-left0">
                            <div className="form-group mt-3">
                                <button onClick={validateEmail} type="button" className="btn bha-btn-primary margin-left-mobile15" name="buttonsubmit">CONTINUE AS GUEST</button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3">Already have an account?
                     <Link to="/" onClick={signIn}>Sign in </Link>
                      now </p>
                </div>
            </div>
        
    </div>
    );
}
const mapStateToProps = (state) => ({
    loading: state.shop.loading,
    data: state.shop.products,
    error: state.shop.error
  });
  const mapDispatchToProps = dispatch => ({
    addProduct: (payload, qty) => dispatch(addProduct(payload, qty)),
    removeProduct: (payload) => dispatch(removeProduct(payload)),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
