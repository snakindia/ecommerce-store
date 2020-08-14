import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from './news.actions';
import NewsCard from './NewsCard';
import './css/style.css';
import { filterOptions } from './constants';
import NewsBanner from './NewsBanner';

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
        <NewsBanner />
        {Boolean(fetchingNews) && <div>Loading...</div>}
        <div className="content-wrapper pb-0">
          <div className="pagewrap">
            <div className="bgWhite pb-4">
              <div className="container-fluid" style={{ marginTop: '100px' }}>
                <div
                  className="row pb-2 pt-3 pl-2"
                  style={{ background: '#fdfdfd' }}
                >
                  <div className="col-lg-5">
                    <form>
                      <div className="form-group row">
                        <label
                          htmlFor="inputPassword"
                          className="col-sm-3 col-form-label font-weight-bold"
                        >
                          Filter By:
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="filter form-control-select form-select"
                            onChange={this.handleFilterChange}
                            value={filterBy}
                          >
                            {filterOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <section
                className="bg-opeque pt-4 animatedParent"
                style={{ overflowX: 'hidden' }}
              >
                <div className="container-fluid">
                  <h2 className="bha_heading_2 pb-3 text-blue text-center">
                    {pageType}
                    <span className="viewAll" style={{ top: '36%' }}>
                      <a href="news-events.html">Go to news</a>
                    </span>
                  </h2>
                </div>
              </section>
              <section className="pro-equipment-section pagewrap-inner">
                <div className="container pl-1 pr-1">
                  <div className="row">
                    <div className="animatedParent">
                      <div className="row no-gutters">
                        {newsList.map(item => (
                          <NewsCard key={item._id} newsData={item} pageType={pageType} />
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
