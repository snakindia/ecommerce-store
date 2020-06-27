import React, { Component } from 'react'
import Item1 from '../../assets/images/product/item1.jpg'
import Item2 from '../../assets/images/product/item2.jpg'
import Item3 from '../../assets/images/product/item3.jpg'
import Item4 from '../../assets/images/product/item4.jpg'



export default class ProductFilterCategoryDetails extends Component {
  render() {
    return (
      <div>
        <div class="prodcut-container">
          <div id="produt-shorting">
            <div class="short-items">
              12,257 result(s) found
            </div>
          </div>
          <div class="text-right-sm pr-3">
            <select id="shortOption" class="form-control form-select">
              <option>Newest:</option>
              <option>Oldest</option>
              <option>By Name A-Z</option>
              <option>By Name Z-A</option>
            </select>
          </div>
        </div>
        {/* Product List Below */}
        <div class="product-inner pt-3">
          <div class="row">

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                  <em class="product-card__ribbon-wrapper">
                    <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                  </em> 
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item1} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item2} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper"> 
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item3} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item4} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item1} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item2} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <em class="product-card__ribbon-wrapper">
                    <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                  </em> 
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item3} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item4} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper">
                  <em class="product-card__ribbon-wrapper">
                    <span class="product-card__ribbon product-card__ribbon--is-new">New</span>
                  </em> 
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item4} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="product-card-wrapper outer-wrpper"> 
                <div class="product-card hvr-float-shadow">
                  <div class="item-pro-inner">
                    <a href="#">
                  <img class="img-fluid" src={Item4} alt="" />
                    <div class="product-description">
                      Goyen® K4502 (M2162) Replacement Repair Kit
                    </div>
                    <div class="product-tag">
                      DCS574W1
                    </div>
                    </a>
                    <a href="#" class="btn bha-btn-primary w-100 float-left mt-4">View Details</a>
                  </div>
                </div>
              </div>
            </div>

</div>
</div>
      </div>
    )
  }
}
