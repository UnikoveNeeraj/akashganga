import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import Sidebar from "../../../components/common/Sidebar";
import Footer from "../../../layout/footer";
import Details from "./Details";
import EditProfile from "./Edit";
import PhoneUpdate from "./PhoneUpdate";
/* eslint-disable */
import PasswordUpdate from "./PasswordUpdate";
import jwt_decode from "jwt-decode";
import {
  getProfileDetails,
  updateProfileDetails,
  UploadMedia,
} from "../../../store/apiCalls/profileDetails";
import { editProfileData } from "../../../utils";
import camera from "../../../svg/camera.svg";
import upload from "../../../svg/upload-active.svg";
import doneSvg from "../../../assets/img/icons/done02.svg";
import "../../../assets/scss/base_app.scss";
import "../../../assets/scss/modules/_header_app.scss";
import "../../../assets/scss/modules/_menu_app.scss";
import "../../../assets/scss/sections/_profile_app.scss";
 
import backArrow from "../../../assets/img/icons/blueArrow.svg";
import cameraIcon from "../../../svg/cameraIcon.svg";
import ProfileModel from "../../../components/Modal/ProfileModel";
import { Link, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const initialModalStat = { phone: false, password: false };
function MyProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = jwt_decode(localStorage.usertoken);
  const headers = { Authorization: `Bearer ${localStorage?.usertoken}` };
  const [profileDetails, setProfileDetails] = useState({});
  const [profileEdit, setProfileEdit] = useState(false);
  const [modalStat, setModalStat] = useState(initialModalStat);
  const [showProfileModal, setShowProfileModal] = useState(false)
  const masterData = useSelector((state) => state.MasterDataReducer.MasterData);
  const [editDetails, setEditDetails] = useState({});
  const [editedProfile, setEditedProfile] = useState({});
  const [openImageUpload, setOpenImageUpload] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [webcamImage, setWebcamImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [openWebcam, setOpenWebcam] = useState(false);
  const [formError, setFormError] = useState({});
  const { userLoginDetails } = useSelector((state) => state?.LoginReducer);

  useEffect(() => {
    if (profileDetails.email) {
      setEditDetails(editProfileData(profileDetails));
    }
  }, [profileDetails]);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = () => {
    const fetchdata = async () => {
      const params = { id: id };
      return getProfileDetails(headers, params);
    };

    fetchdata()
      .then((userData) => {
        if (userData.status === 200 && userData?.data?.data) {
          setProfileDetails(userData.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
    navigate(path);
  }

  const getSubject = (id = "") => {
    const subject = masterData?.subjectdata?.find((a) => a._id === id);
    return subject ? subject.subjectName : "";
  };

  const handleModalOpen = (type = "phone", open = false) => {
    setModalStat({ ...initialModalStat, [type]: open });
    if (type === "phone" && !open) {
      fetchProfileData();
    }
  };

  const handleEdit = async (e, cancel = false) => {
    e.preventDefault();
    if (cancel) {
      setProfileEdit(false);
      return;
    }
    setProfileEdit(!profileEdit);
    const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
    const queryParams = {
      params: { id },
      data: editProfileData(editedProfile),
      headers,
    };
    const updateResp = await updateProfileDetails(queryParams);
    if (updateResp?.status === 200) {
      setShowProfileModal(true);
    }
    setEditDetails(updateResp);
    fetchProfileData();
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  const hiddenFileInput = useRef();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setUploadedImage("");
    setWebcamImage(pictureSrc);
  }, []);

  const handleWebcam = () => {
    setWebcamImage("");
    setUploadedImage("");
    setOpenWebcam(!openWebcam);
  };

  const handleImageModalClose = () => {
    setOpenWebcam(false);
    setUploadedImage("");
    setWebcamImage("");
    setFormError({ profile: "" });
    setOpenImageUpload(false);
  };

  const handleImageSubmit = async () => {
    if (imageFile !== profileDetails?.profilePicture) {
      const formData = new FormData();
      if (
        webcamImage &&
        webcamImage?.match("data:image") &&
        webcamImage.match("data:image").length > 0
      ) {
        formData.append("baseFile", webcamImage);
      } else {
        formData.append("file", imageFile);
      }
      dispatch({ type: "SET_LOADER", payload: true });
      setUploadedImage(null);
      setImageFile(null);
      setWebcamImage(null);
      setOpenWebcam(false);
      setOpenImageUpload(false);
      setProfileDetails({
        profilePicture: null,
      });
      const imgResp = await UploadMedia(formData);
      if (imgResp.status === 200 && imgResp.data.url) {
        setProfileDetails({
          ...profileDetails,
          profilePicture: imgResp?.data?.url,
        });
        // setValidationError({
        //   ...validationError,
        //   profile: false
        // })
      }
      dispatch({ type: "SET_LOADER", payload: false });
    }
  };

  const handleUploadImage = (event) => {
    setWebcamImage("");
    setOpenWebcam(false);
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    if (file.type?.split("/")[0] === "image" && file.size < 50000000) {
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setImageFile(file);
        setFormError({ profile: "" });
      };
    } else {
      setFormError({
        ...formError,
        profile: "Image size should be less than 50kb.",
      });
    }
  };

  function onRetake() {
    setWebcamImage("");
  }

  const render = () => {
    if (webcamImage) {
      return (
        <span className="flex-fill text-center">
          <img
            src={webcamImage}
            alt="invalid img"
            className="user-img"
            onClick={() => handleWebcam()}
          />
        </span>
      );
    }
    return (
      <Webcam
        onClick={() => capture()}
        audio={false}
        ref={webcamRef}
        width="50%"
        screenshotFormat="image/jpeg"
      />
    );
  };

  const renderImage = () => {
    if (uploadedImage) {
      return "";
    }
    return (
      <span
        className="flex-fill"
        onClick={() => {
          setWebcamImage("");
          setOpenWebcam(true);
        }}
      >
        <Link to="#" className="link">
          <img src={camera} className="me-2" alt="camera" />
          Take Picture
        </Link>
      </span>
    );
  };

  return (
    <div className="centerSection">
      <PhoneUpdate
        headers={headers}
        id={id}
        modalStat={modalStat}
        handleModalOpen={handleModalOpen}
      />
      <PasswordUpdate
        headers={headers}
        id={id}
        show={modalStat.password}
        handleClose={handleModalOpen}
      />

      <div className="previewContent pageWrap">
        <div className="pageLeft">
          <Sidebar />
        </div>
        <div className="pageRight text-initial">
          <div className="previewProfile">
            <div className="previewProfile-img">
              {" "}
              {!profileEdit ? (
                <img src={profileDetails.profilePicture} alt="#" />
              ) : (
                <span
                  onClick={() => setOpenImageUpload(true)}
                  className="link cursor-pointer me-2"
                >
                  <img src={profileDetails?.profilePicture} alt="#" />
                  <div className="profile-camera">
                    <img src={cameraIcon} alt="alt" />

                  </div>
                </span>
              )}
            </div>
            <div className="previewProfile-info">
              <small>Publishing Editor</small>
              <div>
                <p>
                  <b className="icon-email" />
                  {profileDetails.email}
                </p>
                {profileDetails?.nationality === "outSideIndia" ? null : (
                  <p>
                    <b className="icon-call" />
                    +91-{profileDetails.phoneNumber}{" "}
                    <a
                      className="updateLink"
                      onClick={(e) => {
                        e.preventDefault();
                        handleModalOpen("phone", true);
                      }}
                    >
                      Update
                    </a>
                  </p>
                )}
              </div>
            </div>
            {profileEdit ? (
              <div className="previewProfile-btn">
                <button
                  onClick={(e) => handleEdit(e, true)}
                  className="button-link-gray"
                  type="button"
                >
                  Cancel
                </button>
                <a
                  onClick={(e) => handleEdit(e, false)}
                  className="button button-primary ms-2"
                >
                  Save
                </a>
              </div>
            ) : (
              <div className="previewProfile-btn">
                <button
                  className="button"
                  type="button"
                  onClick={(e) => handleModalOpen("password", true)}
                >
                  Change Password
                </button>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setProfileEdit(!profileEdit);
                  }}
                  className="button button-primary ms-2"
                  href="ag_my_personal_detail_edit.html"
                >
                  <b className="icon-pencil" />
                  Edit Details
                </a>
              </div>
            )}
          </div>
          {profileEdit ? (
            <EditProfile
              nationality={profileDetails?.nationality}
              masterData={masterData}
              profileDetails={editDetails}
              getSubject={getSubject}
              onProfileEdit={(edited, secondaryEmail) => {
                setEditedProfile({
                  ...edited,
                  profilePicture: editDetails?.profilePicture,
                  secondaryEmail: secondaryEmail
                });
              }}
            />
          ) : (
            <Details
              nationality={profileDetails?.nationality}
              masterData={masterData}
              profileDetails={profileDetails}
              getSubject={getSubject}
            />
          )}
          <div className="backBtnWrap">
            <a onClick={(e) => handleRedirect(e,'/dashboard')}>
              <span>Back</span>
              <img src={backArrow} />
            </a>
          </div>
        </div>
      </div>
      <Footer />

      <ProfileModel
        show={openImageUpload}
        onSubmit={handleImageSubmit}
        onRetake={onRetake}
        informationText="Please choose from the options below"
        modalHeading="Upload Profile Picture"
        retakebuttonTitle={
          uploadedImage ? "Select a different image" : "Retake"
        }
        onImgCapture={capture}
        submitButtonTitle="Upload"
        disabled={false}
        handleClose={() => handleImageModalClose()}
        openWebcam={openWebcam}
        webcamImage={webcamImage ? true : false}
        uploadedImage={uploadedImage ? true : false}
        SelectdifferentImage={() => hiddenFileInput.current.click()}
      >
        <>
          <div className="upload-area">
            {!openWebcam ? renderImage() : render()}
            {!openWebcam && (
              <span
                className={"flex-fill" + `${uploadedImage ? " noBgColor" : ""}`}
              >
                <div
                  className="profile-upload"
                  onClick={() =>
                    !uploadedImage && hiddenFileInput.current.click()
                  }
                >
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="" className="user-img" />
                  ) : (
                    <Link to="#" className="link text-decoration-none">
                      <img src={upload} className="me-2" alt="upload" />
                      Choose File
                    </Link>
                  )}
                </div>

                <input
                  type="file"
                  hidden
                  ref={hiddenFileInput}
                  onChange={handleUploadImage}
                />
              </span>
            )}
          </div>
          <div className="label-error text-center">{formError?.profile}</div>
        </>
      </ProfileModel>

      <Modal
        dialogClassName="modal-dialog-centered modal-sm authorModal"
        show={showProfileModal}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div class="modal-icon">
            {" "}
            <img src={doneSvg} alt="#" />
          </div>
          <h5 class="modal-title">Your Profile has been updated successfully</h5>
          <button
            type="button"
            class="btn-close"
            ariaLabel="Close"
            onClick={() => setShowProfileModal(false)}
          ></button>
        </Modal.Header>

        <Modal.Footer className="modal-footer pb-3">
          <button class="button button-primary w-50" onClick={() => setShowProfileModal(false)}>
            Done
          </button>
        </Modal.Footer>
      </Modal>

      <div
        className="pullUp"
        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <b className="icon-arrow-right" />
      </div>
      <div className="quickFAQ" onClick={(e) => handleChatBot(e)}>
        <p>Questions?</p>
        <span>Talk to Us</span>
      </div>
      
    </div>
  );
}

export default MyProfile;
