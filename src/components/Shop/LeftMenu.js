import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      active: null
    };
  }

  componentDidMount() {
    axios
      .post(
        API_URL + '/product_categories/get_branded_cat_sub_cat_list?fields=name'
      )
      .then(res => {
        this.setState({ menu: res.data });
      });
  }
  
  showSubMenu = (item) => {
    const { active } = this.state;
    const id = item._id;
    this.setState({ active: active == id ? null : id })
  }

  render() {
    const { menu,  active } = this.state;
    const {visible } = this.props;
    return (
      <>
        <div >
          <div className="main-header">
            <div className="logo-header">
              <a type="button" className="logo category_head">
                Shop By Category
              </a>
              <button className="navbar-toggler sidenav-toggler ml-auto" >
                <span className="navbar-toggler-icon" >
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <button className="topbar-toggler more"><i className="fa fa-ellipsis-v"></i></button>
              <div className="navbar-minimize" onClick={this.props.shrink}>
                {!visible ?
                  <button class="btn btn-minimize btn-rounded toggled">
                    <i class="fa fa-ellipsis-v">
                    </i>
                  </button>
                  :
                  <button className="btn btn-minimize btn-rounded">
                    <i className="fa fa-bars"></i>
                  </button>
                }
              </div>
            </div>

          </div>

          <div className="sidebar">
            <div className="sidebar-wrapper scrollbar-inner">
              <div className="sidebar-content">
                <ul className="nav">
                  {
                    Object.keys(menu).length > 0 ? menu.map((item, idx) => <li
                      key={`${idx}sm`}
                      className={active == item._id ? 'nav-item submenu' : 'nav-item'}
                      onClick={e => this.showSubMenu(item)}
                    >
                      <Link
                        className={active == item._id ? '' : 'collapsed'}
                        type="button"
                      >
                        <i className="fas fa-folder"></i>
                        <p>{item.name}</p>
                        <span className="caret"></span>
                      </Link>
                      <div
                        className={active == item._id ? 'collapse show' : 'collapse'}

                        id="base">
                        <ul className="nav nav-collapse">
                          {Object.keys(item.sub_cat).length > 0 &&
                            item.sub_cat.map((subCat, idx) => <li>
                              <Link to="">
                                <span className="sub-item">{subCat.name}</span>
                              </Link>
                            </li>

                            )}
                        </ul>
                      </div>
                    </li>
                    )
                      : null
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeftMenu;
