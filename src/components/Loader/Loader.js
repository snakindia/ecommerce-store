import React from 'react'
import loader from '../../assets/images/menu-logo.jpg';
export default function Loader() {
    return (
        <div className="loader-container">
            <img className="loader" src={loader} alt="loader" />
        </div>
    )
}
