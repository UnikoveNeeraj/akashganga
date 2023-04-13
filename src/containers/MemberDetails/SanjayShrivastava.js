import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_10.jpg";
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
                            <h1>Professor (Dr.) Sanjay Srivastava</h1>
                            <p>
                                Managing Director, Manav Rachna Educational Institutions <br /> 
                                VC, Manav Rachna International Institute of Research and Studies<br />
                                Former Dean, Faculty of Management Studies, Amity University
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
                                Professor (Dr.) Sanjay Srivastava is a PhD in Organizational Culture from University of Delhi. He is an expert in Psychometric Profiling and a trainer, practitioner of Transactional Analysis and NLP.
                            </p>

                            <p>
                                He is well respected in his field as a competent team builder, an acclaimed teacher, a prolific speaker, an avid researcher, a consultant and an organizational coach.  
                            </p>
                            <p>Dr. Sanjay Srivastava has been chosen as a member in the selection committee of Institutes of Eminence (IoE), a recognition scheme for higher education institutes in India, set by the University Grants Commission in 2017. </p>
                            <p>To oversee effective and outcome-based implementation of the New Education Policy 2020 Dr. Srivastava has been selected amongst few prominent members for the Committee constituted by the Department of Technical Education, Govt. of Haryana.</p>
                            <p>With many awards to his credits, he has been a recipient of National Talent Scholarship in Education and the Young Scientist Award in Psychology 1994 by Indian Science Congress Association. </p>
                            <p>Dr.Srivastava has also been awarded the International Honorary Research Fellowship (five years up to 2021) at Lahti University of Applied Sciences, Helsinki, Finland by the Hon’ble Prime Minister of Finland, Mr. Juha Sipila in 2016.</p>
                            <p>He is an avid follower of Shrimad Bhagwad Geeta and has authored a book on the same philosophy, The Timeless Wisdom from Geeta & Leadership (“Geeta ka Shashwat Gyan Tatha Netretva ki Kala”). </p>
                            <p>Dr. Srivastava has trained many professionals under the Haryana Institute of Public Administration (HIPA) and Department of Personnel & Training, (DoPT) Government of India.</p>
                            <p>36 scholars have completed their PhD the guidance of Dr.Srivastava while seven more are pursuing their doctoral work under his supervision. </p>
                            <p>Dr.Sanjay Srivastava has published more than 80 Research papers & guided more than 350 dissertations. </p>
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
                        handleRedirect(e, "/member-details/subir-verma")
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