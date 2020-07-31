import React, { Component } from 'react';

export default class ProductFilterCategory extends Component {
  render() {
    return (
      <div class="category-filter mb-4">
      <div class="category-inner">
        <h6 class="brand_head">Shop By Brand</h6>
      </div>
    <div id="brand"> 
      <div class="BrdInner">
        <ul class="inner-list">
          <li>
            <a href="brands-02.html">Goyen
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Mecair
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Asco
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Donaldson Torit
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Camfil Farr
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Taeha
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Turbo
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
          <li>
            <a href="brands-02.html">Autel
              <span class="badge badge-light float-right">230</span>
            </a>  
          </li>
        </ul>
        
      </div>
      {/* <!-- <div class="btn_more"><a href=""><span>+</span>Show All</a></div>
--> */}
 </div>
    
    <div id="price-range">
      <div class="BrdInner">
        <div class="BRND_N">Short By Price</div>

        <div class="list">
          <a href="/tags/creative,clean#content">
            <label>
              <input type="checkbox" class="AnchorList" value="on" /><span>$50-$199.99</span>
            </label>
          </a>
        </div>
        <div class="list">
          <a href="/tags/creative,clean#content">
            <label>
              <input type="checkbox" class="AnchorList" value="on" /><span>$200-$499.99</span>
            </label>
          </a>
        </div>
        <div class="list">
          <a href="/tags/creative,clean#content">
            <label>
              <input type="checkbox" class="AnchorList" value="on" /><span>$500-$999.99</span> 
            </label>
          </a>
        </div>
      </div>
      {/* <!-- <div class="btn_more"><a href="#"><span>+</span>Show All</a></div> --> */}
    </div>
   </div>
)
  }
}
