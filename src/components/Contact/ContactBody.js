import React, { Component } from 'react';
import ContentSection from '../Contact/ContentSection'
import Mapimg from '../../assets/images/map.jpg';
import GoogleMap from '../../utils/Map';

export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div class="banner-container">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <div className="active" style={{height: "470px"}}>
            <GoogleMap/>
        </div>
      </div>
    </div>
    <ContentSection />

      </div>
    )
  }
}
