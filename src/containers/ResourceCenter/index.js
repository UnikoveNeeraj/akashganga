import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import article4 from "../../assets/img/articles/article_04.jpg";
import article5 from "../../assets/img/articles/article_05.jpg";
import article6 from "../../assets/img/articles/article_06.jpg";
import article7 from "../../assets/img/playlist/play01.png";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../config"

const ResourceCenter = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({ top: 0, behavior: 'smooth' });
        navigate(path)
    }

    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }
    
    return (
        <>
            <Header />
            <div className="resourceSection innerPages">
                <div className="containWrap">
                    <div className="resourceWrap">
                        <h1>
                            Resource <span className="underLine">Centre</span>
                        </h1>
                        <p>
                            Find diverse resources to support you through every stage of your
                            research dissemination. Know that you are not alone in this publishing
                            journey. We are with you, every step of the way!{" "}
                        </p>
                    </div>
                    <div className="resourceList">
                        <ul>
                            <li>
                                <div className="resourceBox borderBox yellow">
                                    <img
                                        alt="Resource Centre"
                                        src={article4}
                                    />
                                    <div className="resourceBox-text">
                                        <h3>Learn faster, smarter</h3>
                                        <p>
                                            Get up to speed on topics that help do your job better. Build
                                            your knowledge quickly from concise, well-presented content from
                                            experts.
                                        </p>
                                        <a onClick={(e) => handleRedirect(e, '/presentations')} className="button button-white button-sm" href="ppt.html">
                                            EXPLORE
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="resourceBox borderBox green">
                                    <img
                                        alt="Resource Centre"
                                        src={article5}
                                    />
                                    <div className="resourceBox-text">
                                        <h3>Discover . Learn . Get better</h3>
                                        <p>
                                            Watch engaging videos to increase your understanding of various
                                            concepts and have a personable experience to retain information.
                                        </p>
                                        <a onClick={(e) => handleRedirect(e, '/browse')} className="button button-white button-sm" href="video.html">
                                            EXPLORE
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="resourceBox borderBox orange">
                                    <img
                                        alt="Resource Centre"
                                        src={article6}
                                    />
                                    <div className="resourceBox-text">
                                        <h3>Be a scicomm junkie</h3>
                                        <p>
                                            Must-read academic blog for researchers and PhD students—it’s a
                                            great way to pickup chatter about what’s brewing in scholarly
                                            publishing.
                                        </p>
                                        <a href={`${SERVER_URL}/blog`} className="button button-white button-sm">
                                            EXPLORE
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="pullUp"
                        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <b className="icon-arrow-right" />
                    </div>
                    <div class="row align-items-center justify-content-between contentFooter"><div class="col text-end"><a onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default ResourceCenter;