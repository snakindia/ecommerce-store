import React from 'react';
import DownloadLinks from "./DownloadLinks";

const BrochureDownload = props => {
    const {downloadLinks} = props;
    return (
        <section className="pro-equipment-section mt-2">
            <div className="container pl-0 pr-0">
                <div className="row">
                    {downloadLinks.map(item => <DownloadLinks key={item.text} link={item}/>)}
                </div>
            </div>
        </section>
    );

}

export default BrochureDownload;
