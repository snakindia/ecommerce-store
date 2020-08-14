import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {dateConversion} from './../common/Util';
import image1 from '../../assets/images/1 (4).jpg'
import image2 from '../../assets/images/2.jpg'
import {
    fetchNewsDetail
} from './newsdetail.actions';

class NewsDetail extends Component {
    
    componentDidMount() {
        const slug = this.props.match.params.slug;
        const { actions } = this.props;
        if (slug != '') {
            actions.fetchNewsDetail(slug);
        }
    }
  
    render() {
        
    const details = this.props.data;
    return (
    <div class="pagewrap">
            <div class="bgWhite pb-4">
              <section class="bg-opeque pt-5 animatedParent" style={{'overflow-x': 'hidden', 'margin-top':'100px'}}>
                <div class="container-fluid">
                  <h2 class="bha_heading_2 pt-2 pl-2 text-blue text-left">
                    {details.title}
                  <span class="viewAll" style={{top:"38%"}}><a href="news-events.html">Go to news</a></span>
                  </h2>
                  <p class="text-left pl-2 text-muted">{dateConversion(details.date_created)}</p>
                  <div class="share-link">
                    <a href=""><i class="fa fa-facebook"></i>facebook</a>
                    <a href="" class="twitter"><i class="fa fa-twitter"></i>Twitter</a>
                  </div>
                </div>
              </section>
              <section class="pro-equipment-section pagewrap-inner">
              <div class="container pl-1 pr-1">
              <div class="row">
                <div class="animatedParent">
                  <div class="row no-gutters">
                      <div class="col-sm-9 col-md-9 pl-2">
                        <div class="mt-4 float-left">
                          {details.content}
                          <div class="loadMorebtn p-0"><a href="news.html" class="btn bha-btn-primary float-left">Go Back</a></div>
                        </div>
                      </div>

                      <div class="col-sm-3 col-md-3">
                        <div class="featured-product feature-sticky">
                        <h6>Latest Events</h6>
                        <div class="location">
                            <img class="bha-flag" src={image1} alt="" />
                          <div class="description-xxs"><a href="events.html">Lorem Ipsum Dollar</a></div>

                          <div class="pro_Price p-0">
                           <p class="text-left pl-2 text-muted">10 August, 2020</p>
                          </div>
                        </div>
                        <div class="location">
                            <img class="bha-flag" src={image1} alt="" />
                          <div class="description-xxs"><a href="events.html">Lorem Ipsum Dollar</a></div>

                          <div class="pro_Price p-0">
                           <p class="text-left pl-2 text-muted">10 August, 2020</p>
                          </div>
                        </div>

                        <div class="location">
                            <img class="bha-flag" src={image1} alt="" />
                          <div class="description-xxs"><a href="events.html">Lorem Ipsum Dollar</a></div>

                          <div class="pro_Price p-0">
                           <p class="text-left pl-2 text-muted">10 August, 2020</p>
                          </div>
                        </div>

                        <div class="location">
                            <img class="bha-flag" src={image1} alt="" />
                          <div class="description-xxs"><a href="events.html">Lorem Ipsum Dollar</a></div>

                          <div class="pro_Price p-0">
                           <p class="text-left pl-2 text-muted">10 August, 2020</p>
                          </div>
                        </div>

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

const mapStateToProps = ({ newsdetail }) => ({
    data: newsdetail
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
        fetchNewsDetail
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
