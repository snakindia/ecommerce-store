import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MetaTags from 'react-meta-tags';
import {
    fetch_page_meta_details,
} from '../actions/fetchActions';

class MetaData extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            path: window.location.pathname
        };
        
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            this.state.path = location.pathname;
            console.log("on route change =>  ", this.state.path);
        });
    }
    
    componentWillUnmount() {
        this.unlisten();
    }
    
    componentDidMount() {
        this.props.fetch_page_meta_details();
    }
    
    render() {
        let details = this.props.meta_details;
        return (
            <div>
                <div>{this.props.children}</div>
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        meta_details: state.page_meta_details  
    };
};

const mapDispatchToProps = {
  fetch_page_meta_details
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MetaData));
