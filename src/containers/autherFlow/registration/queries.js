import { useMutation } from 'react-query';
import { registerNewUser } from '../../../store/apiCalls/authentication';

function OnRegisterAuther(sucessHandler,setErrorMsg) {
    return {
        ...useMutation(registerNewUser, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                
                let error = { message: errMsg.response.data.message }
                if (errMsg.response.status === 412) {
                    error = { message: errMsg.response.data.message + " " + errMsg.response.data.data.errors.password[0] }
                }
                setErrorMsg(error?.message)
            },
        })
    }
}


export {
    OnRegisterAuther,
}
