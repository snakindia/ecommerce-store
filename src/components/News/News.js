import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from './news.actions';
import NewsCard from "./NewsCard";
import Select from 'react-select';
import './css/style.css';
import img from './../../assets/images/1 (4).jpg';

const News = () => {
    const dispatch = useDispatch();

    const {newsList: {data, has_more}, fetchingNews} = useSelector(
        store => store.news
    );

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const options = [
        {label: 'Default', option: 'Default'},
        {label: 'Baghouse', option: 'Baghouse'},
        {label: 'Mecair', option: 'Mecair'},
        {label: 'Repair Kits', option: 'Repair Kits'}
    ]

    return (
        <React.Fragment>
            <section className="news-events-banner">
                <div className="news-events-inner">
                    <div id="news-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner animatedParent" role="listbox">
                            <div className="carousel-item active">
                                <div className="caption-right">
                                    <div className="caption-inner">
                                        <div className="animated bounceInRight go">
                                            <h4 className="pt-3">Lorem Ipsum Dollar</h4>
                                            <h1 className="bha-inner-heading">Lorem ipsum dollar site amnt</h1>
                                            <h6 className="text-size-medium mt-3">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                gravida.</h6>
                                        </div>
                                        <a href="news.html"
                                           className="btn btn bha-btn-primary animated bounceInRight go">Read More<i
                                            className="fa fa-long-arrow-right pl-3" /></a>
                                    </div>
                                </div>
                                <img className="img-fluid" src={img} alt="responsive image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content-wrapper pb-0">
                <div className="pagewrap">
                    <div className="bgWhite pb-4">
                        <div className="container-fluid" style={{marginTop: '100px'}}>
                            <section className="bg-opeque pt-4 animatedParent">
                                <div className="container-fluid">
                                    <div className="row pb-2 pt-3 pl-2" style={{background: '#fdfdfd'}}>
                                        <div className="col-lg-5">
                                            <form>
                                                <div className="form-group row">


                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-3 col-form-label font-weight-bold">Filter
                                                        By:</label>
                                                    <div className="col-sm-9">
                                                        <Select
                                                            // className="filter form-control-select form-select"
                                                            defaultValue={options[0]}
                                                            options={options}
                                                            onChange={e => this.handleChange(e.value)}
                                                            isSearchable={false}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <h2 className="bha_heading_2 pb-3 text-blue text-center">News
                                        <span className="viewAll"><a href="news-events.html">Go to news</a></span>
                                    </h2>
                                </div>
                            </section>
                            <section className="pro-equipment-section pagewrap-inner">
                                <div className="container pl-1 pr-1">
                                    <div className="row">
                                        <div className="animatedParent">
                                            <div className="row no-gutters">
                                                {data && data.map(item => (
                                                <NewsCard
                                                    key={item._id}
                                                    newsData={item}
                                                />
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="loadMorebtn"><a href="#" className="btn bha-btn-primary">Load
                                        More</a></div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>


    );
}

export default News;