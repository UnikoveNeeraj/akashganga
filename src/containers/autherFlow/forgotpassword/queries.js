import { useMutation } from 'react-query';
import { forgotPassword } from '../../../store/apiCalls/authentication';

function OnForgotPassword(sucessHandler,setErrorMsg) {
    return {
        ...useMutation(forgotPassword, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                setErrorMsg(errMsg?.response?.data.message || errMsg?.response?.data.mesaage||'Something went wrong. Please try again later.')
            },
        })
    }
}

export {
    OnForgotPassword,
}
