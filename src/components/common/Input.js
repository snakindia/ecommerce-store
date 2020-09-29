import React from 'react';
import { Field } from 'formik'
const Input = (props) => {
    const { allow, onChange } = props;
    const validateAllow=(val)=>{
        if(!allow){
            return true;
        } else if (allow && allow =='spc'){
            const isValid= (/^[a-zA-Z0-9~!@#$%^&*-_'"]*$/i.test(val))
            console.log({isValid})
            return isValid;
        }
    }
    const onchangeHandler = (e) => {
        const {value}=e.target;
        if (onChange && validateAllow(value)) {
            onChange(e)
        }
    }
    return (
        <Field

            {...props}
            onChange={onchangeHandler}
        />
    );
};

export default Input;
