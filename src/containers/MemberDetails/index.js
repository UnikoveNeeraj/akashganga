import Header from "../Homepage/header";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import person16 from "../../assets/img/members/person_16.jpg";
import { useNavigate } from "react-router-dom";

const MemberDetails = () => {
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
            <div className="academicSection innerPages">
                <div className="containWrap">
                    <a onClick={(e) => handleRedirect(e, '/advisory')} className="memberBack">
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
                        <img src={person16} alt="#" />
                        </div>
                        <div className="memberBio-intro">
                            <h1>Dr. Rajesh Chandrashekharan</h1>
                            <p>
                                Professor of Marketing, Silberman College of Business, <br />Rutgers University <br />
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
                                        Rajesh Chandrashekaran holds a BS degree in Electrical
                                        and Electronics Engineering from India; and an MBA and Ph.D.
                                        in Marketing from Rutgers University.
                                    </p>
                                    <p>
                                        He is currently a professor of marketing at the Silberman
                                        College of Business. His teaching experience includes an array
                                        of undergraduate courses including
                                        Principles of Marketing, Strategic Marketing; Marketing Research,
                                        Marketing Management, Buyer Behavior, and Advertising Management.
                                    </p>
                                    <p>
                                        Additionally, Dr. Chandrashekaran has taught in the College's Executive
                                        program. His passion for and excellence in teaching has earned him awards
                                        from the Student Government (Teacher of the Year), and from the College
                                        of Business. Dr. Chandrashekaran's research interests are primarily in
                                        the area of pricing. Particularly, he investigates the psychological
                                        effects of various pricing strategies and tactics.
                                    </p>
                                    <p>
                                        Most recently, Dr. Chandrashekaran has been examining the exact nature of brain
                                        activity that is associated with the processing of pricing (numerical) and such 
                                        other related marketing cues as color. Dr. Chandrashekaran's research has been 
                                        published in several leading academic journals in the field including The Journal
                                        of Marketing Research, Journal of Retailing, Advances in Consumer Research, Journal
                                        of Business Research, Journal of Product and Brand Management, Journal of Consumer
                                        Affairs, and International Journal of Retailing, Distribution, and Consumer Research.
                                    </p>
                                    <p>
                                        He has presented his research at numerous national and international conferences
                                        for which has received several accolades in acknowledgment of his original
                                        contributions to the field. At heart, Rajesh is a movie lover and a passionate
                                        storyteller who loves to write and make short films. He has also penned two fictional
                                        novels that he hopes to get published someday. Above all, he is a dream chaser whose
                                        best work is always the next one he will be engaging in.
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
                        handleRedirect(e, "/member-details/sam")
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