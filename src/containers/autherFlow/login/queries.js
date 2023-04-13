import { useMutation } from 'react-query';
import { loginUser, socialLogin, verifyOTP } from '../../../store/apiCalls/authentication';
import { genericError } from '../../../utils';

function OnLogin(sucessHandler,setErrorMsg) {
    return {
        ...useMutation(loginUser, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                const error =  errMsg.response.statusText 
                if (errMsg?.response?.data.message || errMsg?.response?.data.mesaage) {
                  return  setErrorMsg(errMsg?.response?.data.message || errMsg?.response?.data.mesaage||'Something went wrong. Please try again later.')
                }
                return setErrorMsg(error)
            },
        })
    }
}
function OnOTPVerification(sucessHandler,setErrorMsg) {
    return {
        ...useMutation(verifyOTP, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                const message=errMsg?.response?.data?.message||'Please enter a valid OTP'
                setErrorMsg(message)
            },
        })
    }
}
function OnSocialLogin(sucessHandler) {
    return {
        ...useMutation(socialLogin, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}


export {
    OnLogin,
    OnSocialLogin,
    OnOTPVerification,
}
