import React, { Component } from 'react';
const Share = (props) => {
    return (
        <>
            <span className="mr-2 text-uppercase">Share</span>
            <a href="#" data-tooltip="" data-placement="bottom" title="" data-original-title="Facebook">
                <i className="fa fa-envelope-o"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-pinterest"></i></a>
        </>
    );
}
export default Share;
