import React from 'react';

export default class CollectJSSection extends React.Component {
  // Created the 3 divs for the CollectJS iframes
  render() {
    const {ccexperr,ccnumbererr,cvverr, checknameerr}=this.props.error;
    return (
      <React.Fragment>
        <div className="col-lg-12" >
          <div className="form-group col-lg-6">
            <label className="text-small">Credit Card Number</label>
            <div id="ccnumber" />
            {ccnumbererr ? ccnumbererr :''}
          </div>
          <div className="form-group col-lg-4">
            <label className="text-small">Expiration</label>
            <div id="ccexp" />
            {ccexperr ? ccexperr :''}
          </div>
        </div>
        <div className="col-lg-12" >
          <div className="form-group col-lg-6">
            <label className="text-small">Name on Card</label>
            <div id="nameonCard" />
            {checknameerr ? checknameerr :''}
          </div>
          <div className="form-group col-lg-4">
            <label className="text-small">CVV</label>
            <div id="cvv" />
            {cvverr ? cvverr :''}
          </div>
        </div>

        {/* {this.props.children} */}

      </React.Fragment>
    );
  }
}
