import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
import SubMenu from './Submnues/SubMenu'
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
    window.addEventListener('load', this.handleLoad);
    this.props.fetch_dynamic_menus();
    this.props.fetch_submenu_items();
  }

  handleLoad() {
    var v = document.getElementById('firstEl');
    if (v != null) {
      v.click();
    }
  }

  showMenu = (itemOneObj, index, e) => {
    const { name, image, items, slug, _id } = itemOneObj;
    let imageSrc = '';
    if (image != '') {
      imageSrc = `${categoryImageUrl}/${_id}/${image}`;
    } else {
      imageSrc = DEFAULT_IMG_URL;
    }

    this.setState({ coverImg: imageSrc, listItems: items, activeLink: index });

    //const {coverImg , listItems} = listArr;
    //this.setState({coverImg,listItems,activeLink:idx})
  };

  toggleQuoteModal = () => {
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
    }
  }
  hideSubMenu = () => {
    this.setState({ visibleSubmenu: null })
  }


  render() {
    const { navMenuData } = this.props;
    const { visibleSubmenu } = this.state;
    const { menuData, subMenuData } = navMenuData;
    const { header_menu } = menuData;
    let subMenuArr = Object.keys(subMenuData).map(k => subMenuData[k]);

    return (
      <div className="headerfull" >
        <div className="smllogo logo-left">
          <a href="#" className="anchor-logo">
            <img className="d-block pt-1" src={MenuLogo} alt="" width="200" />
          </a>
        </div>

        <div className="wsmain clearfix">
          <nav className="wsmenu clearfix">
            <ul className="wsmenu-list">
              {header_menu &&
                header_menu.map((item, idx) => <li
                  onMouseLeave={this.hideSubMenu}
                  id={item.has_sub_mennu ? 'megaMenu' : ''}
                  key={idx + 'a'}
                  className={item.id == this.state.visibleSubmenu ? 'wsclickopen' : ''}
                >
                  <Link to={item.url} className="navtext text-uppercase"
                    onClick={e => this.showSubMenu(e, item)}
                  >
                    {item.text}
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
              <li aria-haspopup="true">
                <a
                  href="javascript:void(0)"
                  onClick={this.toggleQuoteModal}
                  className="bha-btn-secondry hotLink mr-2 ml-2"
                >
                  request a quote
                </a>
              </li>
              <li aria-haspopup="true">
                <a
                  href="shop"
                  className="bha-btn-primary bha-btn-menu hotLink pl-2 pr-2"
                >
                  shop now
                </a>
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
