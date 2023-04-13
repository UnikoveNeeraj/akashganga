import Header from "../Homepage/header";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_09.jpg";
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
                            <h1>Dr. Harivansh Chaturvedi</h1>
                            <p>
                                Director, Birla Institute of management Technology (BIMTECH) <br />
                                Alternate President of Education Promotion Society for India<br /> 
                                Former Director, All India Council for Technical Education (AICTE)
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
                                Dr.Harivansh Chaturvedi is Professor and Director at Birla Institute of Management Technology
                                (BIMTECH), Greater Noida, India and Alternate President of Education Promotion Society for India 
                                (EPSI). He has more than 45 years of experience in teaching, research and academic administration. 
                            </p>
                                
                            <p> He has been Director at All India Council for Technical Education (AICTE), a statutory body under the 
                                Government of India. Being a renowned management educationist, he has been deeply involved with 
                                national bodies like AIMA, NHRDN, AIMS, UNGCNUI and the Indian Management Conclave (IMC), 
                                annually organized by the MBA Universe.com. </p><p>Dr.Chaturvedi is on the Board of Governors of several 
                                prominent universities and higher education institutions in India. Dr.Chaturvedi is also the Member of 
                                Quality Management, Dr.Bhimarao Ambedkar University, Agra, Board Member of Quality Council of 
                                India (QCI), New Delhi, and Member, Board of the Leaners International School, Greater Noida and 
                                Vignana Jyothi Institute of Management Hyderabad and Shri Dharmasthala Manjunatheshwara 
                                Institute for Management Development (SDMIMD), Mysore.
                            </p>

                            <p>
                                Dr.Chaturvedi is the Trustee and the Executive President of the Education Promotion Society for India 
                                (EPSI), a national network of universities and bschools of India. Dr.Chaturvedi is also member of the 
                                Governing Council and Chair of the Membership Committee of the UN Global Compact Network India.
                            </p> 
                            
                            <p> Dr.Chaturvedi has authored and edited five books relating to various challenges before Indian 
                                Business, economy and Higher education, “Quality, Accreditation and Ranking – A Silent Revolution 
                                in the Offing in Indian Higher Education”. His latest book (two volumes) edited with Dr.Ajoy Kumar 
                                Dey is The New Normal – Challenges of Managing Business, Social and Ecological Systems in the Post 
                                Covid-19 era.
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
                        handleRedirect(e, "/member-details/sanjay-shrivastava")
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