import Header from "../Homepage/header";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_08.jpg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
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
                        <h1>Dr. Bhimaraya Metri</h1>
                        <p>Director, Indian Institute of Management Nagpur<br />
                        Vice President, Asia Pacific Division Decision Sciences Institute<br />
                        Honorary Advisor, Govt and University National Committees</p>
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
                                Bhimaraya Metri, Director, IIM Nagpur is a distinguished academician, renowned teacher, researcher, an astute administrator, and Mentor to Institutes of Eminence and Member of Indian National Commission for Cooperation with UNESCO (INCCU).
                            </p>

                            <p>
                                An outstanding leader of management education, he has performed key leadership roles at many premier management institutes and corporate in his remarkable career. Having led two international delegations for development of Indian standards, Dr.Metri’s professional involvement extends to many national and international journals, and academic review committees. Former Director, IIM Tiruchirappalli; Former Dean, L&T Institute of Project Management, Vadodara; Ministry Nominee on Board of Governor’s NITIE, Mumbai & NIBM Pune.
                            </p>
                            <p>
                                Dr. Metri is the only serving IIM Director to receive the country’s prestigious AIMA-Kewal Nohria Award for Academic Leadership in Management Education. He is also the first Indian elected as the Vice President, Asia Pacific Division, Decision Sciences Institute (DSI). Among his other awards, noteworthy are the Distinguished Services Award by Asia Pacific Decision Sciences Institute, Top Director Award by CSR; Prerana Purshkar - Distinguished Alumnus Award, and Top Rankers Excellence Award for Outstanding Academic Leadership byTop Rankers Management Club, New Delhi.
                            </p>
                            <p>
                                Serving on numerous boards and committees, Dr.Metri is an honorary advisor to many Govt and University national committees. A much sought-after keynote speaker, he is a renowned expert in Project Management& infrastructure, Quality Management and Supply Chain Management, he has numerous research papers and books to his credit. 
                            </p>
                            <p>
                                Part of the Vice Chancellors of Central universities selection committee, Dr.Metri has trained more than 100 Vice Chancellors of Central, State and Deemed Universities in the country. He also has trained more than 1000 Directors, Deans, Principals and HODs of leading Engineering Institutes including NITs under the World Bank assisted project of MHRD-TEQIP to improve the quality of technical education in the country.
                            </p>
                            <p>
                                Dr. Metri is deeply involved with executive education at senior and top management levels including international trainings with a wide range of organizations of government, public sector (Maharatna & Navaratna companies), private sector and foreign government bodies.
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
                        handleRedirect(e, "/member-details/harivansh-chaturvedi")
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