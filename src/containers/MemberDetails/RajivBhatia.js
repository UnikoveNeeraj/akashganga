import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_06.jpg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MemberDetails = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({top: 0, behavior: 'smooth'});
        navigate(path)
    }

    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    return(
        <>
            <Header />
            <div className="academicSection innerPages">
                <div className="containWrap">
                    <a onClick={(e) => handleRedirect(e,'/advisory')} className="memberBack">
                    Back
                    <b>
                        <img src={arrowLeft} alt="#" />
                    </b>
                    </a>
                </div>

                <div className="memberBar">
                    <div className="containWrap">
                    <div className="memberBio">
                        <div className="memberBio-img">
                        {" "}
                        <img src={person1} alt="#" />
                        </div>
                        <div className="memberBio-intro">
                        <h1>AMB Dr. Rajiv Bhatia </h1>
                        <p>
                            Distinguished Fellow, Foreign Policy Studies Programme <br />
                            Chair of FICCI’s Task Force on Blue Economy<br />
                            Former Director General, Indian Council of World Affairs (ICWA)
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <div className="containWrap">
                    <div className="memberRow">
                        <div className="memberLeft">
                        <div className="memberBio-sum">
                            <p>
                                Ambassador Dr. Rajiv Bhatia is Distinguished Fellow, Foreign Policy Studies Programme at Gateway House. He is a member of CII’s International Advisory Council, Trade Policy Council and Africa Committee. He is the Chair of FICCI’s Task Force on Blue Economy, and served as Chair of Core Group of Experts on BIMSTEC. 
                            </p>
                            <p>He is a founding member of the Kalinga International Foundation and a member of the governing council of Asian Confluence.  As Director General of the Indian Council of World Affairs (ICWA) from 2012-15, he played a key role in strengthening India's Track-II research and outreach activities. </p>
                            <p>During a Thirty Seven year innings in the Indian Foreign Service (IFS), he served as Ambassador to Myanmar and Mexico and as High Commissioner to Kenya, South Africa and Lesotho. He dealt with a part of South Asia, while posted as Joint Secretary in the Ministry of External Affairs. </p><p>A prolific columnist, he is also a regular speaker on foreign policy and diplomacy in India and abroad. He was Senior Visiting Research Fellow during 2011-13 at the Institute of South East Asian Studies (ISEAS), Singapore. He holds a master’s degree in political science from Allahabad University.</p>

                            <p>
                                His first book India in Global Affairs: Perspectives from Sapru House (KW Publishers, 2015) presented a sober and insightful view of India’s contemporary foreign policy. His second book India-Myanmar Relations: Changing contours (Routledge, 2016) received critical acclaim. His third book India-Africa Relations: Changing Horizons (Routledge, 2022) has been receiving positive reviews. 
                            </p>
                            <p>
                                <strong>EXPERTISE</strong> <br />
                                Indo-Pacific (including the Quad), Myanmar, South Asia, Southeast Asia,Africa, Blue Economy, Multilateral Groupings, Indian Foreign Policy and Diplomacy, including major power relations (U.S., China, EU, Russia and Japan). 
                            </p>
                        </div>
                        <div className="member-back">
                  {/* <div className="containWrap"> */}
                    <a
                      onClick={(e) => handleRedirect(e, "/advisory")}
                      className="memberBack"
                    >
                      Back
                      <b>
                        <img src={arrowLeft} alt="#" />
                      </b>
                    </a>
                  {/* </div> */}
                  {/* <div className="containWrap"> */}
                    <a
                      onClick={(e) =>
                        handleRedirect(e, "/member-details/prof-ramesh-gaur")
                      }
                      className="memberBack"
                    >
                      Next
                      <b>
                        <img src={arrowRight} alt="#" />
                      </b>
                    </a>
                  {/* </div> */}
                </div>
                        </div>
                        <div className="memberRight">
                        <div className="checkOut">
                            <h2>Also Check Out</h2>
                            <div className="checkBox">
                            <div className="checkBox-img">
                                <img src={sample5} alt="#" />
                            </div>
                            <div className="checkBox-info">
                                <h3>Step into Greatness</h3>
                                <p>
                                Your words have the power to change the world. Register as a
                                Peer Reviewer and/or a Publishing Editor.
                                </p>
                            </div>
                            <Link to="/registration">REGISTER NOW</Link>
                            </div>
                            <div className="checkBox">
                            <div className="checkBox-img">
                                <img src={sample4} alt="#" />
                            </div>
                            <div className="checkBox-info">
                                <h3>Meet the Dream Catchers</h3>
                                <p>
                                Who are mad enough to dream of a different future for what is
                                today referred to as, the developing world.
                                </p>
                            </div>
                            <Link to="/teams">THE TEAM</Link>
                            </div>
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
                    <div class="row align-items-center justify-content-between contentFooter"><div class="col text-end"><a onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default MemberDetails;