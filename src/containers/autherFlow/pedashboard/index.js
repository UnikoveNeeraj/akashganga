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
import DashboardLayout from "../../../layout/dashboard";


function PeDashboard() {

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
        <DashboardLayout>
            <>
                <div className="text-initial">
                    <div className="pedashboardBox">

                        <div className="pedashboardLeft">
                            <p className="welcome">Welcome, Abhay!</p>
                            <div className="articleWrap">
                                <div className="articleLeft">
                                    <h2>My Dashboard</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pedashboardMidd">

                            <ul className="reviewGray">
                                <li>
                                    <span>Sent for Review</span>
                                    <b>43</b>
                                </li>
                                <li>
                                    <span>Approved</span>
                                    <b>12</b>
                                </li>
                                <li>
                                    <span>Sent for Revision</span>
                                    <b>20</b>
                                </li>
                            </ul>


                            <div className="analyticsWrap">
                                Analytics
                            </div>

                        </div>
                    </div>

                    <div className="articleTabsWrap mt-0 pt-0 border-0">
                        <h3 className="commanTitle">For Review</h3>
                        <div className="customTabs">
                            <Tab.Container defaultActiveKey="requests">
                                <Nav >
                                    <Nav.Item>
                                        <Nav.Link eventKey="requests">Requests</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="forReview">Sent for Review</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="completedReview">Completed Reviews</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="approved">Approved</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="revision">Sent for Revision</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="rejected">Rejected</Nav.Link>
                                    </Nav.Item>

                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="requests">
                                        <div className="tabContentWrap d-none">
                                            <div className="notArticle">
                                                <figure>
                                                    <img src={notyet} />
                                                </figure>
                                                <h2>No articles yet!</h2>
                                                <p className="d-inline-block w-100">You have not written any articles.</p>
             <p className="d-inline-block w-100">Articles that you save as drafts will show here</p>
                                            </div>
                                        </div>

                                        <div className="contentListBox">
                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                        <span><strong>Created On:</strong> 12 May 2023</span>
                                                        <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                    </div>
                                                    <span className="t-type mr-0">New</span>
                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                  
                                                    <p className="peContent">Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense...<span className="readMore">Read More</span></p>
                                                </div>
                                                <div className="contentListFoot">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">

                                                        <a href="" className="button button-primary">Review Article</a>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                        <span><strong>Created On:</strong> 12 May 2023</span>
                                                        <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                    </div>
                                                    <span className="t-type mr-0">Second Revision</span>
                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                    
                                                    <p className="peContent">Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...<span className="readMore">Read More</span></p>
                                                </div>
                                                <div className="contentListFoot">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">
                                                        <a href="javascript:void(0);" class="button-link">View Report</a>
                                                        <a href="" className="button button-primary">Review Article</a>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                        <span><strong>Created On:</strong> 12 May 2023</span>
                                                        <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                    </div>
                                                    <span className="t-type mr-0">Peer review not required</span>
                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                  
                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                </div>
                                                <div className="contentListFoot">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">

                                                        <a href="" className="button button-primary">Review Article</a>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="btnWrap mb-5 mt-4 text-center">
                                            <a href="" className="button-border">View All Requests</a>
                                        </div>



                                    </Tab.Pane>

                                    <Tab.Pane eventKey="forReview">
                                        <div className="tabContentWrap">
                                            <div className="contentListBox">
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span><strong>Sent On:</strong> 12 May 2023</span>

                                                        </div>
                                                        <span className="t-tag mr-0">Searching for a peer reviewer</span>
                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                         
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                      
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                        <span><strong>Sent On:</strong> 12 May 2023</span>

                                                        </div>
                                                        <span className="t-type mr-0">Peer reviewer assigned</span>
                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                    
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                            
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                        <span><strong>Sent On:</strong> 12 May 2023</span>

                                                        </div>
                                                        <span className="t-type mr-0">Peer review in progress</span>
                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                       
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                       
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="btnWrap mb-5 mt-4 text-center">
                                                <a href="" className="button-border">View All Sent for Review</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="completedReview">
                                        <div className="tabContentWrap">
                                            <div className="contentListBox">
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Submitted: 12 May 2023</span>
                                                            <span>Peer Reviewer: <b>Dr. Armaan Kapoor</b></span>

                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>

                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                   
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Submitted: 12 May 2023</span>
                                                            <span>Peer Reviewer: <b>Dr. Armaan Kapoor</b></span>

                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>Urban climate change management and society</h2>

                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                               
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Submitted: 12 May 2023</span>
                                                            <span>Peer Reviewer: <b>Dr. Armaan Kapoor</b></span>

                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>

                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                      
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="btnWrap mb-5 mt-4 text-center">
                                                <a href="" className="button-border">View All Completed Reviews</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="approved">
                                        <div className="tabContentWrap">
                                            <div className="contentListBox">
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Received: 12 May 2023</span>
                                                            <span><strong>Approved On:</strong> 27 May 2023</span>
                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>

                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                       
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="javascript:void(0);" className="button-link" >Archive</a>
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Received: 12 May 2023</span>
                                                            <span>Approved On: 27 May 2023</span>
                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>

                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                      
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="javascript:void(0);" className="button-link" >Archive</a>
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="btnWrap mb-5 mt-4 text-center">
                                                <a href="" className="button-border">View All Approved</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="revision">
                                        <div className="tabContentWrap">


                                            <div className="contentListBox">
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Received: 12 May 2023</span>
                                                            <span>Sent for Revision: 27 May 2023</span>
                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Received: 12 May 2023</span>
                                                            <span>Sent for Revision: 27 May 2023</span>
                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                   
                                                    </div>
                                                    <div className="contentListFoot">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contentList">
                                                    <div className="contentListHead">
                                                        <div className="timeList">
                                                            <span>Review Received: 12 May 2023</span>
                                                            <span>Sent for Revision: 27 May 2023</span>
                                                        </div>

                                                    </div>
                                                    <div className="contentListMidd">
                                                        <h2>1914 translation by H. Rackham</h2>
                                                        <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                    
                                                    </div>
                                                    <div className="contentListFoot contentListTwo">
                                                        <div className="footTag">
                                                        <span className="t-tag">Research Article</span>
                                                            <span className="t-tag">Akashganga Journal of Social Science</span>
                                                            <span className="t-tag">Anthropology</span>
                                                        </div>
                                                        <div className="footAction">
                                                            <a href="" className="button button-primary">View Report</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btnWrap mb-5 mt-4 text-center">
                                                <a href="" className="button-border">View All Sent for Revision</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="rejected">

                                        <div className="contentListBox">
                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                    <span><strong>Rejected On:</strong> 12 May 2023</span>
                                                    </div>

                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                   
                                                    <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                </div>
                                                <div className="contentListFoot contentListTwo">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">
                                                        <a href="javascript:void(0);" className="button-link">Archive</a>
                                                        <a href="" className="button button-primary">View Report</a>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                    <span><strong>Rejected On:</strong> 12 May 2023</span>
                                                    </div>

                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                 
                                                    <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                </div>
                                                <div className="contentListFoot contentListTwo">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">
                                                        <a href="javascript:void(0);" className="button-link">Archive</a>
                                                        <a href="" className="button button-primary">View Report</a>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="contentList">
                                                <div className="contentListHead">
                                                    <div className="timeList">
                                                    <span><strong>Rejected On:</strong> 12 May 2023</span>
                                                    </div>

                                                </div>
                                                <div className="contentListMidd">
                                                    <h2>1914 translation by H. Rackham</h2>
                                                 
                                                    <p className="peContent">School of Public Health, Faculty of Medicine, University of Queensland, Goonellabah, Australia</p>
                                                </div>
                                                <div className="contentListFoot contentListTwo">
                                                    <div className="footTag">
                                                    <span className="t-tag">Research Article</span>
                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                        <span className="t-tag">Anthropology</span>
                                                    </div>
                                                    <div className="footAction">
                                                        <a href="javascript:void(0);" className="button-link">Archive</a>
                                                        <a href="" className="button button-primary">View Report</a>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="btnWrap mb-5 mt-4 text-center">
                                            <a href="" className="button-border">View All Rejected</a>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>


                            </Tab.Container>
                        </div>


                        <div className="innerTabsView">
                            <div className="preReview">
                                <span>My Articles</span>
                               
                            </div>


                            <div className="customTabs">
                                <div className="articleTabsWrap">


                                    <div className="customTabs">
                                        <Tab.Container defaultActiveKey="drafts">

                                        <div className="tabsBoxin">
                                            <Nav >
                                                <Nav.Item>
                                                    <Nav.Link eventKey="drafts">Drafts</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="underReview">Under Review</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="approved">Approved</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="rejected">Rejected</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="published">Published</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <button className={collapseActive ? 'colapseBtn' : ''} onClick={expandClick}>{collapseActive ? 'Collapse' : 'Expand'}<i><img src={downarrow} /></i></button>
                                            </div>
                                            <div className={collapseActive ? 'show' : 'hide'}>
                                            <div className="subReviewGray">
                                                <ul className="reviewGray">
                                                    <li>
                                                        <span>Under Review</span>
                                                        <b>43</b>
                                                    </li>
                                                    <li>
                                                        <span>Approved</span>
                                                        <b>12</b>
                                                    </li>
                                                    <li>
                                                        <span>Published</span>
                                                        <b>20</b>
                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                           

                                            <Tab.Content className={collapseActive ? 'show' : 'hide'}>
                                                <Tab.Pane eventKey="drafts">
                                                    <div className="tabContentWrap">
                                                        <div className="notArticle">
                                                            <figure>
                                                                <img src={notyet} />
                                                            </figure>
                                                            <h2>No articles yet!</h2>
                                                            <p className="d-inline-block w-100">You have not written any articles.</p>
             <p className="d-inline-block w-100">Articles that you save as drafts will show here</p>
                                                        </div>
                                                    </div>

                                                    <div className="contentListBox">
                                                        <div className="contentList">
                                                            <div className="contentListHead">
                                                                <div className="timeList">
                                                                    <span><strong>Created On:</strong> 12 May 2023</span>
                                                                    <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                                </div>
                                                                <span className="t-type mr-0">Second Revision</span>
                                                            </div>
                                                            <div className="contentListMidd">
                                                                <h2>1914 translation by H. Rackham</h2>
                                                                <span className="t-tag">Research Article</span>
                                                                <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                            </div>
                                                            <div className="contentListFoot">
                                                                <div className="footTag">
                                                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                    <span className="t-tag">Anthropology</span>
                                                                </div>
                                                                <div className="footAction">
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={edit} /></i>
                                                                        <span>Edit</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={rejection} /></i>
                                                                        <span>Rejection</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i><img src={sevahaat} /></i>
                                                                        <span>Seva Haat</span>
                                                                    </a>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="contentList">
                                                            <div className="contentListHead">
                                                                <div className="timeList">
                                                                    <span><strong>Created On:</strong> 12 May 2023</span>
                                                                    <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                                </div>
                                                                <span className="t-type mr-0">Second Revision</span>
                                                            </div>
                                                            <div className="contentListMidd">
                                                                <h2>1914 translation by H. Rackham</h2>
                                                                <span className="t-tag">Research Article</span>
                                                                <p>No Data</p>
                                                            </div>
                                                            <div className="contentListFoot">
                                                                <div className="footTag">
                                                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                    <span className="t-tag">Anthropology</span>
                                                                </div>
                                                                <div className="footAction">
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={edit} /></i>
                                                                        <span>Edit</span>
                                                                    </a>

                                                                    <a href="">
                                                                        <i><img src={sevahaat} /></i>
                                                                        <span>Seva Haat</span>
                                                                    </a>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="btnWrap mb-5 mt-4 text-center">
                                                        <a href="" className="button-border">View All Drafts</a>
                                                    </div>



                                                </Tab.Pane>

                                                <Tab.Pane eventKey="underReview">
                                                    <div className="tabContentWrap">
                                                        <div className="contentListBox">
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span>Submitted On: 12 May 2023</span>

                                                                    </div>
                                                                    <span className="t-type mr-0">Publishing Editor</span>
                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span>Submitted On: 12 May 2023</span>

                                                                    </div>
                                                                    <span className="t-type mr-0">Peer Review</span>
                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>No Data</p>
                                                                </div>
                                                                <div className="contentListFoot">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="btnWrap mb-5 mt-4 text-center">
                                                            <a href="" className="button-border">View All Under Review</a>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="approved">
                                                    <div className="tabContentWrap">
                                                        <div className="contentListBox">
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span>Approved On: 12 May 2023</span>

                                                                    </div>

                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot contentListTwo">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>
                                                                    <div className="footAction">
                                                                        <a href="javascript:void(0);" className="button-link" onClick={handleShow} >Apply for Grant</a>
                                                                        <a href="" className="button button-primary">Publish Now</a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span><strong>Approved On:</strong> 12 May 2023</span>

                                                                    </div>

                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot contentListTwo">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>
                                                                    <div className="footAction">

                                                                        <a href="" className="button button-primary">Publish Now</a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="btnWrap mb-5 mt-4 text-center">
                                                            <a href="" className="button-border">View All Approved</a>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="rejected">
                                                    <div className="tabContentWrap">
                                                        <div className="notArticle">
                                                            <figure>
                                                                <img src={notyet} />
                                                            </figure>
                                                            <h2>No articles yet!</h2>
                                                            <p className="d-inline-block w-100">You have not written any articles.</p>
             <p className="d-inline-block w-100">Articles that you save as drafts will show here</p>
                                                        </div>
                                                    </div>

                                                    <div className="contentListBox">
                                                        <div className="contentList">
                                                            <div className="contentListHead">
                                                                <div className="timeList">
                                                                    <span><strong>Rejected On:</strong> 12 May 2023</span>
                                                                </div>

                                                            </div>
                                                            <div className="contentListMidd">
                                                                <h2>1914 translation by H. Rackham</h2>
                                                                <span className="t-tag">Research Article</span>
                                                                <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                            </div>
                                                            <div className="contentListFoot">
                                                                <div className="footTag">
                                                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                    <span className="t-tag">Anthropology</span>
                                                                </div>
                                                                <div className="footAction">
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={edit} /></i>
                                                                        <span>Edit</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={rejection} /></i>
                                                                        <span>Rejection</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i><img src={sevahaat} /></i>
                                                                        <span>Seva Haat</span>
                                                                    </a>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="contentList">
                                                            <div className="contentListHead">
                                                                <div className="timeList">
                                                                    <span>Rejected On: 24 May 2023</span>
                                                                </div>

                                                            </div>
                                                            <div className="contentListMidd">
                                                                <h2>1914 translation by H. Rackham</h2>
                                                                <span className="t-tag">Research Article</span>
                                                                <p>No Data</p>
                                                            </div>
                                                            <div className="contentListFoot">
                                                                <div className="footTag">
                                                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                    <span className="t-tag">Anthropology</span>
                                                                </div>
                                                                <div className="footAction">
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={edit} /></i>
                                                                        <span>Edit</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i className="ovelBg"><img src={rejection} /></i>
                                                                        <span>Rejection</span>
                                                                    </a>
                                                                    <a href="">
                                                                        <i><img src={sevahaat} /></i>
                                                                        <span>Seva Haat</span>
                                                                    </a>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="btnWrap mb-5 mt-4 text-center">
                                                        <a href="" className="button-border">View All Rejected</a>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="published">
                                                    <div className="tabContentWrap">


                                                        <div className="contentListBox">
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span>Published On: 12 May 2023</span>
                                                                    </div>
                                                                    <div className="customDrop moreCustom">
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="success" >
                                                                                <img src={dots} alt="#" />
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#/action-1">Revise Article
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-1">Article Invoice <img src={downloadBlue} alt="#" />
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-2">Article Contract
                                                                                    <img src={downloadBlue} alt="#" />
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span>Published On: 24 May 2023</span>
                                                                    </div>
                                                                    <div className="customDrop moreCustom">
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="success" >
                                                                                <img src={dots} alt="#" />
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#/action-1">Revise Article
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-1">Article Invoice <img src={downloadBlue} alt="#" />
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-2">Article Contract
                                                                                    <img src={downloadBlue} alt="#" />
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>


                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>No Data</p>
                                                                </div>
                                                                <div className="contentListFoot">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="btnWrap mb-5 mt-4 text-center">
                                                            <a href="" className="button-border">View All Published</a>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>


                                        </Tab.Container>
                                    </div>


                                    <div className="innerTabsView">
                                        <div className="preReview">
                                            <span>For Peer Review</span>
                                             
                                        </div>


                                        <div className="customTabs">
                                            <Tab.Container defaultActiveKey="newRequests">
                                            <div className="tabsBoxin">
                                                <Nav >
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="newRequests">New Requests</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="accepted">Accepted</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="reviewed">Reviewed</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="notAccepted">Not Accepted</Nav.Link>
                                                    </Nav.Item>

                                                </Nav>
                                                <button className={collapseActive ? 'colapseBtn' : ''} onClick={expandClick}>{collapseActive ? 'Collapse' : 'Expand'}<i><img src={downarrow} /></i></button>
                                                </div>

                                                <Tab.Content className={collapseActive ? 'show' : 'hide'}>
                                                    <Tab.Pane eventKey="newRequests">
                                                        <div className="contentListBox">
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span><strong>Created On:</strong> 12 May 2023</span>
                                                                        <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                                    </div>

                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot contentListTwo">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>
                                                                    <div className="footAction">
                                                                        <a href="">
                                                                            Reject for Review
                                                                        </a>
                                                                        <a href="" className="button button-primary">Accept for Review</a>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="contentList">
                                                                <div className="contentListHead">
                                                                    <div className="timeList">
                                                                        <span><strong>Created On:</strong> 12 May 2023</span>
                                                                        <span><strong>Last Edited:</strong> 24 May 2023</span>
                                                                    </div>

                                                                </div>
                                                                <div className="contentListMidd">
                                                                    <h2>1914 translation by H. Rackham</h2>
                                                                    <span className="t-tag">Research Article</span>
                                                                    <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
                                                                </div>
                                                                <div className="contentListFoot contentListTwo">
                                                                    <div className="footTag">
                                                                        <span className="t-tag">Akashganga Journal of Social Science</span>
                                                                        <span className="t-tag">Anthropology</span>
                                                                    </div>
                                                                    <div className="footAction">
                                                                        <a href="">
                                                                            Reject for Review
                                                                        </a>
                                                                        <a href="" className="button button-primary">Accept for Review</a>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="btnWrap mb-3 mt-5 text-center">
                                                            <a href="" className="button-border">View All Requests</a>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="accepted">
                                                        <div className="tabContentWrap">
                                                            Accepted
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="reviewed">
                                                        <div className="tabContentWrap">
                                                            Reviewed
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="notAccepted">
                                                        <div className="tabContentWrap">
                                                            Not Accepted
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>


                                            </Tab.Container>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="recommendedMain">
                        <div className="recomHead">
                            <h3>Recommended Articles</h3>
                            <button type="button" className="button-border">View All</button>

                        </div>
                        <div className="recommendedSlider">
                            <div className="recommendedBox">
                                <div className="recommendedHead">
                                <span><b>Published On:</b> 12 May 2023</span>
                                    <div className="recommendedShare">
                                        <i><img src={share} /></i>
                                        <i><img src={tags} /></i>
                                    </div>
                                </div>
                                <div className="recommendedTitle">
                                    <h2>Be Aware of Your Rights as an Author</h2>
                                    <h3>Dr. Umesh Chandra Dumka</h3> 
                                </div>
                                <div className="recommendedContent">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                    <span className="t-tag">Anthropology</span>
                                </div>
                            </div>
                            <div className="recommendedBox">
                                <div className="recommendedHead">
                                <span><b>Published On:</b> 12 May 2023</span>
                                    <div className="recommendedShare">
                                        <i><img src={share} /></i>
                                        <i><img src={tags} /></i>
                                    </div>
                                </div>
                                <div className="recommendedTitle">
                                    <h2>Be Aware of Your Rights as an Author</h2>
                                    <h3>Dr. Umesh Chandra Dumka</h3> 
                                </div>
                                <div className="recommendedContent">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                    <span className="t-tag">Anthropology</span>
                                </div>
                            </div>
                            <div className="recommendedBox">
                                <div className="recommendedHead">
                                <span><b>Published On:</b> 12 May 2023</span>
                                    <div className="recommendedShare">
                                        <i><img src={share} /></i>
                                        <i><img src={tags} /></i>
                                    </div>
                                </div>
                                <div className="recommendedTitle">
                                    <h2>Be Aware of Your Rights as an Author</h2>
                                    <h3>Dr. Umesh Chandra Dumka</h3> 
                                </div>
                                <div className="recommendedContent">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                    <span className="t-tag">Anthropology</span>
                                </div>
                            </div>
                            <div className="recommendedBox">
                                <div className="recommendedHead">
                                <span><b>Published On:</b> 12 May 2023</span>
                                    <div className="recommendedShare">
                                        <i><img src={share} /></i>
                                        <i><img src={tags} /></i>
                                    </div>
                                </div>
                                <div className="recommendedTitle">
                                    <h2>Be Aware of Your Rights as an Author</h2>
                                    <h3>Dr. Umesh Chandra Dumka</h3> 
                                </div>
                                <div className="recommendedContent">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                    <span className="t-tag">Anthropology</span>
                                </div>
                            </div>
                            <div className="recommendedBox">
                                <div className="recommendedHead">
                                <span><b>Published On:</b> 12 May 2023</span>
                                    <div className="recommendedShare">
                                        <i><img src={share} /></i>
                                        <i><img src={tags} /></i>
                                    </div>
                                </div>
                                <div className="recommendedTitle">
                                    <h2>Be Aware of Your Rights as an Author</h2>
                                    <h3>Dr. Umesh Chandra Dumka</h3> 
                                </div>
                                <div className="recommendedContent">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...</p>
                                    <span className="t-tag">Akashganga Journal of Social Science</span>
                                    <span className="t-tag">Anthropology</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </>
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
        </DashboardLayout>
    </>
}
export default PeDashboard


