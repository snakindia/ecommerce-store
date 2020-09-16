import React, { Component } from 'react';
import ProductSubmenu from './Products';
import NewsEvent from './NewsEvent';
const Submenu = (props) => {
    const {id,hide } = props;
      return (
        <>
            {id=='3' && <ProductSubmenu {...props} />   }
            {id=="6" && <NewsEvent {...props} />   }
        </>
      )
}
export default Submenu;