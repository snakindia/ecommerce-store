import React from 'react';
import { DEFAULT_IMG_URL } from '../../../constants/urls';
import { monthNames } from '../constants';

const NewsCard = ({ newsData }) => {
  if (!newsData) {
    return null;
  }
  const { title, content, image, date_created, category_name } = newsData;
  const date = new Date(date_created).getDate();
  const month = new Date(date_created).getMonth();
  return (
    <div className="col-sm-3 col-md-3">
      <div className="news-inner mt-4 float-left">
        <div className="date-tag">
          <div className="text-center font-weight-bold">{date}</div>
          <div className="month">{monthNames[month]}</div>
        </div>
        <a href="news.html">
          <object data={DEFAULT_IMG_URL} type="image/jpeg">
            <img
              src={image ? image : DEFAULT_IMG_URL}
              alt=""
              className="img-fluid object-fit"
            />
          </object>
          <div className="filter-description content-gap border-bottom-0">
            <h6 className="font-weight-bold">{title}</h6>
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </a>
        <div className="social-share-box border">
          <span>{category_name}</span>
          <a href="javascript:void(0);" className="float-right">
            <i className="fa fa-twitter share-icon twitter-bg" />
          </a>
          <a href="#" className="float-right">
            <i className="fa fa-facebook share-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
