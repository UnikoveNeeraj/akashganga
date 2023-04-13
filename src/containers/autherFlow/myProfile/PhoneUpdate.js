import { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import {
  updateMobileNumber,
  updateMobileNumberOTPVerify,
} from "../../../store/apiCalls/profileDetails";
import doneSvg from "../../../assets/img/icons/done02.svg";
import { validatePhoneNumber } from "../../../utils";
import OtpInput from "../../../components/hooks/OTPReader"

const PhoneUpdate = ({
  modalStat = {},
  handleModalOpen = () => {},
  headers = {},
  id = "",
}) => {
  const [phone, setPhone] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [showOTP, setShowOTP] = useState({ otp: false, congrats: false });
  const [OTP, setOTP] = useState(null);
  const [timer, setTimer] = useState("00:00");
  const [error, setError] = useState({});
  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:30");

    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30);
    deadline.setMinutes(deadline.getMinutes() + 0);
    return deadline;
  };

  useEffect(() => {
    if (showOTP.otp) {
      clearTimer(getDeadTime());
      // eslint-disable-next-line
    }
  }, []);

  const handleOTPClose = (e) => {
    e.preventDefault();
    setShowOTP({ otp: false, congrats: false });
    handleModalOpen("phone", false);
    setOTP(null);
    setPhone(null);
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    if (phone && phone.toString().length !== 10) {
      setError({ mobileError: "Please enter a valid phone number." });
      return;
    }

    const resp = await updateMobileNumber({
      data: { newPhoneNumber: phone },
      id,
      headers,
    });
    if (resp.data.success) {
      setShowOTP({ otp: true });
      handleModalOpen("phone", false);
      setOTP(resp.data.otp);
    } else {
      setError({ mobileError: resp.data.message });
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const resp = await updateMobileNumberOTPVerify({
      data: { otp: OTP },
      id,
      headers,
    });
    if (resp.status === 200 && resp.data.message) {
      setShowOTP({ otp: false, congrats: true });
    } else {
      setError({ otpError: resp.data.message });
    }
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    clearTimer(getDeadTime());
  };

  useEffect(() => {
    setDisabled(
      !(
        phone
      )
    );
  }, [phone])

  return (
    <>
      <Modal
        show={modalStat.phone}
        id="updateMobile"
        dialogClassName="modal-dialog-centered modal-sm authorModal"
        tabIndex={-1}
      >
        <form onSubmit={handleMobileSubmit}>
          <Modal.Header className="modal-header">
            <h5 className="modal-title">Update Mobile Number</h5>
            <p>OTP will be sent on your new mobile number</p> 
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={(e) => handleOTPClose(e)}
            />
          </Modal.Header>

          <Modal.Body className="modal-body pt-0">
            <div className="px-2 pt-1">
              <div className="fieldWrap">
                <label className="labelForm">Mobile Number</label>
                <div className="fieldCover updateNumber">
                  <b className="icon-call" />
                  <i>+91</i>
                  <input
                    value={phone}
                    onChange={(e) =>
                      setPhone(validatePhoneNumber(e.target.value))
                    }
                    placeholder="xxxxxxxxxx"
                    className="fieldForm"
                    type="tel"
                    maxLength={10}
                    required
                  />
                  <p className="error-msg">{error.mobileError}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer mb-3">
            {/* <button onClick={(e) => handleModalOpen('phone', false)} className="button-link-gray">
                            Cancel
                        </button> */}
            <button className="button button-primary" type="submit" disabled={disabled}>
              CONTINUE
            </button>
          </Modal.Footer>
        </form>
      </Modal>

      <Modal
        dialogClassName="modal-dialog-centered modal-sm authorModal"
        show={showOTP.otp}
        id="verifyMobile"
        tabIndex={-1}
      >
        <form onSubmit={(e) => handleOtpVerification(e)}>
          <Modal.Header className="modal-header">
            <h5 className="modal-title">Verify OTP</h5>
            <p>
              Almost there. Please enter the OTP
              <br /> received on your mobile number
            </p>
            <button
              type="button"
              className="btn-close"
              ariaLabel="Close"
              onClick={(e) => handleOTPClose(e)}
            />
          </Modal.Header>

          <Modal.Body className="modal-body mt-0 pt-0">
            <div className="px-2 pt-1">
              <div className="fieldWrap otpFieldBox">
                <label className="labelForm">OTP</label>
                <div className="fieldCover otpField">
                  <OtpInput
                    OTPLength={5}
                    value={OTP}
                    inputClassName="form-control active-input"
                    label=""
                    onChange={(e) => setOTP(e)}
                    className="otp_input-box"
                  />
                </div>
                <p className="error-msg">{error.otpError}</p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <button type="submit" className="button button-primary w-50">
              VERIFY
            </button>
            <div className="otpInfo">
              <p>{timer}s</p>
              <small>
                Not received OTP?{" "}
                {timer === "00:00" && (
                  <a onClick={(e) => handleResendOTP(e)}>Resend OTP</a>
                )}
              </small>
            </div>
          </Modal.Footer>
        </form>
      </Modal>

      <Modal
        dialogClassName="modal-dialog-centered modal-sm authorModal"
        show={showOTP.congrats}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div class="modal-icon">
            {" "}
            <img src={doneSvg} alt="#" />
          </div>
          <h5 class="modal-title mt-4">Mobile Number Updated</h5>
          <button
            type="button"
            class="btn-close"
            ariaLabel="Close"
            onClick={handleOTPClose}
          ></button>
        </Modal.Header>

        {/* <Modal.Body className="modal-body">
                    <div class="pt-0 text-center simpleText">
                        <p>Your mobile number has been changed successfully</p>
                    </div>
                </Modal.Body> */}

        <Modal.Footer className="modal-footer pb-3 mb-3">
          <button class="button button-primary w-50" onClick={handleOTPClose}>
            DONE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhoneUpdate;
