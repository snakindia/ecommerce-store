import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails } from './privacypolicy.actions';
import PrivacyPolicyBanner from './PrivacyPolicyBanner';
import htmlParse from 'html-react-parser';

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let url = this.props.location.pathname;
        const slug = url.replace(/\\|\//g,'');
        this.props.getDetails(slug);
    };

  

  render() {
    const { privacyPolicy } = this.props;
    return (
      <React.Fragment>
       { privacyPolicy && typeof privacyPolicy[0] != 'undefined' && privacyPolicy[0].banner_image != '' ? <PrivacyPolicyBanner bannerDetails={privacyPolicy[0]} /> : ''}
                
        <div className="content-wrapper">
            <div className="pagewrap">
              <div className="bgWhite">
                <section className="pro-equipment-section pagewrap-inner">
                  <div className="container-fluid pb-4">
                    <div className="row">
                      <div className="col-lg-12 mb-3 pl-0 pr-0 pt-5">
                      <h2 className="bha_heading_2 text-black font-xx mb-3 text-center">{typeof privacyPolicy[0] != 'undefined' ? privacyPolicy[0].meta_title : ''}</h2>
                    </div>
                    {privacyPolicy &&
                  typeof privacyPolicy[0] != 'undefined' &&
                  privacyPolicy[0].contents.map((item, idx) => {
                    return (
                    <div className="col-lg-12 pl-0 pt-3" style={{"font-size": "24px"}}>
                      {item.title}
                     {htmlParse(item.description)}
                    </div>
                      )
                      })}
                   
                  </div>
                </div>
              </section>
            </div>
            </div>
        </div>
      
        </React.Fragment>
    );
  }
}


const mSTP = ({ privacyPolicy }) => ({
    privacyPolicy: privacyPolicy
});
const mDTP = { getDetails };
export default connect(mSTP, mDTP)(PrivacyPolicy);
