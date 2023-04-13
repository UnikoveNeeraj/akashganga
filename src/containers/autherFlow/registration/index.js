import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RadioButton from "../../../components/common/Radio_button";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import LeftBase from "../../../components/common/LeftBase";
import Select from "../../../components/common/Select";
import Logo from "../../../components/logo/Logo";
import SocialLogin from "../../../components/socialLogin/SocialLogin";
import { OnResendOtp, VerifyVendorEmail } from '../verifyEmail/queries'
import { phoneField, titleOptionsNew } from "../../../constants";
import { SET_LOGIN_USER_SUCCESS, SET_TOKEN_ON_REGISTRATION } from "../../../store/actions/loginActions";
import { Modal } from "react-bootstrap";
import { registerNewUser } from '../../../store/apiCalls/authentication';
import {
  handleShowPassword,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils";
import { OnSocialLogin } from "../login/queries";
import "./index.scss";
import { OnRegisterAuther } from "./queries";
import active_eye from "../../../svg/active-eye.svg";
import active_promo from "../../../svg/active_promo.svg";
import disable_promo from "../../../svg/disable_promo.svg";
import active_email from "../../../svg/active-email.svg";
import active_lock from "../../../svg/active-lock.svg";
import disable_eye from "../../../svg/disable-eye.svg";
import disable_email from "../../../svg/disable-email.svg";
import disable_lock from "../../../svg/disable-lock.svg";
import disable_phone from "../../../svg/disable-phone.svg";
import active_phone from "../../../svg/active-phone.svg";
import active_info from "../../../svg/active-info.svg";
import Divider from "../../../components/common/Divider";
import Checkbox from "../../../components/common/Checkbox";
import FormModal from "../../../components/Modal/formModal";
import SuccessModal from "../../../components/Modal/sucessModal";
import VerifyOtp from "../verifyotp";
import verifiedIcon from "../../../svg/verifiedCheck.svg"
import TermsModal from "../../../components/Modal/TermsModal";
import PrivacyPolicyModal from "../../../components/Modal/PrivacyPolicyModal";

function Registration() {
  const [registrationData, setRegistrationData] = useState({nationality: 'withInIndia', referralCode: new URLSearchParams(window.location.search).get("promo")});
  const [registeredModal, setRegisteredModal] = useState({ show: false, published: false});
  const [otp, setOtp] = useState();
  const [errorMsg, setErrorMsg] = useState('')
  const [mobileOtp, setMobileotp] = useState()
  const [userId, setUserId] = useState()
  const [VerifyPopupOpen, setVerifyPopupOpen] = useState(false);
  const [VerifyMobilePopupOpen, setVerifyMobilePopupOpen] = useState(false);
  const [openSucessModal, setOpenSucessModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    policyCheck: false,
    signupForUpdates: false,
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [disabled, setDisabled] = useState(true);
  const [token, setToken] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sucessHandler = (sucess) => {
    setErrorMsg('')
    setUserId(sucess?.data?.userId)
    setMobileotp(sucess?.data?.otpForMobileVerification)
    setToken(sucess?.data?.token)
    if (registrationData.nationality === 'withInIndia') {
      setVerifyMobilePopupOpen(true);
    } else {
      setVerifyMobilePopupOpen(false)
      setVerifyPopupOpen(true);
    }
  };
  
  const EmailsucessHandler = (sucess) => {
    setErrorMsg('')
    setVerifyPopupOpen(false);
    setOpenSucessModal(true);
  }
  
  const MobilesucessHandler = (sucess) => {
    setMobileotp()
    setErrorMsg('')
    setOtp()
    setVerifyMobilePopupOpen(false)
    setVerifyPopupOpen(true);
    // navigate('/')
  }

  const handleHome = (e) => {
    e.preventDefault();
    navigate(registeredModal.published ? "/" : "/login");
    setRegisteredModal({show: false, published: false});
  }

  const handleRedirectVideo = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  }

  const handleAcceptTermsClose = () => {
    setCheckboxes({ ...checkboxes, policyCheck: true})
    setShowTermsModal(false);
  }

  const handleTermsClose = () => {
    setShowTermsModal(false);
  }

  const handleAcceptPrivacyClose = () => {
    setCheckboxes({ ...checkboxes, policyCheck: true})
    setShowPrivacyModal(false);
  }

  const handlePrivacyClose = () => {
    setShowPrivacyModal(false);
  }

  const handleVerifyEmailSubmit = (e) => {
    e.preventDefault()
    const headers = {
      otp: otp,
      userId: userId
    }
    verifyEmail(headers)
  }

  const handleVerifyMobileSubmit = (e) => {
    e.preventDefault()
    const headers = {
      otpForMobileVerification: mobileOtp,
      userId: userId
    }
    verifyMobile(headers)
  }
  const resendOtpSucess = (sucess) => {
    setErrorMsg('')
    if (sucess?.data?.otpformobileverification) {
      setMobileotp(sucess?.data?.otpformobileverification)
    }
  }
  const handleRensedOtp = (e, type) => {
    e.preventDefault()
    if (type === 'email') {
      let param = {
        email: registrationData?.email
      }
      resedOtp(param)
    }
    else {

      let param = {
        phoneNumber: registrationData?.phoneNumber
      }
      resedOtp(param)
    }
  }


  const { mutate: resedOtp } = OnResendOtp(resendOtpSucess, setErrorMsg)
  const { mutate: verifyEmail } = VerifyVendorEmail(EmailsucessHandler, setErrorMsg);
  const { mutate: verifyMobile } = VerifyVendorEmail(MobilesucessHandler, setErrorMsg);

  const socialSucessHandler = (success) => {
    setErrorMsg('')
    if (success?.data?.isSetupProfile) {
      localStorage.setItem("usertoken", success.data?.token);
      dispatch({
        type: SET_LOGIN_USER_SUCCESS,
        payload: success?.data,
      });
      navigate("/dashboard");
      return null;
    }
    // else if(!success?.data?.isSetupProfile) {
    //   localStorage.setItem("usertoken", success.data?.token);
    //   dispatch({
    //     type: SET_LOGIN_USER_SUCCESS,
    //     payload: success?.data,
    //   });
    //   navigate("/dashboard");
    //   return null;
    // } 
    else {
      setRegisteredModal({show: true, published: success?.data?.isSetupProfile ? true : false});
    }
  };

  const { mutate: socialLogin } = OnSocialLogin(socialSucessHandler);
  const handleClickCheckbox = (e, type) => {
    const { name, checked } = e.target;
    return setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleSocialLogin = (result) => {
    const data = result?.user;

    const apiBody = {
      fullName: data?.displayName,
      email: (result?.providerId === "twitter.com") ? result?.['_tokenResponse']?.email : data?.email,
      rawId: data?.uid,
      isSocialLogin: true,
      signupForUpdates: checkboxes?.signupForUpdates || false,
    };

    socialLogin(apiBody);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registrationData?.password !== registrationData?.confirmPassword) {
      return setErrorMsg('Password and confirm password do not match.')
    }
    const formdata = new FormData();
    for (let key in registrationData) {
      formdata.append(key, registrationData[key]);
    }

    formdata.append("signupForUpdates", checkboxes?.signupForUpdates)
    formdata.append("policyCheck", checkboxes?.policyCheck)

    dispatch({ type: 'SET_LOADER', payload: true});
    const submitResp = await registerNewUser(formdata);
    dispatch({ type: 'SET_LOADER', payload: false});
    if(submitResp?.data?.success) {
      sucessHandler(submitResp)      
    } else if((submitResp?.response?.status === 400)) {
        let error = { message: submitResp.response.data.message }
        if (submitResp.response.status === 412) {
            error = { message: submitResp.response.data.message + " " + submitResp.response.data.data.errors.password[0] }
        }

        if(submitResp?.response?.data?.emailAreadyRegistered) {
          setRegisteredModal({show: true, published: submitResp?.response?.data?.isSetupProfile ? true : false});
        }
        setErrorMsg(error?.message)
    } else {
      setRegisteredModal({show: false, published: false});
      setErrorMsg(error?.message)
    }
    return null;
  };

  const handleSelectChange = (value, type) => {
    return setRegistrationData({ ...registrationData, [type]: value });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === phoneField) {
      return setRegistrationData({
        ...registrationData,
        [name]: validatePhoneNumber(value),
      });
    }

    return setRegistrationData({ ...registrationData, [name]: value });
  };
  const handleSuccessModalSubmit = () => {
    setOpenSucessModal(false)
    localStorage.setItem('usertoken', token)
    dispatch({
      type: SET_TOKEN_ON_REGISTRATION,
      payload: { token: token, _id: userId },
    });
  }

  const handleRedirect = (e, path = '/') => {
    e.preventDefault();
    navigate(path)
  }

  const handleHide = (e) => {
    setRegisteredModal({show: false, published: false})
  }

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  }

  useEffect(() => {
    setDisabled(
      !(
        registrationData?.fullName &&
        validateEmail(registrationData?.email) &&
        (registrationData.nationality === 'Within India' ? (registrationData?.phoneNumber?.length === 10) : true) &&
        registrationData?.title &&
        registrationData?.password &&
        registrationData?.confirmPassword &&
        checkboxes?.policyCheck
      )
    );
  }, [registrationData, checkboxes]);
    // console.log(registrationData,'eugyg')

  const handleNationalityChange  = (e) => {
    setRegistrationData({
      ...registrationData,
      nationality: e.target.id
    })
  }
    
  return (
    <div className="container-flex register-page">
      <div className="row h-100">
        <div className="col-lg-4 col-xl-4 d-none d-lg-block left-base position-relative">
          <LeftBase type="Movement" />
        </div>
        <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 m-auto">
          <div className="px-3">
            {/* <div className="text-end">
              <span>
                <small className="labelColor">Already a member?</small>
              </span>
              <Link to="/login" className="link ms-2">
                Login Now
              </Link>
            </div> */}
            <div className="frame w-75 m-auto">
              <Logo />
              <p className="title mt-3 mb-2">CREATE ACCOUNT</p>
              <p className="w-85 welcome-title m-auto f-700 mb-2">Welcome to Vikramshila</p>
              <p className="w-85 m-auto welcome-title">Let us get to know you better</p>
              <p className="w-85 m-auto welcome-title mb-1">Please fill your details to register with us</p>
              <Form onSubmit={handleSubmit}>
                <div className="form-group mt-4 mb-2 d-flex ps-10 country-select">
                  <RadioButton
                    label="Within India"
                    name="nationality"
                    id="withInIndia"
                    labelClass={registrationData.nationality === 'withInIndia' ? "form-check-label" : "form-check-label disable"}
                    checked={registrationData.nationality === 'withInIndia'}
                    handleChange={handleNationalityChange}
                    required
                  />
                  <RadioButton
                    label="Outside India"
                    name="nationality"
                    id="outSideIndia"
                    labelClass={registrationData.nationality === "outSideIndia" ? "form-check-label" : "form-check-label disable"}
                    checked={registrationData.nationality === "outSideIndia"}
                    handleChange={handleNationalityChange}
                    required
                  />
                </div>
                <div className="title_with_name">
                  <div className="w-25 me-1">
                    <Select
                      handleChange={(value) => handleSelectChange(value, 'title')}
                      selectedValue={registrationData.title}
                      options={titleOptionsNew?.map(val=>val?.key)}
                      optionValues={titleOptionsNew?.map(val=>val?.value)}
                      labelClass={registrationData?.title ? "" : "hidden"}
                      label="Title"
                      placeholder="Title"
                      name="title"
                    />
                  </div>
                  <div className="w-100">
                    <Input
                      name="fullName"
                      className={
                        registrationData?.fullName
                          ? "form-control active-input"
                          : "form-control grey-input"
                      }
                      handleChange={handleChange}
                      type="text"
                      labelClass={registrationData?.fullName ? "" : "hidden"}
                      label="Full Name"
                      placeholder="Full Name"
                      value={registrationData.fullName}
                    />
                  </div>
                </div>
                {
                  registrationData.nationality !== 'outSideIndia' && (
                    <div className="position-relative">
                      <span className={registrationData?.phoneNumber ? "tel-active" : "tel-disable"}>+91 |</span>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        className={
                          registrationData?.phoneNumber
                            ? "form-control active-input tel-pd"
                            : "form-control grey-input  tel-pd"
                        }
                        preIconClass={
                          registrationData?.phoneNumber ? active_phone : disable_phone
                        }
                        handleChange={handleChange}
                        labelClass={registrationData?.phoneNumber ? "" : "hidden"}
                        value={registrationData.phoneNumber}
                        label="Mobile Number"
                        placeholder="xxxxxxxxxx"
                      />
                    </div>
                  )
                }
                <Input
                  name="email"
                  handleChange={handleChange}
                  type="email"
                  className={
                    registrationData?.email
                      ? "form-control active-input with_icon"
                      : "form-control grey-input with_icon"
                  }
                  preIconClass={
                    registrationData?.email ? active_email : disable_email
                  }
                  labelClass={registrationData?.email ? "" : "hidden"}
                  label="Email ID"
                  placeholder="Email ID"
                  value={registrationData.email}
                />
                <Input
                  name="password"
                  handleChange={handleChange}
                  type={!showPassword?.password ? "password" : "text"}
                  className={
                    registrationData?.password
                      ? "form-control active-input with_icon"
                      : "form-control grey-input with_icon"
                  }
                  preIconClass={
                    registrationData?.password ? active_lock : disable_lock
                  }
                  postIconClass={
                    registrationData?.password ? active_eye : disable_eye
                  }
                  labelClass={registrationData?.password ? "" : "hidden"}
                  value={registrationData.password}
                  placeholder="Password"
                  pattern="^(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,})(?=(?:.*\d){1,})(?=(?:.*[!@#$%^&*-]){1,}).{8,}$"
                  label="Password"
                  labelIcon={active_info}
                  title="Password should be of 8 character with one number, one capital letter and a special character."
                  onIconClick={() =>
                    handleShowPassword(
                      setShowPassword,
                      showPassword,
                      "password"
                    )
                  }
                />

                <Input
                  name="confirmPassword"
                  handleChange={handleChange}
                  type={!showPassword?.confirmPassword ? "password" : "text"}
                  className={
                    registrationData?.confirmPassword
                      ? "form-control active-input with_icon"
                      : "form-control grey-input with_icon"
                  }
                  preIconClass={
                    registrationData?.confirmPassword
                      ? active_lock
                      : disable_lock
                  }
                  postIconClass={
                    registrationData?.confirmPassword ? active_eye : disable_eye
                  }
                  labelClass={registrationData?.confirmPassword ? "" : "hidden"}
                  value={registrationData.confirmPassword}
                  placeholder="Confirm Password"
                  pattern="^(?=(?:.*[a-z]){1,})(?=(?:.*[A-Z]){1,})(?=(?:.*\d){1,})(?=(?:.*[!@#$%^&*-]){1,}).{8,}$"
                  label="Confirm Password"
                  title="Password should be of 8 character with one number, one capital letter and a special character."
                  onIconClick={() =>
                    handleShowPassword(
                      setShowPassword,
                      showPassword,
                      "confirmPassword"
                    )
                  }
                />

                <div className="position-relative promo">
                  <Input
                    errors={errorMsg}
                    type="text"
                    name="referralCode"
                    preIconClass={
                      registrationData?.referralCode ? active_promo : disable_promo
                    }
                    handleChange={handleChange}
                    value={registrationData?.referralCode}
                    placeholder="Referral Code"
                    className={
                      registrationData?.referralCode
                        ? "form-control with_icon active-input"
                        : "form-control with_icon grey-input"
                    }
                    labelClass={registrationData?.referralCode ? "" : "hidden"}
                    label="Referral Code"
                    optionLabel={true}
                    showOptionalIcon={!registrationData?.referralCode}
                    />
                    {/* {!registrationData?.referralCode &&
                      <span className="option-badge mandatory-span badge optional-placement">Optional</span>
                    } */}
                </div>

                <label className="small pt-2 text-start styledCheck position-relative">
                  <Checkbox
                    onRadioChange={handleClickCheckbox}
                    name="policyCheck"
                    checked={checkboxes?.policyCheck}
                    className="form-check-input"
                  />
                  <span>
                    {" "}
                  <span className="labelColor">I have read Vikramshila’s</span>
                  <TermsModal showTermsModal={showTermsModal} handleTermsClose={handleTermsClose} handleAcceptTermsClose={handleAcceptTermsClose} />
                  <Link href="#" onClick={() => setShowTermsModal(true)} className="link">
                    {" "}
                    Terms of Use{" "}
                  </Link>{" "}
                  <span className="labelColor">and</span>
                  <PrivacyPolicyModal showPrivacyModal={showPrivacyModal} handlePrivacyClose={handlePrivacyClose} handleAcceptPrivacyClose={handleAcceptPrivacyClose} />
                  <Link href="#" onClick={(e) => setShowPrivacyModal(true)} className="link">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  </span>
                </label>
                <div className="mb-4 mt-4 text-center">
                  <Button type="submit" title="CONTINUE" disabled={disabled} />
                </div>
              </Form>
              <div className="mx-25">
                <Divider />
              </div>
              <div className="mt-25-mb-20 text-center">
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
                Do not forget to add us to your <span className="f-600">Safe Senders List</span>
              </p>
              <p className="footer-note">We will NEVER post anything without your permission. Isn't this cool?</p>
            </div>
            {/* <div
              className="pullUp"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <b className="icon-arrow-right" />
            </div> */}

            <div class="row align-items-center justify-content-between contentFooter pt-3">
              <div class="col text-end">
                <a onClick={handleChatBot} class="helpLink">
                  <b class="icon-help"></b>Help
                </a>
              </div>
            </div>

          </div>
        </div>
        <FormModal className='verified-mobile_popup static-modal' handleClose={(e) => setVerifyMobilePopupOpen(false)} errorMsg={errorMsg} show={VerifyMobilePopupOpen} informationText="Please enter the OTP sent to your mobile number" modalHeading='Verify Mobile Number'>
          <VerifyOtp handleRensedOtp={handleRensedOtp} otp={mobileOtp} setOtp={setMobileotp} handleSubmit={handleVerifyMobileSubmit} type='mobile' />
        </FormModal>

        <FormModal show={VerifyPopupOpen} size="sm" handleClose={(e) => setVerifyPopupOpen(false)} upperInformationText={`Your mobile number has been successfully verified <img src=${verifiedIcon} alt="mobile" class="mx-1 mb-1" />`} lowerInformationText="Please enter the OTP sent to your email ID" modalHeading='Verify Email ID'>
          <VerifyOtp errorMsg={errorMsg} handleRensedOtp={handleRensedOtp} otp={otp} setOtp={setOtp} handleSubmit={handleVerifyEmailSubmit} type='email' />
        </FormModal>
        

        <Modal show={registeredModal.show} onHide={handleHide} className="re-register justify-content-center pb-3 px-0 pt-0" centered>
          <Modal.Header className="justify-content-center px-0 pt-0">
              <Modal.Title>
                  <div className="big-heading error-title">YOU ARE ALREADY REGISTERED</div>
              </Modal.Title>
              <button
                type="button"
                className="btn-close"
                onClick={(e) => handleHide()}
                aria-label="Close"
              />
          </Modal.Header>

          <div className="text-center label-info f-700 color-black" dangerouslySetInnerHTML={{__html: "We will get in touch with you soon..." }}/>
          <div className="text-center label-info mt-3 color-black f-size-16" dangerouslySetInnerHTML={{__html: "Till then, we welcome you to listen to" }}/>

          <Modal.Footer className="justify-content-center d-grid">
              <Button handleClick={(e) => handleRedirectVideo(e, "/browse")} title="MESSAGE FROM THE FOUNDER" type='button' />
              <div className="text-center">
                  <a onClick={(e) => handleHome(e)} href='/' className="link text-decoration-none f-700">{registeredModal.published ? "HOME" : "Complete Profile Setup"}</a>
              </div>
          </Modal.Footer>
        </Modal>

        <SuccessModal
          size='sm'
          bigHeading="CONGRATULATIONS!"
          upperInformationText={`Mobile number verified <img src=${verifiedIcon} alt="email" className="mx-1" /> Email ID verified <img src=${verifiedIcon} alt="email" className="mx-1" />`}
          lowerInformationText="Please set up your profile to continue"
          show={openSucessModal}
          onSubmit={() => {
            handleSuccessModalSubmit()
          }}
          submitButtonTitle="STEP into GREATNESS"
        />
      </div>
    </div>
  );
}

export default Registration;