import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "../common/Button";
import "./formModal.scss";
import modalClose from "../../svg/modal-close.svg";
import { Link } from "react-router-dom";
const ProfileModel = (props) => {
  const {
    show,
    handleClose,
    children,
    closebutton,
    modalHeading,
    submitButtonTitle,
    onSubmit,
    disabled,
    informationText,
    upperInformationText,
    lowerInformationText,
    retakebuttonTitle,
    onRetake,
    openWebcam,
    uploadedImage,
    SelectdifferentImage
  } = props;

  return (
    <Modal show={show} onHide={handleClose} className="static-modal profile-modal" centered> 
      <Modal.Header
        closeButton={closebutton}
        className="justify-content-center pb-0 px-0 pt-0" 
      >
        <span onClick={handleClose} className="modal-close"><img src={modalClose} alt="no-img"  /></span>
        <Modal.Title>{modalHeading}</Modal.Title>
        
      </Modal.Header>
      {informationText &&
        <div className="text-center label-info color-black">{(!openWebcam && !uploadedImage) && informationText}</div>
      }
      {!informationText && (
        <>
          <div className="text-center label-info color-black">
            {upperInformationText}
          </div>
          <div className="text-center label-info mt-1 color-black">
            {lowerInformationText}
          </div>
        </>)
      }
      <Modal.Body className="p-0">{children}</Modal.Body>
      <Modal.Footer className={(openWebcam || props.webcamImage) ? "justify-content-center p-0" : "justify-content-start d-block p-0"}>
        {(!openWebcam && !uploadedImage) && <div className="modal-seperate_border pt-3 mt-3">
          <p className="f-600 mb-2">Your photo should:</p>
          <p className="m-0 labelBlack">1. Have a clear view of your face (no sunglasses).</p>
          <p className="m-0 labelBlack">2. Have a neutral background.</p>
        </div>}

       <div className="align-items-center justify-content-between d-flex m-0">
        {retakebuttonTitle && (uploadedImage) && <Link
          to="#"
          className="link"
          title={retakebuttonTitle}
          disabled={disabled}
          onClick={uploadedImage ? SelectdifferentImage : onRetake}
        >{retakebuttonTitle}</Link>
        }
        {(openWebcam && !props.webcamImage) && <Link
          to="#"
          className="link mx-4"
          title='Capture'
          onClick={(e) => props.onImgCapture()}
        >Capture</Link>
        }

        {submitButtonTitle && (props.webcamImage || uploadedImage) && (
          <Button
            title={submitButtonTitle}
            disabled={disabled}
            type="button"
            handleClick={onSubmit}
          />
        )}
        </div>
       

      </Modal.Footer>
    </Modal>
  );
};
ProfileModel.propTypes = {
  show: PropTypes.bool,
  closebutton: PropTypes.bool,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func,
  modalHeading: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  onRetake: PropTypes.func,
  disabled: PropTypes.bool,
  uploadedImage: PropTypes.bool,
  openWebcam: PropTypes.bool,
  informationText: PropTypes.string,
  upperInformationText: PropTypes.string,
  lowerInformationText: PropTypes.string,
};

ProfileModel.defaultProps = {
  show: false,
  uploadedImage: false,
  openWebcam: false,
  closebutton: false,
  modalHeading: "",
  submitButtonTitle: "",
  onSubmit: () => null,
  handleClose: () => null,
  onRetake: () => null,
  disabled: false,
  informationText: "",
  upperInformationText: '',
  lowerInformationText: '',
};

export default ProfileModel;