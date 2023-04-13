import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import sample1 from "../../assets/img/sample/sample_01.jpg";
import sample2 from "../../assets/img/sample/sample_02.jpg";
import cookie from "../../assets/img/icons/cookies.png";

const Cookie = () => {
    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }
    return (
        <>
            <Header />

            <div className="cookieSection innerPages">
                <img src={cookie} style={{display: 'none'}}/>
                <div className="containWrap">
                    <div className="cookieRow">
                        <div className="cookieLeft">
                            <div className="cookieHero">
                                <h1>Cookie Settings</h1>
                                <p>
                                    We use cookies across the website to optimise its performance. You
                                    can review your cookie preferences below, and amend them at any
                                    time. Preferences will be saved automatically when changed, and can
                                    also be saved at the bottom of the page.
                                </p>
                            </div>
                            <div className="cookieContent splContent">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-9">
                                        <h2>Allow all non-essential cookies</h2>
                                    </div>
                                    <div className="col text-end">
                                        <div className="customSwitch">
                                            <label>
                                                <input type="checkbox" checked />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cookieContent">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-9">
                                        <h2>Essential Cookies</h2>
                                    </div>
                                    <div className="col text-end">
                                        <div className="customSwitch">
                                            <label>
                                                <input type="checkbox" checked />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Certain cookies are considered essential, as they are used solely to
                                    maintain our web pages. Essential cookies are used to keep you
                                    logged in, anonymously track errors that might occur, and help
                                    maintain site stability and functionality. These cookies can not be
                                    disabled.
                                </p>
                            </div>
                            <div className="cookieContent">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-9">
                                        <h2>Functionality Cookies</h2>
                                    </div>
                                    <div className="col text-end">
                                        <div className="customSwitch">
                                            <label>
                                                <input type="checkbox" checked />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    We embed certain third-party widgets on the journal, such as Twitter
                                    and Hypothes.is. These widgets may set their own cookies. Cookie
                                    information from these sites is usually anonymous, unless you are
                                    logged in to those third-party systems whilst on our site.
                                </p>
                            </div>
                            <div className="cookieContent">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-9">
                                        <h2>Analytics &amp; Tracking</h2>
                                    </div>
                                    <div className="col text-end">
                                        <div className="customSwitch">
                                            <label>
                                                <input type="checkbox" checked />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Analytics cookies are used to measure how many people visit each
                                    page, and what options they click on, in order to maintain and
                                    improve website performance.
                                </p>
                            </div>
                            <div className="cookieContent">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-9">
                                        <h2>Marketing</h2>
                                    </div>
                                    <div className="col text-end">
                                        <div className="customSwitch">
                                            <label>
                                                <input type="checkbox" checked />
                                                <span />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    We use cookies for a variety of reasons detailed below.
                                    Unfortunately in most cases there are no industry standard options
                                    for disabling cookies without completely disabling the functionality
                                    and features they add to xyz. It is recommended that you leave on
                                    all cookies if you are not sure whether you need them.
                                </p>
                            </div>
                        </div>
                        <div className="cookieRight">
                            <div className="checkOut">
                                <h2>Also Check Out</h2>
                                <div className="checkBox">
                                    <div className="checkBox-img">
                                        <img src={sample1} alt="#" />
                                    </div>
                                    <div className="checkBox-info">
                                        <h3>Message from the Founder</h3>
                                        <p>
                                            Vikramshila is a mission. Listen to our founder talk about the
                                            dream that is Vikramshila.
                                        </p>
                                    </div>
                                    <a>WATCH NOW</a>
                                </div>
                                <div className="checkBox">
                                    <div className="checkBox-img">
                                        <img src={sample2} alt="#" />
                                    </div>
                                    <div className="checkBox-info">
                                        <h3>Resource Centre</h3>
                                        <p>
                                            Find diverse resources to support you through every stage of
                                            your research dissemination.{" "}
                                        </p>
                                    </div>
                                    <a>EXPLORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="pullUp"
                        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <b className="icon-arrow-right" />
                    </div>
                    <div class="row align-items-center justify-content-between contentFooter"><div class="col text-end"><a  onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>

                </div>
            </div>

            <Footer />
        </>
    )
}


export default Cookie;