import React from 'react';

export default class CollectJSSection extends React.Component {
  // Created the 3 divs for the CollectJS iframes
  render() {
    const style ={
      color:'red'
    }
    const {ccexperr,ccnumbererr,cvverr, checknameerr}=this.props.error;
    return (
      <React.Fragment>
        <div className="col-lg-12 pl-0 pr-0">
          <div className="form-row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="text-small">Credit Card Number</label>
                <div id="ccnumber" className="form-control" />
                <i className="fa fa-lock font-icon"></i>
                {ccnumbererr ? <span style={style} >Credit Card Number must be valid</span> :''}
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label className="text-small">Expiration</label>
                <div id="ccexp" className="form-control"/>
                {ccexperr ? <span style={style} >{ccexperr}</span> :''}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 pl-0 pr-0">
          <div className="form-row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="text-small">Name on Card</label>
                <div id="nameonCard" className="form-control"/>
                {checknameerr ? <span style={style} >{checknameerr}</span> :''}
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label className="text-small">CVV 
                <abbr title="CVV is a three digit code printed on the back side of the card">
                <i className="fa fa-question-circle font-icon-info ml-2"></i></abbr>
                </label>
                <div id="cvv" className="form-control"/>
                <i className="fa fa-lock font-icon"></i>
                {cvverr ? <span style={style} >{cvverr}</span> :''}
              </div>
            </div>
          </div>
        </div>

        {/* {this.props.children} */}

      </React.Fragment>
    );
  }
}
