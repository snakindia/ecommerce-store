import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dateConversion} from './../../common/Util';
import { fetchNewsDetail, fetchNews } from './../../News/news.actions';
import ReactHtmlParser from 'react-html-parser';
import {
  FacebookShareButton,
  TwitterShareButton
} from "react-share";

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageType: 'Event',
            size: 4,
            filterBy: 'Default',
        };
  }
    
    componentDidMount() {
        const slug = this.props.match.params.slug;
        const { actions } = this.props;
        
        const { page, pageType, size, filterBy } = this.state;
        if (slug != '') {
            actions.fetchNewsDetail(slug, pageType);
        }
        
        actions.fetchNews({
            type: pageType,
            page,
            size,
            filterBy,
        });
    }
  
    render() {
        
    const details = this.props.data;
    const newsList = this.props.newsList;
    return (
    <div className="pagewrap">
            <div className="bgWhite pb-4">
              <section className="bg-opeque pt-5 animatedParent gapTop">
                <div className="container-fluid">
                  <h2 className="bha_heading_2 pt-2 pl-2 text-blue text-left">
                    {details.title}
                  </h2>
                  <p className="text-left pl-2 text-muted">{dateConversion(details.date_created)}</p>
                  <div className="share-link">
                    <FacebookShareButton url={window.location.href} quote={window.location.href} > 
                        <a href=""><i className="fa fa-facebook"></i>facebook</a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton url={window.location.href} title={details.title}  via={ReactHtmlParser(details.content)} > 
                        <a href="" className="twitter"><i className="fa fa-twitter"></i>Twitter</a>
                    </TwitterShareButton>
                  </div>
                </div>
              </section>
              <section className="pro-equipment-section pagewrap-inner">
              <div className="container pl-1 pr-1">
              <div className="row">
                <div className="animatedParent">
                  <div className="row no-gutters">
                      <div className="col-sm-9 col-md-9 pl-2">
                      <img src={details.image} alt="" className="img-fluid object-fit-lg" />
                        <div className="mt-4 float-left">
                          {ReactHtmlParser(details.content)}
                          <div className="loadMorebtn p-0"><a href="/events" className="btn bha-btn-primary float-left">Go Back</a></div>
                        </div>
                      </div>

                        <div className="col-sm-3 col-md-3">
                            <div className="featured-product feature-sticky">
                                <h6>Latest Event</h6>
                                
                                {
                                    newsList &&
                                    Object.keys(newsList).length > 0 &&
                                    newsList.map((item, idx) => {
                                        return (
                                            <div className="location">
                                                <a href={'/eventdetail/' + item.slug }>
                                                  <img className="bha-flag" src={item.image} alt="" />
                                                  </a>
                                                <div className="description-xxs"><a href={'/eventdetail/' + item.slug }>{item.title}</a></div>
                                                <div className="pro_Price p-0">
                                                    <p className="text-left pl-2 text-muted">{dateConversion(item.date_created)}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        </div>
    );
  }
}

const mapStateToProps = ({ news }) => ({
    data: news,
    newsList: news.newsList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
        fetchNewsDetail,
        fetchNews
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
