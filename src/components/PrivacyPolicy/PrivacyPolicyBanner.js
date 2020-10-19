import React from 'react';
import Privacy1 from '../../assets/images/privacy1.jpg';

const PrivacyPolicyBanner = (bannerDetails) => {
  return (
        <section className="banner-container" style={{"position": "relative"}}>
            <div className="banner-about">
                <img src={bannerDetails.bannerDetails.banner_image} alt="responsive image" className="img-fluid" />
            </div>
        </section>
  );
};

export default PrivacyPolicyBanner;

