import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AlertMessages from './common/AlertMessages';
import EpicCover from '../assets/images/600X500-4.jpg';
import Baghouse from '../assets/images/baghouse.jpg';
import Baghouselogo from '../assets/images/baghouse_logo.svg';
import MenuLogo from '../assets/images/menu-logo.jpg';

import {
  dropDownMenuProduct,
  API_URL,
  API_IMAGE_PATH,
  defaultMenuListItems,
  categoryImageUrl,

} from '../constants/appConstant';
import { DEFAULT_IMG_URL } from '../constants/urls';
import { Sticky } from 'react-sticky';

import {
  fetch_dynamic_menus,
  fetch_submenu_items,
} from '../actions/fetchActions';
import RequestAQuote from './RequestAQuote';
import { save_brochures_details } from '../actions/freeBrochuresActions';
import { showToast } from './Notification/notification.actions';
import SubMenu from './Submnues/SubMenu';
import ReactDOM from 'react-dom';
import scrollToEl from '../utils/scrollToEl'
import  _ from 'lodash'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      coverImg: null,
      listItems: [],
      activeLink: null,
      isQuoteModalOpen: false,
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
    window.addEventListener('load', this.handleLoad);
    this.props.fetch_dynamic_menus();
    this.props.fetch_submenu_items();
    this.writeTitle()
    
  }
  writeTitle =()=>{
    let {location:{pathname}}=this.props;
    let p =pathname;
    // console.log('->>>>>>>>>>>>>>>>>>>>>..',p);
    if(p && p.split('/') && p.split('/')[1] ){
      p =p.split('/')[1];
      p= p.replace('-',' ');
      p =_.startCase(p); 
      
    } else {
      p ='Baghouse America'
    }
    document.title =p ? p : 'Baghouse America'
  }

  componentDidUpdate(preveProps) {
    if (preveProps.location.pathname != this.props.location.pathname) {
      scrollToEl('#root', 0)
      this.writeTitle()
    }
  }

  handleLoad() {
    var v = document.getElementById('firstEl');
    if (v != null) {
      v.click();
    }
  }

  showMenu = (itemOneObj, index, e) => {
    const { name, image, items, slug, id } = itemOneObj;
    let imageSrc = '';
    if (image != '') {
      imageSrc = `${categoryImageUrl}/${id}/${image}`;
    } else {
      imageSrc = DEFAULT_IMG_URL;
    }

    this.setState({ coverImg: imageSrc, listItems: items, activeLink: index });

    //const {coverImg , listItems} = listArr;
    //this.setState({coverImg,listItems,activeLink:idx})
  };

  linkClicked = (p) => {
    this.props.setT((new Date()).getTime())
  }

  toggleQuoteModal = () => {
    this.linkClicked()
    const { isQuoteModalOpen } = this.state;
    this.setState({ isQuoteModalOpen: !isQuoteModalOpen });
  };

 

  showSubMenu = (e, item) => {
    if (item.has_sub_menu) {
      e.preventDefault();
      const { visibleSubmenu } = this.state;
      if (visibleSubmenu && visibleSubmenu == item.id) {
        this.setState({ visibleSubmenu: null })
      } else {
        this.setState({ visibleSubmenu: item.id })
      }
    } else {
      this.linkClicked('1')
      this.setState({ visibleSubmenu: null })
    }
  }
  hideSubMenu = () => {
    this.setState({ visibleSubmenu: null })
    //this.linkClicked('2')
  }



  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.hideSubMenu()
    }
  }

  render() {
    const { navMenuData } = this.props;
    const { visibleSubmenu } = this.state;
    const { menuData, subMenuData } = navMenuData;
    const { header_menu } = menuData;

    let subMenuArr = Object.keys(subMenuData).map(k => subMenuData[k]);
    return (

      <div className="headerfull" >
        <div className="pagewrap">
          <div className="smllogo">
            <a href="/" className="anchor-logo">
              <img className="d-block pt-1" src={MenuLogo} alt="" width="200" />
            </a>
          </div>

          <div className="wsmain clearfix">
            <nav className="wsmenu clearfix">
              <ul id="scrollablesubMenu" className="wsmenu-list" onClick={this.handleClickOutside}>
                {header_menu &&
                  header_menu.map((item, idx) => <li
                    //onMouseLeave={this.hideSubMenu}
                    id={item.has_sub_mennu ? 'megaMenu' : ''}
                    key={idx + 'a'}
                    className={item.id == this.state.visibleSubmenu ? 'wsclickopen' : ''}
                  >
                    <Link to={item.url} className="navtext text-uppercase"
                      onClick={e => this.showSubMenu(e, item)}
                    >
                      {item.text}
                      {item.has_sub_menu &&
                        <span><i className="fas fa-angle-down ml-4 downArrowHide"></i></span>
                      }
                    </Link>
                    {visibleSubmenu == item.id &&
                      <SubMenu
                        coverImg={this.state.coverImg}
                        listItems={this.state.listItems}
                        activeLink={this.state.activeLink}
                        navMenuData={this.props.navMenuData}
                        id={item.id}
                        hide={this.hideSubMenu}
                      />
                    }

                  </li>
                  )}
                <li>
                  <a
                    id="requestAQuote"
                   onClick={e=> e.preventDefault()}
                    onClick={this.toggleQuoteModal}
                    className="bha-btn-secondry hotLink mr-2 ml-2"
                  >
                    request a quote
                </a>
                </li>
                <li>
                  <Link
                    //onClick={this.linkClicked}
                    to="/shop"
                    //target="_blank"
                    className="bha-btn-primary bha-btn-menu hotLink pl-2 pr-2"
                  >
                    shop now
                </Link>
                </li>
              </ul>
            </nav>
          </div>
          <RequestAQuote
            toggleModal={this.toggleQuoteModal}
            isOpen={this.state.isQuoteModalOpen}
            onSubmit={this.props.saveBrochuresDetails}
            showToast={this.props.showToast}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ asyncReducer }) => {
  return {
    navMenuData: asyncReducer || {},
    //subMenuData:state
  };
};

const mapDispatchToProps = {
  saveBrochuresDetails: save_brochures_details,
  fetch_dynamic_menus,
  fetch_submenu_items,
  showToast,
};
//export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
const navRedux = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default withRouter(navRedux);
