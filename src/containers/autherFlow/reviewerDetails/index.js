import React, { useEffect, useState } from "react";
import ArticleList from "../../../components/articleList/ArticleList";
import NeedHelp from "../../../components/needHelp/NeedHelp";
import Footer from "../../../layout/footer";
import Header from "../../../layout/header";
import CustomersSay from "../../../components/customersSay/CustomersSay";
import ArticlesServices from "../../../components/articlesServices/ArticlesServices";
import Publish from "../../../components/publish/Publish";
import Video from "../../../components/video/Video";
import Article from "../../../components/article/Article";
import "./index.scss";
import Sidebar from "../../../components/common/Sidebar";
import notyet from "../../../assets/img/icons/notarticle.svg";
import share from "../../../assets/img/icons/share.svg";
import tags from "../../../assets/img/icons/tags.svg";

import edit from "../../../assets/img/icons/edit.svg";
import rejection from "../../../assets/img/icons/rejection.svg";
import sevahaat from "../../../assets/img/icons/sevahaat.svg";
import downarrow from "../../../assets/img/icons/downarrow.svg";

import dots from "../../../assets/img/icons/dots.svg";
import downloadBlue from "../../../assets/img/icons/downloadBlue.svg";

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';


function reviewerDetails() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [collapseActive, setIsActive] = useState(false);
    const expandClick = event => {
        setIsActive(current => !current);
    };

    useEffect(() => {
        $('.recommendedSlider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            centerPadding: '60px',
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }, [])
    return <>
        <>
            <Header />
            <div className="inner-pages">
                <div className="centerSection">
                    <div className="previewContent pageWrap">

                        <div className="pageLeft">
                            <Sidebar />
                        </div>

                        <div className="pageRight text-initial">
                            <div className="backPage">
                                <a className="" href="javascript:void(0)">Back</a>
                                <p>Peer Reviewer Details</p>
                            </div>
                            <div className="reviewerDetails">
                                <div className="reviewerProfile">
                                    <figure>

                                    </figure>
                                    <div className="reviewerProfileContent">
                                        <h3>Dr. Armaan Kapoor</h3>
                                        <p className="areaBox">
                                            <span>Dean</span>
                                            <span>Indian Institute of Technology, Kanpur</span>
                                        </p>
                                        <p className="emailBox"><b className="icon-email" />armaankapoor_89@gmail.com</p>
                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                        <span className="t-tag">Anthropology</span>
                                    </div>
                                </div>
                                <ul className="reviewGray">
                                    <li>
                                        <span>Published</span>
                                        <b>43</b>
                                    </li>
                                    <li>
                                        <span>Saves</span>
                                        <b>12</b>
                                    </li>
                                    <li>
                                        <span>Citations</span>
                                        <b>20</b>
                                    </li>
                                    <li>
                                        <span>Views</span>
                                        <b>20</b>
                                    </li>
                                </ul>
                            </div>

                            <div className="articleTabsWrap mt-0 pt-0 border-0">
                                <h3 className="commanTitle mb-0">Published Articles</h3>

                                <div className="contentListBox mt-4">
                                    <div className="contentList">
                                        <div className="contentListHead">
                                            <div className="timeList">
                                                <span>Published On: 12 May 2023</span>
                                                <span>Comments: 300</span>
                                            </div>
                                            <span className="t-tag mr-0">New</span>
                                        </div>
                                        <div className="contentListMidd">
                                            <h2>1914 translation by H. Rackham</h2>
                                            <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                            <span className="t-tag">Research Article</span>
                                            <p className="peContent">Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense...<span className="readMore">Read More</span></p>
                                        </div>
                                        <div className="contentListFoot">
                                            <div className="footTag">
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                <span className="t-tag">Anthropology</span>
                                            </div>
                                            <div className="footAction">

                                                <a href="" className="button button-primary">View Article</a>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="contentList">
                                        <div className="contentListHead">
                                            <div className="timeList">
                                                <span>Published On: 12 May 2023</span>
                                                <span>Comments: 300</span>
                                            </div>
                                            <span className="t-tag mr-0">New</span>
                                        </div>
                                        <div className="contentListMidd">
                                            <h2>1914 translation by H. Rackham</h2>
                                            <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                            <span className="t-tag">Research Article</span>
                                            <p className="peContent">Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense...<span className="readMore">Read More</span></p>
                                        </div>
                                        <div className="contentListFoot">
                                            <div className="footTag">
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                <span className="t-tag">Anthropology</span>
                                            </div>
                                            <div className="footAction">

                                                <a href="" className="button button-primary">View Article</a>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="contentList">
                                        <div className="contentListHead">
                                            <div className="timeList">
                                                <span>Published On: 12 May 2023</span>
                                                <span>Comments: 300</span>
                                            </div>
                                            <span className="t-tag mr-0">New</span>
                                        </div>
                                        <div className="contentListMidd">
                                            <h2>1914 translation by H. Rackham</h2>
                                            <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                            <span className="t-tag">Research Article</span>
                                            <p className="peContent">Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense...<span className="readMore">Read More</span></p>
                                        </div>
                                        <div className="contentListFoot">
                                            <div className="footTag">
                                                <span className="t-tag">Akashganga Journal of Social Science</span>
                                                <span className="t-tag">Anthropology</span>
                                            </div>
                                            <div className="footAction">

                                                <a href="" className="button button-primary">View Article</a>
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
            <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-lg authorModal">

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
            </Modal>
        </>
    </>
}
export default reviewerDetails


