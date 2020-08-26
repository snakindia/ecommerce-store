import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './../../../assets/css/bha-landing.css';
import { fetchProdcutServiceDetail } from './../productservice.actions';
import ReactHtmlParser from 'react-html-parser';

class PageTemplateDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageType: 'News',
            size: 4,
            filterBy: 'Default',
        };
  }
    
    componentDidMount() {
        let url = this.props.location.pathname;
        const { actions } = this.props;
        if (url != '') {
            const slug = url.replace(/\\|\//g,'');
            actions.fetchProdcutServiceDetail(slug);
        }
    }
  
    render() {
        const details = this.props.data;
        return (
            <div>
                {
                details && (
                    <div>
                        {ReactHtmlParser(details.content)}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ productService }) => ({
    data: productService[0]
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
       fetchProdcutServiceDetail
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(PageTemplateDetail);
