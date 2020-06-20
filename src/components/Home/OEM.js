import React, { Component } from 'react';
import FactorySvg from '../../assets/images/icon/factory.svg';
import GearSvg from '../../assets/images/icon/gear.svg';
import MedalSvg from '../../assets/images/icon/medal.svg';

export default class OEM extends Component {
  render() {
    return (
        <div>
            <section class="bha_oem_container">
                <div class="container-fluid">
                    <div class="bha_caption">
                        <div class="pb-0mb-0"><h2>Premium OEM Brands</h2></div>
                        <div>Manufacturers assessed by independent third parties</div>
                        <div class="pt-5 pb-4">
                            <div class="mb-3"><img class="mr-3" src={FactorySvg} alt="" width="30" />Lorem ipsum dolor sit amet, consectetur</div>
                            <div class="mb-3"><img class="mr-3" src={GearSvg} alt="" width="30" />Lorem ipsum dolor sit amet</div>
                            <div class="mb-3"><img class="mr-3" src={MedalSvg} alt="" width="30" />Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
