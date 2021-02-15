import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { message, Button, Space } from 'antd';
import { connect } from 'react-redux';
import { toggleWishlist } from '../Accounts/store/Actions'
message.config({
  bottom: 0,
  top: 'none',
  duration: 1,
  maxCount: 1,
});
const Favourite = (props) => {
  let { fav, id } = props;
  
  const [liked, setLike] = useState(null);
  useEffect(()=>{
    fav =fav && fav.length > 0 ? fav :[];
    if(fav.includes(id)){
      setLike(true)
    }
  },[fav,id])
  

  const onClick = (e) => {
    const { authenticated, fav ,id,user} = props;
    if (authenticated && user && user.id) {
      console.log(user);
      props.toggleWishlist({product_id:id,customer_id: user.id, type:!liked ? 'add':'remove'})
      
      setLike(!liked)

    } else {
      document.getElementById('loginpopover').click()
      message.error({
        content: 'Please login for wishlist a product',
        className: 'login-warning-div',
        style: {
          bottom: '20px',
          position: 'fixed',
          left: 'calc(50% - 160px)',
          textAlign: 'center',
          transitionDuration: '20s'
         
        },
      });
    }

  }
  const { className } = props;
  let c = className ? className : "like-button hover-btn mt-3";
  c = liked ? `${c} is-active` : c;
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
  fav: state.accounts.favIds,
  authenticated: state.accounts.authenticated,
  error: state.accounts.error,
  user: state.accounts.user
});
const mapDispatchToProps = dispatch => ({
  toggleWishlist: (payload) => dispatch(toggleWishlist(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourite);