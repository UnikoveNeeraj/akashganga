import React from "react";
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import Button from "../common/Button";
import "./formModal.scss";
import { Link } from "react-router-dom";
const ConditionalModal = (props) => {
    const { show, handleClose, closebutton, modalHeading, submitButtonTitle, onSubmit, disabled, informationText, cancleButtonTitle } = props
    return (
        <Modal show={show} onHide={handleClose} className="static-modal" centered>
            <Modal.Header closeButton={closebutton} className="justify-content-center pb-3 px-0 pt-0">
                <Modal.Title>{modalHeading}</Modal.Title>
            </Modal.Header>
            <div className="text-center label">
                {informationText}
            </div>
            <Modal.Body></Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Link className="link mx-5" onClick={handleClose} >{cancleButtonTitle}</Link>
                <Button title={submitButtonTitle} disabled={disabled} type='button' handleClick={onSubmit} />
            </Modal.Footer>
        </Modal>
    );
};
ConditionalModal.propTypes = {
    show: PropTypes.bool,
    closebutton: PropTypes.bool,
    handleClose: PropTypes.func,
    modalHeading: PropTypes.string,
    submitButtonTitle: PropTypes.string,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    informationText: PropTypes.string,
    cancleButtonTitle: PropTypes.string
};

ConditionalModal.defaultProps = {
    show: false,
    closebutton: false,
    modalHeading: '',
    submitButtonTitle: '',
    onSubmit: () => null,
    handleClose: () => null,
    disabled: false,
    informationText: '',
    cancleButtonTitle: ''

};

export default ConditionalModal;