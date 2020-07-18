import React, { Component } from 'react';

export default class CustomCss extends Component {

    componentDidMount() {
        var link = document.createElement('link');
		link.href = '<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">'; 
        document.head.appendChild(link);  
    }

    render() {
        return (
            <div></div>
          );
     }

}