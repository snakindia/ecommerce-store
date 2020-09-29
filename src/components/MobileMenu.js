import React, { useState } from 'react';
import MenuLogo from '../assets/images/menu-logo.jpg';

const  MobileMenu= (props)=> {
    
    const [isMenuOpen, setMenuOpen]=useState(false);
    const [search, setSearch]=useState(false);
    const clickHandler=()=>{
            document.body.className = isMenuOpen ? '':'wsactive';
            setMenuOpen(!isMenuOpen)
    }

    return (
        <div className="wsmobileheader clearfix">
        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={clickHandler}><span></span></a>
        <span className="smllogo"><img className="w-100" src={MenuLogo} width="80" alt="" /></span>
        <a href="#myModal" data-toggle="modal" className="loginBtn sr-only">Log in</a>
        <div className={search ? 'wssearch clearfix wsopensearch':'wssearch clearfix'}>
          <i className="wsopensearch fas fa-search" onClick={e=>setSearch(true)}></i>
          <i className="wsclosesearch fas fa-times" onClick={e=>setSearch(false)}></i>
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
export default (MobileMenu);
