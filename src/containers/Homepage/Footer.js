import { BASE_APP, SERVER_URL} from "../../config"
import vikramshilaLogo from "../../assets/img/logos/vikramshilaLogo.png"
import BannerSvg from "../../assets/img/bg/feedback_banner.png"
import startUpIndia from "../../assets/img/banner/startupIndia.svg" 
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { councilMembers } from "../../utils";

const Footer = () => {
    useEffect(() => {
        // $('.menuToggle').click(function () {
        //     $(this).closest('header').find('.navWrap').toggleClass('active');
        //   });
    }, [])

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
        <footer className="footer">
        <div className="footer-title">
            <div className="containWrap">
            <h2>A HOMEGROWN INDIAN PLATFORM FOR RESEARCH DISSEMINATION</h2>
            </div>
        </div>
        <div className="containWrap">
            <div className="footer-rest">
            <div className="footer-intro">
                <div className="cmyLogo">
                    <a href={SERVER_URL} onClick={(e) => handleRedirect(e, '/')}><img src={vikramshilaLogo} alt="#" /></a>
                </div>
                <div className="contactLinks">
                <p>
                    <b className="icon-mail" />
                    contactus@vikramshilaedu.in
                </p>
                </div>
                <div className="startup-img">
                    <a href="https://www.startupindia.gov.in/" target="_blank">
                        <img src={startUpIndia} alt="#" />
                    </a>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-col">
                <h3>Vikramshila</h3>
                <ul>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/about')} className={(window.location.pathname === '/about') ? "active" : ''}>About</a>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/teams')} className={(window.location.pathname === '/teams') ? "active" : ''}>The Team</a>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/advisory')} className={(window.location.pathname === '/advisory') ? "active" : ''}>Advisory Board</a>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/council')} className={isCouncil()}>Academic Council</a>
                    </li>
                </ul>
                </div>
                <div className="footer-col">
                <h3>Products</h3>
                <ul>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/work-in-progress-akashganga')}  className={(window.location.pathname === '/work-in-progress-akashganga') ? "active" : ''}>Akashganga</a>
                    </li>
                    <li>
                    <a href="#" onClick={(e) => handleRedirect(e, '/work-in-progress-kaashi')}  className={(window.location.pathname === '/work-in-progress-kaashi') ? "active" : ''}>Kaashi</a>
                    </li>
                    <li>
                        <a href={`${BASE_APP}/Sevahaat/registration`} className={(window.location.pathname === `${BASE_APP}/Sevahaat/registration`) ? "active" : ''}>Seva Haat</a>
                    </li>
                    <li>
                    <a href="/" onClick={(e) => handleRedirect(e, '/contactus')} className={(window.location.pathname === '/contactus') ? "active" : ''}>Contact Us</a>
                    </li>
                </ul>
                </div>
                <div className="footer-col">
                    <h3>More</h3>
                    <ul>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/faq')} className={(window.location.pathname === '/faq') ? "active" : ''}>FAQs</a>
                        </li>
                        <li>
                            <a href={`${SERVER_URL}/blog`} className={(window.location.pathname === '/blog') ? "active" : ''}>Blog</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/playlist')} className={(window.location.pathname === '/playlist') ? "active" : ''}>Playlists</a>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => handleRedirect(e, '/resourcecentre')} className={(window.location.pathname === '/resourcecentre') ? "active" : ''}>Resource Centre</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="socialLinks">
            
            <div className="socialLinks-wrap">
                <h3>Follow Us</h3>
                <ul>
                <li>
                    <a href="https://m.facebook.com/100089485867225/" target="_blank" >
                    <b className="icon-facebook_fill" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/vikramshila-education-pvt-ltd/" target="_blank">
                    <b className="icon-linkdin_fill" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/VikramshilaL" target="_blank">
                    <b className="icon-tweet_fill" />
                    </a>
                </li>

                </ul>
            </div>
            </div>

            
            <div className="footerFeeback" style={{display: 'none'}}>
                <a>
                    {" "}
                    <img src={startUpIndia} alt="#" /> 
                </a>
            </div>
            <div className="copyRight">
            <small><span>©</span> Vikramshila Research Pvt Ltd 2022 </small>
            <div className="legalLinks">
                <a href="/" onClick={(e) => handleRedirect(e, '/terms')}>Terms of Use</a>
                {/* <a href="/" onClick={(e) => handleRedirect(e, '/cookie')}>Cookie Settings</a> */}
                <a href="/" onClick={(e) => handleRedirect(e, '/privacy-policy')}>Privacy Policy</a>
                
                <small className="pt-2" style={{ color: 'black' }}>Found a bug in the platform? Please <a className="know-link" href="mailto:contactus@vikramshilaedu.in?subject=Feedback: I found a bug in the platform"><u style={{ color: 'black' }}>click here</u></a></small>
                <small style={{ color: 'black' }}>Best viewed on Google Chrome for Windows and Safari for MAC</small>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;