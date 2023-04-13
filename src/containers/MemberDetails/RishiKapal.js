import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_01.jpg";
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
                    <a onClick={(e) => handleRedirect(e,'/council')} className="memberBack">
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
                            <h1>RISHI KAPAL “Rik”</h1>
                            <p>
                                Stanford LEAD Alumni <br /> 
                                Author of Four acclaimed books <br /> 
                                Former Leader @ Sony, Qualcomm, Ericsson, Castrol
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
                                A speaker at United Nations HQ in New York, a Stanford LEAD alumni, author of multiple books, Rishi Kapal coaches organizations and professionals for strategic transformational outcomes in their career development. 
                            </p>
                            <p>
                                He has already helped 500+ professionals to have better strategic management competencies. Rishi also advises startup ecosystems for developing long-term innovations-led futuristic learning paths.
                            </p>

                            <p>
                                He has been instrumental in developing collaborations between Southeast Asian, South Asian, North American and European business, innovations and entrepreneurial ecosystems.
                            </p>

                            <p>
                                As an acclaimed performance and executive coach, Rishi conducts interventions on Leveraging Social Media for Career Development, Techniques for Growing in the Industry, High Impact Communication Skills, Entrepreneurship and Fund Raising.
                            </p>

                            <p>
                                His beneficiaries include super-senior and middle management leadership teams of corporates and aspirants students at academic institutions.
                            </p>

                            <p>
                                From 1993 to 2014, Rishi helmed leadership roles in Sony, Qualcomm, Ericsson, BP/Castrol, Avaya and HCL. Having received awards and accolades for his professionalism, Rishi's last corporate assignment was as the Interim MD and VP Of Sony Mobile Communications, owning a P&L of USD 200M+
                            </p>
                            <p>
                                Rishi has co-authored research papers with Oxford University and IIT Kharagpur. He is a coveted Stanford LEAD alumnus. Rishi holds an MBA Degree from Pune University, PG in Management from IMI, Graduation in Electronics Engineering from Shivaji University, a graduation in Law and completed his schooling from DPS RK Puram, New Delhi.
                            </p>
                        </div>
                        <div className="member-back">
                  {/* <div className="containWrap"> */}
                    <a
                      onClick={(e) => handleRedirect(e, "/council")}
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
                        handleRedirect(e, "/member-details/nandini")
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