import React from "react";
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import Button from "../common/Button";
import successCheck from "../../svg/successCheck.svg";
import "./formModal.scss";
import { Link } from "react-router-dom";

const SuccessModal = (props) => {
    const { show, handleClose, closebutton, modalHeading, submitButtonTitle, onSubmit, disabled, upperInformationText, lowerInformationText, bigHeading, className, LinkTitle, LinkPath, size } = props
    return (
        <Modal show={show} onHide={handleClose} className={className} centered size={size}>
            <Modal.Header closeButton={closebutton} className="justify-content-center pb-0 px-0 pt-0">
                <div className="header-before">
                    <img src={successCheck} alt="success" />
                </div>
                <Modal.Title className="mt-5">
                    <div className="big-heading">{bigHeading}</div>
                    <div className="mb-3">{modalHeading}</div>
                </Modal.Title>
            </Modal.Header>
            <div className="text-center label-info color-black" dangerouslySetInnerHTML={{__html:upperInformationText }}/>
            <div className="text-center label-info mt-1 color-black" dangerouslySetInnerHTML={{__html:lowerInformationText }}/>
            <Modal.Footer className="justify-content-center mt-3 d-grid">
                <Button title={submitButtonTitle} disabled={disabled} className="custom_button btn-success_modal" type='button' handleClick={onSubmit} />
                {LinkTitle && (<div className="text-center">
                    <a onClick={onSubmit} href={LinkPath} className="link text-decoration-none f-700">{LinkTitle}</a>
                </div>)
                }
            </Modal.Footer>
        </Modal>
    );
};
SuccessModal.propTypes = {
    show: PropTypes.bool,
    closebutton: PropTypes.bool,
    handleClose: PropTypes.func,
    modalHeading: PropTypes.string,
    submitButtonTitle: PropTypes.string,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    lowerInformationText: PropTypes.string,
    upperInformationText: PropTypes.string,
    bigHeading: PropTypes.string,
    className: PropTypes.string,
    LinkTitle: PropTypes.string,
    LinkPath: PropTypes.string,
    size: PropTypes.string
};

SuccessModal.defaultProps = {
    show: false,
    closebutton: false,
    modalHeading: '',
    submitButtonTitle: '',
    onSubmit: () => null,
    handleClose: () => null,
    disabled: false,
    lowerInformationText: '',
    upperInformationText: '',
    bigHeading: '',
    className: "success-modal",
    LinkTitle: '',
    LinkPath: '#',
    size: ''
};

export default SuccessModal;
