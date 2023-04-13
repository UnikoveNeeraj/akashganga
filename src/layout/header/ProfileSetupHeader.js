import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import greatnessHeader from "../../svg/greatness-header.svg";
import "./index.scss";

const ProfileSetupHeader = () => {  
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);

    return(
        <div>
            <header className={scroll ? "custom_header fixed-top" : "custom_header"}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid align-items-end">
                        {/* <a
                            className="mobile-view"
                            data-bs-toggle="offcanvas"
                            href="#offcanvasMobile"
                            role="button"
                            aria-controls="offcanvasMobile"
                        >
                            <i className="fa fa-arrow-circle-o-left"></i>
                        </a> */}
                        <div className="col-lg-6 col-sm-5 col-xs-5 col-5 text-start">
                        <Link to="/">
                            <Logo />
                        </Link>
                        </div>
                        <div className="col-lg-6 col-sm-7 col-xs-7 col-7 text-end logo-left">
                            <img src={greatnessHeader} alt="greatness header" className="w-70 pb-2" />
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default ProfileSetupHeader;