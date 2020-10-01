import React from 'react';
import Privacy1 from '../../assets/images/privacy1.jpg';

const PrivacyPolicyBanner = (bannerDetails) => {
  return (
        <section class="banner-container" style={{"position": "relative"}}>
            <div class="banner-about">
                <img src={bannerDetails.bannerDetails.banner_image} alt="responsive image" class="img-fluid" />
            </div>
        </section>
  );
};

export default PrivacyPolicyBanner;

