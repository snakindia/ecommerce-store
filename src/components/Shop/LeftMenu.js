import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';
import { getMenu } from './store/Actions'
import { setFooter } from '../../actions/pageActions'
import { Menu } from 'antd';
import './css/antd.less'
import { AppstoreOutlined, MailOutlined, SettingOutlined, FolderFilled } from '@ant-design/icons';

const { SubMenu } = Menu;
class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      openKeys: [],
    };
    this.rootSubmenuKeys = [];
  }

  componentDidMount() {
    this.props.getMenu()
    this.props.setFooter(false)
  }
  componentWillUnmount() {
    this.props.setFooter(true)
  }
  onOpenChange = keys => {
   console.log(keys);
  
   const {openKeys} =this.state;
   keys =keys.filter(key=>!openKeys.includes(key))
   this.setState({openKeys :keys});
  }
  push=(link)=>{
    this.props.history.push(link)
  }
  render() {
    const { active, openKeys } = this.state;
    const { visible, menu } = this.props;
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
                  onOpenChange={this.onOpenChange}

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
                          key={subCat._id}
                          onClick={e=>this.push(`/category/${subCat._id}`)} 
                          
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
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.shop.loading,
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
