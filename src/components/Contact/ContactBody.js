import React, { Component } from 'react';
import ContentSection from '../Contact/ContentSection';
import Mapimg from '../../assets/images/map.png';

export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div class="banner-container">
            <img src={Mapimg} alt="" class="d-block bha_h_100" style={{position: "relative"}} />
        </div>
        <ContentSection />
      </div>
    );
  }
}
