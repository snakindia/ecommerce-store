import React, { Component } from 'react';
const Share = ({item}) => {
    const href = `${process.env.REACT_APP_CLIENT_URL}shop/${item.id}`;
    return (
        <>
            <span className="mr-2 text-uppercase">Share</span>
            <a href={`mailto:?body=Check out this Product ${href}&subject=Bag House America`} target="_blank">
                <i className="fa fa-envelope-o"></i></a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${href}`} target="_blank"><i className="fa fa-facebook"></i></a>
            <a href={`https://twitter.com/share?url=${href}`} target="_blank"><i className="fa fa-twitter"></i></a>
            <a href={`http://pinterest.com/pin/create/button/?url=${href}`} target="_blank"><i className="fa fa-pinterest"></i></a>
        </>
    );
}
export default Share;
