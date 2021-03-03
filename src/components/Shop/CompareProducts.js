import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compareWith, getCompareProducts } from './store/Actions'
import CompareProductTable from './CompareProductTable';
const CompareProducts = ({ item, data, compareWith, location, getCompareProducts, history,loading }) => {
    const query = new URLSearchParams(location.search);
    const urlIds = query.get('ids')
    let ids = data && data.length > 0 ? data.map(d => d.id) : []
    useEffect(() => {
        if (ids && ids.length > 0) {

        } else {
            getCompareProducts(urlIds)
        }
    }, [])
    const [items, setItems] = useState([])
    const [key, setKey] = useState(new Date())
    useEffect(() => {
        let ids = data && data.length > 0 ? data.map(d => d.id) : []
        if (ids.length < 2 && loading === false) {
            history.push('/shop')
        } else {
            setItems(data)
            setKey(new Date())
        }
    }, [data])

    const onClick = (item) => {
        let ids = data && data.length > 0 ? data.map(d => d.id) : []
        compareWith({ type: 'remove', item })
        if (ids.length == 2) {
            history.push('/shop')
        }

    }
    return (
        <CompareProductTable items={items} onClick={onClick} key={key} />
         );
}
const mapStateToProps = (state) => ({
    data: state.shop.compare,
    loading: state.shop.compareLoading
});
const mapDispatchToProps = dispatch => ({
    compareWith: (payload) => dispatch(compareWith(payload)),
    getCompareProducts: (payload) => dispatch(getCompareProducts(payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompareProducts);