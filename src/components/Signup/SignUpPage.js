import React, { Component } from 'react';
import SignupSection from '../Signup/SignupSection'
import Oembg from '../../assets/images/-oem_bg.jpg';

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <div class="banner-container">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <div class="carousel-item active">
            <picture>
                <img src={Oembg} alt="responsive image" class="d-block img-fluid" />
              </picture>
        </div>
      </div>
    </div>
    <SignupSection />

      </div>
    )
  }
}
