import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_11.jpg";
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
                        <h1>Dr. Subir Verma </h1>
                        <p>
                            Director, Institute of Management, Nirma University <br />
                            Dean, Faculty of Management, Nirma University <br />
                            Professor, Organizational Behaviour and Human Resources
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
                                Dr. Subir Verma is Professor of Organizational Behaviour and Human Resources with more than 30 years of teaching, training, research and consulting experience in MDI Gurgaon, IIM Ranchi, IMI Delhi, FORE School of Management and Delhi University. He has also been a visiting faculty at ESCP Europe (Paris Campus). He is a Fellow (Ph.D.) from IIM Ahmedabad, MA (Gold Medalist) and M.Phil. in Political Science from Delhi University. 
                            </p>

                            <p>
                                Prior to joining Institute of Management, Nirma University as Director, Prof Verma has served as Dean Academics in IIM Ranchi; Dean, Corporate Relations and Placements at IMI Delhi; and headed the flagship Post Graduate Programme, Placements as well as International Accreditations during his tenure at MDI Gurgaon and FORE School of Management. 
                            </p>
                            <p>Prof. Verma has authored/co-authored six books of which the most recent has been the “Role of Boards-Building Sustainable Competitive Edge” (co-authored with Dr. Pritam Singh and Dr. Asha Bhandarker) published by Sage Publications in January 2021. </p>

                            <p>Prof. Verma has presented his research papers in prestigious international conferences such as Academy of Management, European Group of Organization Studies, International HRM, World Sociology Congress and Asia Pacific Researchers on Organization Studies etc. </p>
                            <p>
                                Prof. Verma is a Member of the International Standards Organization, Genevaon Product Innovation and Asset Management, Principal Member , HR and Resources Committee of the Bureau of Indian Standards, Peer Reviewer of AMDISA-SAQs and has been an AICTE nominee on the BOG of Lal Bahadur Shastri Institute of Management, Delhi, the Executive Board of Asia Pacific Researchers on Organization Studies, Board of Studies in Management of Central University, Jharkhand and BIT Mesra and Selection Committees for Faculty at TERI, BITS Mesra and TISS, Mumbai.
                            </p>
                            <p>
                                Prof. Verma is a well-known trainer in the area of Leadership, Team building, Change Management, HR Analytics and Negotiation skills and has conducted MDPs on the above themes for top Public Sector and Private Sector Companies and Banks in India.  
                            </p>
                            <p>He has consulted with top Indian subsidiaries of MNCs on their Designs of High Performing Organization and Management of Change. He has also consulted withseveral CPSEs on the HR Policies and Government of Jharkhand and the World Bank on the Impact assessment of their development Programmes. </p>
                            <p>
                                Prof. Verma has been the recipient of Dr. Karan Singh Gold Medal, Prof. C.J. Chacko Prize, UGC Junior and Senior Research Fellowship, AICTE Award for Research and Travel to South Africa and Club Internationale’ Award for Research and Teaching in France.
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
                        handleRedirect(e, "/member-details/asha")
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