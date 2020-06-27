import React from 'react';
import { connect } from "react-redux";
import htmlParse from "html-react-parser";
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
import {get_about_us_details} from '../../actions/pageActions';
import { StickyContainer, Sticky } from 'react-sticky';


const scrollToRef = (ref) => typeof window !== 'undefined' && window.scrollTo(0, ref.current.offsetTop)   

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabID: '',
            curerentTabClass: 'tablink js-scroll-trigger current',
             isSticky: true,
//            abousUsDetails: {}
//            myRef: useRef(null),
//            profileRef: useRef(null),
//            mvref: useRef(null),
//            valRef: useRef(null)
        }
  }

    componentDidMount (){
        this.props.dispatch(get_about_us_details());
//        this.state.activeTabID = '5ef12cc06419132054249c05';
    }
 

    
    setActiveClass = (id) => {
        this.setState({
      activeTabID: id
    })
        console.log('................................................');
        console.log(this.state.activeTabID);
    }
    
    
    drawMenu() {
        const  {abousUsDetails} = this.props;
        let abousUsObj = abousUsDetails.abousUsDetails;
        return (
              
  
   <Sticky relative>
          {({
            style={top: 0},
            isSticky=true,
          }) => (
            <div>
                <div id="tabItems">
                    <section>
                        <div className="container-fluid pl-0 pr-0">
                            <ul className="tab-menu">
                   {
                       abousUsObj && Object.keys(abousUsObj).length &&
                       abousUsObj.map((item, idx) => {
                            if (idx == 0) {
                               this.state.activeTabID = item.id;
                           }
                           return (
                               <li>
                                   <Link activeClass="current" spy={true} smooth={true} offset={-70} duration={500} onClick={(e) => this.setActiveClass(item.id, e)}
                                       className={ this.state.activeTabID == item.id ? 'tablink js-scroll-trigger current' : 'tablink js-scroll-trigger' } 
                                     >
                                       {item.meta_title}
                                   </Link>
                               </li>
                           );
                       })
                   }

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
            </div>
          )}
        </Sticky>
        
    
                
        )
    }
  

    
	//useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  render() {
        const  {abousUsDetails} = this.props;
        let abousUsObj = abousUsDetails.abousUsDetails;
//        const myRef = useRef(null);
//        const profileRef = useRef(null);
//        const mvref = useRef(null);
//        const valRef= useRef(null);
//      console.log(abousUsDetails.abousUsDetails);
      
//        const [isTabActive, setIsTabActive] = useState(false);
    return (
            <div>
              <StickyContainer>
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
   
              {this.drawMenu()}
           
       
        <div>
        { 
            abousUsObj && Object.keys(abousUsObj).length &&
                abousUsObj.map((item, idx) => {
                   if (idx == 0) {
                        return (
                            <section class="content-section" id="0">
                               <div class="container-fluid">
                                   <div class="row">
                                       <div class="heading-wrapper">
                                           <h4 class="heading"></h4>
                                           <h4 class="heading-h4">{item.meta_title}</h4>
                                       </div>
                                       <div class="col-sm-9 col-md-9 pl-0">
                                           {htmlParse(item.content)}
                                       </div>
                                       <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                           <img class="img-fluid border-frame" src={picOne} alt="" />
                                       </div>
                                   </div>
                               </div>
                           </section>   
                        )
                   }
                    
                    if (idx == 1) {
                        return (
                            <section class="content-section" id="1">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="heading-wrapper">
                                            <h4 class="heading"></h4>
                                            <h4 class="heading-h4">{item.meta_title}</h4>
                                        </div>
                                        <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                              <img class="img-fluid border-frame" src={picTwo} alt="" />
                                        </div>
                                        <div class="col-sm-9 col-md-9 pl-5">
                                            {htmlParse(item.content)}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                    
                     if (idx == 2) {
                     return (
                            <section class="mv-section" id="2">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="heading-wrapper">
                                            <h4 class="heading"></h4>
                                            <h4 class="heading-h4">{item.meta_title}</h4>
                                        </div>

                                        <div class="col-sm-9 col-md-9 pr-5">
                                            {htmlParse(item.content)}
                                        </div>
                                        <div class="col-sm-3 col-md-3 pl-0 pr-0">
                                            <img class="img-fluid border-frame" src={picThree} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
            })
        }
       
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
          </StickyContainer>
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    abousUsDetails: state,
    
  };
};
export default connect(mapStateToProps)(About);
