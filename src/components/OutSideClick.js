import React, { useEffect, useState, useRef } from "react";

const OutSideClick = ({ callback, children }) => {
    const node = useRef();
    const handleClickOutside = e => {

        if (node && node.current && node.current.contains(e.target)) {
            return;
        } else {
            if ( callback) {
                callback()
            }

        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={node} >
            {children}
        </div>
    );
};

export default OutSideClick;
