import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../../components/logo/Logo";
import SocialLogin from "../../../components/socialLogin/SocialLogin";
import { Modal } from "react-bootstrap";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import { handleShowPassword, validateEmail } from "../../../utils";
import "./index.scss";
import { SET_LOGIN_USER_SUCCESS } from "../../../store/actions/loginActions";
import { OnLogin, OnSocialLogin } from "./queries";
import LeftBase from "../../../components/common/LeftBase";
import active_eye from "../../../svg/active-eye.svg";
import active_email from "../../../svg/active-email.svg";
import active_lock from "../../../svg/active-lock.svg";
import disable_eye from "../../../svg/disable-eye.svg";
import disable_email from "../../../svg/disable-email.svg";
import disable_lock from "../../../svg/disable-lock.svg";
import Divider from "../../../components/common/Divider";
import FormModal from "../../../components/Modal/formModal";
import { OnForgotPassword } from "../forgotpassword/queries";
import SuccessModal from "../../../components/Modal/sucessModal";
import { OnResendOtp, VerifyVendorEmail } from "../verifyEmail/queries";
import VerifyOtp from "../verifyotp";
import Checkbox from "../../../components/common/Checkbox";
import RichTextEditor from "../../../components/common/RichTextEditor";
import verifiedIcon from "../../../svg/verifiedCheck.svg";
import "./../../../components/common/index.scss"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState({})
  const [registeredModal, setRegisteredModal] = useState({ show: false, published: false});
  const [errorMsg, setErrorMsg] = useState('')
  const [otp, setOtp] = useState();
  const [mobileOtp, setMobileotp] = useState()
  const [userId, setUserId] = useState()
  const [VerifyPopupOpen, setVerifyPopupOpen] = useState(false);
  const [VerifyMobilePopupOpen, setVerifyMobilePopupOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const [loginCredentials, setLoginCredentials] = useState({});
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [checkboxes, setCheckboxes] = useState({
    signupForUpdates: false,
  });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const socialSucessHandler = (success) => {
    if (success?.data?.isSetupProfile) {
      localStorage.setItem("usertoken", success.data?.token);
      dispatch({
          type: SET_LOGIN_USER_SUCCESS,
          payload: success?.data,
      });
      navigate("/dashboard");
      return null;
    } else if(!success?.data?.isSetupProfile) {
      setErrorMsg('')
      localStorage.setItem("usertoken", success.data?.token);
      dispatch({
        type: SET_LOGIN_USER_SUCCESS,
        payload: success?.data,
      });
      return null;
    } else {
      setRegisteredModal({
        show: true,
        published: success?.data?.isSetupProfile ? true : false,
      });
    }
  };

  const EmailsucessHandler = (sucess) => {
    setErrorMsg("");
    setVerifyPopupOpen(false);
    setVerifyMobilePopupOpen(true);
  };

  const handleHome = (e) => {
    e.preventDefault();
    navigate(registeredModal.published ? "/" : "/login");
    setRegisteredModal({ show: false, published: false });
  };

  const handleRedirectVideo = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleHide = (e) => {
    setRegisteredModal({ show: false, published: false });
  };

  const MobilesucessHandler = (sucess) => {
    setErrorMsg("");
    setMobileotp();
    setOtp();
    setVerifyMobilePopupOpen(false);
    setSuccessModalOpen(true);
    // window.location.reload()
  };

  const handleVerifyEmailSubmit = (e) => {
    e.preventDefault();
    const headers = {
      otp: otp,
      userId: userId,
    };
    verifyEmail(headers);
  };

  const handleVerifyMobileSubmit = (e) => {
    e.preventDefault();
    const headers = {
      otpForMobileVerification: mobileOtp,
      userId: userId,
    };
    verifyMobile(headers);
  };

  const resendOtpSucess = (sucess) => {
    setErrorMsg("");
    // if (sucess?.data?.otpformobileverification) {
    //   setMobileotp(sucess?.data?.otpformobileverification)
    // }
  };
  const handleRensedOtp = (e, type) => {
    e.preventDefault();
    if (type === "email") {
      let param = {
        email: email,
      };
      resedOtp(param);
    } else {
      let param = {
        phoneNumber: mobileNumber,
      };
      resedOtp(param);
    }
  };

  //new code
  const { mutate: socialLogin } = OnSocialLogin(socialSucessHandler);

  const handleSocialLogin = (result) => {
    const data = result?.user;
    const apiBody = {
      fullName: data?.displayName,
      email:
        result?.providerId === "twitter.com"
          ? result?.["_tokenResponse"]?.email
          : data?.email,
      rawId: data?.uid,
      isSocialLogin: true,
      signupForUpdates: checkboxes?.signupForUpdates,
    };
    socialLogin(apiBody);
  };
  const sucessHandler = (auth) => {
    const { emailVerified, mobileVerified, email, phoneNumber, _id, isSetupProfile } =
      auth?.data?.data;
    setUserData(auth?.data);
    setMobileNumber(phoneNumber);
    setEmail(email);
    setUserId(_id);
    setErrorMsg("");
    // setMobileotp(auth.data?.otpForMobile)
    if (isSetupProfile) {
      localStorage.setItem("usertoken", auth.data?.token);
      dispatch({
          type: SET_LOGIN_USER_SUCCESS,
          payload: auth?.data,
      });
      navigate("/dashboard");
      return null;
    }
    else if (emailVerified && mobileVerified) {
      localStorage.setItem("usertoken", auth.data?.token);
      dispatch({
        type: SET_LOGIN_USER_SUCCESS,
        payload: auth?.data,
      });
    } else if (!emailVerified) {
      setVerifyPopupOpen(true);
    } else if (!mobileVerified) {
      setVerifyMobilePopupOpen(true);
    }
  };

  const { mutate: resedOtp } = OnResendOtp(resendOtpSucess, setErrorMsg);
  const { mutate: verifyEmail } = VerifyVendorEmail(
    EmailsucessHandler,
    setErrorMsg
  );
  const { mutate: verifyMobile } = VerifyVendorEmail(
    MobilesucessHandler,
    setErrorMsg
  );

  const { mutate: login } = OnLogin(sucessHandler, setErrorMsg);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...loginCredentials,
      signupForUpdates: checkboxes?.signupForUpdates,
    };
    login(payload);
  };

  const [email, setEmail] = useState();
  const [disabledModalSubmit, setDisabledModalSubmit] = useState(true);
  const sucessHandlerForgotPassword = (forgotSucess) => {
    setErrorMsg("");
    setForgotPasswordOpen(false);
    setEmail("");
    return setResetSend(true);
  };
  const handleSubmitForgotPassword = (e) => {
    const data = { email: email };
    forgotPassword(data);
  };
  const { mutate: forgotPassword } = OnForgotPassword(
    sucessHandlerForgotPassword,
    setErrorMsg
  );

  const [showResetSend, setResetSend] = useState(false);
  useEffect(() => {
    setDisabled(!validateEmail(email));
    // eslint-disable-next-line
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const openForgotPassword = () => {
    setErrorMsg("");
    setForgotPasswordOpen(true);
  };
  const handleSucessModalSubmit = () => {
    setSuccessModalOpen(false);
    localStorage.setItem("usertoken", userData?.token);
    dispatch({
      type: SET_LOGIN_USER_SUCCESS,
      payload: userData,
    });
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  useEffect(() => {
    setDisabled(
      !(validateEmail(loginCredentials?.email) && loginCredentials?.password)
    );
  }, [loginCredentials]);
  useEffect(() => {
    setDisabledModalSubmit(!validateEmail(email));
  }, [email]);
  const handleClickCheckbox = (e, type) => {
    const { name, checked } = e.target;
    if (type) {
      setCheckboxes({
        ...checkboxes,
        [type]: { ...checkboxes[type], [name]: checked },
      });
      return null;
    }
    return setCheckboxes({ ...checkboxes, [name]: checked });
  };

  return (
    <>
      <div className="container-flex login-page">
        <div className="row h-100">
          <div className="col-lg-4 col-xl-4 d-none d-lg-block left-base position-relative">
            <LeftBase />
          </div>
          <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 m-auto">
            <div className="p-3">
              <div className="text-end">
                <span>
                  <small className="labelColor">Not a member?</small>
                </span>
                <Link to="/registration" className="link ms-2">
                  Register Now
                </Link>
              </div>
              <div className="frame w-75 m-auto">
                <Logo />
                <Form onSubmit={handleSubmit}>
                  <p className="title m-3">LOGIN</p>
                  <p className="w-75 m-auto welcome-title">
                    Welcome back. Let us log you in.
                  </p>
                  <p className="w-75 m-auto welcome-title mb-2">
                    Please fill in the details below.
                  </p>
                  <Input
                    name="email"
                    className={
                      loginCredentials?.email
                        ? "form-control active-input with_icon"
                        : "form-control grey-input with_icon"
                    }
                    handleChange={handleChange}
                    type="email"
                    preIconClass={
                      loginCredentials?.email ? active_email : disable_email
                    }
                    labelClass={loginCredentials?.email ? "" : "hidden"}
                    label="Email ID"
                    placeholder="Email ID"
                    value={loginCredentials.email}
                  />
                  <Input
                    errors={errorMsg}
                    name="password"
                    handleChange={handleChange}
                    className={
                      loginCredentials?.password
                        ? "form-control active-input with_icon"
                        : "form-control grey-input with_icon"
                    }
                    type={!showPassword ? "password" : "text"}
                    labelClass={loginCredentials?.password ? "" : "hidden"}
                    preIconClass={
                      loginCredentials?.password ? active_lock : disable_lock
                    }
                    postIconClass={
                      loginCredentials?.password ? active_eye : disable_eye
                    }
                    value={loginCredentials.password}
                    label="Password"
                    placeholder="Password"
                    onIconClick={() =>
                      handleShowPassword(setShowPassword, showPassword)
                    }
                  />
                  <div className="my-2 text-center">
                    <Link
                      to="#"
                      onClick={() => openForgotPassword()}
                      className="link f-18"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="mt-3 mb-7 text-center">
                    <Button
                      type="submit"
                      title="CONTINUE"
                      disabled={disabled}
                    />
                  </div>
                </Form>
                <div className="mx-25">
                  <Divider />
                </div>

                <div className="mt-25-mb-20 text-center">
                  <Link to="/mobilelogin" className="link f-18">
                    Continue With Mobile Login
                  </Link>
                </div>
                <div className="mb-4 text-center">
                  <p className="labelColor px-16">You can also login with</p>
                </div>
                <SocialLogin handleSocialLogin={handleSocialLogin} />
                <div className="col-lg-12 px-3 position-relative mt-2">
                  <label className="text-start styledCheck">
                    <Checkbox
                      name="signupForUpdates"
                      checked={checkboxes?.signupForUpdates}
                      className="form-check-input me-2"
                      onRadioChange={handleClickCheckbox}
                    />{" "}
                    <span>Sign me up for more information and updates</span>
                  </label>
                </div>
                <p className="footer-note mb-1 mt-4">
                  Do not forget to add us to your{" "}
                  <span className="f-600">Safe Senders List</span>
                </p>
                <p className="footer-note">
                  We will NEVER post anything without your permission. Isn't
                  this cool?
                </p>
              </div>
            </div>
            <div
              className="pullUp"
              onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <b className="icon-arrow-right" />
            </div>

            <div class="row align-items-center justify-content-between contentFooter pt-3">
              <div class="col text-end">
                <a onClick={handleChatBot} class="helpLink">
                  <b class="icon-help"></b>Help
                </a>
              </div>
            </div>
          </div>
        </div>
        <FormModal
          show={VerifyPopupOpen}
          handleClose={(e) => setVerifyPopupOpen(false)}
          informationText="Please enter the OTP sent to your email ID"
          modalHeading="Verify Email ID"
        >
          <VerifyOtp
            errorMsg={errorMsg}
            handleRensedOtp={handleRensedOtp}
            otp={otp}
            setOtp={setOtp}
            handleSubmit={handleVerifyEmailSubmit}
            type="email"
          />
        </FormModal>

        <Modal
          show={registeredModal.show}
          onHide={handleHide}
          className="re-register justify-content-center pb-3 px-0 pt-0"
          centered
        >
          <Modal.Header className="justify-content-center px-0 pt-0">
            <Modal.Title className="mt-2">
              <div className="big-heading error-title">
                YOU ARE ALREADY REGISTERED
              </div>
            </Modal.Title>
            <button
              type="button"
              className="btn-close"
              onClick={(e) => handleHide()}
              aria-label="Close"
            />
          </Modal.Header>

          <div
            className="text-center label-info color-black"
            dangerouslySetInnerHTML={{
              __html: "We will get in touch with you soon...",
            }}
          />
          <div
            className="text-center label-info mt-3 f-size-16 color-black"
            dangerouslySetInnerHTML={{
              __html: "Till then, we welcome you to listen to",
            }}
          />

          <Modal.Footer className="justify-content-center d-grid">
            <Button
              handleClick={(e) => handleRedirectVideo(e, "/browse")}
              title="MESSAGE FROM THE FOUNDER"
              type="button"
            />
            <div className="text-center">
              <a
                onClick={(e) => handleHome(e)}
                href="/"
                className="link text-decoration-none f-700"
              >
                {registeredModal.published
                  ? "Home"
                  : "Continue Building Your Profile"}
              </a>
            </div>
          </Modal.Footer>
        </Modal>

        <FormModal
          handleClose={(e) => setVerifyMobilePopupOpen(false)}
          show={VerifyMobilePopupOpen}
          upperInformationText={`Your Email ID has been successfully verified <img src=${verifiedIcon} alt='email' className='mx-1' />`}
          lowerInformationText="Please enter the OTP sent to your mobile number."
          modalHeading="Verify Mobile Number"
        >
          {/* <img src={verifiedIcon} alt="email" className="mx-1" /> */}
          <VerifyOtp
            errorMsg={errorMsg}
            handleRensedOtp={handleRensedOtp}
            otp={mobileOtp}
            setOtp={setMobileotp}
            handleSubmit={handleVerifyMobileSubmit}
            type="mobile"
          />
        </FormModal>
        <FormModal
          upperInformationText="Let us help you set it up right away"
          lowerInformationText="Enter your email below to receive the reset link"
          show={forgotPasswordOpen}
          modalHeading="Forgot Password"
          onSubmit={handleSubmitForgotPassword}
          submitButtonTitle="Submit"
          disabled={disabledModalSubmit}
          handleClose={() => {
            setForgotPasswordOpen(false);
            setErrorMsg("");
          }}
        >
          <Input
            name="email"
            className={
              email
                ? `form-control active-input with_icon_forgot mt-2 ${
                    errorMsg && "error-border"
                  }`
                : "form-control grey-input with_icon_forgot"
            }
            type="email"
            errors={errorMsg}
            preIconClass={email ? active_email : disable_email}
            labelClass={email ? "label" : "hidden label"}
            label="Email ID"
            placeholder="Email ID"
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormModal>

        <SuccessModal
          modalHeading="Password Reset Link Sent"
          upperInformationText="A link has been sent to your registered email id. Please follow the instructions."
          show={showResetSend}
          submitButtonTitle={"Close"}
          onSubmit={(e) => setResetSend(false)}
        />

        <SuccessModal
          upperInformationText={`Email ID verified <img src=${verifiedIcon} alt="email" className="mx-1" /> Mobile number verified <img src=${verifiedIcon} alt="email" className="mx-1" />`}
          lowerInformationText="Please set up your profile to continue"
          show={successModalOpen}
          submitButtonTitle="STEP INTO GREATNESS"
          onSubmit={() => handleSucessModalSubmit()}
        />
      </div>
    </>
  );
}
