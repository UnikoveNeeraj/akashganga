import React, { useEffect, useState } from "react";
import active_info from "../../../svg/active-info.svg";
import ToolTip from "../../../components/common/ToolTip";
import UserDetail from "../../../components/dashboard/UserDetail";
import ArticleListing from "../../../components/dashboard/ArticleListing";
import share from "../../../assets/img/icons/share.svg";
import tags from "../../../assets/img/icons/tags.svg";
import downarrow from "../../../assets/img/icons/downarrow.svg";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";
import DashboardLayout from "../../../layout/dashboard";

import arrowLeft from "../../../assets/img/icons/arrowLeft.svg";
import upArrow from "../../../assets/img/icons/upArrow.svg";
import jwt_decode from "jwt-decode";
import { getAricleDetails } from "../../../store/apiCalls/dashboard";

function Dashboard() {
  const [show, setShow] = useState(false);
  const limit = 2;
  const handleClose = () => setShow(false);
  const { id } = jwt_decode(localStorage.usertoken);
  const [articleData, setArtcileData] = useState([]);
  const [articleTotleDatas, setArtcileTotleData] = useState([]);
  const headers = { Authorization: `Bearer ${localStorage?.usertoken}` };
  const [collapseActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("draft");
  const expandClick = (event) => {
    setIsActive((current) => !current);
  };

  const fetchArticleData = (tab) => {
    const fetchdata = async () => {
      const params = {
        userId: id,
        status: tab,
        page: page,
        limit: limit,
      };
      return getAricleDetails(headers, params);
    };

    fetchdata()
      .then((userData) => {
        if (userData.status === 200 && userData?.data?.data) {
          setArtcileData(userData.data.data.article);
          setArtcileTotleData(userData.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchArticleData('draft');
  }, [page]);

  const getArticleType = (type) => { 
     fetchArticleData(type);
     setActiveTab(type);
  };
      
  useEffect(() => {
    $(".recommendedSlider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      arrows: false,
      centerPadding: "40px",
      slidesToShow: 3,
      slidesToScroll: 3,
    });
  }, []);

  return (
    <>
      <DashboardLayout>
        <>
          <UserDetail />
          <div className="articleWrap">
            <div className="articleLeft">
              <h2>My Dashboard</h2>
              <a href="">Ready to share your research with the world?</a>
              <p>Let's begin the journey now.</p>
            </div>
            <div className="articleRight">
              <p>Upload your article in four easy steps!</p>
              <ul>
                <li>
                  <b>1</b>
                  <span>Submit Article</span>
                </li>
                <li>
                  <b>2</b>
                  <span>Get it Reviewed</span>
                </li>
                <li>
                  <b>3</b>
                  <span>Make Payment</span>
                </li>
                <li>
                  <b>4</b>
                  <span>Publish Article</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="articleTabsWrap">
            <h3 className="commanTitle">My Articles</h3>

            <div className="customTabs">
              <Tab.Container defaultActiveKey="draft">
                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="draft"
                      onClick={() => [
                        setActiveTab("draft"),
                        getArticleType("draft"),
                      ]}
                    >
                      Drafts
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="submit"
                      onClick={() => [
                        setActiveTab("submit"),
                        getArticleType("submit"),
                      ]}
                    >
                      Under Review
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="approved"
                      onClick={() => [
                        setActiveTab("approved"),
                        getArticleType("approved"),
                      ]}
                    >
                      Approved
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="rejected"
                      onClick={() => [
                        setActiveTab("rejected"),
                        getArticleType("rejected"),
                      ]}
                    >
                      Rejected
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="published"
                      onClick={() => [
                        setActiveTab("published"),
                        getArticleType("published"),
                      ]}
                    >
                      Published <ToolTip  classNameTooltip='personaldetails-tooltip' toolTipMessage="help"><img className="pe-cursor ps-1" src={active_info} alt='no img' /></ToolTip>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  {activeTab === "draft" && (
                    <ArticleListing
                      articleData={articleData}
                      activeTab={activeTab}
                      totalRecords={articleTotleDatas?.numberOfRecordBasedOnFilter}
                    />
                  )}

                  {activeTab === "submit" && (
                    <ArticleListing
                      articleData={articleData}
                      activeTab={activeTab}
                      totalRecords={articleTotleDatas?.numberOfRecordBasedOnFilter}
                    />
                    )}
                  <Tab.Pane eventKey="approved">
                    <ArticleListing
                      articleData={articleData}
                      activeTab={activeTab}
                      totalRecords={articleTotleDatas?.numberOfRecordBasedOnFilter}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="rejected">
                    <ArticleListing
                      articleData={articleData}
                      activeTab={activeTab}
                      totalRecords={articleTotleDatas?.numberOfRecordBasedOnFilter}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="published">
                    <ArticleListing
                      articleData={articleData}
                      activeTab={activeTab}
                      totalRecords={articleTotleDatas?.numberOfRecordBasedOnFilter}
                    />
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
                  <Nav>
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

                    <button
                    className={collapseActive ? "colapseBtn" : ""}
                    onClick={expandClick}
                  >
                    {collapseActive ? "Collapse" : "Expand"}
                    <i>
                      <img src={downarrow} />
                    </i>
                  </button>
                  </div>
                  

                

                  <Tab.Content className={
                  collapseActive ? "show" : "hide"
                }>
                    <Tab.Pane eventKey="newRequests">
                      <div className="contentListBox">
                        <div className="contentList">
                          <div className="contentListHead">
                            <div className="timeList">
                              <span>Created On: 12 May 2023</span>
                              <span>Last Edited: 24 May 2023</span>
                            </div>
                          </div>
                          <div className="contentListMidd">
                            <h2>1914 translation by H. Rackham</h2>
                            <span className="t-tag">Research Article</span>
                            <p>
                              Public schools have several programs in place to
                              mitigate the problem of food insecurity, including
                              free breakfast and reduced lunch. Over the course
                              of one school year to see how effective Call for
                              papers: It gives me immense pleasure to announce
                              that there. Over the course of one school year to
                              see how effective Call for papers: It gives me
                              immense pleasure to announce that there...
                            </p>
                          </div>
                          <div className="contentListFoot contentListTwo">
                            <div className="footTag">
                              <span className="t-tag">
                                Akashganga Journal of Social Science
                              </span>
                              <span className="t-tag">Anthropology</span>
                            </div>
                            <div className="footAction">
                              <a href="">Reject for Review</a>
                              <a href="" className="button button-primary">
                                Accept for Review
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="contentList">
                          <div className="contentListHead">
                            <div className="timeList">
                              <span>Created On: 12 May 2023</span>
                              <span>Last Edited: 24 May 2023</span>
                            </div>
                          </div>
                          <div className="contentListMidd">
                            <h2>1914 translation by H. Rackham</h2>
                            <span className="t-tag">Research Article</span>
                            <p>
                              Public schools have several programs in place to
                              mitigate the problem of food insecurity, including
                              free breakfast and reduced lunch. Over the course
                              of one school year to see how effective Call for
                              papers: It gives me immense pleasure to announce
                              that there. Over the course of one school year to
                              see how effective Call for papers: It gives me
                              immense pleasure to announce that there...
                            </p>
                          </div>
                          <div className="contentListFoot contentListTwo">
                            <div className="footTag">
                              <span className="t-tag">
                                Akashganga Journal of Social Science
                              </span>
                              <span className="t-tag">Anthropology</span>
                            </div>
                            <div className="footAction">
                              <a href="">Reject for Review</a>
                              <a href="" className="button button-primary">
                                Accept for Review
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btnWrap d-inline-block mb-3 mt-5 text-center">
                        <a href="" className="button-border">
                          View All Requests
                        </a>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="accepted">
                      <div className="tabContentWrap">Accepted</div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviewed">
                      <div className="tabContentWrap">Reviewed</div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="notAccepted">
                      <div className="tabContentWrap">Not Accepted</div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>

          <div className="recommendedMain">
            <div className="recomHead">
              <h3>Recommended Articles</h3>
              <button type="button" className="button-border">
                View All
              </button>
            </div>
            <div className="recommendedSlider">
              <div className="recommendedBox">
                <div className="recommendedHead">
                <span><b>Published On:</b> 12 May 2023</span>
                  <div className="recommendedShare">
                    <i>
                      <img src={share} />
                    </i>
                    <i>
                      <img src={tags} />
                    </i>
                  </div>
                </div>
                <div className="recommendedTitle">
                  <h2>Be Aware of Your Rights as an Author</h2>
                  <h3>Dr. Umesh Chandra Dumka</h3>
                  
                </div>
                <div className="recommendedContent">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    lore...
                  </p>
                  <span className="t-tag">
                    Akashganga Journal of Social Science
                  </span>
                  <span className="t-tag">Anthropology</span>
                </div>
              </div>
              <div className="recommendedBox">
                <div className="recommendedHead">
                <span><b>Published On:</b> 12 May 2023</span>
                  <div className="recommendedShare">
                    <i>
                      <img src={share} />
                    </i>
                    <i>
                      <img src={tags} />
                    </i>
                  </div>
                </div>
                <div className="recommendedTitle">
                  <h2>Be Aware of Your Rights as an Author</h2>
                  <h3>Dr. Umesh Chandra Dumka</h3>
                   
                </div>
                <div className="recommendedContent">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    lore...
                  </p>
                  <span className="t-tag">
                    Akashganga Journal of Social Science
                  </span>
                  <span className="t-tag">Anthropology</span>
                </div>
              </div>
              <div className="recommendedBox">
                <div className="recommendedHead">
                <span><b>Published On:</b> 12 May 2023</span>
                  <div className="recommendedShare">
                    <i>
                      <img src={share} />
                    </i>
                    <i>
                      <img src={tags} />
                    </i>
                  </div>
                </div>
                <div className="recommendedTitle">
                  <h2>Be Aware of Your Rights as an Author</h2>
                  <h3>Dr. Umesh Chandra Dumka</h3>
               
                </div>
                <div className="recommendedContent">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    lore...
                  </p>
                  <span className="t-tag">
                    Akashganga Journal of Social Science
                  </span>
                  <span className="t-tag">Anthropology</span>
                </div>
              </div>
              <div className="recommendedBox">
                <div className="recommendedHead">
                <span><b>Published On:</b> 12 May 2023</span>
                  <div className="recommendedShare">
                    <i>
                      <img src={share} />
                    </i>
                    <i>
                      <img src={tags} />
                    </i>
                  </div>
                </div>
                <div className="recommendedTitle">
                  <h2>Be Aware of Your Rights as an Author</h2>
                  <h3>Dr. Umesh Chandra Dumka</h3>
                  
                </div>
                <div className="recommendedContent">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    lore...
                  </p>
                  <span className="t-tag">
                    Akashganga Journal of Social Science
                  </span>
                  <span className="t-tag">Anthropology</span>
                </div>
              </div>
              <div className="recommendedBox">
                <div className="recommendedHead">
                <span><b>Published On:</b> 12 May 2023</span>
                  <div className="recommendedShare">
                    <i>
                      <img src={share} />
                    </i>
                    <i>
                      <img src={tags} />
                    </i>
                  </div>
                </div>
                <div className="recommendedTitle">
                  <h2>Be Aware of Your Rights as an Author</h2>
                  <h3>Dr. Umesh Chandra Dumka</h3>
                   
                </div>
                <div className="recommendedContent">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    lore...
                  </p>
                  <span className="t-tag">
                    Akashganga Journal of Social Science
                  </span>
                  <span className="t-tag">Anthropology</span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h5 style={{ color: "#167092", fontWeight: "bold" }}>Back</h5>
                <img src={arrowLeft} />
              </div>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </>
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-dialog-centered modal-lg authorModal"
        >
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
                    <span className="textGreen">
                      Vikramshila Grant for Authors
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="infotext">
                    <b>Available for</b>
                    <span className="textGreen">
                      Vikramshila Grant for Authors
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="infotext">
                    <b>URL of Grant available for </b>
                    <span className="textBlue">
                      Urban climate change management and society
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="infotext">
                    <b>Description</b>
                    <span className="textGray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis labore et dolore
                      magna aliqua labore et dolore magna...
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="infotext">
                    <b>Eligibility</b>
                    <ul className="listText">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </li>
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
                            <strong>Download</strong>
                          </div>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="pb-4">
            <button
              class="button button-primary"
              type="submit"
              onClick={handleClose}
            >
              CLOSE
            </button>
          </Modal.Footer>
        </Modal>
      </DashboardLayout>
    </>
  );
}
export default Dashboard;
