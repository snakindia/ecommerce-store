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
    useEffect(()=>{
        let {data} =props;
        data = data && data.data && data.data.length >0 ? data.data :[]
        setItems(data)
    },[props.data])
    const doSearch = (e) => {
        const {value}=e.target;
        props.search(value)
    }
    const linkClick = () => {
        props.linkClick()

    }
    return (
        <OutSideClick callback={linkClick}>
            <div class="seachbox-top-bar" id="searh_Box" style={{display:'block'}}>
            <Search 
            onChange={doSearch}
            onPressEnter={doSearch}
            placeholder="Search Products by Name"
            className="seachbox-top-bar-inpiut" loading={props.loading} enterButton />
                    <ul class="results" style={{display:'block'}} >
                        {items && items.length >0 ? items.map(datum=>
                            <li>
                                <Link to={`/shop/${datum.id}`} onClick={linkClick}>
                                    <div className="media">
                                        <Image 
                                        preview={false}
                                        
                                        src={datum.images && datum.images[0] && datum.images[0].url ? datum.images[0].url:''}
                                     alt="" class="compare-widget__image" />
                                        <div className="media-body">
                                            <h3 class="compare-widget__title">{datum.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            ): null}

                        </ul>
                      
               
            </div>
            </OutSideClick>
    );
}
const mapStateToProps = (state) => ({
    data: state.shop.searchResult,
    loading: state.shop.loading,
});
const mapDispatchToProps = dispatch => ({
    search: (payload) => dispatch(search(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchProduct);