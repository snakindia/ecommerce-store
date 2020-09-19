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
    <div class="pagewrap">
            <div class="bgWhite pb-4">
              <section class="bg-opeque pt-5 animatedParent" style={{'overflow-x': 'hidden', 'margin-top':'100px'}}>
                <div class="container-fluid">
                  <h2 class="bha_heading_2 pt-2 pl-2 text-blue text-left">
                    {details.title}
                  <span class="viewAll" style={{top:"38%"}}><a href="/news">Go to News</a></span>
                  </h2>
                  <p class="text-left pl-2 text-muted">{dateConversion(details.date_created)}</p>
                  <div class="share-link">
                    <FacebookShareButton url={window.location.href} quote={window.location.href} > 
                        <a href=""><i class="fa fa-facebook"></i>facebook</a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton url={window.location.href} title={details.title}  via={ReactHtmlParser(details.content)} > 
                        <a href="" class="twitter"><i class="fa fa-twitter"></i>Twitter</a>
                    </TwitterShareButton>
                  </div>
                </div>
              </section>
              <section class="pro-equipment-section pagewrap-inner">
              <div class="container pl-1 pr-1">
              <div class="row">
                <div class="animatedParent">
                  <div class="row no-gutters">
                      <div class="col-sm-9 col-md-9 pl-2">
                      <img src={details.image} alt="" class="img-fluid object-fit-lg" />
                        <div class="mt-4 float-left">
                          {ReactHtmlParser(details.content)}
                          <div class="loadMorebtn p-0"><a href="/events" class="btn bha-btn-primary float-left">Go Back</a></div>
                        </div>
                      </div>

                        <div class="col-sm-3 col-md-3">
                            <div class="featured-product feature-sticky">
                                <h6>Latest Event</h6>
                                
                                {
                                    newsList &&
                                    Object.keys(newsList).length > 0 &&
                                    newsList.map((item, idx) => {
                                        return (
                                            <div class="location">
                                                <img class="bha-flag" src={item.image} alt="" />
                                                <div class="description-xxs"><a href={'/eventdetail/' + item.slug }>{item.title}</a></div>
                                                <div class="pro_Price p-0">
                                                    <p class="text-left pl-2 text-muted">{dateConversion(item.date_created)}</p>
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
