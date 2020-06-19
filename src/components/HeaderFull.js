import React, { Component } from 'react'
import Baghouselogo from '../assets/images/baghouse_logo.svg'
import {MDBIcon} from 'mdbreact';
export default class HeaderFull extends Component {
  render() {
    return (
      <div className="headerfull h-25">
        <div className="heading-item">
          <div className="head-serch"><div><a href="/"><img className="d-block" src={Baghouselogo} alt="" width="200" /></a></div>
</div>
<div className="heading-search">

          <div className="input-group md-form input-form form-sm form-1 pl-0">
          <input type="text" className="form-control" placeholder="What are you looking for..." />
        <div className="input-group-append">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" /> <span className="text-right">Search</span>
          </span>
        </div>
        
      </div>
          </div>
          <div className="right-part">
            <div className="right-section">
          <div className="call_us mr-4">
            CALL US: <br />(888) 739-1794 
          </div>
          <div className="hotLink mr-3 float-left">
            <a href="/" className="bha-btn-secondry">request a quote</a>
          </div>
          <div className="hotLink float-left">
            <a href="/" className="bha-btn-primary">shop now</a>
          </div>
          </div>
</div>

        </div>

        {/* <div className="wsmain clearfix">
        <div className="smllogo"></div>
        <div className="wssearchbar clearfix">
        <form className="topmenusearch clearfix">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="What are you looking for..." />
            <div className="input-group-append">
              <button className="btn btn-bha-primary" type="button"><i className="fa fa-search pl-0 pr-2"></i>Search</button>
            </div>
          </div>
        </form>

        <div className="right-section">
          <div className="call_us mr-4">
            CALL US: <br />(888) 739-1794 
          </div>
          <div className="hotLink mr-3 float-left">
            <a href="#" className="bha-btn-secondry">request a quote</a>
          </div>
          <div className="hotLink float-left">
            <a href="#" className="bha-btn-primary">shop now</a>
          </div>
          </div>


        </div>



       </div> */}
      </div>
    )
  }
}
