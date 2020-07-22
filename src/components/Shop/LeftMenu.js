import React, { Component } from 'react';

class LeftMenu extends Component {

    render() {
        return (
           

            <div class="side-bar-menu">
                <div class="sidebar-head">Shop By Category</div>
                    <ul class="menu sidebar-inner">
                        <li>
                            <a href="#">Pentair® Goyen®<i class="fas fa-angle-right float-right"></i></a>
                                <div class="megadrop">
                                  <div class="col">
                                    <ul>
                                      <li><a href="#">Pentair® Goyen® Originals</a></li>
                                      <li>
                                        <h3>Pentair® Goyen® Replacements</h3>
                                        <ul>
                                          <li><a href="#">Valves</a></li>
                                          <li><a href="#">Repair Kits</a></li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li>
                            <a href="#">Cartridge Filter Replacements<i class="fas fa-angle-right float-right"></i></a>
                            <div class="megadrop" style={{'margin-top': "3rem"}}>
                                <div class="col">
                                    <ul>
                                        <li><a href="#">Camel Farr® Replacements</a></li>
                                        <li><a href="#">Donaldson Torit ® Replacements</a></li>
                                        <li><a href="#">Nordson Filter ® Replacements</a></li>
                                        <li><a href="#">ITW Gema Volstatic Part#'s</a></li>
                                        <li><a href="#">Wagner Filter Part#'s</a></li>
                                        <li><a href="#">Deimco Filter Part#'s</a></li>
                                        <li><a href="#">JBI Filter Part#'s</a></li> 
                                    </ul>
                                </div>
                            </div>
                        </li>

                    <li><a href="#">Mecair® Original<i class="fas fa-angle-right float-right"></i></a>
                      <div class="megadrop" style={{'margin-top': "6rem"}}>
                        <div class="col">
                          <ul>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </li>
                    <li><a href="#">Mecair® Replacements<i class="fas fa-angle-right float-right"></i></a>
                      <div class="megadrop" style={{'margin-top': "9rem"}}>
                        <div class="col">
                          <ul>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">Asco® Replacements<i class="fas fa-angle-right float-right"></i></a>
                     <div class="megadrop" style={{'margin-top': "12.2rem"}}>
                        <div class="col">
                          <ul>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                            <li><a href="#">Sub-menu item</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">Taeha® Repair Kits</a>

                    </li>
                    <li><a href="#">Turbo® Repair Kits</a>

                    </li>
                  </ul>
                </div>
        )
    }
}

export default LeftMenu;
