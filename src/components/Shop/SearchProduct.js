import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { search } from './store/Actions';
import Image from './Image';
import OutSideClick from '../OutSideClick'
import { Input } from 'antd';

const { Search } = Input;
const SearchProduct = (props) => {
    
    const [items, setItems]=useState([])
    const [str, setStr]=useState('')
    useEffect(()=>{
        let {data} =props;
        data = data && data.data && data.data.length >0 ? data.data :[]
        setItems(data)
    },[props.data])
    const doSearch = (e) => {
        const {value}=e.target;
        setStr(value)
        props.search(value, true)
    }
    const linkClick = () => {
        props.linkClick()

    }
    return (
        <OutSideClick callback={linkClick}>
            <div className="seachbox-top-bar" id="searh_Box" style={{display:'block'}}>
            <Search 
            onChange={doSearch}
            onPressEnter={doSearch}
            placeholder="Search Products by Name"
            className="seachbox-top-bar-inpiut" loading={props.loading} enterButton />
                    <ul className="results" style={{display:'block'}} >
                        {items && items.length >0 ? items.map(datum=>
                            <li>
                                <Link to={`/shop/${datum.slug}`} onClick={linkClick}>
                                    <div className="media">
                                        <Image 
                                        preview={false}
                                        
                                        src={datum.images && datum.images[0] && datum.images[0].url ? datum.images[0].url:''}
                                     alt="" className="compare-widget__image" />
                                        <div className="media-body">
                                            <div class="compare-widget__title">{datum.name}</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            ): null}

                        </ul>
                        {props.data && props.data.total_count >5 && <Link className="seatchPanelFooter" onClick={linkClick} to={`/shop/search?search=${str}`}>See All &nbsp;({props.data.total_count} products)</Link>}
               
            </div>
            </OutSideClick>
    );
}
const mapStateToProps = (state) => ({
    data: state.shop.searchResult,
    loading: state.shop.loading,
});
const mapDispatchToProps = dispatch => ({
    search: (payload,limit) => dispatch(search(payload,limit)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchProduct);