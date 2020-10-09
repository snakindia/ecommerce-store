import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_IMAGE_PATH } from './../../constants/appConstant';

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
    };
  }

  componentDidMount() {
    axios
      .post(
        API_URL + '/product_categories/get_branded_cat_sub_cat_list?fields=name'
      )
      .then(res => {
        this.setState({ menu: res.data });
      });
  }

  render() {
    const { menu } = this.state;
    console.log('menu')
    console.log(menu)
    return (
      <div class="side-bar-menu">
        <div class="sidebar-head">Shop By Category</div>
        <ul class="menu sidebar-inner">
          {Object.keys(menu).length &&
            menu.map((item, idx) => {
              return (
                <li>
                  <a href="#">
                    {item.name}
                    <i class="fas fa-angle-right float-right"></i>
                  </a>
                  <div class="megadrop">
                    <div class="col">
                      <ul>
                        {Object.keys(item.sub_cat).length > 0 &&
                          item.sub_cat.map((subCat, idx) => {
                            return (
                              <li>
                                <a href="#">{subCat.name}</a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default LeftMenu;
