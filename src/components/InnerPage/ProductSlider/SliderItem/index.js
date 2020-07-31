import React from 'react';

const SliderItem = props => {
  const { item } = props;
  return (
    <div className="container pl-0 pr-0">
      <div className="pro-item-wrapper">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <div className="item-description">
              <h2 className="item-heading mb-4">{item.heading}</h2>
              <p style={{ fontWeight: '400' }}>{item.desc}</p>
              <a href="#" className="btn btn-bha-primary font-weight-bold">
                {item.btnText}
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="prod-item">
              <img src={item.image} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
