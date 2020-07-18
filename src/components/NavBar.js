import React from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import EpicCover from '../assets/images/600X500-4.jpg'
import Baghouse from '../assets/images/baghouse.jpg'
import Baghouselogo from '../assets/images/baghouse_logo.svg';
import MenuLogo from '../assets/images/menu-logo.jpg';
import { dropDownMenuProduct, API_URL,defaultMenuListItems,categoryImageUrl } from "../constants/appConstant";
import { Sticky } from 'react-sticky';
import {fetch_dynamic_menus,fetch_submenu_items, fetch_page_meta_details} from '../actions/fetchActions'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      coverImg:null,
      listItems:[],
      activeLink: null
    };
    this.handleLoad = this.handleLoad.bind(this);

  }

  componentDidMount (){
    window.addEventListener('load', this.handleLoad);
     this.props.dispatch(fetch_dynamic_menus());
     this.props.dispatch(fetch_submenu_items());
     this.props.dispatch(fetch_page_meta_details());
  }

  handleLoad() {
    var v = document.getElementById("firstEl");
    if(v != null) {
      v.click()
    }
  }
  

  
  showMenu = (itemOneObj,index,e) =>{
    const {name,image,items,slug,_id} = itemOneObj;
    let imageSrc = `${categoryImageUrl}/${_id}/${image}`;
    this.setState({coverImg:imageSrc,listItems:items,activeLink:index})
    
    //const {coverImg , listItems} = listArr;
    //this.setState({coverImg,listItems,activeLink:idx})
  }

  drawSubMenu(baseUrl){
    
    const {coverImg,listItems,activeLink} = this.state;
    const {navMenuData} = this.props;
    const {subMenuData} = navMenuData;
    let subMenuArr = Object.keys(subMenuData).map((k) => subMenuData[k]);
    return (
      <div className="wsshoptabing wtsdepartmentmenu clearfix" style={{zIndex:999}}>
              <div className="wsshopwp clearfix">
                <div className="image-holder">
                    <img src={!coverImg ? EpicCover : coverImg} alt="" width="300" height="150" />
                  </div>
                <ul className="wstabitem clearfix">
                {
                  subMenuArr && subMenuArr.map((itemOne,i)=>{
                    let itemOneObj = itemOne && itemOne[0];
                    const {name,image,items,slug,_id} = itemOneObj;
                    return (
                    <li className={activeLink == i ? "wsshoplink-active":"wsshoplink"} id={i == 0 ? 'firstEl':'other'+i} 
                    key={i+Math.random()}
                    onClick={(e)=>this.showMenu(itemOneObj,i,e)} 
                    onMouseEnter={(e)=>this.showMenu(itemOneObj,i,e)}>
                    <Link to={`${baseUrl}/${slug}`} data-src={Baghouse} >{name}</Link>
                    <div className="wstitemright clearfix wstpngsml">
                      <div className="container-fluid">
                        <div className="row custom-gutter-wsmenu">
                          {listItems.map((itemTwo,i)=>{
                            return (
                              <div className="col-lg-3 col-md-12" key={i+3}>
                              <ul className="wstliststy04 clearfix">
                                <li><img className="scale-down" src={`${categoryImageUrl}/${itemTwo._id}/${itemTwo.image}`} alt="baghouse" /></li>
                                <li className="wstheading clearfix">
                                <Link to={`${baseUrl}/${slug}/${itemTwo.slug}`}> <i class="fa fa-chevron-right pr-2"></i>{itemTwo.name}</Link>
                                </li>
                              </ul>
                            </div>
                            )
                          }) }
                          </div>
                      </div>
                    </div>
                  </li>
                    )
                  })
                }
                </ul>
              </div>
            </div>
    )

  }

  render() {
    const {navMenuData} = this.props;
    const {menuData,subMenuData} = navMenuData;
    const {header_menu} = menuData;
    let subMenuArr = Object.keys(subMenuData).map((k) => subMenuData[k]);

    return (
        <div className="headerfull">
            <div class="smllogo logo-left">
                <a href="#" class="anchor-logo">
                    <img class="d-block pt-1" src={MenuLogo} alt="" width="200" />
                </a>
            </div>

            <div class="wsmain clearfix">
                <nav className="wsmenu clearfix">
                    <ul className="wsmenu-list">
                    {
                        header_menu && header_menu.map((item,idx)=>{
                            if (idx ==2){
                                return (
                                    <li aria-haspopup="true" key={idx+"a"}>
                                        <Link to={item.url} className="navtext text-uppercase">{item.text}</Link>
                                        {this.drawSubMenu(item.url)}
                                    </li>
                                )
                            } else{
                                return <li aria-haspopup="true"  key={idx+"dd"}>
                                      <Link to={item.url} className="navtext text-uppercase">{item.text}</Link>
                                    </li>
                            }
                        })
                    }
                        <li aria-haspopup="true">
                            <a href="#myModal" data-toggle="modal" class="bha-btn-secondry hotLink mr-2 ml-2">request a quote</a>
                        </li>
                        <li aria-haspopup="true">
                            <a href="#" class="bha-btn-primary bha-btn-menu hotLink pl-2 pr-2">shop now</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navMenuData: state,
    //subMenuData:state
  };
};
export default connect(mapStateToProps)(NavBar);
