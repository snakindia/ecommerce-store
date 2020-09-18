import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { monthNames } from '../constants';
import Image from '../../common/Image';
import {
  FacebookShareButton,
  TwitterShareButton
} from "react-share";

const NewsCard = ({ newsData, pageType }) => {
  const history = useHistory();

  const onCardClick = useCallback(() => {
    history.push(
      `/${pageType === 'Event' ? 'eventdetail' : 'newsdetail'}/${
        newsData.slug
      }`
    );
  }, [history]);

  if (!newsData) {
    return null;
  }

  const { title, content, image, date_created, category_name } = newsData;
  const date = new Date(date_created).getDate();
  const month = new Date(date_created).getMonth();
  return (
    <div className="col-sm-3 col-md-3">
      <div className="news-inner mt-4 float-left" >
        <div className="date-tag">
          <div className="text-center font-weight-bold">{date}</div>
          <div className="month">{monthNames[month]}</div>
        </div>
        <a href="javascript:void(0)">
          <Image src={image} alt="" className="img-fluid object-fit" onClick={onCardClick} />{' '}
          <div className="filter-description content-gap border-bottom-0">
            <h6 className="font-weight-bold" onClick={onCardClick}>{title}</h6>{' '}
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </a>
        <div className="social-share-box border float-right" >
            <FacebookShareButton url={window.location.href} quote={title} hashtag={'#' + title} >
                <a href="javascript:void(0);">
                    <i className="fa fa-facebook share-icon" />
                </a>
            </FacebookShareButton>
            
            <TwitterShareButton url={window.location.href} title={title} hashtags={['testr']} > 
                <a href="javascript:void(0);">
                    <i className="fa fa-twitter share-icon twitter-bg" />
                </a>
            </TwitterShareButton>
          
          
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

