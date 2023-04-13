import Button from "../../../components/common/Button";
import "../../../../src/components/common/index.scss";
import jwt_decode from "jwt-decode";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import feedbackTitle from "../../../assets/img/bg/feeback_title.png";
import feedback01 from "../../../assets/img/icons/feedback_01.png";
import feedback02 from "../../../assets/img/icons/feedback_02.png";
import feedback03 from "../../../assets/img/icons/feedback_03.png";
import feedback04 from "../../../assets/img/icons/feedback_04.png";
import feedback05 from "../../../assets/img/icons/feedback_05.png";
import feedbackBar from "../../../assets/img/bg/feedback_bar.png";
import feedbackMudraKosh from "../../../assets/img/icons/mudrakosh.png";
import bgBorder from "../../../assets/img/bg/border.svg";
import kalashIcon from "../../../assets/img/icons/kalash.png";
import email48 from "../../../assets/img/icons/icons-gmail.png";

import whatsapp48 from "../../../assets/img/icons/whatsapp-48.png";
import twitter48 from "../../../assets/img/icons/twitter-48.png";
import successCheck from "../../../svg/successCheck.svg";
import Modal from "react-bootstrap/Modal";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { UpdateProfile } from "../personalDetails/queries";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../config";
import { Link } from "react-router-dom";
import { feedbackTextValues } from "../../../constants";
import { submitFeedback } from "../../../store/apiCalls/profileDetails";
import iIcon from "../../../../src/svg/iIcon.svg";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const initialState = {
  showFeedbackModal: false,
  skipModal: false,
  congratsModal: false,
  referModal: false,
  congratsPreview: false,
};
const FeedbackFlow = ({
  handleModalClose = () => {},
  modalStat = {},
  code = "",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = localStorage.usertoken ? jwt_decode(localStorage.usertoken) : "";
  const [feedbackScore, setFeedbackScore] = useState(null);
  const [feedbackValue, setFeedback] = useState("");
  const headers = { Authorization: `Bearer ${localStorage.usertoken || ""}` };

  const handleRedirectDashboard = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const publishSuccessHandler = (_success) => {
    if (_success?.data?.success) {
      handleModalClose({ ...initialState, congratsPreview: true }, false);
    } else {
      toast.error(_success?.data?.error);
      handleModalClose(initialState);
    }
    dispatch({
      type: "SET_LOADER",
      payload: false,
    });
  };

  const { mutate: PublishProfile } = UpdateProfile(publishSuccessHandler);

  const handlePublishProfile = () => {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const queryParams = {
      params: { id: id },
      data: { publishProfile: true, isSetupProfile: true },
      headers: { ...headers, "Content-Type": "application/json" },
    };

    PublishProfile(queryParams);
  };

  const handleChange = (e) => {
    setFeedbackScore(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const queryParams = {
      params: { id: id },
      data: {
        userId: id,
        rating: parseInt(feedbackScore),
        feedbackText: feedbackValue,
      },
      headers,
    };

    const resPayload = await submitFeedback(queryParams);
    if (resPayload.data.success) {
      handleModalClose(
        { ...modalStat, showFeedbackModal: false, congratsModal: true },
        true
      );
    } else {
      toast.error(resPayload.data.error);
    }
  };

  const handleCongratsModalClose = (publish = false) => {
    if (publish) {
      handlePublishProfile();
    } else {
      handleModalClose({ ...initialState, referModal: !publish });
    }
  };

  const handleReferModalClose = (publish = false) => {
    if (publish) {
      handlePublishProfile();
    } else {
      handleModalClose(initialState);
    }
  };

  const handleSkipModalClose = (publish = false) => {
    if (publish) {
      handlePublishProfile();
    } else {
      handleModalClose({ ...initialState, showFeedbackModal: !publish });
    }
  };

  const handleCodeCopy = (e) => {
    window.navigator.clipboard.writeText(code);
    e.target.textContent = "Copied";
    e.target.style.setProperty("color", "#404040");
    
  };

  const handleClose = () => {
    handleModalClose(initialState);
  };

  const handleSkipModalOpen = (e) => {
    e.preventDefault();
    handleModalClose({
      ...modalStat,
      showFeedbackModal: false,
      skipModal: true,
    });
  };

  const handleRedirect = (e) => {
    window.scroll({ top: 0, behavior: "smooth" });
    e.preventDefault();
    localStorage.clear();
    dispatch({ type: "LOGOUT_STATUS_SUCCESS" });
    // window.navigation.navigate('/')
  };

  const shareUrl = SERVER_URL;
  // const title = 
    // "Your friend has sent you a referral code. Use the referral code to Register on Vikramshila and earn 250 Mudras (INR) as welcome bonus. You can use the Mudras to publish your research paper with us. Please use the code: " +
    // code;

  const title = 
  `I have just signed up as a researcher with Vikramshila Education. It is an Indian Open Access Platform for Research Publishing. I really liked their mission to create multiple digital platforms to help disseminate research, primarily from the developing world. I would like you to be a part of this movement. 
  
  Use the referral code ${code} to register on the "https://vikramshilaedu.in/" and be a part of the largest database of research professionals. You will earn 250 mudras as welcome bonus (INR 250), which you can use to publish your own research paper. 
  
  "https://vikramshilaedu.in/registration"`

  return (
    <>
      <Modal
        show={modalStat.showFeedbackModal}
        className="modal feedback-modal"
        id="feedbackModal"
        tabIndex={-1}
        centered
      >
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <div className="">
              <div className="modal-header pb-0">
                <span className="smallSubText pt-3 sr-color">
                  Before you publish your profile
                </span>
                <h5 className="modal-title pr-color">
                  WE WANT TO KNOW HOW WE DID
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => handleClose()}
                  // aria-label="Close"
                />
              </div>
              <div className="modal-body pt-0 pb-0">
                <div className="px-2 feedbackContent">
                  <p>Feedback will help us improve your experience</p>
                  <div className="feedbackSmiley mt-4 mb-3">
                    <div className="feedbackTitle">
                      <img src={feedbackTitle} alt="#" />
                    </div>
                    <ul>
                      <li>
                        <label className="smileyWrap">
                          <input
                            value={1}
                            type="radio"
                            name="rating"
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <img src={feedback01} alt="#" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="smileyWrap">
                          <input
                            value={2}
                            type="radio"
                            name="rating"
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <img src={feedback02} alt="#" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="smileyWrap">
                          <input
                            value={3}
                            type="radio"
                            name="rating"
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <img src={feedback03} alt="#" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="smileyWrap">
                          <input
                            value={4}
                            type="radio"
                            name="rating"
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <img src={feedback04} alt="#" />
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="smileyWrap">
                          <input
                            value={5}
                            type="radio"
                            name="rating"
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <img src={feedback05} alt="#" />
                          </span>
                        </label>
                      </li>
                    </ul>
                    <div className="feedbackBar">
                      <img src={feedbackBar} alt="#" />
                    </div>
                  </div>
                  <div>
                    <label className="labelForm sr-color px-2">
                    <div dangerouslySetInnerHTML={{__html: feedbackTextValues[feedbackScore]}} />
                    </label>
                    <div className="mx-2 px-1">
                      {feedbackScore && (
                        <textarea
                          onChange={(e) => setFeedback(e.target.value)}
                          className="fieldForm popup-textarea"
                          name="suggestion"
                          placeholder="We are listening intently..."
                          required
                        ></textarea>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  className="button button-primary w-50"
                  type="submit"
                  disabled={!(feedbackScore && feedbackValue)}
                >
                  Submit
                </button>
                <div className="feedbackReward pt-0">
                  <p>
                    Share your feedback and get <b>500 Mudras!</b>
                  </p>
                </div>
                <a
                  className="btn-skip pe-2"
                  href="#"
                  onClick={(e) => handleSkipModalOpen(e)}
                >
                  Skip
                </a>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      {modalStat.skipModal && (
        <Modal
          show={modalStat.skipModal}
          id="skipModal"
          tabIndex={-1}
          dialogClassName="modal-dialog-centered"
        >
          <Modal.Header>
            <h5 className="modal-title pr-color">
              If you skip now, you will miss the chance to earn 500 Mudras
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={(e) => handleClose()}
              aria-label="Close"
            />
          </Modal.Header>
          <Modal.Body className="pt-0 pb-2">
            <div className="px-2 text-center">
              <p className="f-14">
                You can use Mudras to get discounts on the website
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a href=""
              className="linkBtn"
              onClick={(e) => {e.preventDefault(); handleSkipModalClose(true)}}
            >
              Publish My Profile
            </a>
            <button
              type="button"
              className="button button-primary ms-2"
              onClick={(e) => handleSkipModalClose(false)}
            >
              I want 500 Mudras
            </button>
          </Modal.Footer>
        </Modal>
      )}

      {modalStat.congratsModal && (
        <>
          <Modal
            show={modalStat.congratsModal}
            id="congratsModal"
            tabIndex={-1}
            dialogClassName="congrats-modal-dialog"
          >
            <Confetti width={"450px"} height={"300px"} numberOfPieces={100} />
            <div>
              <div className="">
                <div className="modal-header">
                  <h5 className="modal-title bigText pr-color">
                    CONGRATULATIONS
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={(e) => handleClose()}
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body pt-0 pb-0">
                  <div className="px-2 text-center">
                    <div className="mudrakoshBox">
                      <p>500 Mudras DEPOSITED</p>
                      <span>
                        <img src={feedbackMudraKosh} alt="#" />
                      </span>
                    </div>
                    <div className="divideWrap">
                      <img src={bgBorder} alt="#" />
                    </div>
                    <p className="typo-wrap">
                      Would You like to earn 250 mudras more?{" "}
                    </p>
                  </div>
                </div>
                <div className="modal-footer pt-2">
                  <a href="javascript:void(0);"
                    className="linkBtn"
                    onClick={(e) => handleCongratsModalClose(false)}
                  >
                    Refer and Earn
                  </a>
                  <button
                    className="custom_button ms-2"
                    onClick={(e) => handleCongratsModalClose(true)}
                  >
                    No, Publish my Profile
                  </button>
                  <div className="rewardNote">
                    <small>
                      <img src={iIcon} alt="iIcon" />
                      You will be able to check your reward in the “Mudrakosh”
                      section
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}

      {modalStat.referModal && (
        <Modal show={modalStat.referModal} id="referModal" tabIndex={-1}>
          <div>
            <div className="modal-content border-0 referContent">
              <div className="modal-header pb-0">
                <h5 className="modal-title bigText">Refer and Earn</h5>
                <p className="bigSubText">Invite 5 friends to register</p>
                <div className="mudraCount">
                  <div>
                    <span>
                      <b>Earn</b>
                      <br />
                      250 Mudras
                    </span>
                    <b>
                      <img src={kalashIcon} alt="#" />
                    </b>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close text-white"
                  onClick={(e) => handleClose()}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body pt-0 pb-0">
                <div className="px-2 text-center shareModal">
                  <div className="referStep">
                    <ul>
                      <li>
                        <span>
                          <b className="icon-persons" />
                        </span>
                        Invite 5 friends to register
                      </li>
                      <li>
                        <span>
                          <b className="icon-register" />
                        </span>
                        Your friends register
                      </li>
                      <li>
                        <span>
                          <b className="icon-wallet" />
                        </span>
                        You receive 250 Mudras{" "}
                      </li>
                    </ul>
                  </div>
                  <p className="refer-earn">Your friends also receive 250 Mudras each as joining bonus after registration</p>
                  <div className="socialShare">
                    <small>Invite via</small>
                    <ul>
                      <li>
                        <EmailShareButton
                          separator=" "
                          subject="Your friend has invited you to join Mission Vikramshila"
                          body={title}
                          url=" "
                          shareUrl={title}
                        >
                          <img src={email48} alt="#" />
                        </EmailShareButton>
                      </li>

                      <li>
                        <WhatsappShareButton
                          url={shareUrl}
                          title={title}
                          separator=" "
                          className="Demo__some-network__share-button"
                        >
                          <img src={whatsapp48} alt="#" />
                        </WhatsappShareButton>
                      </li>
                      <li>
                        <TwitterShareButton
                          url={shareUrl}
                          title={title}
                          separator=" "
                          className="Demo__some-network__share-button"
                        >
                          <img src={twitter48} alt="#" />
                        </TwitterShareButton>
                      </li>
                    </ul>
                  </div>
                  <div className="divideLine">
                    <b>or</b>
                  </div>
                  <div className="codeBelow ">
                    <small>Refer using your unique code</small>
                    <div className="codeWrap">
                      <p id="#code" className="pr-color flex-fill">
                        {code}
                      </p>
                      <p
                        onClick={(e) => handleCodeCopy(e)}
                        className="sr-color"
                      >
                        <b id="code" className="icon-copy sr-color" />
                        &nbsp;&nbsp;Copy Code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <a
                  onClick={(e) => handleReferModalClose(false)}
                  className="linkBtn mr-5"
                >
                  I’ll do it later
                </a>
                <button
                  onClick={(e) => handleReferModalClose(true)}
                  className="button button-primary ms-2"
                >
                  Publish Profile
                </button>
                <div className="rewardNote">
                  <small style={{ display: "flex" }}>
                    <img
                      src={iIcon}
                      style={{
                        height: "29px",
                        width: "27px",
                        marginTop: "4px",
                      }}
                      alt="iIcon"
                    />
                    <p>
                      Receiving 250 Mudras is conditional to 5 friends
                      registering with us
                      <br />
                      You will be able to check your reward in the “Mudrakosh”
                      section
                    </p>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {modalStat.congratsPreview && (
        <>
          <Modal
            dialogClassName="modal-dialog-centered"
            show={modalStat.congratsPreview}
            className="founder-message success-modal"
            id="successMsg"
            tabIndex={-1}
            keyboard={false}
            backdrop="static"
          >
            <Confetti width={"400px"} height={"300px"} numberOfPieces={100} />
            <Modal.Header
              className="justify-content-center pb-1 px-0 pt-0"
            >
              <div className="header-before">
                <img src={successCheck} alt="success" />
              </div>
              <Modal.Title className="mt-5">
                <div className="mb-3 pt-4">YOU ARE AWESOME!</div>
              </Modal.Title>
            </Modal.Header>
            <div
              className="text-center label-info color-black"
              dangerouslySetInnerHTML={{
                __html:
                  "You have registered and joined the mission successfully.",
              }}
            />
            <Modal.Footer className="justify-content-center pt-3 d-grid">
              <Button
                handleClick={(e) => handleRedirectDashboard(e, "/dashboard")}
                title="Start Your Publishing Journey Now"
                type="button"
              />
              <div className="text-center">
                <Link
                  to="/"
                  onClick={(e) => handleRedirect(e)}
                  className="link text-decoration-none f-700"
                >
                  Home
                </Link>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default FeedbackFlow;
