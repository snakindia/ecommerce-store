import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactHtmlParser from 'react-html-parser';
import { fetchProjectsDetail } from './projects.actions';

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let url = this.props.location.pathname;
        const { actions } = this.props;
        if (url != '') {
            const slug = url.replace(/\\|\//g,'');
            actions.fetchProjectsDetail(slug);
        }
    }
    
    render() {
        
        const details = this.props.data;
        return (
            <div>
            {
        details && (
        <div class="content-wrapper pb-0">
            <div class="pagewrap">
                <div class="bgWhite pb-4">
                    <section class="pro-equipment-section pagewrap-inner" style={{"overflow-x": "hidden","margin-top":"160px"}} >
                        <h1 class="bha_heading_2 text-blue text-center pb-5">{details.banner_title}</h1>
                        {details.contents && details.contents.length > 0 &&
                            <div class="container-fluid pl-1 pr-1 mb-5" id="section_1">
                                <div class="row no-gutters flex-column-reverse flex-md-row">
                                    <div class="col-sm-6 col-md-6 promo-caption texture-bg">
                                        <div class="p-right">
                                            <h4 class="heading-h4 pb-2 text-blue">{details.contents[0].title}</h4>
                                            {ReactHtmlParser(details.contents[0].description)}
                                        </div>
                                      </div>
                                  <div class="col-sm-6 col-md-6 caption-img">
                                        <div class="brighten">
                                            <img src={details.contents[0].url} alt="..." class="proj-object-fit" />
                                        </div>
                                  </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 1 &&
                        <div class="container-fluid pl-1 pr-1 mb-5" id="section_2">
                            <div class="row no-gutters">
                                <div class="col-sm-6 col-md-6 caption-img">
                                    <div class="mt-4 brighten">
                                        <img src={details.contents[1].url} alt="..." class="proj-object-fit" />
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 promo-caption-left flex-column-reverse flex-md-row">
                                    <div class="p-left">
                                      <h4 class="heading-h4 pb-2 text-blue">{details.contents[1].title}</h4>
                                      {ReactHtmlParser(details.contents[1].description)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        
                        {details.contents && details.contents.length > 2 &&
                        <div class="container-fluid pl-1 pr-1 mb-5" id="section_3">
                          <div class="row no-gutters flex-column-reverse flex-md-row">
                            <div class="col-sm-6 col-md-6 promo-caption texture-bg">
                              <div class="p-right">
                                <h4 class="heading-h4 pb-2 text-blue">{details.contents[1].title}</h4>
                                {ReactHtmlParser(details.contents[2].description)}
                              </div>
                            </div>
                            <div class="col-sm-6 col-md-6 caption-img">
                              <div class="brighten">
                               <img src={details.contents[2].url} alt="..." class="proj-object-fit" />
                              </div>
                            </div>
                          </div>
                        </div>
                        }
                        
                        {details.contents && details.contents.length > 3 &&
                            <div class="container-fluid pl-1 pr-1 mb-5" id="section_4">
                                <div class="row no-gutters">
                                    <div class="col-sm-6 col-md-6 caption-img">
                                        <div class="mt-4 brighten">
                                            <img src={details.contents[2].url} alt="..." class="proj-object-fit" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 promo-caption-left flex-column-reverse flex-md-row">
                                        <div class="p-left">
                                            <h4 class="heading-h4 pb-2 text-blue">{details.contents[2].title}</h4>
                                            {ReactHtmlParser(details.contents[3].description)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 4 &&
                            <div class="container-fluid pl-1 pr-1 mb-5" id="section_5">
                                <div class="row no-gutters flex-column-reverse flex-md-row">
                                    <div class="col-sm-6 col-md-6 promo-caption texture-bg">
                                      <div class="p-right">
                                        <h4 class="heading-h4 pb-2 text-blue">{details.contents[4].title}</h4>
                                        {ReactHtmlParser(details.contents[4].description)}
                                      </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 caption-img">
                                      <div class="brighten">
                                        <img src={details.contents[4].url} alt="..." class="proj-object-fit" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 5 &&
                            <div class="container-fluid pl-1 pr-1 mb-5" id="section_6">
                                <div class="row no-gutters">
                                    <div class="col-sm-6 col-md-6 caption-img">
                                        <div class="mt-4 brighten">
                                            <img src={details.contents[5].url} alt="..." class="proj-object-fit" />
                                        </div>
                                    </div>
                                  <div class="col-sm-6 col-md-6 promo-caption-left">
                                    <div class="p-left">
                                      <h4 class="heading-h4 pb-2 text-blue">{details.contents[5].title}</h4>
                                      {ReactHtmlParser(details.contents[5].description)}
                                    </div>
                                  </div>
                                </div>
                            </div>
                        }

                            {details.contents && details.contents.length > 6 &&
                                <div class="container-fluid pl-1 pr-1 mb-5" id="section_7">
                                    <div class="row no-gutters flex-column-reverse flex-md-row">
                                        <div class="col-sm-6 col-md-6 promo-caption texture-bg">
                                            <div class="p-right">
                                                <h4 class="heading-h4 pb-2 text-blue">{details.contents[6].title}</h4>
                                                {ReactHtmlParser(details.contents[6].description)}
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 caption-img">
                                            <div class="brighten">
                                                <img src={details.contents[6].url} alt="..." class="proj-object-fit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                    </div>
                </div>
            </div>
        )};
        </div>
        
    );
  }
}

const mapStateToProps = ({ projects }) => ({
    data: projects[0]
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
    {
       fetchProjectsDetail
    },
    dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
