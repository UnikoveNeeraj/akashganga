import menuSvg from "../../assets/img/icons/menu.svg"
import vikramshilaLogo from "../../assets/img/logos/vikramshilaLogo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SERVER_URL} from "../../config";
import { councilMembers } from "../../utils";

const Header = () => {
    useEffect(() => {
        $('.menuToggle').click(function () {
            $(this).closest('header').find('.navWrap').toggleClass('active');
        });
    }, [])

    const isLoggedIn = useSelector(
        (state) => state?.LoginReducer?.userLoginDetails?.token ?? null
    );

    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({top: 0, behavior: 'smooth'});
        navigate(path)
    }

    const isCouncil = () => {
        const isCouncilPage = councilMembers.indexOf(window.location.pathname) > -1 || window.location.pathname === '/council';
        return isCouncilPage ? 'active' : "";
    }

    const isAdvisory = () => {
        const isAdvisoryPage = window.location.pathname.match('/member-details') || window.location.pathname === '/advisory';
        return (isAdvisoryPage && !isCouncil()) ? 'active' : "";
    }
    
    
    return(
        <header className="homepage__header">
            <a className="menuToggle">
                <img src={menuSvg} alt="#" />
            </a>
            <div className="cmyLogo">
                <a href={SERVER_URL} onClick={(e) => handleRedirect(e, '/')}><img src={vikramshilaLogo} alt="#" /></a>
            </div>
            <div className="navWrap">
            <div className="navList">
                <nav>
                    <ul>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/')} className={(window.location.pathname === '/') ? "active" : ''}>Home</a>
                        </li>
                        <li>
                            <a href="/" className={isAdvisory()}  onClick={(e) => handleRedirect(e, '/advisory')}>Advisory Board</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/council')} className={isCouncil()}>Academic Council</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/resourcecentre')} className={(window.location.pathname === '/resourcecentre') ? "active" : ''}>Resource Centre</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/about')} className={(window.location.pathname === '/about') ? "active" : ''}>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
            <div className="navSign">
                <a href="/login" onClick={(e) => handleRedirect(e, '/login')} className="signIn">Login</a>
                {isLoggedIn ?
                    <a href="/personaldetails" onClick={(e) => handleRedirect(e, '/personaldetails')} className="signUp">My Profile</a>
                   :
                    <a href="/registration" onClick={(e) => handleRedirect(e, '/registration')} className="signUp">Get Started Now!</a>
                }
            </div>
        </header>
    )
}

export default Header;