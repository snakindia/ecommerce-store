import React, { Component, useEffect,useState } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import { getMenu } from './store/Actions'
import { setFooter } from '../../actions/pageActions'
import { Menu, Spin } from 'antd';
import './css/antd.less'
import '../../assets/css/content.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined, FolderFilled } from '@ant-design/icons';
import useWindowDimensions from '../../utils/windowDimensions'
const { SubMenu } = Menu;

const LeftMenu = (props) => {
  const [active, setActive] = useState(null)
  const [openKeys, setOpenKeys] = useState([])
  const [scrolled, setScrolled] = useState(0)
  const [rootSubmenuKeys, setRootSubmenuKeys] = useState([])

  useEffect(() => {
    props.getMenu()
    
  }, [])

  const onOpenChange = keys => {

    keys = keys.filter(key => !openKeys.includes(key))
    setOpenKeys(keys);
  }
  const push = (link) => {
    props.history.push(link)
  }
  useEffect(() => {
    props.getMenu()
    window.onscroll = () => {
      console.log('s',(new Date()).getTime());
      setScrolled(window.pageYOffset)
    }
  }, [])
   
    const { visible, menu, loading } = props;
    const { height } = useWindowDimensions();
    let footer = 0;
    const pageHeight = document.documentElement.offsetHeight;

    const leftMneu = document.getElementById('leftmenusidebar');
    if (document.getElementById('footer')) {
      // footer = document.getElementById('footer').clientHeight;
      footer = document.getElementById('footer').offsetTop;
    }

    const heightTillFooter = height + footer;
    const footerVisible = heightTillFooter <= (scrolled + pageHeight + height) ? 1 : 0;
    if (footerVisible && leftMneu) {
      const top = (scrolled + height) - footer;
      //console.log({ top });
      leftMneu.style.top = `-${top}px`;
    }
    else if (!footerVisible && leftMneu) {
      leftMneu.style.top = 0;
    }
    //console.log(footerVisible, scrolled, height, footer, pageHeight);
    //console.log('v',(new Date()).getTime());
    return (
      <>
      <div className="sideBarMenu">
        <div className="sidebar">
          <div className="sidebarHeader">
            Shop By Category
          </div>
          <div className="sidebar-wr apper">
          <div className="sidebar-content">
                {loading ? <Spin style={{ marginTop: '20px', marginLeft: '30px' }} /> : null}
                <Menu
                  style={{
                    backgroundColor: '#1f465c',
                    color: 'white',
                    fontSize: '13px',
                    marginBottom: '0px',
                    marginRight: '5px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600,

                  }}
                  className="nav"
                  mode="inline"
                  multiple={false}
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}

                //style={{ width: 256 }}
                >
                  {
                    Object.keys(menu).length > 0 ? menu.map((item, idx) =>
                      <SubMenu
                        style={{
                          backgroundColor: '#1f465c',
                          alignItems: 'center',
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: '400',
                          position: 'relative',
                          marginBottom: '3px'

                        }}
                        className="nav-item submenu"
                        key={`${idx}sm`}
                        title={
                          <span className="sub-item">{item.name}</span>
                        }

                        icon={<FolderFilled />}
                      >{Object.keys(item.sub_cat).length > 0 &&
                        item.sub_cat.map((subCat, idx) =>
                          <Menu.Item
                            key={subCat.id}
                            onClick={e => push(`/category/${subCat.id ? subCat.id : subCat._id}`)}

                            style={{
                              backgroundColor: '#1f465c',
                              alignItems: 'center',
                              color: '#fff',
                              fontSize: '14px',
                              fontWeight: '400',
                              position: 'relative',
                              marginBottom: '3px'

                            }}
                          >
                            <span className="sub-item">{subCat.name}</span></Menu.Item>
                        )}
                      </SubMenu>)

                      : null
                  }

                </Menu>
              </div>
            
          </div>
        </div>
      </div>
        {/* <div id="leftmenu">
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
              <div className="navbar-minimize" onClick={props.shrink}>
                {!visible ?
                  <button className="btn btn-minimize btn-rounded toggled">
                    <i className="fa fa-ellipsis-v">
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
         

          <div className="sidebar" id="leftmenusidebar">
            <div className="sidebar-wrapper scrollbar-inner">
              <div className="sidebar-content">
                {loading ? <Spin style={{ marginTop: '20px', marginLeft: '30px' }} /> : null}
                <Menu
                  style={{
                    backgroundColor: '#1f465c',
                    color: 'white',
                    fontSize: '13px',
                    marginBottom: '0px',
                    marginRight: '5px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600,

                  }}
                  className="nav"
                  mode="inline"
                  multiple={false}
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}

                //style={{ width: 256 }}
                >
                  {
                    Object.keys(menu).length > 0 ? menu.map((item, idx) =>
                      <SubMenu
                        style={{
                          backgroundColor: '#1f465c',
                          alignItems: 'center',
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: '400',
                          position: 'relative',
                          marginBottom: '3px'

                        }}
                        className="nav-item submenu"
                        key={`${idx}sm`}
                        title={
                          <span className="sub-item">{item.name}</span>
                        }

                        icon={<FolderFilled />}
                      >{Object.keys(item.sub_cat).length > 0 &&
                        item.sub_cat.map((subCat, idx) =>
                          <Menu.Item
                            key={subCat.id}
                            onClick={e => push(`/category/${subCat.id ? subCat.id : subCat._id}`)}

                            style={{
                              backgroundColor: '#1f465c',
                              alignItems: 'center',
                              color: '#fff',
                              fontSize: '14px',
                              fontWeight: '400',
                              position: 'relative',
                              marginBottom: '3px'

                            }}
                          >
                            <span className="sub-item">{subCat.name}</span></Menu.Item>
                        )}
                      </SubMenu>)

                      : null
                  }

                </Menu>
              </div>
            </div>
          </div>
        </div>
       */}
      </>
    );
  }
const mapStateToProps = (state) => ({
  loading: state.shop.menuLoading,
  menu: state.shop.menu,
  error: state.shop.error
});
const mapDispatchToProps = dispatch => ({
  getMenu: () => dispatch(getMenu()),
  setFooter: (payload) => dispatch(setFooter(payload)),
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftMenu));
