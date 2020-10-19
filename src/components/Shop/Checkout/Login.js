import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeProduct, addProduct} from '../store/Actions';
const Login = (props) => {
   
    return (
        <div className="card-body">
        Checking out as a Guest? You'll be able to save your details to create an account with us later.
            <div className="row">
                <div className="col-lg-12" >
                    <div className="row">
                        <div className="col-sm-8 col-md-8">
                            <div className="form-group mt-3">
                                <input type="text" className="form-control input-control" name="email" placeholder="Email Address" />

                            </div>

                        </div>
                        <div className="col-sm-4 col-md-4 padding-left0">
                            <div className="form-group mt-3">
                                <button type="button" className="btn bha-btn-primary margin-left-mobile15" name="buttonsubmit">CONTINUE AS GUEST</button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3">Already have an account? <a href="#" >Sign in </a> now </p>
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
