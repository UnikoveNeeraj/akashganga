import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";
import Dropdown from "react-bootstrap/Dropdown";
import notyet from "../../../assets/img/icons/notarticle.svg";
import DashboardLayout from "../../../layout/dashboard";
import jwt_decode from "jwt-decode";
import edit from "../../../assets/img/icons/edit.svg";
import dots from "../../../assets/img/icons/dots.svg";
import downloadBlue from "../../../assets/img/icons/downloadBlue.svg";
import rejection from "../../../assets/img/icons/rejection.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAricleDetails } from "../../../store/apiCalls/dashboard";
import {
  draftArticle,
  underReviewArticle,
  approvedArticle,
  rejectedArticle,
  publishedArticle,
} from "../../../constants";
import backArrow from "../../../assets/img/icons/blueArrow.svg";
import successImg from "../../../assets/img/icons/sus.svg";
import Modal from "react-bootstrap/Modal";

const MyArticle = () => {
  const location = useLocation();
  let status = location?.state;
  const navigate = useNavigate();
  const limit = 6;
  const [publishArticle, setpublishArticle] = useState(false);
  const [availableGrants, setavailableGrants] = useState(false);
  const [applyGrant, setapplyGrant] = useState(false);
  const [paymentSuccessful, setpaymentSuccessful] = useState(false);
  const [publishedSuccessfully, setpublishedSuccessfully] = useState(true);
  const [page, setPage] = useState(1);
  const { id } = jwt_decode(localStorage.usertoken);
  const headers = { Authorization: `Bearer ${localStorage?.usertoken}` };
  const [articleData, setArtcileData] = useState([]);
  const [articleTotalData, setArtcileTotalData] = useState([]);
  let totalPages = Math.ceil(articleTotalData.numberOfRecordBasedOnFilter / 6);
  const MAX_WORDS = 30;

  const fetchArticleData = () => {
    const fetchdata = async () => {
      const params = {
        userId: id,
        status: status,
        page: page,
        limit: limit,
      };
      return getAricleDetails(headers, params);
    };

    fetchdata()
      .then((userData) => {
        if (userData.status === 200 && userData?.data?.data) {
          setArtcileData(userData.data.data.article);
          setArtcileTotalData(userData?.data?.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleRedirect = (e, path = "/dashboard") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }

  useEffect(() => {
    fetchArticleData();
  }, [page, status]);

  return (
    <DashboardLayout>
      <p className="draftTitle">
        {status === "draft"
          ? "Drafts"
          : status === "submit"
          ? "Under Review"
          : status === "approved"
          ? "Approved"
          : status === "rejected"
          ? "Rejected"
          : "Published"}
      </p>
      <div className="draftTable">
        <table className="w-100">
          {articleData && articleData.length > 0 && (
            <thead>
              {/* <th className="text-right">ACTIONS</th> */}
              <tr>
                {status === "draft"
                  ? draftArticle.map((draftHeader) => <th>{draftHeader}</th>)
                  : status === "submit"
                  ? underReviewArticle.map((underHeader) => (
                      <th>{underHeader}</th>
                    ))
                  : status === "approved"
                  ? approvedArticle.map((approvedHeader) => (
                      <th>{approvedHeader}</th>
                    ))
                  : status === "rejected"
                  ? rejectedArticle.map((rejectedHeader) => (
                      <th>{rejectedHeader}</th>
                    ))
                  : publishedArticle.map((publishedHeader) => (
                      <th>{publishedHeader}</th>
                    ))}
              </tr>
            </thead>
          )}
          <tbody>
            {articleData &&
              articleData.length > 0 &&
              articleData?.map((article) => {
                const specialCharPattern = /[!@#$%^*(),.?;":{}|\u00a0]/g;
                const contentWithoutSpecialChars = article.abstract.replace(
                  specialCharPattern,
                  ""
                );
                const truncateText = (text) => {
                  const words = text.split(" ");
                  if (words.length > MAX_WORDS) {
                    return words.slice(0, MAX_WORDS).join(" ") + "...Read More";
                  }
                  return text;
                };
                const truncatedText = truncateText(contentWithoutSpecialChars);
                return (
                  <>
                    <tr className="empty">
                      <td colspan="5"></td>
                    </tr>
                    <tr key={article._id}>
                      <td>
                        <div className="draftArticleWrap">
                          <h2>{article?.title}</h2>
                          <p>
                            {/* {article?.abstract ? article.abstract : "No Data"} */}
                            <p
                              dangerouslySetInnerHTML={{
                                __html: truncatedText,
                              }}
                            ></p>
                            {/* {truncatedText ? truncatedText : "No Data"} */}
                          </p>
                          <div className="footTag">
                            {article?.typeOfArticle?.articleName && (
                              <span className="t-tag">
                                {article?.typeOfArticle?.articleName}
                              </span>
                            )}

                            <span className="t-tag">
                              Akashganga Journal of Social Science
                            </span>
                            <span className="t-tag">Anthropology</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        {article?.typeOfArticle
                          ? article?.typeOfArticle?.articleName
                          : "--"}
                      </td>
                      <td>{`${
                        article?.createdAt
                          ? new Date(article?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "--"
                      } `}</td>
                      {status === "draft" && (
                        <td>
                          {" "}
                          {`${
                            article?.updatedAt
                              ? new Date(article?.updatedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )
                              : "--"
                          } `}
                        </td>
                      )}

                      {(status === "draft" || status === "submit") && (
                        <td>
                          <span className="t-tag">For Revision</span>
                          {/* {`${
                          article?.typeOfArticle?.updated_at
                            ? new Date(
                                article?.typeOfArticle?.updated_at
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "--"
                        } `} */}
                        </td>
                      )}

                      {(status === "draft" || status === "rejected") && (
                        <td>
                          <div className="footAction">
                            <a href={`/dashboard/edit-article/${article?._id}`}>
                              <i className="ovelBg">
                                <img src={edit} />
                              </i>
                              <span>Edit</span>
                            </a>
                            <Link to="#">
                              <i className="ovelBg">
                                <img src={rejection} />
                              </i>
                              <span>Report</span>
                            </Link>
                          </div>
                        </td>
                      )}

                      {status === "approved" && (
                        <td>
                          <div className="footAction">
                            <Link href="#" className="button-link">
                              Apply for Grant
                            </Link>
                            <Link href="#" className="button-link">
                              View Report
                            </Link>
                            <Link href="#" className="button button-primary">
                              Publish Now
                            </Link>
                          </div>
                        </td>
                      )}

                      {status === "published" && (
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
                                Article Invoice{" "}
                                <img src={downloadBlue} alt="#" />
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Article Contract
                                <img src={downloadBlue} alt="#" />
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )}
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      {articleData.length === 0 && (
        <div className="tabContentWrap">
          <div className="notArticle">
            <figure>
              <img src={notyet} />
            </figure>
            <h2>No articles yet!</h2>
            <p className="d-inline-block w-100">
              You have not written any articles.
            </p>
            <p className="d-inline-block w-100">
              Articles that you save as drafts will show here
            </p>
          </div>
        </div>
      )}

      <div className="backFooterBox">
        <div className="backBtnWrap">
          <a onClick={(e) => handleRedirect(e, "/dashboard")}>
            <span>Back</span>
            <img src={backArrow} />
          </a>
        </div>
        {totalPages > 1 && (
          <div className="paginationWrap">
            <Pagination
              boundaryRange={1}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              activePage={page}
              defaultActivePage={page}
              prevItem={{ content: <b class="icon-arrow-left" /> }}
              nextItem={{ content: <b class="icon-arrow-right" /> }}
              onPageChange={(event, data) => setPage(data.activePage)}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
      <Modal
        show={publishArticle}
        size="sm"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Publish Article</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setpublishArticle(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="grantDetails submitArticle pl-2 pr-2">
            <div className="row">
              <div className="col-md-12">
                <p className="mb-2">Are you ready to Step into Greatness?</p>
                <p>
                  Please pay a publishing fee of INR 6000 (will depend on
                  Anonymous or Post Open Peer Review) to see the published
                  version of your article.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4 mt-3">
          <button
            className="button button-primary"
            onClick={() => confirmToSubmitArticle()}
            type="button"
          >
            CONTINUE TO PAYMENT
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={availableGrants}
        size="sm"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="right authorModal"
      >
        <Modal.Header className="customHeader">
          <h5 className="modal-title">
            {" "}
            <span class="backTop">Back</span>Available Grants
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setavailableGrants(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="draftTable">
            <table className="w-100">
              <thead>
                <tr>
                  <th className="text-left">Grant Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="empty">
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>Vikramshila Excellence Grants for Authors</td>
                  <td>
                    <a href="javascript:void(0)" className="readMore">
                      {" "}
                      Grant Details
                    </a>
                  </td>
                </tr>
                <tr className="empty">
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>Vikramshila Excellence Grants for Authors</td>
                  <td>
                    <a href="javascript:void(0)" className="readMore">
                      {" "}
                      Grant Details
                    </a>
                  </td>
                </tr>
                <tr className="empty">
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>Vikramshila Excellence Grants for Authors</td>
                  <td>
                    <a href="javascript:void(0)" className="readMore">
                      {" "}
                      Grant Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={applyGrant}
        dialogClassName="modal-dialog-centered modal-lg authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title">Apply For Grant</h5>
          <button
            type="button"
            className="btn-close"
            ariaLabel="Close"
            onClick={(e) => setapplyGrant(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="grantDetails">
            <div className="row">
              <div className="col-md-6">
                <div className="infotext">
                  <b>Applicant Name</b>
                  <span className="textGreen">RAM JEE KATIYAR</span>
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
                  <span className="textGreen">
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
                <label className="customCheck">
                  <input type="checkbox" checked />
                  <i></i>
                  <b>Funding received</b>
                </label>
              </div>
            </div>
            <div className="grantFootB">
              <div className="row">
                <div className="col-md-6">
                  <div className="infotext">
                    <b>Grant Name</b>
                    <span className="textGreen">
                      Vikramshila Grant for Authors
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="infotext">
                    <b>Grant Value</b>
                    <span className="textGreen">INR 4600</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="infotext">
                    <b className="pb-2">&nbsp;</b>
                    per Individual
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <button
            class="button button-primary"
            type="submit"
            onClick={(e) => setapplyGrant(false)}
          >
            SUBMIT
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={paymentSuccessful}
        size="sm"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <img src={successImg} />
          <h5 className="modal-title">Payment Successful</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setpaymentSuccessful(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="grantDetails submitArticle pl-2 pr-2">
            <div className="row">
              <div className="col-md-12">
                <p className="mb-2">Thank you. Your payment is successful.</p>
                <p>A copy of your payment invoice has been emailed to you.</p>
              </div>
              <div className="col-md-12 mt-4">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-left">Payment Type</td>
                      <td className="text-right">UPI</td>
                    </tr>
                    <tr>
                      <td className="text-left">UPI ID</td>
                      <td className="text-right">johndoe22@okicici</td>
                    </tr>
                    <tr>
                      <td className="text-left">Transaction ID</td>
                      <td className="text-right">826475844855</td>
                    </tr>
                    <tr>
                      <td className="text-left">Amount Paid</td>
                      <td className="text-right">INR 1039.32</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4 mt-3">
          <button
            className="button button-primary"
            onClick={() => setpaymentSuccessful()}
            type="button"
          >
            DONE
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={publishedSuccessfully}
        size="sm"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <img src={successImg} />
          <h5 className="modal-title pl-2 pr-2">
            Article published successfully
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setpublishedSuccessfully(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="grantDetails submitArticle pl-2 pr-2">
            <div className="row">
              <div className="col-md-12">
                <p className="mb-2">Here’s a standing ovation for you!</p>
                <p>
                  You just published your open access article and contributed to
                  making the scholarly research results more visible.
                </p>
                <p className="mt-2">Access your article below:</p>
                <div className="infotext publisedUrl">
                  <span className="textBlue">
                    Urban climate change management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4 mt-3">
          <button
            className="button button-primary"
            onClick={() => setpublishedSuccessfully()}
            type="button"
          >
            DONE
          </button>
        </Modal.Footer>
      </Modal>
    </DashboardLayout>
  );
};

export default MyArticle;
