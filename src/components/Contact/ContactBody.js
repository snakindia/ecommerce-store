import React, { Component } from 'react';
import ContentSection from '../Contact/ContentSection'
import Mapimg from '../../assets/images/map.jpg';
export default class AboutBody extends Component {
  render() {
    return (
      <div>
        <div class="banner-container">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <div class="carousel-item active">
            <picture>
                <img src={Mapimg} alt="responsive image" class="d-block img-fluid" />
              </picture>
        </div>
      </div>
    </div>
    <ContentSection />

      </div>
    )
  }
}
