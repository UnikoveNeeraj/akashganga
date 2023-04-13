import { useMutation } from 'react-query';
import { resetPassword } from '../../../store/apiCalls/authentication';
import { genericError } from '../../../utils';

function OnPasswordReset(sucessHandler) {
    return {
        ...useMutation(resetPassword, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}


export {
    OnPasswordReset,
}
