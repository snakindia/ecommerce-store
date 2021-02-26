import React, { useState } from 'react';
import MenuLogo from '../assets/images/menu-logo.jpg';
import categoryIcon from '../assets/icon/category-icon.svg';
import { Link, withRouter } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import LeftMenu from '../components/Shop/LeftMenu'
class MobileMenu extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isMenuOpen: false,
      search: false, 
      visible:false
    }
  }

  setSearch = (search) => {
    this.setState({ search })
  }

  clickHandler = () => {
   
    const { isMenuOpen } = this.state;
    document.body.className = isMenuOpen ? '' : 'wsactive';
    this.setState({ isMenuOpen: !isMenuOpen })
  }
  clickHandlerCategory = (e) => {
    e.preventDefault()
    this.setState({visible:true})
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname != this.props.location.pathname) {
      document.body.className = '';
      this.setState({ isMenuOpen: false })
    }
    else if (prevProps.t != this.props.t) {
      document.body.className = '';
      this.setState({ isMenuOpen: false })
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="wsmobileheader clearfix">
        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={this.clickHandler}><span></span></a>
        <span className="smllogo"><img className="w-100" src={MenuLogo} width="80" alt="" /></span>
        <a href="#myModal" data-toggle="modal" className="loginBtn sr-only">Log in</a>
        <a href="#" className="categoryIcon" onClick={this.clickHandlerCategory}><img src={categoryIcon} alt="" width="30"/></a>
        {/* <div className={search ? 'wssearch clearfix wsopensearch' : 'wssearch clearfix'}>
          <i className="wsopensearch fas fa-search" onClick={e => this.setSearch(true)}></i>
          <i className="wsclosesearch fas fa-times" onClick={e => this.setSearch(false)}></i>
          <div className="wssearchform clearfix">
            <form className="topmenusearch search" method="post" action="" >
              <div className="input-group">
                <input type="text" className="form-control panelList" name="q" placeholder="What are you looking for..." />
              </div>
            </form>
          </div>
        </div> */}
        <Drawer
        title=""
        placement="right"
        // closable={false}
        onClose={e=>this.setState({visible:false})}
        visible={visible}
        zIndex={1000000}
        width={300}
      >
        <LeftMenu mini={true} />
      </Drawer>
      </div>
    );
  }
}
export default withRouter(MobileMenu);
