import React, { Component } from 'react';
import SignupSection from '../Signup/SignupSection';
import Oembg from '../../assets/images/-oem_bg.jpg';

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <div className="banner-container">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-item active">
              <picture>
                <img
                  src={Oembg}
                  alt="responsive image"
                  className="d-block img-fluid"
                />
              </picture>
            </div>
          </div>
        </div>
        <SignupSection {...this.props} />
      </div>
    );
  }
}
