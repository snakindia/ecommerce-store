import {notification  as antdNotification} from 'antd';
const notification = (type, message, duration =2) => {
  antdNotification[type]({
    message, top:100,duration
    
  });
};
const sliderSettings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
}
const hasData =(arr)=>{
  let val =false;
  if(arr){
      for(const key of Object.keys(arr)){
          if(arr[key] && key !== 'coordinates'){
              val=true;
          }
      }
  }
  return val;
}

const formatPhone =(nbr)=>{
  if(nbr && nbr.length > 6){
     
      nbr =`(${nbr.substring(0,3)}) ${nbr.substring(3,6)} ${nbr.substring(6,nbr.length)}`;
      
  }
  return nbr;
}
const getData =(obj)=>{
  const arr =['address1','address2','city','company','state','postal_code','country'];
  const stringArr =[];
      for(const key of arr){
          if(obj && obj[key]){
             stringArr.push(obj[key])
          }
      }
 
  return {
      ...obj,
      formatted_address: stringArr.join(', '), formatted_phone:formatPhone(obj.phone)
  }
  
}
const getAddress =(orders)=>{
    let data =[];
    let shipping =[];
    let billing =[];
   if(orders && orders.data && orders.data.length > 0){
    for(const d of orders.data){
        if(d.shipping_address){
            shipping.push(d.shipping_address)
        }
        if(d.billing_address){
            billing.push(d.billing_address)
        }
    }
   }
   

   
   billing = billing.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
   shipping = shipping.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
    
   billing =billing.filter(item=>hasData(item));
   shipping =shipping.filter(item=>hasData(item));
   //console.log({billing})
   billing =billing.map(item=>getData(item));
   shipping =shipping.map(item=>getData(item));
   return {billing, shipping}
  }
export { sliderSettings, notification, getAddress,getData,formatPhone }; 