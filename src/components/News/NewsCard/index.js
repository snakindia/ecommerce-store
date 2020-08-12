import React from 'react';
import dayjs from "dayjs";
import image from '../../../assets/images/1.png';

const NewsCard = props => {
    const { title, content, image, date_created } = props;
    console.log((dayjs().month(date_created)))
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            <div className="col-sm-3 col-md-3">
                <div className="news-inner mt-4 float-left">
                    <div className="date-tag">
                        <div className="text-center font-weight-bold">{dayjs().date(date_created)}</div>
                        <div className="month">{monthNames[(dayjs().month(date_created))-1]}</div>
                    </div>
                    <a href="news.html">
                        <img src={`/${image}`} alt="" className="img-fluid object-fit" />
                        <div className="filter-description content-gap border-bottom-0">
                            <h6 className="font-weight-bold">{title}</h6>
                            <p className="text-muted">{content}</p>
                        </div>
                    </a>
                    <div className="social-share-box border">
                        <span>Baghouse</span>
                        <a href="javascript:void(0);" className="float-right">
                            <i className="fa fa-twitter share-icon twitter-bg"
                               area-hidden="true" />
                        </a>
                        <a href="#" className="float-right"><i
                            className="fa fa-facebook share-icon" area-hidden="true"/></a>
                    </div>
                </div>
            </div>
        );
}

export default NewsCard;