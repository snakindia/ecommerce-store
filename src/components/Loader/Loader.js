import React from 'react'
import loader from '../../assets/images/Progressbar.png';
export default function Loader() {
    return (
        <div className="loader-container">
            <img className="loader" width="70" src={loader} alt="loader" />
        </div>
    )
}
