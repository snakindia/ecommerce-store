import React, { Component } from 'react';
import SignupSection from '../Signup/SignupSection';
import Oembg from '../../assets/images/-oem_bg.jpg';

export default class SignUpPage extends Component {
  render() {
    return (
      <div style={{paddingTop:'100px'}}>
        {/* <section className="banner-container">
          <div className="banner-inner">
            <picture>
              <img
                src={Oembg}
                alt="responsive image"
                className="d-block img-fluid"
              />
            </picture>
            <div className="banner-caption">
              <h1 className="bha-inner-heading" style={{ fontSize: '2.5rem' }}>
                Lorem ipsum dollar site amnt
              </h1>
              <h6 className="text-size-medium mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,{' '}
              </h6>
            </div>
          </div>
        </section> */}
        <div className="content-wrapper pb-0">
          <SignupSection {...this.props} />
        </div>
      </div>
    );
  }
}
