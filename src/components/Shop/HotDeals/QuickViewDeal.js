import React, { Component } from 'react';
import { MDBContainer, MDBModal } from 'mdbreact';
import Slider from 'react-slick';
import Rating from '../../common/Rating';
import { DEFAULT_IMG_URL } from '../../../constants/urls';

class QuickViewDeal extends Component {
  state = {
    count: 0,
  };

  changeCounter = event => {
    const { id } = event.target;
    let { count } = this.state;
    if (id === 'decrease' && count > 0) {
      count -= 1;
    } else if (id === 'increase') {
      count += 1;
    }
    this.setState({ count: count });
  };

  handleInputChange = event => {
    let value = +event.target.value;
    value = isNaN(value) ? 0 : value < 0 ? 0 : value;
    this.setState({ count: value });
  };

  toggle = () => this.props.closeModal(null);

  render() {
    const { dealDetail, onSale } = this.props;
    if (!dealDetail) {
      return null;
    }
    const ratings = new Array(5)
      .fill(1, 0, dealDetail.ratings)
      .fill(0, dealDetail.ratings);
    return (
      <MDBContainer>
        <MDBModal
          isOpen={Boolean(dealDetail)}
          toggle={this.toggle}
          centered
          id="#myModalView"
          className="modal-width-lg"
        >
          <div
            className="modal-view-inner container-login animated fadeIn"
            style={{
              padding: '2rem',
              background: '#fff',
              borderRadius: '3px',
            }}
          >
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.toggle}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 pl-0 border">
                  {dealDetail.images.length <= 1 ? (
                    dealDetail.images.map(({ url, fileName, id }) => (
                      <img
                        key={id}
                        src={url || DEFAULT_IMG_URL}
                        className="img-fluid"
                        alt={fileName}
                      />
                    ))
                  ) : (
                    <Slider>
                      {dealDetail.images.map(({ url, fileName, id }) => (
                        <img
                          key={id}
                          src={url || DEFAULT_IMG_URL}
                          className="img-fluid"
                          alt={fileName}
                        />
                      ))}
                    </Slider>
                  )}
                </div>
                <div className="col-sm-6">
                  <div className="media-body">
                    <h4 className="mt-0 mb-2">{dealDetail.name}</h4>
                    <p className="text-muted mb-0">{dealDetail.description}</p>
                    <div className="d-flex align-items-center justify-content-left mt-1">
                      <Rating ratings={dealDetail.ratings} />
                    </div>
                    <div className="pro_Price p-0">
                      <p className=" currecny">
                        {onSale && (
                          <span className="strike">
                            ${dealDetail.regular_price}
                          </span>
                        )}
                        <span className="sp-price">
                          ${dealDetail.sale_price || dealDetail.price}
                        </span>
                      </p>
                    </div>
                    <div className="text-muted">
                      <span>SKU:</span>{' '}
                      <span className="sp-price">{dealDetail.sku}</span>
                    </div>
                    <div className="text-muted">
                      <span>Category:</span>{' '}
                      <span className="sp-price">
                        {dealDetail.category_name}
                      </span>
                    </div>
                    <form className="inc_value">
                      <div
                        className="value-button inc_value"
                        id="decrease"
                        onClick={this.changeCounter}
                        title="Decrease Value"
                      >
                        -
                      </div>
                      <input
                        type="text"
                        id="number"
                        value={this.state.count}
                        onChange={this.handleInputChange}
                      />
                      <div
                        className="value-button"
                        id="increase"
                        onClick={this.changeCounter}
                        title="Increase Value"
                      >
                        +
                      </div>
                      <div className="float-right">
                        <a
                          href="#"
                          className="btn bha-btn-primary text-capitalize pt-1 pb-1 pr-2 ml-2"
                        >
                          Compare
                        </a>
                      </div>
                      <div className="float-right">
                        <a
                          href="#"
                          className="btn bha-btn-primary text-capitalize pt-1 pb-1 pr-2 ml-2"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBModal>
      </MDBContainer>
    );
  }
}

QuickViewDeal.defaultProps = {
  onSale: true,
};

export default QuickViewDeal;
