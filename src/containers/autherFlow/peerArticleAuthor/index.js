import React, { useEffect, useState } from "react";
import Footer from "../../../layout/footer";
import Header from "../../../layout/header";
import Accordion from "react-bootstrap/Accordion";

function peerArticleAuthor() {
  const [collapseActive, setIsActive] = useState(false);
  const [historyResult, setHistoryResult] = useState(false);
  const expandClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <Header />
      <div className="inner-pages">
        <div className="centerSection">
    
           
              <div className="peerArticlePage">
                <h2>Submit Article</h2>
            <div className="customAccordion">
            <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <p>My submission details<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="">

                        </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                  <Accordion.Header>
                        <p>Article registration payment<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="">
                            <textarea>We are collecting INR 1000 towards the registration fee of article submission. This amount is a part of the total APC charge that you will pay. Should your article be selected, this amount will be adjusted to the total bill. If your article is rejected for any reason, this amount will be refunded to your wallet.</textarea>
                        </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                  <Accordion.Header>
                        <p>Authors and contributors<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                  <Accordion.Header>
                        <p>Review type<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                  <Accordion.Header>
                        <p>Funding details<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                  <Accordion.Header>
                        <p>Products (<i>Optional</i>) <span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                  
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                  <Accordion.Header>
                        <p>Start writing <span>Description to be added. Lorem ipsum.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                  
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                  <Accordion.Header>
                        <p>Statements<span>Description to be added. Lorem ipsum dolor sit amet.</span></p>
                        <b>To be completed</b>
                    </Accordion.Header>
                  
                    <Accordion.Body>laborum.</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
            </div>
                
              </div>
           
           
          <Footer />
        </div>
      </div>
    </>
  );
}
export default peerArticleAuthor;
