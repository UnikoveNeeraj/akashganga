import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import moreIcon from "../../assets/img/icons/more.png";
import kaashiLogo from "../../assets/img/logos/KAASHI.svg";
import { useNavigate } from "react-router-dom";

/*import "../../assets/scss/sections/_soon.scss";*/

const WIP = () => {
    const navigate = useNavigate();
    const handleChatBot= (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    const handleRedirect = (e, path = '/') => {
        navigate(path)
    }

    return (
        <>
            <Header />
            <div className="centerSection">
                <div className="soonSection innerPages">
                    <div className="containWrap">
                        <div className="row justify-content-between align-items-center">
                            <div class="cmyMessage">
                                <div class="messageWrap">
                                    <h2>
                                        <span className="imgLigo">
                                            <img src={kaashiLogo} alt="#" />
                                        </span>
                                    </h2> 
                                    <p>Kashi is the ancient name of modern-day Varanasi, considered to be the oldest living city in the world.
                                        It is also the seat of learning and the home of some of the rarest works of India.</p>
                                    <p>Kaashi is an automated publishing platform that will help authors publish full length manuscripts in
                                        record time. The thrust is to publish books in Open Access format but also cater to authors who
                                        wish to sell their books in print.</p>
                                    <p>Indian Higher Education is still driven largely by foreign authorship controlled by Western publishers.
                                        While Indian publishers offer quality teaching resources, their reach and acceptance has remained a
                                        challenge. </p>
                                    <p>Through its innovative publishing processes Kaashi and other products from the Vikramshila stable will
                                        combine forces to provide affordable, current, and relevant content at population scale.</p>
                                </div>
                            </div>
                            <div className="soonContent">
                                <h1>ALL GOOD THINGS TAKE TIME...</h1>
                                <p>
                                    While we work tirelessly to build this phenomenal platform, here’s
                                    what you can do in the meantime:
                                </p>
                                <ul className="otherLinks">
                                    <li>
                                        <div className="linkBox">
                                            <div className="linkBox-img">
                                                {" "}
                                                <img src={moreIcon} alt="#" />
                                            </div>
                                            <div className="linkBox-info">
                                                <p>Join the movement</p>
                                                <span onClick={(e) => handleRedirect(e, '/registration')}>Register with us now!</span>
                                                <a onClick={(e) => handleRedirect(e, '/registration')} >
                                                    <b className="icon-arrow-long-left" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="linkBox">
                                            <div className="linkBox-img">
                                                {" "}
                                                <img src={moreIcon} alt="#" />
                                            </div>
                                            <div className="linkBox-info">
                                                <p>We make a difference</p>
                                                <span onClick={(e) => handleRedirect(e, '/browse')}>Message from the Founder</span>
                                                <a onClick={(e) => handleRedirect(e, '/browse')}>
                                                    <b className="icon-arrow-long-left" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="linkBox">
                                            <div className="linkBox-img">
                                                {" "}
                                                <img src={moreIcon} alt="#" />
                                            </div>
                                            <div className="linkBox-info">
                                                <p>Meet the dreamcatchers</p>
                                                <span onClick={(e) => handleRedirect(e, '/teams')}>The Vikramshila team</span>
                                                <a onClick={(e) => handleRedirect(e, '/teams')}>
                                                    <b className="icon-arrow-long-left" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="linkBox">
                                            <div className="linkBox-img">
                                                {" "}
                                                <img src={moreIcon} alt="#" />
                                            </div>
                                            <div className="linkBox-info">
                                                <p>Share our love of music</p>
                                                <span onClick={(e) => handleRedirect(e, '/playlist')}>Go to our curated playlists</span>
                                                <a onClick={(e) => handleRedirect(e, '/playlist')}>
                                                {/* <a href="https://open.spotify.com/playlist/0FoubBS5ukCp1flFkTd1IT?si=FjIblG89SHiffKer0ihM1A" target="_blank"> */}
                                                    <b className="icon-arrow-long-left" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="pullUp"
                            onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <b className="icon-arrow-right" />
                        </div>

                        <div class="row align-items-center justify-content-between contentFooter">
                            <div class="col text-end"><a onClick={handleChatBot} class="helpLink">
                                <b class="icon-help"></b>Help</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default WIP;