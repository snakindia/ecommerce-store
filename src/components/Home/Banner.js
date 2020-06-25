import React, { Component } from 'react';
import PexelPhotoImage from '../../assets/images/pexels-photo.png';
import Image from '../../assets/images/2000X500.jpg';
import FiveImage from '../../assets/images/1400X500-2.jpg';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import {API_URL} from '../../constants/appConstant'
import axios from 'axios';
import {fetch_dynamic_menus} from '../../actions/fetchActions';

export default class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            DynamicSlider: [],
            autoplay: false,
        }
    }

    // componentDidMount (){
    //     this.props.dispatch(fetch_dynamic_menus())
    //  }

    componentDidMount() {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(API_URL+"/theme/settings")
          .then( response => {
            const DynamicSlider = response.data
            console.log(DynamicSlider)
            this.setState({DynamicSlider});
            
          })
        }

  render() {
   this.slider = React.createRef();
   const {home_slider} = this.state.DynamicSlider
//  const {home_slider} = this.props;
    
    return (
            <div className="banner-container">
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <RBCarousel
                        autoplay={this.state.autoplay}
                        pauseOnVisibility={true}
                        slideshowSpeed={2000}
                        version={4}

                        >
                        {
                         home_slider && home_slider.map((item,i)=>{
                           return (
                              <div key={i+"aa"}>
                                <picture>
                                 <img src={item.image} alt="responsive image" className="d-block img-fluid" />
                                </picture>
                                <div className="caption">
                                  <h1 className="bha_heading_1">{item.description}</h1>
                                  <a href={item.path} className="btn bha-btn-primary mt-4 pl-pr">view details</a>
                                </div>
                              </div>
                               )
                             })
                        }
          
                       </RBCarousel>
                </div> 
            </div>
        </div>
        )
    }
}
