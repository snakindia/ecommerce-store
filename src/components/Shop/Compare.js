import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import imgsrc from '../../assets/icon/compare.svg'
import { connect } from 'react-redux';
import { compareWith } from './store/Actions'
import { notification } from '../../utils/helper';
const Compare = ({item,data,compareWith}) => {
    let ids = data && data.length >0 ? data.map(d=>d.id):[]
    const added = ids.includes(item.id);
    const onClick =(e)=>{
        e.preventDefault()
        if(ids.length <4){
            compareWith({type:added ? 'remove':'add',item})
        } else {
            notification('error', 'You can compare only four products at time')
        }
       
    }
    return (
        <Link type="button" className="svg-icon" onClick={onClick}>
            {/* <img className="mr-2 ml-4" src={imgsrc} alt="" /> */}
            <i className="fa fa-random mr-2 ml-2" area-hidden="true" style={{color : added ? 'red':'#4e4c4c'}}></i>
                Compare
        </Link>
    );
}
const mapStateToProps = (state) => ({
    data:state.shop.compare
  });
  const mapDispatchToProps = dispatch => ({
    compareWith: (payload) => dispatch(compareWith(payload)),
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Compare);