import React, { useEffect, useState } from "react";
import Footer from "../../../layout/footer";
import Header from "../../../layout/header";
import Sidebar from "../../../components/common/Sidebar";
import Modal from 'react-bootstrap/Modal';
import mudraIcon from "../../../assets/img/icons/mudrakosh.png";
import copytext from "../../../assets/img/icons/copy.svg";
import closeIcon from "../../../svg/modal-close.svg";
import matka from "../../../assets/img/icons/matka.svg";
import rupee from "../../../assets/img/icons/rupee.svg";
 


function mudraKosh() {

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
                        <div className="profileSetupWrap">
                                <p>
                                    <b>Payment Due</b>
                                    <span>Urban climate change management and society.</span>
                                </p>
                                <div className="profileSetupBtn">
                                    <button className="button button-primary">
                                        Pay INR 6000
                                    </button>
                                </div>
                            </div>
                            <div className="mudraAlert">
                                <div className="mudraLeft">
                                    <figure>
                                        <img src={mudraIcon} />
                                    </figure>
                                    <p>
                                        <span>Congratulations!</span>
                                        <small>You have earned 500 Mudras</small>
                                    </p>
                                 </div>
                                <b><img src={closeIcon} /></b>
                            </div> 

                            <div className="midraMainBox">
                                <div className="midraTop">
                                    <div className="midraLeft">
                                        <div className="commanBox balanceWrap">
                                            <p><img src={rupee} />Balance</p>
                                            <p><small>INR</small><big>5000</big></p>
                                        </div>
                                    </div>
                                    <div className="midraRight">
                                        <div className="commanBox mudrasWrap">
                                            <div className="mudrasHead">
                                                <h3>Total Mudras</h3>
                                            </div>
                                            <p className="mudTitle">
                                                <big>750</big>
                                                <span>+250</span>
                                            </p>
                                            <div className="mudrasFoot">
                                                <p>Earn points by reviewing articles!</p>
                                                <a href="javascript:void(0)" onClick={openHistory}>History</a> 
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="midraLeft">
                                    
                                    <div className="mudraSearch">
                                        <h3>Transaction History</h3>
                                        <span className="searchHistory">
                                            <input type="search" placeholder="Search for the article’s transaction" />
                                        </span>
                                    </div>
                                    <div className="historyTable">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Type</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Invoice</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <a className="transText">Urban climate cha...</a>
                                                            <span>TXN ID: 327863282</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <b>Rejected</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <span>12 Oct 2022</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <big className="inrText">+ INR 1000</big>
                                                            <span>+ INR 1000</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                        <div className="downFileWrap">
                                                                <a href="javascript:void(0)" className="downloadFile"><img src="" /></a>
                                                                <span>Download</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="blankTr">
                                                    <td colSpan="5">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <a className="transText">Urban climate cha...</a>
                                                            <span>TXN ID: 327863282</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <b>Rejected</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <span>12 Oct 2022</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <big className="inrText">+ INR 1000</big>
                                                            <span>Debit</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                        <div className="downFileWrap">
                                                                <a href="javascript:void(0)" className="downloadFile"><img src="" /></a>
                                                                <span>Download</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="blankTr">
                                                    <td colSpan="5">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <a className="transText">Urban climate cha...</a>
                                                            <span>TXN ID: 327863282</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <b>Rejected</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <span>12 Oct 2022</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <big className="inrText">+ INR 1000</big>
                                                            <span>Refund</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <div className="downFileWrap">
                                                                <a href="javascript:void(0)" className="downloadFile"><img src="" /></a>
                                                                <span>Download</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="blankTr">
                                                    <td colSpan="5">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <a className="transText">Urban climate cha...</a>
                                                            <span>TXN ID: 327863282</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <b>Rejected</b>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <span>12 Oct 2022</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                            <big className="inrText">+ INR 1000</big>
                                                            <span>+ INR 1000</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="hisTableBox">
                                                        <div className="downFileWrap">
                                                                <a href="javascript:void(0)" className="downloadFile"><img src="" /></a>
                                                                <span>Download</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="midraRight">
                                    <div className="referralWrap commanBox">
                                        <h3>My Referral Code</h3>
                                        <p>
                                            <b>VKSHILA15</b>
                                            <span><img src={copytext} alt="copy" /> Copy Code</span>
                                        </p>
                                        <i><img src={matka} /></i>
                                    </div>
                                    <div className="couponsWrap">
                                        <h3>Available Coupons</h3>
                                        <div className="couponsBox">
                                            <div className="couponsList">
                                                <div className="couponsOff">
                                                    <div className="">
                                                        Coupon Code
                                                        <span className="coopanCode">VKSHILA10 <i><img src={copytext} alt="copy" /></i></span>
                                                    </div>
                                                    <b>25% Off</b>
                                                </div>
                                                <div className="couponsTmc">
                                                    <span>Expiring on 09 Dec 2022</span>
                                                    <a href="">View T&C</a>
                                                </div>
                                            </div>
                                            <div className="couponsList">
                                                <div className="couponsOff">
                                                    <div className="">
                                                        Coupon Code
                                                        <span className="coopanCode">VKSHILA10 <i><img src={copytext} alt="copy" /></i></span>
                                                    </div>
                                                    <b>25% Off</b>
                                                </div>
                                                <div className="couponsTmc">
                                                    <span>Expiring on 09 Dec 2022</span>
                                                    <a href="">View T&C</a>
                                                </div>
                                            </div>
                                            <div className="couponsList">
                                                <div className="couponsOff">
                                                    <div className="">
                                                        Coupon Code
                                                        <span className="coopanCode">VKSHILA10 <i><img src={copytext} alt="copy" /></i></span>
                                                    </div>
                                                    <b>25% Off</b>
                                                </div>
                                                <div className="couponsTmc">
                                                    <span>Expiring on 09 Dec 2022</span>
                                                    <a href="">View T&C</a>
                                                </div>
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
export default mudraKosh


