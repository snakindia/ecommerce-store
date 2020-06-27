import React, { useEffect , useRef, useState } from 'react';
import { connect } from "react-redux";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
//import FreeBrochure from '../../components/common/FreeBrochure';
import team from '../../assets/images/team.jpg';
import picOne from '../../assets/images/pexels-photo.png';
import picTwo from '../../assets/images/img-profile.png';
import picThree from '../../assets/images/pexels-photo.jpeg';
import teamIcon from '../../assets/icon/teamwork.svg';
import performanceIcon from '../../assets/icon/performance.svg'
import communityIcon from '../../assets/icon/community.svg';
import respectIcon from '../../assets/icon/respect.svg';
import handShakeIcon from '../../assets/icon/handshake.svg';
import innovationIcon from '../../assets/icon/innovation.svg';
import leaderIcon from '../../assets/icon/leader.svg';
import aboutBanner from '../../assets/images/DSC_7731.jpg';
import {get_about_us_details} from '../../actions/pageActions'


const scrollToRef = (ref) => typeof window !== 'undefined' && window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])

class About extends React.Component {

    constructor(props) {
        super(props);
//        this.state = {
//            myRef: useRef(null),
//            profileRef: useRef(null),
//            mvref: useRef(null),
//            valRef: useRef(null)
//        }
  }

   
    
    componentDidMount (){
        this.props.dispatch(get_about_us_details());
        
       
//        useEffect(() => {
//      const header = document.getElementById("tabItems");
//      const sticky = header.offsetTop;
//      const scrollCallBack = window.addEventListener("scroll", () => {
//        if (window.pageYOffset > sticky) {
//          header.classList.add("sticky");
//        } else {
//          header.classList.remove("sticky");
//        }
//      });
//      return () => {
//        window.removeEventListener("scroll", scrollCallBack);
//      };
//    }, []);
    }
    
    drawFirstSectionData() {
        const {abousUsDetails} = this.props.abousUsDetails;
        if (Object.keys(this.state.errors).length > 0) {
        return (
            <div>
            { Object.keys(abousUsDetails).length &&
                abousUsDetails.map((item, idx) => {
                    if (typeof item[0] != 'undefined') {
                        return (
                            <section className="content-section" id="section1" >
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="heading-wrapper">
                                            <h4 className="heading" />
                                            <h4 className="heading-h4">{item[0].meta_title}</h4>
                                        </div>
                                        <div className="col-sm-9 col-md-9 pl-0">
                                            {item[0].content}
                                        </div>
                                        <div className="col-sm-3 col-md-3 pl-0 pr-0">
                                            <img className="img-fluid border-frame" src={picOne} alt="" />
                                        </div>
                                  </div>
                                </div>
                            </section>
                        )
                    }
                }
            )}
            </div>
        )
        }
    }
  

    
	//useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  render() {
         
//        const myRef = useRef(null);
//        const profileRef = useRef(null);
//        const mvref = useRef(null);
//        const valRef= useRef(null);
      console.log('....................................................');
//      console.log(abousUsDetails.abousUsDetails);
      
//        const [isTabActive, setIsTabActive] = useState(false);
    return (
            <div>
        <div className="banner-container">
        <div id="carousel" class="carousel slide" data-ride="carousel">

        <div class="carousel-item bha_h_50 active">
            <picture>
                <img src={team} alt="responsive image" class="d-block img-fluid" />
              </picture>
            <div class="caption v_middle">
                <h1 class="bha_heading_1 text-black-dark">Lorem ipsum dollar site amnt</h1>
                <h5>Lorem ipsum dollar site amt. Lorem ipsum dollar site amt.Lorem ipsum dollar site amt.</h5>
            </div>
        </div>
      </div>
    </div>
    
    
      <div id="tabItems">
      <section>
        <div className="container-fluid pl-0 pr-0">
          <ul className="tab-menu">
            <li>
            <Link
                activeClass="current"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

                className="tablink js-scroll-trigger current"
              >
                A Message from the CEO
              </Link>
             
            </li>
            <li>
            <Link
                activeClass="current"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Company Profile
              </Link>
            </li>
            <li>
            <Link
                activeClass="current"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="tablink js-scroll-trigger"
              >
            Mission and Vision
            </Link>
            </li>
            <li>
            <Link
                activeClass="current"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="tablink js-scroll-trigger"
              >
                Our Values
              </Link>
             
            </li>
          </ul>
        </div>
       </section>
      </div>

        
        <div>
        
       
        {
            
                this.drawFirstSectionData()
        }
        
        <section className="mv-section" id="section3" >
          <div className="container-fluid">
            <div className="row">
              <div className="heading-wrapper">
                <h4 className="heading" />
                <h4 className="heading-h4">Baghouse America Mission &amp; Vision</h4>
              </div>
              <div className="col-sm-9 col-md-9 pr-5">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0 pr-0">
                <img className="img-fluid border-frame" src={picThree} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="content-section pb-4" id="section4" >
          <div className="container-fluid">
            <div className="row">
              <div className="heading-wrapper">
                <h4 className="heading" />
                <h4 className="heading-h4">Our Values</h4>
              </div>
              <div className="col-sm-3 col-md-3 pl-0 mb-5">
                <h5 className="font-weight-bold"><img src={handShakeIcon} alt="" width={60} className="mr-3" />Integrity</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0 mb-5">
                <h5 className="font-weight-bold"><img src={respectIcon} alt="" width={60} className="mr-3" />Respect for People</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0 mb-5">
                <h5 className="font-weight-bold"><img src={teamIcon} alt="" width={60} className="mr-3" />Teamwork</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0 mb-5">
                <h5 className="font-weight-bold"><img src={performanceIcon} alt="" width={60} className="mr-3" />Performance</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0">
                <h5 className="font-weight-bold"><img src={performanceIcon} alt="" width={60} className="mr-3" />Quality</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0">
                <h5 className="font-weight-bold"><img src={communityIcon} alt="" width={60} className="mr-3" />Community</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0">
                <h5 className="font-weight-bold"><img src={innovationIcon} alt="" width={60} className="mr-3" />Inovation</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="col-sm-3 col-md-3 pl-0">
                <h5 className="font-weight-bold"><img src={leaderIcon} alt="" width={60} className="mr-3" />Leadership</h5>
                <p className="pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
            </div>
          </div>
        </section>

        </div>
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    abousUsDetails: state
  };
};
export default connect(mapStateToProps)(About);
