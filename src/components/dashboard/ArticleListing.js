import React, { useState } from "react";
import notyet from "../../assets/img/icons/notarticle.svg";
import edit from "../../assets/img/icons/edit.svg";
import rejection from "../../assets/img/icons/rejection.svg";
import Dropdown from "react-bootstrap/Dropdown";
import dots from "../../assets/img/icons/dots.svg";
import downloadBlue from "../../assets/img/icons/downloadBlue.svg";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router";
// import {
//   getProfileDetails,
//   getProfilePercentage,
// } from "../../store/apiCalls/profileDetails";

const ArticleListing = ({ articleData, activeTab, totalRecords }) => {
  const [show, setShow] = useState(false);
  const [showPublish, setShowPublish] = useState(false);
  const [showReceive, setShowReceive] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePublishClose = () => setShowPublish(false);
  const handlePUblishShow = () => setShowPublish(true);
  const handleReceiveClose = () => setShowReceive(false);
  const handleReceiveShow = () => setShowReceive(true);
  const MAX_WORDS = 50;

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
   else
     str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }
  
  return (
    <>
      <div className="contentListBox">
        {articleData && articleData.length > 0 ? (
          articleData?.map((article) => {
            const specialCharPattern = /[!@#$%^*(),.?;":{}|\u00a0]/g;
            const contentWithoutSpecialChars = article.abstract.replace(specialCharPattern, '');
            
             const truncateText = (text) => {
                  const words = text.split(' ');
                  if (words.length > MAX_WORDS) {
                    return words.slice(0, MAX_WORDS).join(' ') + '......Read More';
                  }
                  return text;
                };
                const truncatedText = truncateText(contentWithoutSpecialChars);
            return (
              <div className="contentList">
                {activeTab === "draft" && (
                  <div className="contentListHead">
                    <div className="timeList">
                      <span>
                        <strong>Created On:&nbsp;</strong>
                        {`${
                          article?.createdAt
                            ? new Date(
                                article?.createdAt
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "--"
                        } `}
                      </span>
                      <span>
                        <strong>Last Edited: &nbsp;</strong>
                        {`${
                          article?.updatedAt
                            ? new Date(
                                article?.updatedAt
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "--"
                        } `}
                      </span>
                    </div>
                    <span className="t-type mr-0">Second Revision</span>
                  </div>
                )}
                {activeTab === "submit" && (
                  <div className="contentListHead">
                    <div className="timeList">
                      <span>Submitted On: 12 May 2023</span>
                    </div>
                    <span className="t-type mr-0">Publishing Editor</span>
                  </div>
                )}
                {activeTab === "approved" && (
                  <div className="contentListHead">
                    <div className="timeList">
                      <span>Approved On: 12 May 2023</span>
                    </div>
                  </div>
                )}
                {activeTab === "rejected" && (
                  <div className="contentListHead">
                    <div className="timeList">
                      <span>Rejected On: 12 May 2023</span>
                    </div>
                  </div>
                )}
                {activeTab === "published" && (
                  <div className="contentListHead">
                    <div className="timeList">
                      <span>Published On: 12 May 2023</span>
                    </div>
                    <div className="customDrop moreCustom">
                      <Dropdown>
                        <Dropdown.Toggle variant="success">
                          <img src={dots} alt="#" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Revise Article
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-1">
                            Article Invoice <img src={downloadBlue} alt="#" />
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Article Contract
                            <img src={downloadBlue} alt="#" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                )}
                <div className="contentListMidd">
                  <h2>{article?.title}</h2>
                  {article?.typeOfArticle?.articleName && (
                    <span className="t-tag">
                    
                    {article?.typeOfArticle?.articleName}
                    </span>
                  )}
                  
                  <p dangerouslySetInnerHTML={{ __html: truncatedText }} ></p>
                </div>
                {activeTab === "approved" && (
                  <div className="contentListFoot contentListTwo">
                    <div className="footTag">
                      <span className="t-tag">
                        Akashganga Journal of Social Science
                      </span>
                      <span className="t-tag">Anthropology</span>
                    </div>
                    <div className="footAction">
                      <a
                        href="javascript:void(0);"
                        className="button-link"
                        onClick={handleShow}
                      >
                        Apply for Grant
                      </a>
                      <a href="javascript:void(0);" onClick={handlePUblishShow} className="button button-primary">
                        Publish Now
                      </a>
                    </div>
                  </div>
                )}
                {activeTab === "draft" && (
                  <div className="contentListFoot">
                    <div className="footTag">
                      <span className="t-tag">
                        Akashganga Journal of Social Science
                      </span>
                      <span className="t-tag">Anthropology</span>
                    </div>
                    <div className="footAction">
                      <Link to={`/dashboard/edit-article/${article?._id }`}><i className="ovelBg">
                          <img src={edit} />
                        </i>
                        <span>Edit</span></Link>
                      {/* <a href="">
                            <i className="ovelBg">
                              <img src={rejection} />
                            </i>
                            <span>Rejection</span>
                          </a>
                          <a href="">
                            <i>
                              <img src={sevahaat} />
                            </i>
                            <span>Seva Haat</span>
                          </a> */}
                    </div>
                  </div>
                )}
                {activeTab === "rejected" && (
                  <div className="contentListFoot">
                    <div className="footTag">
                      <span className="t-tag">
                        Akashganga Journal of Social Science
                      </span>
                      <span className="t-tag">Anthropology</span>
                    </div>
                    <div className="footAction">
                      <Link to={`/dashboard/edit-article/${article?._id }`} ><i className="ovelBg">
                          <img src={edit} />
                        </i>
                        <span>Edit</span></Link>
                      <a href="">
                        <i className="ovelBg">
                          <img src={rejection} />
                        </i>
                        <span>Rejection</span>
                      </a>
                      {/*<a href="">
                            <i>
                              <img src={sevahaat} />
                            </i>
                            <span>Seva Haat</span>
                          </a> */}
                    </div>
                  </div>
                )}
                {activeTab === "submit" && (
                  <div className="contentListFoot">
                    <div className="footTag">
                      <span className="t-tag">
                        Akashganga Journal of Social Science
                      </span>
                      <span className="t-tag">Anthropology</span>
                    </div>
                  </div>
                )}
                {activeTab === "published" && (
                  <div className="contentListFoot">
                    <div className="footTag">
                      <span className="t-tag">
                        Akashganga Journal of Social Science
                      </span>
                      <span className="t-tag">Anthropology</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
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
        )}
      </div>

      {activeTab === "draft" && totalRecords > 2 && (
      <div className="btnWrap mb-5 mt-4 text-center">
        <Link to={{ pathname: "/myArticle/draft" }} state={"draft"} className="button-border">View All Drafts</Link>
      </div>
      )}

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
            onClick={handleClose}
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
              <div className="col-md-6">
                <div className="infotext">
                  <b>Start Date</b>
                  <span className="textGreen">
                    12 May 2023
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="infotext">
                  <b>End Date</b>
                  <span className="textGreen">
                    25 Aug 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Description</b>
                  <span className="textGray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis labore et dolore magna
                    aliqua labore et dolore magna...
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
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
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
            APPLY FOR GRANT
          </button>
        </Modal.Footer>
      </Modal>
      
      <Modal
        show={showPublish}
        onHide={handlePublishClose}
        dialogClassName="modal-dialog-centered modal-lg authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Apply For Grant</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={handlePublishClose}
          />
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="grantDetails">
            <div className="row">
              <div className="col-md-6">
                <div className="infotext">
                  <b>Applicant Name</b>
                  <span className="textGreen">
                    RAM JEE KATIYAR
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="infotext">
                <b>Grant Name</b>
                  <span className="textGreen">
                    Vikramshila Grant for Authors
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Article </b>
                  <span className="textBlue">
                    Urban climate change management and society
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Proposal (word limit - 300 words)</b>
                  <span className="textGray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis labore et dolore magna
                    aliqua labore et dolore magna...
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Grant Value</b>
                  <ul className="knowList">
                    <li>
                      <p>
                        <i>Grant Received On</i>
                        <small>12 May 2023</small>
                      </p>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-6">
                <div className="infotext">
                  <b>Applicant Name</b>
                  <span className="textGreen">
                    INR 4600
                  </span>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="infotext">
                <b>Grant Name</b>
                  <span className="textGreen">
                    Vikramshila Grant for Authors
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <button
            class="button button-primary"
            type="submit"
            onClick={handlePublishClose}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showReceive}
        onHide={handleReceiveClose}
        dialogClassName="modal-dialog-centered modal-lg authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Grant Received</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={handleReceiveClose}
          />
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="grantDetails">
            <div className="row">
              <div className="col-md-6">
                <div className="infotext">
                  <b>Grant Name</b>
                  <span className="textGreen">
                    RAM JEE KATIYAR
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="infotext">
                <b>Available Name</b>
                  <span className="textGreen">
                    Vikramshila Grant for Authors
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Article </b>
                  <span className="textBlue">
                    Urban climate change management and society
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Discription</b>
                  <span className="textGray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis labore et dolore magna
                    aliqua labore et dolore magna...
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="infotext">
                  <b>Eligibility</b>
                  <span className="textGray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis labore et dolore magna
                    aliqua labore et dolore magna...
                  </span>
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
                        <p>
                          <i>Amount Received</i>
                          <small>INR 7000</small>
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
            onClick={handleReceiveClose}
          >
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleListing;
