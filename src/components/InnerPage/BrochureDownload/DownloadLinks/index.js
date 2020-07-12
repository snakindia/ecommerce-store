import React, {useState} from 'react';

const DownloadLinks = props => {
   const { text, linkUrl, image } = props.link;
    const [isHover, setHover] = useState(false);

    const handleMouseHover = () => {
        setHover(!isHover);
    }
        return (
            <div className="col-sm-4 col-md-4">
                <div className="literature fader">
                    <a href={linkUrl} target="_blank"
                       onMouseEnter={() => handleMouseHover()}
                       onMouseLeave={() => handleMouseHover()}
                    >
                        {!isHover && <img src={image.url1} alt={image.alt} className="literature-icon" />}
                        {isHover && <img src={image.url2} alt="" className="literature-icon" />}
                        <h6 className="pt-3 pb-0 mb-0 text-uppercase" style={{ color: '#000', fontWeight: '500' }}>{text}</h6>
                        {/*<p className="text-uppercase text-light-gray mrg-top" style={{ color: '#777' }}>Download PDF</p>*/}
                    </a>
                </div>
            </div>
        );
}

export default DownloadLinks;
