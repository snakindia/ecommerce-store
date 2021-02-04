import React from 'react';
import visa from '../../../assets/icon/visa-icon.svg';
import mastercard from '../../../assets/icon/mastercard-icon.svg';
import american from '../../../assets/icon/american-express.svg';
import discover from '../../../assets/icon/discover-icon.svg';
import diners from '../../../assets/icon/diners-club-icon.svg';
import jcb from '../../../assets/icon/jcb-icon.svg';
const PannelHeaderPayment = ({ id, method, activeKey }) => {
    return (
        <div className="row pannel-header">
            <div className="col-md-4">
                <input id="ac-1" name="accordion-1" class="btn-accordian" type="radio" checked ={activeKey==id ? true: false}/>
                <label for="ac-1" style={{ marginLeft: '10px' }}><span class="radio-btn-clickable"></span>
                    {method.name}
                </label>
            </div>
            <div className="col-md-8">
                {method.gateway ?
                    <span class="float-right">

                        <img src={visa} width="32px" height="32px" />
                        <img src={mastercard} width="32px" height="32px" />
                        <img src={american} width="32px" height="32px" />
                        <img src={discover} width="32px" height="32px" />
                        <img src={diners} width="32px" height="32px" />
                        <img src={jcb} width="32px" height="32px" />

                    </span>
                    : null}
            </div>
        </div>
    );
}
export default PannelHeaderPayment;