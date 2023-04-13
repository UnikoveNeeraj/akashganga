import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_04.jpg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
                        <h1>Professor Jagdish Sheth</h1>
                        <p>Padma Bhushan 2020 Awardee for Literature & Education Internationally Recognised Thought Leader <br />Charles H. Kellstadt Professor of Business </p>
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
                                Dr. Sheth is a recipient of the <strong><u>2020 Padma Bhushan Award</u></strong> for literature and education, one of the highest civilian awards given by the Government of India.
                            </p>

                            <p>
                                He is a renowned scholar, change agent, advisor and entrepreneur, and an internationally recognized thought leader.
                            </p>
                            <p>
                                Jagdish N. Sheth is Charles H. Kellstadt Professor of Business in the Goizueta Business School at Emory University. He is globally known for his scholarly contributions in consumer behaviour, relationship marketing, competitive strategy, and geopolitical analysis. 
                            </p>
                            <p>
                                He has published more than 300 research papers and more than 30 books on various disciplines and topics. His insights on global competition, strategic thinking, geopolitics, and emerging markets are considered revolutionary.
                            </p>
                            <p>
                                Professor Sheth has over 50 years of combined experience in teaching and research at the University of Southern California, the University of Illinois at Urbana-Champaign, Columbia University, MIT, and Emory University.
                            </p>
                            <p>
                                He is also a Fellow of the Academy of International Business (AIB); Fellow of the Association of Consumer Research (ACR); Fellow of the American Psychological Association (APA); Fellow of the American Marketing Association (AMA); Distinguished Fellow of the Academy of Marketing Science (AMS); and a Distinguished Fellow of International Engineering Consortium.
                            </p>
                            <p>
                                Dr. Sheth is the recipient of an Honorary Doctorate in Science, awarded by the University of Illinois at Urbana-Champaign (2016), and Honorary Doctorate of Philosophy, awarded by Shiv Nadar University (2017). He is the recipient of all four top awards given by the American Marketing Association (AMA).
                            </p>
                            <p>
                                Professor Sheth has been advisor to the Government of Singapore in repositioning the nation for the future. He has also been the policy advisor to the U.S. Government about the future of the telecommunications industry.
                            </p>
                            <p>
                                Dr. Sheth is the Founder of Canter for Telecommunications Management (CTM) at University of Southern California (USC) which has now become an Institute. He is also Founder and Chairman of India, China, and America (ICA) Institute which analyzes the trilateral relationship and its impact on geopolitics, security, trade, and investment. 
                            </p>
                            <p>
                                He and his wife, Madhu Sheth, have established the Sheth Family Foundation to support several charities in India and in the United States. They have also established the Madhuri and Jagdish Sheth Foundation to support scholars and scholarship in the field of marketing. 
                            </p>
                            <p>
                                The Sheth Foundation supports the AMA-Sheth Foundation Doctoral Consortium, hosted annually by different universities. It also supports research in emerging fields through AMA, ACR, AMS, and AIB. Finally, Professor Sheth is the Founder and Chairman of the Academy of Indian Marketing (AIM) which supports research and scholarship among Indian scholars in marketing and management.
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
                        handleRedirect(e, "/member-details/amitabh-rajan")
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
                                Who are brave enough to dream of a different future for what is
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