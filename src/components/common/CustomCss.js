import React, { Component } from 'react';

export default class CustomCss extends Component {

    componentDidMount() {
        var link = document.createElement('meta');
        link.name = 'description'; 
        link.content = 'deepak'; 
        document.head.appendChild(link);  
    }

    render() {
        return (
            <div></div>
          );
     }

}