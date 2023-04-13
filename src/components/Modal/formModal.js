import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "../common/Button";
import "./formModal.scss";
import modalClose from "../../svg/modal-close.svg";
import { Link } from "react-router-dom";

const FormModal = (props) => {
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
    buttonType,
    className,
    form,
    LinkTitle,
    LinkPath,
    size
  } = props;
  return (
    <Modal backdrop="static" show={show} onHide={handleClose} className={className} centered size={size}>
      <Modal.Header
        closeButton={closebutton}
        className="justify-content-center pb-2 px-0 pt-0"
      >
        {/* <span onClick={handleClose} className="modal-close"><img src={modalClose} alt="no-img"  /></span> */}
        <Modal.Title>{modalHeading}</Modal.Title>
         
      </Modal.Header>
      {informationText &&
        <div className="text-center label-info color-black">{informationText}</div>
      }
      {!informationText && (
        <>
          <div className="text-center label-info color-black" dangerouslySetInnerHTML={{__html:upperInformationText }}/>
          <div className="text-center label-info mt-1 mb-1 color-black" dangerouslySetInnerHTML={{__html:lowerInformationText }} />            
        </>)
        }
      <Modal.Body className="p-0">{children}</Modal.Body>
      <Modal.Footer className="justify-content-center d-grid p-0">
        {submitButtonTitle && (
          <Button
            title={submitButtonTitle}
            disabled={disabled}
            type={buttonType}
            handleClick={onSubmit}
            form={form}
          />
        )}
        {LinkTitle && (<div className="text-center">
                    <Link to={LinkPath} className="link text-decoration-none f-700">{LinkTitle}</Link>
                </div>)
                }
      </Modal.Footer>
    </Modal>
  );
};
FormModal.propTypes = {
  show: PropTypes.bool,
  closebutton: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  modalHeading: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  informationText: PropTypes.string,
  upperInformationText: PropTypes.string,
  lowerInformationText: PropTypes.string,
  buttonType:PropTypes.string,
  form:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className:PropTypes.string,
  joinTheMovement:PropTypes.bool,
  LinkTitle: PropTypes.string,
  LinkPath: PropTypes.string,
  size: PropTypes.string
};

FormModal.defaultProps = {
  show: false,
  closebutton: false,
  modalHeading: "",
  submitButtonTitle: "",
  onSubmit: () => null,
  handleClose: () => null,
  disabled: false,
  informationText: "",
  upperInformationText: '',
  lowerInformationText: '',
  buttonType:'button',
  form:null,
  className:'static-modal',
  joinTheMovement:false,
  LinkTitle: '',
  LinkPath: '',
  children:<></>,
  size: ''
};

export default FormModal;
