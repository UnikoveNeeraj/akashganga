import { useMutation } from "react-query";
import { getEmailVerified, resendOtpForVerification } from "../../../store/apiCalls/authentication";
function VerifyVendorEmail(sucessHandler, setErrorMsg) {
  return {
    ...useMutation(getEmailVerified, {
      onSuccess: (data) => { sucessHandler(data) },
      onError: (errMsg) => {
        setErrorMsg(errMsg?.response?.data?.message || 'Please enter a valid OTP')
      },
    })
  }
}
function VerifyVendorMobile(sucessHandler, setErrorMsg) {
  return {
    ...useMutation(getEmailVerified, {
      onSuccess: (data) => { sucessHandler(data) },
      onError: (errMsg) => {
        setErrorMsg(errMsg?.response?.data?.message || 'Please enter a valid OTP')
      },
    })
  }
}
function OnResendOtp(sucessHandler, setErrorMsg) {
  return {
    ...useMutation(resendOtpForVerification, {
      onSuccess: (data) => { sucessHandler(data) },
      onError: (errMsg) => {
        setErrorMsg(errMsg?.response?.data.mesaage || errMsg?.response?.data.message || "Something went wrong. Please try again later.")
      },
    })
  }
}

export { VerifyVendorEmail, VerifyVendorMobile, OnResendOtp }
