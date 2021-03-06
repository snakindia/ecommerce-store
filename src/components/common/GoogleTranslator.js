import React, { Component } from 'react';

export default class GoogleTranslator extends Component {

    googleTranslateElementInit () {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en', 
            multilanguagePage: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
//            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 
        'google_translate_element')
     }

    componentDidMount() {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');        
        document.body.appendChild(addScript);  
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }

    render() {
        return (
            <div id="google_translate_element"></div>
          );
     }

}