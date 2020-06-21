import React,{useEffect} from 'react';
import './freebrochure.css'


 const FreeBrochure = () => {

     return (
         <>
          {/*Free Brochures section */}
      <div className="form-outer float-left" id="brochureForm">
        <div className="container-fluid">
          <form>
            <div className="row custom-gutter">
              <div className="col-lg-2 col-sm-6 col-md-4 mt-4"><h2 className="bha_heading_2">Free Brochures</h2></div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="text" className="form-control" placeholder="Enter Phone" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="emailaddress">Email Address *</label>
                  <input type="text" className="form-control" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4">
                <div className="form-group">
                  <label htmlFor="companyname">Company Name *</label>
                  <input type="text" className="form-control" placeholder="Enter Company Name" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-4 mt-4"><button type="submit" className="btn bha-btn-primary w-100">Subscribe</button></div>
            </div>
          </form>
        </div>
      </div>
      {/*//Free Brochures section */}
         </>
     )

}

export default FreeBrochure