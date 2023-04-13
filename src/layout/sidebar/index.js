import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT_STATUS_SUCCESS } from "../../store/actions/loginActions";
import "./index.scss";

function Sidebar() {
    const [profileName] = useState(useSelector((state) => state?.LoginReducer?.user?.fullName ?? {}))
    const dispatch = useDispatch()
    const splitName = (fullName) => {
        const [first] = fullName.split(' ')
        return first
    }
    const handleLogout = () => {
        localStorage.clear();
        dispatch({ type: LOGOUT_STATUS_SUCCESS })
    };
    return (
        <div className="sidebar">
            <p className="mb-1"><small>Welcome, {splitName(profileName)}!</small></p>
            <p><Link to="#">My Profile</Link><br /></p>
            <Link to="#">Mudra Kosh</Link><br />
            <p><small><i className="fa fa-rupee me-2"></i>Balance: Rs 5000</small></p>
            <hr />
            <p><small>My Articles</small></p>
            <p><Link to="#">Drafts</Link><br /></p>
            <p><Link to="#">Under Review</Link><br /></p>
            <p><Link to="#">Approved</Link><br /></p>
            <p><Link to="#">Rejected</Link><br /></p>
            <p><Link to="#">Published</Link><br /></p>
            <hr />
            <p><Link to="#">Reading List</Link><br /></p>
            <p><Link to="#">Resource</Link><br /></p>
            <p><Link to="#">Need Help?</Link><br /></p>
            <hr />
            <Link to="#" onClick={() => handleLogout()} className="text-muted">Logout</Link><br />
            <p></p>
            <p></p>
        </div>
    )
}
export default Sidebar