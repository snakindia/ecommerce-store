import React, { Component } from 'react'
import Baghouselogo from '../assets/images/baghouse_logo.svg'
import {MDBIcon} from 'mdbreact';
import NavBar from './NavBar';
export default class HeaderFull extends Component {
  render() {
    return (
         <div class="wsmain clearfix">
            <div className="smllogo"><a href="/"><img className="d-block" src={Baghouselogo} alt="" width="200" /></a></div>
            <div className="wssearchbar clearfix">
                <form class="topmenusearch clearfix">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="What are you looking for..." />
                        <div className="input-group-append">
                            <button class="btn btn-bha-primary" type="button"><i class="fa fa-search pl-0 pr-2"></i>Search</button>
                        </div>
                    </div>
                </form>
            
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
    )
  }
}
