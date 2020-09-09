import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

const Faq = () => {
  return (
          <div>
        <section class="bg-white pt-2 pb-5">
            <div class="pagewrap">
                <div class="text-center pt-4 pb-3" id="company">
                  <div class="container-fluid">
                    <h2 class="bha_heading_2 text-blue pb-2">Frequently Asked Questions</h2>
                  </div>
                </div>
                <div id="accordion" class="myaccordion">
                <div  class="border-0">
                    <Accordion defaultActiveKey="0">
                        <Card>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <div class="panel-heading" role="tab" id="headingFour">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                               Lorem ipsum dollar site amntLorem ipsum dolor sit amet
                                            </a>
                                        </h4>
                                    </div>
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>  
                              <div class="card-body card-body margin-top p-4">
                                              Lorem ipsum dollar site amntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                            </div></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                </div>
            </div>
        </section>
        </div>
  );
};

export default Faq;

