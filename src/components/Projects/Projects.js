import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MDBModal, MDBModalBody, MDBContainer, MDBBtn, MDBModalHeader } from 'mdbreact';
import ReactHtmlParser from 'react-html-parser';
import { fetchProjectsDetail } from './projects.actions';
import './../../assets/css/news-events.css';
import './../../assets/css/bha-slide.css';
import { Link, animateScroll as scroll } from 'react-scroll';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: false,
            title: undefined,
            description: undefined
        }
    }

    componentDidMount() {
        const { actions } = this.props;
        let url = this.props.location.pathname;
        if (url != '') {
            const slug = url.replace(/\\|\//g, '');
            actions.fetchProjectsDetail(slug);
        }

        document.title = 'Projects'
    }

    toggleMoreModal = (e) => {
        this.setState({
            more: false,
            title: undefined,
            description: undefined,
        })
    }

    showMore = (e, data) => {
        this.setState({
            more: true, title: data.title, description: data.description
        })
    }

    render() {

        const details = this.props.data;
        const page = this.props.page;
        let c = undefined;
        if (page && page.contents) {
            c = page.contents;

        }

        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        infinite: true,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true,
                    }
                }
            ]
        };


        return (
            <div>
                <MDBContainer>
                    <MDBBtn color="primary" onClick={this.toggleMoreModal}>
                        Modal
                    </MDBBtn>
                    <MDBModal isOpen={this.state.more} toggle={this.toggleMoreModal} className="full-moreinfo"
                        //style={{width:'700px'}}
                        size="fluid"
                        position="top"
                    >
                        <MDBModalHeader toggle={this.toggleMoreModal}>
                            {this.state.title}
                        </MDBModalHeader>
                        <MDBModalBody >
                            <div dangerouslySetInnerHTML={{ __html: this.state.description }}
                                style={{
                                    padding: '10px',
                                    overflowY: 'auto',
                                    maxHeight: '60vh'
                                }}
                            ></div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
                <div>
                    <div className="sidehoverbar">
                        <div className="side-menu">
                            {page &&
                                Object.keys(page).length &&
                                page.contents.map((item, idx) => {
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
                        page && (
                            <div className="content-wrapper pb-0">
                                <div className="pagewrap">
                                    <div className="bgWhite pb-4">
                                        <section className="project-section pagewrap-inner" style={{ "overflow-x": "hidden", "margin-top": "110px" }} >
                                            <h1 className="bha_heading_2 text-blue text-center pb-4">{page.banner_title}</h1>
                                            {[...new Array(c && c.length > 0 ? Math.floor((c.length%2 ==0 ? c.length: c.length+1 ) / 2) : 0)].map((d, index) => {
                                                
                                                return (
                                                    <>
                                                        {c && c[index * 2] ?
                                                            <div className="container-fluid pl-1 pr-1 mb-5" id={c[index * 2].title}>
                                                                <div className="row no-gutters flex-column-reverse flex-md-row">
                                                                    <div className="col-sm-6 col-md-6 promo-caption texture-bg mb-4">
                                                                        <div className="p-right">
                                                                            <h4 className="heading-h4 pb-2 text-blue">{c[index * 2].title}</h4>
                                                                            {ReactHtmlParser(c[index * 2].description)}

                                                                        </div>
                                                                        {c[index * 2].description.length > 200 ?
                                                                            <div className="morebtnL">
                                                                                <button onClick={e => this.showMore(e, c[index * 2])}>More</button>
                                                                            </div>
                                                                        : null}
                                                                    </div>
                                                                    <div className="col-sm-6 col-md-6 caption-img">
                                                                        <div className="brighten">
                                                                            {c[index * 2].url ? <img src={c[index * 2].url} alt="..." className="proj-object-fit" /> : null}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> : null}
                                                        {c && c[(index * 2) + 1] ? <div className="container-fluid pl-1 pr-1 mb-5" id={c[(index * 2) + 1].title}>
                                                            <div className="row no-gutters">
                                                                <div className="col-sm-6 col-md-6 caption-img mb-4">
                                                                    <div className="brighten">
                                                                        {c[(index * 2) + 1].url ? <img src={c[(index * 2) + 1].url} alt="..." className="proj-object-fit" /> : null}
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 col-md-6 promo-caption-left flex-column-reverse flex-md-row">
                                                                    <div className="p-left">
                                                                        <h4 className="heading-h4 pb-2 text-blue">{c[(index * 2) + 1].title}</h4>
                                                                        {ReactHtmlParser(c[(index * 2) + 1].description)}

                                                                    </div>
                                                                    {c[(index * 2) + 1].description.length > 200 ?
                                                                        <div className="morebtnR"><button onClick={e => this.showMore(e, c[(index * 2) + 1])}>More</button></div> : null}
                                                                </div>
                                                            </div>
                                                        </div> : null}
                                                    </>
                                                )
                                            }
                                            )
                                            }


                                        </section>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>

                {/* <IndustriesSlider />
                <div className="content-wrapper pb-0 pt-0">
                    <div className="pagewrap">
                        <div className="bgWhite pb-4"> */}
                {/* <CheckOutNews /> */}
                {/* <PremiumBrands /> */}
                {/* <CheckOutEvents /> */}
                {/* <Clients />
                        </div>
                    </div>
                </div> */}


            </div>

        );
    }
}


const mapStateToProps = ({ industries, projects }) => ({
    page: projects[0]
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
