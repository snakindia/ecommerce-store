import React, { Component, useEffect, useState } from 'react';
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
const MenuComponent = ({ loading, openKeys, onOpenChange, menu, push }) => {
  return (<div className="sidebar-content">
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
  )
}
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
    // window.onscroll = () => {
    //   console.log('s',(new Date()).getTime());
    //   setScrolled(window.pageYOffset)
    // }
  }, [])

  const { visible, menu, loading, mini } = props;
  return (
    <>
      {mini ?
        <div className="sidebar-wrapper-mobile">
          <MenuComponent
            loading={loading}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            menu={menu}
            push={push}
          />
        </div> :
        <div className="sideBarMenu sidebarBox">
          <div className="sidebar">
            <div className="sidebarHeader">
              Shop By Category
            </div>
            <div className="sidebar-wrapper">
              <MenuComponent
                loading={loading}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                menu={menu}
                push={push}
              />
            </div>
          </div>
        </div>
      }
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
