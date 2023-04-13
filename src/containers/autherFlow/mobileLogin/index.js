import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Divider from "../../../components/common/Divider";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import LeftBase from "../../../components/common/LeftBase";
import Logo from "../../../components/logo/Logo";
import SocialLogin from "../../../components/socialLogin/SocialLogin";
import { SET_LOGIN_USER_SUCCESS, SET_OTP } from "../../../store/actions/loginActions";
import { validatePhoneNumber } from "../../../utils";
import { OnLogin, OnOTPVerification, OnSocialLogin } from "../login/queries";
import active_phone from '../../../svg/active-phone.svg';
import disable_phone from '../../../svg/disable-phone.svg';
import "./index.scss";
import FormModal from "../../../components/Modal/formModal";
import VerifyOtp from "../verifyotp";
import { useSelector } from "react-redux";
import Checkbox from "../../../components/common/Checkbox";

function MobileLogin() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState('')
  const [disabled, setDisabled] = useState(true);
  const [openMobileVerification, setOpenMobileVerification] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [otp, setOtp] = useState()
  const otpState = useSelector((state) => state?.LoginReducer.otp);
  useEffect(() => {
    setOtp(otpState);
    // eslint-disable-next-line
  }, [otpState]);
  useEffect(() => {
    setDisabled(mobileNumber?.length !== 10)
  }, [mobileNumber]);
  const sucessHandlerMObileVerification = (auth) => {
    setErrorMsg('')
    localStorage.setItem("usertoken", auth.data?.token);
    dispatch({
      type: SET_LOGIN_USER_SUCCESS,
      payload: auth?.data,
    });
    setOpenMobileVerification(false)
    navigate('/')
    // toast.success(auth?.data?.message);
    // navigate("/dashboard",{ state: 'We have sent you a link on your email Id. Please open it to verify your account.' });
    return null;
  };

  const { mutate: mobileLogin } = OnOTPVerification(sucessHandlerMObileVerification, setErrorMsg);
  const handleSubmitOtpVerification = async (e) => {
    e.preventDefault();
    mobileLogin({ otp });
  };

  const sucessHandler = (otp) => {
    dispatch({
      type: SET_OTP,
      payload: otp?.data?.otp,
    });
    setOpenMobileVerification(true)
    setErrorMsg('');
    return null;
  };

  const { mutate: login } = OnLogin(sucessHandler, setErrorMsg);
  const socialSucessHandler = (success) => {
    setErrorMsg('')
    localStorage.setItem("usertoken", success.data?.token);
    dispatch({
      type: SET_LOGIN_USER_SUCCESS,
      payload: success?.data,
    });
    // toast.success(success?.data?.message);
    navigate("/dashboard");
    return null;
  };
  const { mutate: socialLogin } = OnSocialLogin(socialSucessHandler);

  const handleSocialLogin = (result) => {
    const data = result?.user;
    const apiBody = {
      fullName: data?.displayName,
      email: (result?.providerId === "twitter.com") ? result?.['_tokenResponse']?.email : data?.email,
      rawId: data?.uid,
      isSocialLogin: true,
      signupForUpdates: false,
    };
    socialLogin(apiBody);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ 'phoneNumber': mobileNumber });
  };
  const handleCloseModal = () => {
    setErrorMsg('')
    setOpenMobileVerification(false)
  }
  return (
    <div className="container-flex mobile-login-page login-page left-base">
      <div className="row h-100">
        <div className="col-lg-4 col-xl-4 d-none d-lg-block left-base position-relative">
          <LeftBase />
        </div>
        <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 m-auto">
          <div className="p-3">
            <div className="text-end"><span><small className="labelColor">Not a member?</small></span><Link to="/registration" className="link ms-2">Register Now</Link></div>
            <div className="frame w-75 m-auto ">
              <Logo />
              <p className="title m-3">
                LOGIN
              </p>
              <p className="welcome-title mb-1">Add your mobile number below, and let us get you started</p>
              <Form onSubmit={handleSubmit}>
                <div className="position-relative">
                  <span className={mobileNumber ? "tel-active" : "tel-disable"}>+91 |</span>
                  <Input
                    type="tel"
                    preIconClass={
                      mobileNumber ? active_phone : disable_phone
                    }
                    errors={errorMsg}
                    handleChange={(e) => setMobileNumber(validatePhoneNumber(e.target.value))}
                    value={mobileNumber}
                    label='Mobile Number'
                    placeholder="xxxxxxxxxx"
                    className={mobileNumber ? "form-control active-input  tel-pd" : "form-control grey-input tel-pd"}
                    labelClass={mobileNumber ? "" : "hidden"}
                  />
                </div>
                <div className="py-4 text-center">
                  <Button type="submit" title="Continue" disabled={disabled} />
                </div>
              </Form>
              <div className="my-4">
                <Divider />
              </div>
              <div className="text-center">
              <Link to="/login" className="link">Continue With Email Login</Link>
              <div className="my-3">
                <p className="labelColor px-16">You can also login with</p>
              </div>
              </div>
              <SocialLogin handleSocialLogin={handleSocialLogin} />
              <div className="col-lg-12 px-3 position-relative mt-2">
                <label className="text-start styledCheck">
                  <Checkbox
                    name="signupForUpdates"
                    // checked={checkboxes?.signupForUpdates}
                    className="form-check-input me-2"
                  // onRadioChange={handleClickCheckbox}
                  /><span>Sign me up for more information and updates</span>
                </label>
              </div>
              <p className="footer-note mb-1 mt-4">
                Don't forget to add us to your <span className="f-600">Safe Senders List!</span>
              </p>
              <p className="footer-note">BTW, we will NEVER post anything without your permission. Isn't this cool?</p>
            </div>
          </div>
        </div>
      </div>
      {/* Almost there! Just add the OTP received on your mobile nubmer and let's get going. */}
      <FormModal size="sm" show={openMobileVerification} handleClose={handleCloseModal} informationText="Almost there. Please enter the OTP received on your mobile number" modalHeading='Verify OTP'>
        <VerifyOtp errorMsg={errorMsg} otp={otp} setOtp={setOtp} handleSubmit={handleSubmitOtpVerification} />
      </FormModal>
    </div>
  );
}

export default MobileLogin;
