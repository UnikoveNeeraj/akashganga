import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import person21 from "../../assets/img/members/person_21.svg";
import { Link, useNavigate } from "react-router-dom";

const MemberDetails = () => {
  const navigate = useNavigate();
  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  return (
    <>
      <Header />
      <div className="academicSection innerPages">
        <div className="containWrap">
          <a
            onClick={(e) => handleRedirect(e, "/council")}
            className="memberBack"
          >
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
                <img src={person21} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Neeraj Kapoor</h1>
                <p>
                  Director, Center for Management Development, AIMA <br />
                  Former Head, Strategy, Planning & Operations, HT Media <br />
                  Trainer and faculty: IMT, AIMA, MKU
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
                    Neeraj Kapoor has a professional experience of twenty seven years. He has worked with big
                    brands and in large agencies, such as Philips, OSRAM Siemens, Gillette & Bates 141 and Indian
                    corporates such as SIFY Ltd, with his last stint being with
                    HT Media as the Head of Strategy, Planning & Operations.
                  </p>

                  <p>
                    He is the Director, Center for Management Development at
                    AIMA. This is a department which is into setting up platforms for
                    executive training and learning. 
                  </p>
                  <p>
                    The three divisions under
                    the department look after flagship events of AIMA, overseas
                    programs in the Silicon Valley, China and Israel and retreats
                    in various functions like HR, Digital Marketing and
                    Leadership, National competitions under Business Simulation
                    and Competitions and quiz categories.
                  </p>

                  <p>
                    Neeraj holds a degree in B. Com Honours from Delhi University and MBA in
                    International Business. He has served in functions such
                    Business Development, Client Servicing, Operations and
                    Strategic Planning. He has been a keen concept person and
                    has been instrumental in setting up large properties in the
                    commercial, corporate and entertainment fields.
                  </p>

                  <p>
                    He is a keen trainer and has been faculty at IMT, AIMA, MKU
                    and Mount Carmel Business School. His favourite past times
                    are travelling, in depth reading on international relations,
                    contemporary issues and has published work of short stories
                    and articles.
                  </p>
                  
                  <p>
                    He is a “Lifelong Learner” and is currently enrolled in his
                    Doctorate program in management with specialization in
                    new-age marketing and its dynamics.
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
                        handleRedirect(e, "/member-details/sriparna-basu")
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
                        Your words have the power to change the world. Register
                        as a Peer Reviewer and/or a Publishing Editor.
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
                        Who are brave enough to dream of a different future for
                        what is today referred to as, the developing world.
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
          <div class="row align-items-center justify-content-between contentFooter">
            <div class="col text-end">
              <a onClick={handleChatBot} class="helpLink">
                <b class="icon-help"></b>Help
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MemberDetails;
