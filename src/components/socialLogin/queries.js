import { useMutation } from 'react-query';
import { linkedInAuthentication, LinkedinProfileDetails, LinkedinTokenAuth } from '../../store/apiCalls/authentication';
import { genericError } from '../../utils';

function OnLinkedinAuth(sucessHandler) {
    return {
        ...useMutation(linkedInAuthentication, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}
function OnGettingToken(sucessHandler) {
    return {
        ...useMutation(LinkedinTokenAuth, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}
function OnFetchingDetails(sucessHandler) {
    return {
        ...useMutation(LinkedinProfileDetails, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}

export {
    OnLinkedinAuth,
    OnGettingToken,
    OnFetchingDetails,
}
