import React, { Component } from 'react';
import { MDBTooltip } from 'mdbreact';
const ToolTip = ({ text, length = 20 }) => {
    
    let show = undefined;
    show = text && length && text.length > length ? true:false;

    return (
        <div className="toolTipContainer">
            {
                show ?
                    <MDBTooltip
                        domElement
                        tag="span"
                        placement="top"
                    >
                        <span className="tool-tip-text">
                            {show ? `${text.substr(0, length)} ...` : text}
                        </span>
                        <span className="tooltip-hover-text">{text}</span>
                    </MDBTooltip> :
                    <span className="tool-tip-text">
                        {text}
                    </span>
            }
        </div>
    );
}
export default ToolTip;