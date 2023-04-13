import PropTypes from "prop-types";
import Webcam from "react-webcam";
import Input from "../common/Input";
import Select from "../common/Select";
import { titleOptionsNew } from "../../constants";
import { Link } from "react-router-dom";
import RadioButton from "../common/Radio_button";
import active_email from "../../svg/active-email.svg";
import disable_email from "../../svg/disable-email.svg";
import active_phone from "../../svg/active-phone.svg";
import disable_phone from "../../svg/disable-phone.svg";
import upload from "../../svg/upload-active.svg";
import camera from "../../svg/camera.svg";
import ProfileModel from "../Modal/ProfileModel";
import FormModal from "../Modal/formModal";
import './index.scss';
function PersonalDetailsSection(props) {
  const {
    handleUploadImage,
    handleImageSubmit,
    hiddenFileInput,
    handleChangeRadioButton,
    profile,
    profileDetails,
    handleChange,
    openImageUpload,
    setOpenImageUpload,
    webcamRef,
    validationError = {},
    capture,
    webcamImage,
    openWebcam,
    setOpenWebcam,
    handleWebcam,
    uploadedImage,
    handleImageModalClose,
    phone,
    setWebcamImage,
    buttonBar,
    setOpenRemoveImage,
    openRemoveImage,
    handleRemoveImageSubmit,
    formError,
  } = props;

  function onRetake() {
    setWebcamImage("")
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
      return ''
    }
    return (
      <span
        className="flex-fill"
        onClick={() => {setWebcamImage(""); setOpenWebcam(true);}}
      >
        <Link to="#" className="link">
          <img src={camera} className="me-2" alt="camera" />
          Take Picture
        </Link>
      </span>
    )
  }
  const renderponeNumberclass = () => {
    if (profileDetails?.phoneNumber) {
      return "form-control active-input pointer_event_none  tel-pd"
    } else {
      return "form-control grey-input tel-pd"
    }
  }
  const checkTelClass=() =>{
    if(profileDetails?.phoneNumber) {
      return 'tel-active'
    } 
    return 'tel-disable'
  }

  const handleSelectChange = (value, type) => {
    props.handleSelectChange(value, type);
  };

  return (
    <div>
      <div className="text-start row shadow-box pb-4">
        <div className="heading my-2 mb-4">Personal Details</div>

        <div className="col-lg-12">
          <div className="text-start d-flex align-items-baseline mb-4">
            <div
              className={`profile-upload ${profile && 'd-block'}`}
              onClick={() => setOpenImageUpload(profile ? false :true)}

            >
              {profile ? (
                <img src={profile} alt="" />
              ) : (
                <i className="fa fa-camera" 
                ></i>
              )}
            </div>
            <div className="upload-profile ms-3">
              {
                !profile ?
                  <span
                    onClick={() => setOpenImageUpload(true)}
                    className="link cursor-pointer">Upload Profile Picture <span className="option-badge mandatory-span badge ms-1 mb-1">Mandatory</span>
                  </span>
                  :
                  <>
                  <div className="d-flex align-items-center mb-1">
                    <span
                      onClick={() => setOpenImageUpload(true)}
                      className="link cursor-pointer me-2">
                      Update
                    </span>
                    <span className="vr me-2"></span>
                    <span onClick={() => setOpenRemoveImage(true)} className="text-grey link cursor-pointer rmv-btn pr-1">Remove</span> <i className="option-badge mandatory-span p-1 ml-1">Mandatory</i>
                  </div>
                  </>
              }
              <p className="label">
                A professional photo will help build confidence with your clients<br />
              </p>
              {validationError.profile && <span className="label-error mt-2">Please upload profile picture.</span>}
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="title_with_name">
            <div className={validationError.title ? "w-20 me-2 errored" : "w-20 me-2"}>
              <Select
                selectedValue={profileDetails?.title}
                options={titleOptionsNew?.map(val => val?.key)}
                optionValues={titleOptionsNew?.map(val => val?.value)}
                labelClass={""}
                label="Title"
                name="title"
                placeholder="Title"
                handleChange={(value) => handleSelectChange(value, 'title')}
                required={true}
                isInvalid={validationError.title}
                mandatory={true}
              />
            </div>
            <div className={validationError.fullName ? "w-80 errored" : "w-80"}>
              <Input
                name="fullName"
                className={
                  profileDetails?.fullName
                    ? "form-control active-input"
                    : "form-control grey-input"
                }
                type="text"
                labelClass={profileDetails?.fullName ? "" : "hidden"}
                label="Full Name"
                placeholder="Full Name"
                value={profileDetails?.fullName}
                handleChange={handleChange}
                mandatory={true}
                isInvalid={validationError.fullName}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4 fillDisable">
          <Input
            type="email"
            name="email"
            isInvalid={validationError.email}
            className={"form-control  with_icon active-input pointer_event_none"}
            preIconClass={profileDetails?.email ? active_email : disable_email}
            labelClass={profileDetails?.email ? "" : "hidden"}
            label="Email ID"
            placeholder="Email ID"
            value={profileDetails?.email}
            // handleChange={handleChange}
            readOnly={false}
            required
          />
        </div>
        <div className="col-lg-6 mb-4">
          {
            profileDetails.nationality !== "outSideIndia" && (
              <div className="position-relative fillDisable">
                <span
                  className={
                  checkTelClass()
                  }
                >+91 |</span>
                <Input
                  type="tel"
                  name="phoneNumber"
                  className={renderponeNumberclass() }
                  preIconClass={
                    profileDetails?.phoneNumber ? active_phone : disable_phone
                  }
                  labelClass={profileDetails?.phoneNumber ? "" : "hidden"}
                  label="Mobile Number"
                  placeholder="xxxxxxxxxx"
                  value={profileDetails?.phoneNumber}
                  handleChange={handleChange}
                  readOnly={phone}
                  mandatory={true}
                  isInvalid={validationError.phoneNumber}
                  required
                />
              </div>
            )
          }
        </div>
        <div className="col-lg-6 mb-4">
          <div className="py-2">
            <label className="text-start m-0">
              Gender<span className="ms-2 badge option-badge mandatory-span badge">Private</span>
            </label>
            <div className="form-group mb-2 d-flex ps-10 gender_row justify-content-between">
              <RadioButton
                label="Male"
                name="gender"
                id="Male"
                checked={profileDetails?.gender === "Male"}
                handleChange={handleChangeRadioButton}
                required
              />
              <RadioButton
                label="Female"
                name="gender"
                id="Female"
                checked={profileDetails?.gender === "Female"}
                handleChange={handleChangeRadioButton}
                required
              />
              <RadioButton
                label="Gender Fluid"
                id="GenderFluid"
                checked={profileDetails?.gender === "GenderFluid"}
                name="gender"
                handleChange={handleChangeRadioButton}
              />
              
              <RadioButton
                label="Others"
                name="gender"
                id="Other"
                checked={profileDetails?.gender === "Other"}
                handleChange={handleChangeRadioButton}
                required
              />
            </div>
          </div>
          <FormModal className='static-modal remove-profile_modal' size='sm' modalHeading='Remove Profile Picture?'
            upperInformationText='Sure you want to remove your profile picture?'
            show={openRemoveImage}
            handleClose={() => setOpenRemoveImage(false)}
            onSubmit={() => handleRemoveImageSubmit()}
            submitButtonTitle='Remove'
          >
            <>
            </>
          </FormModal>
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
                {!openWebcam ? (
                  renderImage()
                ) : (
                  render()
                )}
                {!openWebcam && (
                  <span className={"flex-fill" + `${uploadedImage ? ' noBgColor' : ''}`}>
                    <div
                      className="profile-upload"
                      onClick={() =>
                        !uploadedImage && hiddenFileInput.current.click()
                      }
                    >
                      {uploadedImage ? (
                        <img src={uploadedImage} alt="" className="user-img" />
                      ) : (
                        <Link
                          to="#"
                          className="link text-decoration-none"
                        >
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
        </div>

      </div>
      <p className="text-center mt-4 footer-buttonBar">{buttonBar}</p>
    </div>
  );
}
PersonalDetailsSection.propTypes = {
  handleChangeRadioButton: PropTypes.func,
  handleUploadImage: PropTypes.func,
  profile: PropTypes.string,
  profileDetails: PropTypes.shape({
    fullName: PropTypes.string,
    phoneNumber: PropTypes.number,
    email: PropTypes.string,
    gender: PropTypes.string,
  }),
  hiddenFileInput: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  handleChange: PropTypes.func,
  openImageUpload: PropTypes.bool,
  setOpenImageUpload: PropTypes.func,
  handleImageSubmit: PropTypes.func,
  showDoLatterModal: PropTypes.bool,
  setShowDoLatterModal: PropTypes.func,
  uploadedImage: PropTypes.string,
  handleWebcam: PropTypes.func,
  setOpenWebcam: PropTypes.func,
  openWebcam: PropTypes.bool,
  webcamImage: PropTypes.string,
  capture: PropTypes.func,
  handleImageModalClose: PropTypes.func,
  handleDoItLatterModal: PropTypes.func,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setFormError: PropTypes.func,
  formError: PropTypes.object,
};

PersonalDetailsSection.defaultProps = {
  handleChangeRadioButton: () => null,
  handleUploadImage: () => null,
  profileDetails: {},
  profile: "",
  gender: "",
  handleChange: () => null,
  openImageUpload: false,
  setOpenImageUpload: () => null,
  handleImageSubmit: () => null,
  showDoLatterModal: false,
  setShowDoLatterModal: () => null,
  uploadedImage: "",
  handleWebcam: () => null,
  setOpenWebcam: () => null,
  openWebcam: false,
  webcamImage: "",
  capture: () => null,
  handleImageModalClose: () => null,
  handleDoItLatterModal: () => null,
  phone: "",
  setFormError: () => null,
  formError: {},
};
export default PersonalDetailsSection;
