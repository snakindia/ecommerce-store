import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from "react-redux";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import MetaTags from 'react-meta-tags';

class MetaData extends Component {

    constructor(props){
        super(props);
        this.state = {
            meta_details: {},
            path: window.location.pathname,
            iterationFlag: true
        }
    }
  
    render() {
        let details = this.props.meta_details
        return (
            <div>
            {
                details && Object.keys(details).length &&
                details.map((item, idx) => {
                    return item.slug && item.slug == this.state.path ?
                        <MetaTags>
                            <title>{item.meta_title}</title>
                            <meta name="description" content={item.meta_description} />
                            <meta property="og:title" content={item.meta_title} />
                            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
                        </MetaTags>
                    :
                    ''
                })
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
        meta_details: state.page_meta_details  
    };
};

export default connect(mapStateToProps)(MetaData);
