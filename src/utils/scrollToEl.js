var scrollToElement = require('scroll-to-element');
const scroll=(el,offsetVal, duration=1500)=>{
    console.log('called',el, offsetVal);
    const isMobile  =window.innerWidth <992 ;
    if(isMobile){
        const element =document.querySelector(el);
        const {offsetTop}=element;
        let y =offsetTop+(offsetVal);
        console.log({y})
        document.querySelector('body').scrollTo({
            top: y,
            left: 0,
            behavior: 'smooth'
          });
    } else {
       scrollToElement(el, {
            offset: + (offsetVal),
            duration
        });
    }
}
export default scroll;