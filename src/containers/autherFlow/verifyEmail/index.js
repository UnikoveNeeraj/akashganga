import { useNavigate, useParams } from "react-router-dom";
import { getEmailVerified } from "../../../store/apiCalls/authentication";
import { genericError } from "../../../utils";
import { VerifyVendorEmail } from "./queries";

function VerifyEmail() {
    const navigate = useNavigate();
    const { token } = useParams();
    const verify = async () => {
        const headers = { token: `${token}` };
        return getEmailVerified(headers, {});
    };
    const sucessHandler = (res) => {
        if (res.data.success) {
            // toast.success(res.data.message);
            return navigate("/registration",{ state: { openModal: true}});
        }
        genericError(res.data);
        return navigate('/registration')
    };
    const errorhandler =(err)=>{
        genericError(err);
        return navigate('/registration')
    }
    VerifyVendorEmail(verify, sucessHandler,errorhandler);

    return (
        <div className="container-flex">
            <div>Verifying Email Please wait ....</div>
        </div>
    );
}

export default VerifyEmail;