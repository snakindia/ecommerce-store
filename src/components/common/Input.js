import React from 'react';
import { Field } from 'formik'
const Input = (props) => {
    const { allow, onChange,formik,length, name,type } = props;
    const validateAllow=(val)=>{
        if(!val){
            return true;
        }
        if(!allow){
            return true;
        } 
        else if (allow && allow =='text'){
            const isValid= (/^[a-zA-Z0-9 ]*$/i.test(val))
            return isValid && val.length <=length;
        } else if (allow && allow =='special'){
            const isValid= (/^[a-zA-Z0-9~!@#$%^&*-_'" ]*$/i.test(val))
            return isValid && val.length <=length;
        }
         else if (allow && allow =='numeric'){
            const isValid= (/^[0-9]/i.test(val))
            return isValid && val.length <=length;
        }  else if (allow && allow =='email'){
            const isValid= (/^[a-zA-Z0-9@-_.]*$/i.test(val))
            return isValid && val.length <=length;
        }
    }
    const onchangeHandler = (e) => {
        const {value}=e.target;
        const isValid =validateAllow(value);
        formik.setFieldTouched(name,true)
        if(isValid){
            formik.setFieldValue(name,value)
            
        }
        if (onChange && isValid) {
            onChange(e)
        }
    }
    return (
        <Field

            {...props}
            component={type=='textarea'? 'textarea':'input'}
            value={formik.values[name]}
            onChange={onchangeHandler}
            autoComplete="off"
        />
    );
};

export default Input;
