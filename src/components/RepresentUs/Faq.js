import React ,{useState} from 'react';
import { Accordion, Card, Button,useAccordionToggle } from 'react-bootstrap';
import htmlParse from 'html-react-parser';
const Faq = ({ data }) => {
  const [selectedKey, setSelectedKey] =useState('0');

  const handleClick =(key)=>{
    setSelectedKey(key == selectedKey ? null : key)
  }
  const  CustomToggle=({ children, eventKey }) =>{
  
    return (
      <div className="panel-heading" role="tab" onClick={e=>handleClick(eventKey)}>
         {children}
      </div>
     
    );
  }
  return (
    <>
    <section className="bg-white pt-2 pb-5">
  <div className="pagewrap">
    <div className="text-center pt-4 pb-3" id="company">
      <div className="container-fluid">
        <h2 className="bha_heading_2 text-blue pb-2">Frequently Asked Questions</h2>
      </div>
    </div>
    <Accordion defaultActiveKey="0" activeKey={selectedKey}  
    id="accordion" className="myaccordion"
    >
    
    <div className="border-0">
    { data && data.length > 0 && data.map((item, i) =>
    <>
       <CustomToggle eventKey={i.toString()}>
       <h4 className="panel-title" style={{background: '#ddd'}}>
            <a role="button" className={selectedKey ==i.toString() ? '': 'collapsed'} dangerouslySetInnerHTML={{__html:item.question}}/>
        </h4>
       </CustomToggle>
      
      <Accordion.Collapse eventKey={i.toString()}>
        <div className="card-body card-body margin-top p-4" dangerouslySetInnerHTML={{__html:item.answer}}/>
      </Accordion.Collapse>
      </>
    )
}
     
     
    </div>
  </Accordion>
</div>
</section>
    </>
  );
};

export default Faq;

