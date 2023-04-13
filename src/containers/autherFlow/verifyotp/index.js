import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import OtpInput from "../../../components/hooks/OTPReader";
import "./index.scss";

function VerifyOtp(props) {
  const { otp, setOtp, handleSubmit, handleRensedOtp, type, errorMsg } = props
  const [disable, setDisable] = useState(true);
  const [timer, setTimer] = useState("00:00");
  const Ref = useRef(null);
  const handleChange = (entered_otp) => {
    setOtp(entered_otp);
  };
  useEffect(() => {
    setDisable(otp?.toString().length !== 5);
  }, [otp]);


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
    clearTimer(getDeadTime());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-8 m-auto">
          <div className="">

            <div className="frame text-center">
              <Form onSubmit={handleSubmit}>
                <div className="">
                  <div className="">
                    <div
                      className="mt-3 mb-4"
                      style={{ width: "258px", margin: "auto" }}
                    >
                      {/* <p className="label-info text-start mb-2 px-2">OTP</p> */}
                      <OtpInput
                        OTPLength={5}
                        value={otp}
                        inputClassName="form-control active-input"
                        label=""
                        onChange={handleChange}
                        className="otp_input-box"
                      />
                      <p className="label-error">{errorMsg}</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Button type="submit" title="Verify" disabled={disable} />
                </div>
              </Form>
              <p className="welcome_title py-3 m-0 timer">{timer}s</p>
              {timer === "00:00" && <><span className="text-grey">Not received OTP? </span><Link to="#" onClick={(e) => {
                handleRensedOtp(e, type);
                clearTimer(getDeadTime());
              }} className="link">Resend OTP</Link></>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
VerifyOtp.propTypes = {
  setOpenMobileVerification: PropTypes.func,
  otp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setOtp: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleRensedOtp: PropTypes.func,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.func]),
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.func]),

};

VerifyOtp.defaultProps = {
  setOpenMobileVerification: () => null,
  otp: null,
  type: '',
  setOtp: () => null,
  handleSubmit: () => null,
  handleRensedOtp: () => null,
  errorMsg: ''
};


export default VerifyOtp;
