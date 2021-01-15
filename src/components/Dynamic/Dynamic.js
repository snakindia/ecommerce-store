import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { GET } from '../../services/httpService';
import ProductServicesDetail from './../ProductServices/ProductServicesDetail';
import PageTemplateDetail from './../ProductServices/PageTemplateDetail';
import Fans from './../ProductServices/Fans';
import ProjectsTemplate from './../Projects';
import About from './../About/About';
import PrivacyPolicy from './../PrivacyPolicy';


class Dynamic extends Component {
    state = {
        routes: [],
        template: {
            'ProductServicesDetail' : ProductServicesDetail,
            'PageTemplateDetail' : PageTemplateDetail,
            'ProjectsTemplate' : ProjectsTemplate,
            'Fans' : Fans,
            'About' : About,
            'PrivacyPolicy' : PrivacyPolicy
        }
    };
 

    render() {
    this.state.routes = this.props.meta_details;
    // wrong way to update state in render function , must use lifecycle method to update state
    const { location:{pathname} } = this.props;
    return (
            <div>
              {this.state.routes && this.state.routes.length > 0 &&
                this.state.routes.map(route => {
                    if (route.slug != '' && route.template != '' && pathname ==route.slug) {
                        return (
                          <Route
                            path={route.slug}
                            component={this.state.template[route.template]}
                          />
                        );
                    }
                })}
            </div>
          );
    }
}
const mapStateToProps = ({ asyncReducer }) => {
  return {
    meta_details: asyncReducer.page_meta_details,
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dynamic);
