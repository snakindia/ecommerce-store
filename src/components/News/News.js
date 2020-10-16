import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from './news.actions';
import NewsCard from './NewsCard';
import './css/style.css';
import { filterOptions } from './constants';
import NewsBanner from './NewsBanner';
import './../../assets/css/news-events.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        page: 1,
        pageType: props.pageType || 'News',
        size: props.size || 4,
        filterBy: 'Default',
    };
  }

  componentDidMount() {
    this.fetchData();
    if (this.state.pageType == 'News') {
        document.title = 'News'
    } else {
        document.title = 'Events'
    }
  }

  fetchData = () => {
    const { page, pageType, size, filterBy } = this.state;
    this.props.fetchNews({
      type: pageType,
      page,
      size,
      filterBy,
    });
  };

  handleLoadMore = event => {
    event.preventDefault();
    const { has_more } = this.props;
    if (has_more) {
      this.setState(
        ({ page }) => ({ page: page + 1 }),
        () => {
          this.fetchData();
        }
      );
    }
  };

  handleFilterChange = ({ target }) => {
    this.setState({ filterBy: target.value, page: 1 }, () => {
      this.fetchData();
    });
  };

  render() {
    const { newsList, has_more, fetchingNews } = this.props;
    const { filterBy, pageType } = this.state;
    return (
      <React.Fragment>
        { newsList && Object.keys(newsList).length > 0 ? <NewsBanner bannerDetails={newsList[0]} /> : ''}
        {Boolean(fetchingNews) && <div>Loading...</div>}
        <div className="content-wrapper pb-0">
          <div className="pagewrap">
            <div className="bgWhite pb-4">
                <section className="bg-opeque pt-4 animatedParent" style={{"overflow-x": "hidden", "margin-top":"100px"}} >
                    <div className="container-fluid">
                        <h2 className="bha_heading_2 pb-0 text-blue text-center">{pageType == 'News' ? 'NEWS' : 'EVENTS' }</h2>
                    </div>
                </section>
              
                <section className="pro-equipment-section pagewrap-inner">
                    <div className="container pl-1 pr-1">
                        <div className="row">
                            <div className="animatedParent">
                                <div className="row no-gutters">
                                    {newsList.map(item => (
                                      <NewsCard
                                        key={item._id}
                                        newsData={item}
                                        pageType={pageType}
                                      />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="loadMorebtn">
                            {Boolean(has_more) && (
                                <a
                                  href="#"
                                  className="btn bha-btn-primary"
                                  onClick={this.handleLoadMore}
                                >
                                  Load More
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mSTP = ({ news }) => ({
  fetchingNews: news.fetchingNews,
  newsList: news.newsList || [],
  has_more: news.has_more,
});
const mDTP = { fetchNews };
export default connect(mSTP, mDTP)(News);

