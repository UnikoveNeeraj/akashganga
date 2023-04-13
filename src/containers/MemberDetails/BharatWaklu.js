import Header from "../Homepage/header";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_15.jpg";
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
                            <h1>Bharat Wakhlu</h1>
                            <p>
                                Founder President, The Wakhlu Advisory <br />
                                Transformational Thought-Leader and Futurist <br /> 
                                Strategic Consultant and Leadership Coach
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
                                Bharat Wakhlu is a seasoned business leader with diverse interests and gifts.
                            </p>

                            <p>
                                He is the Founder, and the President of The Wakhlu Advisory, offering his services to a wide range of businesses and Executives as a Transformational Thought-Leader, a Futurist, Strategic Consultant and Leadership Coach. 
                            </p>
                            <p>
                                He is a renowned Keynote Speaker and Author, who enjoys writing fiction and non-fiction, and who has written and spoken extensively on Management, Business-Transformation, Ethics and Leadership, Talent Management and Spirituality. 
                            </p>
                            <p>
                                He has served and advised a number of reputed organizations from India, Europe, the Middle-East and Africa. Before establishing his own Strategic Leadership Consulting firm, he spent more than thirty years working as an Entrepreneur and business leader within the Tata eco-system where he held senior operating and board-level positions. 
                            </p>
                            <p>
                                A fellow of the American Society for Quality (ASQ), and of the All-India Management Association, he served till 2020, as the Founding-General Secretary of the Foundation for Restoration of National Values. He is the co-founder of the Foundation for Peace and Compassionate Leadership (fpacl.com), and a Founding-Director of the Resilient Leadership and Change Masters, LLP (rlacm.com).
                            </p>
                            <p>
                                Bharat is the author of seven books, namely Total Quality -Excellence through Organization-wide Transformation (1992), Let’s Learn Kashmiri (1996 and 2001), Restoring Values – Keys to Integrity, Ethical Behaviour and Good Governance (2010), Close Call in Kashmir (2010/fiction), Navigating the Maze – Simple, Smarter Strategies to Fast-track Success (2017), Enhancing Interpersonal Effectiveness Through Assertive Communications (2021/Audiobook), and most recently, Tata’s Leadership Experiment – The Story of the Tata Administrative Service (2022).  He is fluent in six languages including, German, Kashmiri and Marathi.
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
                        handleRedirect(e, "/member-details")
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