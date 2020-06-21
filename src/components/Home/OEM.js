import React, { Component } from 'react';
import FactorySvg from '../../assets/icon/factory.svg';
import GearSvg from '../../assets/icon/gear.svg';
import MedalSvg from '../../assets/icon/medal.svg';

export default class OEM extends Component {
  render() {
    return (
        <div>
            <section className="bha_oem_container">
                <div className="container-fluid">
                    <div className="bha_caption">
                        <div className="pb-0mb-0"><h2>Premium OEM Brands</h2></div>
                        <div>Manufacturers assessed by independent third parties</div>
                        <div className="pt-5 pb-4">
                            <div className="mb-3"><img className="mr-3" src={FactorySvg} alt="" width="30" />Lorem ipsum dolor sit amet, consectetur</div>
                            <div className="mb-3"><img className="mr-3" src={GearSvg} alt="" width="30" />Lorem ipsum dolor sit amet</div>
                            <div className="mb-3"><img className="mr-3" src={MedalSvg} alt="" width="30" />Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
