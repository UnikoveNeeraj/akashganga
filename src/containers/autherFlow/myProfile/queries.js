import { useMutation } from "react-query";
import { changePassword } from "../../../store/apiCalls/profileDetails";
import { genericError } from "../../../utils";

function UpdatePassword(sucessHandler) {
    return {
        ...useMutation(changePassword, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}
export {
    UpdatePassword,
}
