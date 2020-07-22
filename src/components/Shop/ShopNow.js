import React, { Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';

import LeftMenu from "./LeftMenu";
import Banner from "./Banner";
import Client from "./../Home/Client";
import Products from "./../Home/Products";
import TopRatedProducts from "./TopRatedProducts";
import PremiumBrands from "./PremiumBrands";

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

class ShopNOw extends Component {
//  handleSubmit = async (values, { setSubmitting }) => {
//    const { toggleModal, onSubmit, showToast } = this.props;
//    setSubmitting(true);
//    try {
//      const res = await onSubmit({ ...values, type: 'Request a Quote' });
//      if (res && res.status) {
//        toggleModal();
//        showToast('Quote request success', TOAST_TYPE.SUCCESS);
//      } else if (res && res.status.error) {
//        showToast(res.status.error || 'Something Went wrong', TOAST_TYPE.ERROR);
//      }
//    } catch (e) {
//      showToast('Something Went wrong', TOAST_TYPE.ERROR);
//    } finally {
//      setSubmitting(false);
//    }
//  };
//
//  validateForm = values => {
//    const e = execValidation(validators, values);
//    return Object.keys(e) ? e : null;
//  };
  render() {
    return (
            <div class="content-wrapper topPadding">
                <div class="pagewrap">
                    <div class="bgWhite padding-bottom">
                        <section class="pro-equipment-section">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-3 col-md-3 padding-0">
                                        <LeftMenu/>
                                    </div>
                                    <div class="col-sm-9 col-md-9 padding-0">
                                        <div class="banner-container-xs mt-0">
                                            <Banner/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                        <Client/>
                        <PremiumBrands/>
                        <Products/>
                        <TopRatedProducts/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopNOw;
