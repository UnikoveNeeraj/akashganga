import Header from "../Homepage/header";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_13.jpg";
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
                            <h1>Dr. Amol Pandit </h1>
                            <p> 
                                Consultant Urologist, Swansea Bay University Health Board <br />
                                Chair, Medical Student Exchange Programme, Mumbai & Wales <br />
                                Chair, Medical Services Advisory Committee, Morriston
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
                                A distinguished medical professional, a passionate researcher and a popular faculty in the domain of Urology, Dr. Amol Sharad Pandit started his journey by completing MBBS and MS Surgery from Bombay University in the years 1987 and 1992 respectively and later went on to pursue Diplomate in Urology from the Institute of Urology and the University College, London. 
                            </p>
                            <p>He won the coveted Dr. Shirvalkar Memorial Scholarship in Surgery at the Final MBBS examination. Dr. Amol worked as a consultant Urologist in India during the period 1999-2004. </p>

                            <p>
                                Dr. Amol Sharad Pandit is now a consultant Urologist with Swansea Bay University Health Board and has been associated with numerous accredited medical institutions in the UK in the last 30 years, in various capacities.
                            </p>

                            <p>Currently, amongst the many hats that he dons, he is the Chair of Medical Student Exchange Programme, Mumbai & Wales; a member of British Medical Association’s Welsh Council & co-chairs BAMR Forum, Wales; Chair of Medical Services Advisory Committee, Morriston and Faculty Lead for Trainees at HEIW & Swansea Bay UHB Edu Faculty.</p>

                            <p>
                                His slew of accolades includes Best Educational Supervisor & Trainer at Annual Wales Deanery & BMA Awards, 2015; Outstanding Contribution award for medicine & leadership roles on medical governance & Education by BAPIO [British Association of Physicians of Indian Origin]; Certificate of recognition in developing Public–Private partnership & Cooperation between Indian Industry, Community & Wales Government & Business from the Honorary Indian Consul for Wales & Welsh Government. 
                            </p>
                            <p>He has attended various international conferences and has made numerous presentations & publications at global medical forums.</p>
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
                      onClick={(e) => handleRedirect(e, "/member-details/sadhana-raut")}
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