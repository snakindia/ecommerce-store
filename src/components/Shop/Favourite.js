import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { message, Button, Space } from 'antd';
import { connect } from 'react-redux';
import { toggleWishlist } from '../Accounts/store/Actions'
message.config({
    top: 120,
    duration: 1,
    maxCount: 1,
  });
const Favourite = (props) => {
    const {fav,id}=props;
    const ids =fav && fav.length > 0 ? fav.map(f=>f.id) :[];
    const [liked,setLike]= useState(ids.includes(id));

    const onClick =(e)=>{
        const {authenticated, fav}=props;
        if(authenticated){
            setLike(!liked)
           
        } else {
            document.getElementById('loginpopover').click()
            message.error('Please login');
        }
       
    }
    const {className} =props;
    let c =className ? className :"like-button hover-btn mt-3";
    c =liked ? `${c} is-active`: c;
    return (
        <Link type="button" className={c} onClick={onClick}>
        <i className="fa fa-heart-o not-liked bouncy"></i>
        <i className="fa fa-heart is-liked bouncy"></i>
        <span className="like-overlay"></span>
    </Link>
    );
}
const mapStateToProps = (state) => ({
    loading: state.accounts.loading,
    fav: state.accounts.fav,
    authenticated: state.accounts.authenticated,
    error: state.accounts.error
  });
  const mapDispatchToProps = dispatch => ({
    toggleWishlist: (payload) => dispatch(toggleWishlist(payload)),
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favourite);