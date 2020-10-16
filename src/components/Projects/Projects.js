import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactHtmlParser from 'react-html-parser';
import { fetchProjectsDetail } from './projects.actions';
import './../../assets/css/news-events.css';
import { Link, animateScroll as scroll } from 'react-scroll';

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
            <div className="sidehoverbar">
                <div className="side-menu">
                {details &&
                    Object.keys(details).length &&
                    details.contents.map((item, idx) => {
                        return (
                            <Link
                                to={item.title}
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                className="tablink js-scroll-trigger"
                            >
                                {item.title}<i>&nbsp;</i>
                            </Link>
                        )
                    })
                }
                </div>  
            </div>
        {
        details && (
        <div className="content-wrapper pb-0">
            <div className="pagewrap">
                <div className="bgWhite pb-4">
                    <section className="pro-equipment-section pagewrap-inner" style={{"overflow-x": "hidden","margin-top":"160px"}} >
                        <h1 className="bha_heading_2 text-blue text-center pb-5">{details.banner_title}</h1>
                        {details.contents && details.contents.length > 0 &&
                            <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[0].title}>
                                <div className="row no-gutters flex-column-reverse flex-md-row">
                                    <div className="col-sm-6 col-md-6 promo-caption texture-bg mb-4">
                                        <div className="p-right">
                                            <h4 className="heading-h4 pb-2 text-blue">{details.contents[0].title}</h4>
                                            {ReactHtmlParser(details.contents[0].description)}
                                        </div>
                                      </div>
                                  <div className="col-sm-6 col-md-6 caption-img">
                                        <div className="brighten">
                                            <img src={details.contents[0].url} alt="..." className="proj-object-fit" />
                                        </div>
                                  </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 1 &&
                        <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[1].title}>
                            <div className="row no-gutters">
                                <div className="col-sm-6 col-md-6 caption-img mb-4">
                                    <div className="brighten">
                                        <img src={details.contents[1].url} alt="..." className="proj-object-fit" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 promo-caption-left flex-column-reverse flex-md-row">
                                    <div className="p-left">
                                      <h4 className="heading-h4 pb-2 text-blue">{details.contents[1].title}</h4>
                                      {ReactHtmlParser(details.contents[1].description)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        
                        {details.contents && details.contents.length > 2 &&
                        <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[2].title}>
                          <div className="row no-gutters flex-column-reverse flex-md-row">
                            <div className="col-sm-6 col-md-6 promo-caption texture-bg mb-4">
                              <div className="p-right text-left">
                                <h4 className="heading-h4 pb-2 text-blue">{details.contents[2].title}</h4>
                                {ReactHtmlParser(details.contents[2].description)}
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6 caption-img mb-4">
                              <div className="brighten">
                               <img src={details.contents[2].url} alt="..." className="proj-object-fit" />
                              </div>
                            </div>
                          </div>
                        </div>
                        }
                        
                        {details.contents && details.contents.length > 3 &&
                            <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[3].title}>
                                <div className="row no-gutters">
                                    <div className="col-sm-6 col-md-6 caption-img mb-4">
                                        <div className="brighten">
                                            <img src={details.contents[3].url} alt="..." className="proj-object-fit" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 promo-caption-left flex-column-reverse flex-md-row">
                                        <div className="p-left">
                                            <h4 className="heading-h4 pb-2 text-blue">{details.contents[3].title}</h4>
                                            {ReactHtmlParser(details.contents[3].description)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 4 &&
                            <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[4].title}>
                                <div className="row no-gutters flex-column-reverse flex-md-row">
                                    <div className="col-sm-6 col-md-6 promo-caption texture-bg mb-4">
                                      <div className="p-right">
                                        <h4 className="heading-h4 pb-2 text-blue">{details.contents[4].title}</h4>
                                        {ReactHtmlParser(details.contents[4].description)}
                                      </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 caption-img mb-4">
                                      <div className="brighten">
                                        <img src={details.contents[4].url} alt="..." className="proj-object-fit" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {details.contents && details.contents.length > 5 &&
                            <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[5].title}>
                                <div className="row no-gutters">
                                    <div className="col-sm-6 col-md-6 caption-img mb-4">
                                        <div className="brighten">
                                            <img src={details.contents[5].url} alt="..." className="proj-object-fit" />
                                        </div>
                                    </div>
                                  <div className="col-sm-6 col-md-6 promo-caption-left">
                                    <div className="p-left">
                                      <h4 className="heading-h4 pb-2 text-blue">{details.contents[5].title}</h4>
                                      {ReactHtmlParser(details.contents[5].description)}
                                    </div>
                                  </div>
                                </div>
                            </div>
                        }

                            {details.contents && details.contents.length > 6 &&
                                <div className="container-fluid pl-1 pr-1 mb-5" id={details.contents[6].title}>
                                    <div className="row no-gutters flex-column-reverse flex-md-row">
                                        <div className="col-sm-6 col-md-6 promo-caption texture-bg">
                                            <div className="p-right">
                                                <h4 className="heading-h4 pb-2 text-blue">{details.contents[6].title}</h4>
                                                {ReactHtmlParser(details.contents[6].description)}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 caption-img">
                                            <div className="brighten">
                                                <img src={details.contents[6].url} alt="..." className="proj-object-fit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                    </div>
                </div>
            </div>
        )}
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
