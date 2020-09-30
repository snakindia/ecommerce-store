import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { GET } from '../../services/httpService';
import ProductServicesDetail from './../ProductServices/ProductServicesDetail';
import PageTemplateDetail from './../ProductServices/PageTemplateDetail';
import ProjectsTemplate from './../Projects';
import About from './../About/About';


class Dynamic extends Component {
    state = {
        routes: [],
        template: {
            'ProductServicesDetail' : ProductServicesDetail,
            'PageTemplateDetail' : PageTemplateDetail,
            'ProjectsTemplate' : ProjectsTemplate,
            'About' : About
        }
    };
 

    render() {
    this.state.routes = this.props.meta_details;
    const { match } = this.props;
    return (
            <div>
              {this.state.routes && this.state.routes.length > 0 &&
                this.state.routes.map(route => {
                    if (route.slug != '' && route.template != '') {
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
