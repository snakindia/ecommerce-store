import React, { useState } from 'react';
import MenuLogo from '../assets/images/menu-logo.jpg';
import { Link, withRouter } from 'react-router-dom';
class MobileMenu extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isMenuOpen: false,
      search: false
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
    const { search } = this.state;
    return (
      <div className="wsmobileheader clearfix">
        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={this.clickHandler}><span></span></a>
        <span className="smllogo"><img className="w-100" src={MenuLogo} width="80" alt="" /></span>
        <a href="#myModal" data-toggle="modal" className="loginBtn sr-only">Log in</a>
        <div className={search ? 'wssearch clearfix wsopensearch' : 'wssearch clearfix'}>
          <i className="wsopensearch fas fa-search" onClick={e => this.setSearch(true)}></i>
          <i className="wsclosesearch fas fa-times" onClick={e => this.setSearch(false)}></i>
          <div className="wssearchform clearfix">
            <form className="topmenusearch search" method="post" action="" >
              <div className="input-group">
                <input type="text" className="form-control panelList" name="q" placeholder="What are you looking for..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MobileMenu);
