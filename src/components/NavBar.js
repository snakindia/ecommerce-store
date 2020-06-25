import React from 'react';
import {Link} from 'react-router-dom'
import EpicCover from '../assets/images/600X500-4.jpg'
import Baghouse from '../assets/images/baghouse.jpg'
import Baghouselogo from '../assets/images/baghouse_logo.svg';
import { dropDownMenuProduct, API_URL,defaultMenuListItems } from "../constants/appConstant";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      coverImg:null,
      listItems:[],
      activeLink: null
    };
  }

  
  showMenu = (listArr,idx,e) =>{
    const {coverImg , listItems} = listArr;
    this.setState({coverImg,listItems,activeLink:idx})
  }

  drawSubMenu(){
    const {coverImg,listItems,activeLink} = this.state;
    return (
      <div className="wsshoptabing wtsdepartmentmenu clearfix" style={{zIndex:999}}>
              <div className="wsshopwp clearfix">
                <div className="image-holder">
                    <img src={!coverImg ? EpicCover : coverImg} alt="" width="300" height="150" />
                  </div>
                <ul className="wstabitem clearfix">
                {
                  dropDownMenuProduct.map((itemOne,idx)=>{
                    let mainText = Object.keys(itemOne)[0];
                    let listArr = itemOne[mainText];
                    //let {listItems} = listArr
                    //console.log('listItems',listItems)
                    return (
                    <li className={activeLink == idx ? "wsshoplink-active":"wsshoplink"} key={idx+Math.random()}><a data-src={Baghouse} onMouseEnter={(e)=>this.showMenu(listArr,idx,e)}>{mainText}</a>
                    <div className="wstitemright clearfix wstpngsml">
                      <div className="container-fluid">
                        <div className="row custom-gutter">
                          {listItems.map((itemTwo,i)=>{
                            return (
                              <div className="col-lg-3 col-md-12" key={i+3}>
                              <ul className="wstliststy04 clearfix">
                                <li><img className="scale-down" src={itemTwo.itemImg} alt=" " /></li>
                                <li className="wstheading clearfix"><a href="#">{itemTwo.itemName}</a></li>
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
    const {dynamicMenu} = this.props;
    const {header_menu} = dynamicMenu;
    
    return (
      <div class="headerfull h-25">
          <div class="wsmain clearfix">
            <div className="smllogo"><a href="/"><img className="d-block" src={Baghouselogo} alt="" width="200" /></a></div>
            <div className="wssearchbar clearfix">
                <form class="topmenusearch clearfix">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="What are you looking for..." />
                        <div className="input-group-append">
                            <button class="btn btn-bha-primary" type="button"><i class="fa fa-search pl-0 pr-2"></i>Search</button>
                        </div>
                    </div>
                </form>
            
                <div className="right-section">
                    <div className="call_us mr-4">
                        CALL US: <br />(888) 739-1794 
                    </div>
                    <div className="hotLink mr-3 float-left">
                        <a href="/" className="bha-btn-secondry">request a quote</a>
                    </div>
                    <div className="hotLink float-left">
                        <a href="/" className="bha-btn-primary">shop now</a>
                    </div>
                </div>
            </div>
        </div>
      <nav className="wsmenu clearfix">
        <ul className="wsmenu-list">
           {
             header_menu && header_menu.map((item,idx)=>{
               if(idx ==2){
                 return (
                  <li aria-haspopup="true" className="wsshopmyaccount float-left" key={idx+"a"}>
                  <Link to={item.url} className="font-weight-bold">{item.text}<span className="dropdown-toggle ml-2"></span></Link>
                    {this.drawSubMenu()}
                  </li>
                 )
               }
               else{
                 return <li aria-haspopup="true" className="wsshopmyaccount float-left" key={idx+"dd"}>
                         <Link to={item.url} className="font-weight-bold">{item.text}</Link>
                        </li>
               }
              

             })
           }
          </ul>
      </nav>
       
      </div>
    );
  }
}

export default NavBar;