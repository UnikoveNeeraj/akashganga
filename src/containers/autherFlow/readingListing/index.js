import React, { useEffect, useState } from "react";
import Footer from "../../../layout/footer";
import Header from "../../../layout/header";
import Sidebar from "../../../components/common/Sidebar";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import share from "../../../assets/img/icons/share.svg";
import tags from "../../../assets/img/icons/tags.svg";
import menudrop from "../../../assets/img/icons/dashboard.svg";
import { Select } from "antd";
 


function redingListing() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [collapseActive, setIsActive] = useState(false);

    const [historyResult, setHistoryResult] = useState(false);

    const expandClick = event => {
        setIsActive(current => !current);
    };

    function openHistory (){
        setHistoryResult (true)
      }
      
    return <>
        
            <Header />
            <div className="inner-pages">
                <div className="centerSection">
                    <div className="previewContent pageWrap">

                        <div className="pageLeft">
                            <Sidebar />
                        </div>

                        <div className="pageRight text-initial">
                            <h2 className="commanTitle">My Reading List</h2>
  
                            <div className="redingFilterWrap">
                                <div className="commanBox">
                                    <b>Filter</b>
                                    <div className="redingFilterArea">
                                        <div className="redingFilterList">
                                            <div className="fieldWrap selectBox">
                                                <Select>
                                                    <option selected>Journal</option>
                                                    <option>Journal</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="redingFilterList">
                                            <div className="fieldWrap selectBox">
                                                <Select>
                                                    <option selected>Subject</option>
                                                    <option>Subject</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="redingFilterList">
                                            <div className="fieldWrap selectBox">
                                                <Select>
                                                    <option selected>Type</option>
                                                    <option>Type</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="redingFilterList ">
                                            <div className="fieldWrap selectBox">
                                                <Select className="fieldForm">
                                                    <option selected>Publication Year</option>
                                                    <option>Publication Year</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="redingFilterList actionWrap">
                                            <b>Clear All</b>
                                            <a class="button button-primary" href="javascript:void(0)">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 sortWrap">
                                    <div className="customDrop">
                                        <Dropdown className="removeArrow">
                                            <Dropdown.Toggle variant="success">
                                            Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/dashboard" className="active">New to Old</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Old to New</Dropdown.Item> 
                                                <Dropdown.Item href="#/action-2">Recommended</Dropdown.Item> 
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="recommendedBox ml-0 mr-0 bgColorNone">
                                        <div className="recommendedHead">
                                        <span><b>Published On:</b> 12 May 2023</span>
                                            <div className="recommendedShare">
                                                <i><img src={share} /></i>
                                                <i><img src={tags} /></i>
                                            </div>
                                        </div>
                                        <div className="recommendedTitle">
                                            <h2>Be Aware of Your Rights as an Author</h2>
                                            <h3>Dr. Umesh Dumka, Dr. Riya Sinha, Dr. Vansh Gupta, Dr. Anita Jain</h3> 
                                        </div>
                                        <div className="recommendedContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                            <div className="t-tag-box">
                                            <span className="t-tag">Research Article</span> <span className="t-tag">Anthropology</span>
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="recommendedBox ml-0  mr-0 bgColorNone">
                                        <div className="recommendedHead">
                                        <span><b>Published On:</b> 12 May 2023</span>
                                            <div className="recommendedShare">
                                                <i><img src={share} /></i>
                                                <i><img src={tags} /></i>
                                            </div>
                                        </div>
                                        <div className="recommendedTitle">
                                            <h2>Be Aware of Your Rights as an Author</h2>
                                            <h3>Dr. Umesh Dumka, Dr. Riya Sinha, Dr. Vansh Gupta, Dr. Anita Jain</h3> 
                                        </div>
                                        <div className="recommendedContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                            <div className="t-tag-box">
                                                <span className="t-tag">Research Article</span> <span className="t-tag">Anthropology</span>
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="recommendedBox ml-0  mr-0 bgColorNone">
                                        <div className="recommendedHead">
                                        <span><b>Published On:</b> 12 May 2023</span>
                                            <div className="recommendedShare">
                                                <i><img src={share} /></i>
                                                <i><img src={tags} /></i>
                                            </div>
                                        </div>
                                        <div className="recommendedTitle">
                                            <h2>Be Aware of Your Rights as an Author</h2>
                                            <h3>Dr. Umesh Dumka, Dr. Riya Sinha, Dr. Vansh Gupta, Dr. Anita Jain</h3> 
                                        </div>
                                        <div className="recommendedContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                            <div className="t-tag-box">
                                                <span className="t-tag">Research Article</span> <span className="t-tag">Anthropology</span>
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="recommendedBox ml-0  mr-0 bgColorNone">
                                        <div className="recommendedHead">
                                        <span><b>Published On:</b> 12 May 2023</span>
                                            <div className="recommendedShare">
                                                <i><img src={share} /></i>
                                                <i><img src={tags} /></i>
                                            </div>
                                        </div>
                                        <div className="recommendedTitle">
                                            <h2>Be Aware of Your Rights as an Author</h2>
                                            <h3>Dr. Umesh Dumka, Dr. Riya Sinha, Dr. Vansh Gupta, Dr. Anita Jain</h3> 
                                        </div>
                                        <div className="recommendedContent">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                            <div className="t-tag-box">
                                                <span className="t-tag">Research Article</span> <span className="t-tag">Anthropology</span>
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>

                        </div >
                    </div>
                    <Footer />
                </div>
            </div>


            <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-md authorModal">
                <Modal.Header className="modal-header">
                    <h5 className="modal-title">Reject Review</h5>
                    <button
                        type="button"
                        className="btn-close"
                        ariaLabel="Close"
                        onClick={handleClose}
                        //onClick={(e) => handleOTPClose(e)}
                    />
                </Modal.Header>
                <Modal.Body className="pb-0">
                    <div className="rejectModal">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Please specify your reason:</p>
                            </div>

                            <div className="col-md-12">
                                <label className="customRadio">
                                    <input type="radio"  name="reviewRadio"  />
                                    <b></b>
                                    <span>Not my subject area </span>
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label className="customRadio" >
                                    <input type="radio"  name="reviewRadio"  />
                                    <b></b>
                                    <span>
                                        Sorry, I cannot meet the deadline </span>
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label className="customRadio" >
                                    <input type="radio"  name="reviewRadio"  />
                                    <b></b>
                                    <span>
                                        It is not my subject </span>
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label className="customRadio">
                                    <input type="radio"  name="reviewRadio"  />
                                    <b></b>
                                    <span>
                                        It is my subject but it is not my specialization</span>
                                </label>
                            </div>
                            <div className="col-md-12">
                            <textarea placeholder="Other reason..." className="inputField"></textarea>    
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="pb-4">
                    <button class="button button-primary" type="submit" onClick={handleClose}>SUBMIT</button>
                </Modal.Footer>
            </Modal>


    <Modal
        show={historyResult}
        size="md"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered authorModal"
      >
        <Modal.Header>
          <h5 className="modal-title pr-color">History</h5>
          <button
            type="button"
            className="btn-close"
            onClick={(e) => setHistoryResult(false)}
            aria-label="Close"
          />
        </Modal.Header>
        <Modal.Body className="pt-0 pb-2">
           <div className="historyModalWrap">
            <div className="historyList">
                <p>
                    <b>Referral Code</b>
                    <i>12 Oct 2022</i>
                </p>
                <span>250 Mudras</span>
            </div>
            <div className="historyList">
                <p>
                    <b>Referral Code</b>
                    <i>12 Oct 2022</i>
                </p>
                <span>250 Mudras</span>
            </div>
           </div>
           <div className="modalFoot">
            <button className="button button-primary">
                CLOSE
            </button>
           </div>
         </Modal.Body>
      </Modal>

 

        </>
    
}
export default redingListing


