import React, {useEffect,useState} from 'react';
import { Field } from 'formik'
import { render } from 'react-dom';
class  Error extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstEl:null
        }
    }
    
    componentDidMount(){
       // this.check()
    }
    check=()=>{
        const {errors, values, touched, el}=this.props;
        if(el && el.length > 0 && errors && touched ){
            for(const ele of el){
                const hasError = errors[ele] && touched[ele] ? errors[ele]:null;
                if(hasError){
                    console.log('fff',  errors[ele])
                    this.setState({firstEl:hasError})
                    break;
                }
            }
        }
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.formik !=this.props.formik){
    //        // this.check()
    //     }
    // }
    

    
   
    render(){
        const {formik ,el}=this.props;
        const {errors, values, touched}=formik;
       
        let firstEl;
        if(el && el.length > 0 && errors && touched ){
            
            for(const ele of el){
                const hasError = errors[ele] && touched[ele] ? errors[ele]:null;
                if(hasError){
                    firstEl=hasError;
                    break;
                }
            }
        }
        //const {firstEl} =this.state;
        console.log(errors)
        console.log(touched)
        console.log(values)
    return (
        <div className="errorMsg">
            {firstEl ? firstEl:''}
        </div>
    )
    }
}

export default Error;
