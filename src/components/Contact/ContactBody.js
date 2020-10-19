import React, { Component } from 'react';
import ContentSection from '../Contact/ContentSection';
import Mapimg from '../../assets/images/ContactMap1.jpg';

export default class ContactBody extends Component {
  render() {
    return (
      <div>
        <div className="banner-container">
            <img src={Mapimg} alt="" className="d-block bha_h_100" style={{position: "relative"}} />
        </div>
        <ContentSection />
      </div>
    );
  }
}
