import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../../components/common/Sidebar'
import Footer from '../footer'
import Header from '../header'
import './index.scss'

const DashboardLayout = ({ children, hideSidebar = false }) => {

    function checkWriteArticlePage()
    {
        let isArticleWritePage=false;
        const router=useLocation()
        if(router.pathname.includes('/dashboard/edit-article') || router.pathname.includes('/dashboard/submit-article'))
        isArticleWritePage=true;
        return isArticleWritePage
    }
    
    return (
        <>
            <>
                <Header />
                <div className={checkWriteArticlePage()===false?'inner-pages':' inner-pages full-view-page'}>
                    <div className="centerSection">
                        {hideSidebar ? (
                            <div className="text-initial">
                                {children}
                            </div>
                        ) : (
                            <div className="previewContent pageWrap">
                                {checkWriteArticlePage()===false && <div className="pageLeft">
                                    <Sidebar />
                                </div> }

                                <div className={checkWriteArticlePage()===false?'pageRight text-initial':'pageRight text-initial w-100'}>
                                    {children}
                                    
                                </div >
                            </div>
                        )}
                        <Footer />
                    </div>
                </div>
                {/* <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-lg authorModal">

                    <Modal.Header className="modal-header">
                        <h5 className="modal-title">Grant Details</h5>
                        <button
                            type="button"
                            className="btn-close"
                            ariaLabel="Close"
                            onClick={(e) => handleOTPClose(e)}
                        />
                    </Modal.Header>
                    <Modal.Body className="pb-0">
                        <div className="grantDetails">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="infotext">
                                        <b>Grant Name</b>
                                        <span className="textGreen">Vikramshila Grant for Authors</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="infotext">
                                        <b>Available for</b>
                                        <span className="textGreen">Vikramshila Grant for Authors</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="infotext">
                                        <b>URL of Grant available for </b>
                                        <span className="textBlue">Urban climate change management and society</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="infotext">
                                        <b>Description</b>
                                        <span className="textGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis labore et dolore magna aliqua labore et dolore magna...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="infotext">
                                        <b>Eligibility</b>
                                        <ul className="listText">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>
                                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="infotext">
                                        <b>Know More</b>
                                        <ul className="knowList">
                                            <li>
                                                <p>
                                                    <i>Grant Received On</i>
                                                    <small>12 May 2023</small>
                                                </p>
                                                <p>
                                                    <i>Valid Till</i>
                                                    <small>25 Aug 2023</small>
                                                </p>
                                            </li>

                                            <li>
                                                <p>
                                                    <i>Amount Received</i>
                                                    <small>INR 7000</small>
                                                </p>
                                                <p>
                                                    <i>Amount Remaining</i>
                                                    <small>INR 6500</small>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <i>Transaction ID</i>
                                                    <small>826475844855</small>
                                                </p>
                                                <p>
                                                    <i>Invoice</i>
                                                    <div className="downloadBOx">
                                                        <a href="" download></a>
                                                        <strong>Download</strong></div>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="pb-4">
                        <button class="button button-primary" type="submit" onClick={handleClose}>CLOSE</button>
                    </Modal.Footer>
                </Modal> */}
            </>
        </>
    )
}

export default DashboardLayout