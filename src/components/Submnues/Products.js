import React from 'react'
import { Link } from 'react-router-dom';
//import SubmenuHoc from './SubmenuHoc';
import EpicCover from '../../assets/images/600X500-4.jpg';
import Baghouse from '../../assets/images/baghouse.jpg';
import { DEFAULT_IMG_URL } from '../../constants/urls';
import { API_IMAGE_PATH } from '../../constants/appConstant';
import {
    categoryImageUrl

} from '../../constants/appConstant';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            coverImg: null,
            listItems: [],
            activeLink: null,
            isQuoteModalOpen: false,
        };

    }
    
    
    submit = () => {
        confirmAlert({
            title: "Alert",
            message: 'This page is coming soon..',
            buttons: [
                {
                  label: 'Ok',
                }
            ]
        });
    };
    
    componentDidMount(){
        const { navMenuData :{subMenuData}} = this.props;
        // const { subMenuData } = navMenuData;
        let loop =true;
        let subMenuArr = Object.keys(subMenuData).map(k => subMenuData[k]);
        if(subMenuArr && subMenuArr.length > 0){
            subMenuArr.map((itemOne, i) =>{
                if(itemOne && itemOne[0] && loop){
                    //console.log('itemOneObj',itemOne)
                    this.showMenu(itemOne[0], i, null);
                    loop=false;
                }
            }
            )
        }
    }

    showMenu = (itemOneObj, index, e) => {
        console.log('itemOneObj',itemOneObj)
        const { name, image, items, slug, _id } = itemOneObj;
        let imageSrc = '';
        if (image != '') {
            imageSrc = `${categoryImageUrl}/${_id}/${image}`;
        } else {
            imageSrc = DEFAULT_IMG_URL;
        }

        this.setState({ coverImg: imageSrc, listItems: items, activeLink: index });
    };
    render() {
        const { coverImg, listItems, activeLink } = this.state;
        const { navMenuData, baseUrl, hide } = this.props;
        const { subMenuData } = navMenuData;
        let subMenuArr = Object.keys(subMenuData).map(k => subMenuData[k]);

        return (
            <div
                
                className="wsshoptabing wtsdepartmentmenu clearfix"
                style={{
                    zIndex: 999, opacity: 1,
                    visibility: 'visible'
                }}
            >
                <div className="wsshopwp clearfix">
                    <div className="image-holder">
                        <img
                            src={!coverImg ? EpicCover : coverImg}
                            alt=""
                            width="300"
                            height="150"
                        />
                    </div>
                    <ul className="wstabitem clearfix" >
                        {subMenuArr &&
                            subMenuArr.map((itemOne, i) => {
                                let itemOneObj = itemOne && itemOne[0];
                                const { name, image, items, slug, _id } = itemOneObj;
                                return (
                                    <li
                                        className={
                                            activeLink == i ? 'wsshoplink-active' : 'wsshoplink'
                                        }
                                        id={i == 0 ? 'firstEl' : 'other' + i}
                                        key={i + Math.random()}
                                        onClick={e => this.showMenu(itemOneObj, i, e)}
                                    >
                                        <Link data-src={Baghouse}>{name}</Link>
                                        {i == activeLink &&
                                        <div className="subcategories wstitemright clearfix wstpngsml ">
                                            <div className="container-fluid">
                                                <div className="row custom-gutter-wsmenu" >
                                                    <h3 class="wsmenu_heading">{name}</h3>
                                                    {listItems.length > 0 && listItems.map((itemTwo, i) => {
                                                        let url  = typeof itemTwo.page_url != 'undefined' && itemTwo.page_url != '' ? itemTwo.page_url : ''
                                                        return (
                                                            <div className="col-lg-3 col-md-12" key={i + 3}>
                                                                <ul className="wstliststy04 clearfix" onClick={hide}>
                                                                    <li>
                                                                        <img
                                                                            className="scale-down"
                                                                            src={
                                                                                itemTwo.image != ''
                                                                                    ? API_IMAGE_PATH + 'categories/' + itemTwo._id + '/' + `${itemTwo.image}`
                                                                                    : DEFAULT_IMG_URL
                                                                            }
                                                                            alt="bha"
                                                                        />
                                                                    </li>
                                                                    <li className="wstheading clearfix">
                                                                    {
                                                                        url != '' ? <Link
                                                                            to={url}
                                                                        >
                                                                            {' '}
                                                                            <i class="fa fa-chevron-right pr-2"></i>
                                                                            {itemTwo.meta_title}
                                                                        </Link> : <a
                                                                        href="#"
                                                                            onClick={this.submit}
                                                                        >
                                                                            {' '}
                                                                            <i class="fa fa-chevron-right pr-2"></i>
                                                                            {itemTwo.meta_title}
                                                                        </a>
                                                                    }
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                            }
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}
//export default SubmenuHoc(Products);
export default (Products);