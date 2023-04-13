import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import ReactPlayer from "react-player/youtube";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import { useNavigate } from "react-router-dom";
const BrowseVideo = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({top: 0, behavior: 'smooth'});
        navigate(path)
    }

    const handleChatBot= (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }
    
    return(
        <>
            <Header />
            <div className="resourceSection innerPages">
                <div className="containWrap">
                    <div className="resourceWrap">
                    <h1>
                        Browse <b>Videos</b>
                    </h1>
                    </div>
                    <div className="videoList">
                    <ul>
                        <li>
                        <div className="videoBox borderBox">
                            <div className="videoBox-placeholder">
                            <ReactPlayer 
                                url="https://www.youtube.com/watch?v=Iewt4-w2R9g"
                                playing={false}
                                controls={true}
                                loop={true}
                                width="100%"
                            />
                            </div>
                            <div className="videoBox-text">
                            <a href="https://www.youtube.com/watch?v=Iewt4-w2R9g" target="_blank">Message from the Founder</a>
                            <small>3:07</small>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="videoBox borderBox">
                            <div className="videoBox-placeholder">
                            <ReactPlayer
                                url="https://youtu.be/pDaq7mv5E-Q"
                                playing={false}
                                controls={true}
                                loop={true}
                                onEnded={true}
                                width="100%"
                            />
                            </div>
                            <div className="videoBox-text">
                            <a href="https://youtu.be/pDaq7mv5E-Q" target="_blank">Seva Haat—Earn with Us</a>
                            <small>1:35</small>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="row align-items-center justify-content-between contentFooter">
                    <div className="col-auto">
                        <a onClick={(e) => handleRedirect(e,'/resourcecentre')} className="goBack" href="resource_centre.html">
                            Back
                        <b>
                            <img src={arrowLeft} alt="#" />
                        </b>
                        </a>
                    </div>
                    <div
                        className="pullUp"
                        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <b className="icon-arrow-right" />
                    </div>
                    <div className="col-auto text-end">
                        <a className="helpLink" onClick={handleChatBot}>
                        <b className="icon-help" />
                        Help
                        </a>
                    </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default BrowseVideo;