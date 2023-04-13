import repueeLogo from "../../assets/img/icons/rupee.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import { useState, useEffect } from "react";


const Sidebar = () => {
    const activePath = window.location.pathname;
    const [currentLink, setCurrentLink] = useState("/dashboard");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentLink(window.location.pathname);
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT_STATUS_SUCCESS' })
        navigate("/")
    };

    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        navigate(path)
    }

    const handleChange = (e) => {
        navigate(e.target.value)
        setCurrentLink(e.target.value)
    }

    return (
        <div className="pageMenu text-initial">
            <h2 className="sideTitle">View Dashboard As</h2> 
            {/* <div className="customSelect">
                <Form.Select onChange={handleChange} value={currentLink}>
                    <option value={PATH.DASHBOARD.HOME}>Author</option>
                    <option value={PATH.DASHBOARD.PEER_REVIEWER}>Peer Reviewer</option>
                    <option value={PATH.DASHBOARD.PUBLISHING_EDITOR}>Publishing Editor</option>
                </Form.Select>
            </div> */}

            <div className="customDrop sideDrop">
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                    Author
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href={PATH.DASHBOARD.HOME} className="active">Author</Dropdown.Item>
                        <Dropdown.Item href={PATH.DASHBOARD.PEER_REVIEWER}>Peer Reviewer</Dropdown.Item>
                        <Dropdown.Item href={PATH.DASHBOARD.PUBLISHING_EDITOR}>Publishing Editor</Dropdown.Item> 
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="pageMenu-link">
                <ul>
                    <li>
                        <a className={activePath === "/myProfile" ? "active" : null} href="/myProfile" onClick={(e) => handleRedirect(e, '/myProfile')}>My Profile</a>
                    </li>
                    <li>
                        <a className={activePath === "/mudraKosh" ? "active" : null} href="/mudraKosh" onClick={(e) => handleRedirect(e, '/mudraKosh')}>Mudra Kosh</a>
                        
                    </li>
                </ul>
            </div>
            {/* <h2 className="sideTitle">Payment Status</h2>
            <div className="pageMenu-link">
            <ul>
                <li>
                <a>Registration Payment</a>
                </li>
                <li>
                <a>Full Payment</a>
                </li>
              
            </ul>
            </div> */}
            <h2 className="sideTitle">My Articles</h2>
            <div className="pageMenu-link">
                <ul>
                    <li>
                        <Link to={{ pathname: "/myArticle/draft" }} state={"draft"} className={activePath === "/myArticle/draft" ? "active" : null}>Drafts</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/myArticle/under-review"}} state={"submit"} className={activePath === "/myArticle/under-review" ? "active" : null}>Under Review</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/myArticle/approved"}} state={"approved"} className={activePath === "/myArticle/approved" ? "active" : null}>Approved</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/myArticle/rejected"}} state={"rejected"} className={activePath === "/myArticle/rejected" ? "active" : null}>Rejected</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "/myArticle/published"}} state={"published"} className={activePath === "/myArticle/published" ? "active" : null}>Published</Link>
                    </li>
                </ul>
            </div>
            <div className="pageMenu-link">
                <ul>
                    <li>
                        <a>My Services</a>
                    </li>
                    <li>
                        <a className={activePath === "/readingListing" ? "active" : null} href="/readingListing" onClick={(e) => handleRedirect(e, '/readingListing')}>Reading List</a>
                    </li>
                    <li>
                        <a>Resource Centre</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Need Help?</a>
                    </li>
                </ul>
            </div>
            <div className="pageMenu-link">
                <ul>
                    <li>
                        <a onClick={() => handleLogout()}>
                            <b className="icon-logout" /> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar;
