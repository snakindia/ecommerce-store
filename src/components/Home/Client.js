import React, { Component } from 'react';
import ClientImage1 from '../../assets/images/clients/brand1.jpg';
import ClientImage2 from '../../assets/images/clients/brand2.jpg';
import ClientImage3 from '../../assets/images/clients/brand3.jpg';
import ClientImage4 from '../../assets/images/clients/brand4.jpg';
import ClientImage5 from '../../assets/images/clients/brand5.jpg';
import ClientImage6 from '../../assets/images/clients/brand6.jpg';
import ClientImage7 from '../../assets/images/clients/brand7.jpg';
import ClientImage8 from '../../assets/images/clients/brand8.jpg';
import ClientImage9 from '../../assets/images/clients/brand9.jpg';
import ClientImage10 from '../../assets/images/clients/brand10.jpg';

export default class Client extends Component {
  render() {
    return (
            <div>
                <section class="header-section client">
                    <div class="container-fluid">
                        <h2 class="bha_heading_2 z-index font-weight-bold">COMPANIES USING OUR PRODUCTS</h2>
                    </div>
                </section>
                <section class="bha-client-container">
                    <div class="container-fluid">
                        <ul class="bha-client">
                            <li><img class="hvr-pulse" src={ClientImage1} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage2} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage3} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage4} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage5} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage6} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage7} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage8} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage9} alt="" /></li>
                            <li><img class="hvr-pulse" src={ClientImage10} alt="" /></li>
                        </ul>
                    </div>
                </section>
        </div>
    )
  }
}
