import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import person5 from "../../assets/img/sample/sample_05.jpg";
import person4 from "../../assets/img/sample/sample_04.jpg";
import person18 from "../../assets/img/members/person_18.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MemberDetails = () => {
  const navigate = useNavigate();
  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE('messenger', 'open');
  }

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
                <img src={person18} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Prof. PR Kumaraswamy</h1>
                <p>
                  Professor, Jawaharlal Nehru University, New Delhi <br />
                  Former Research Fellow, Harry S Truman Research Institute <br />
                  Honorary Director, Middle East Institute, New Delhi <br />
                </p>
                {/* <p>
                  Managing Director, Manav Rachna Educational Institutions,
                  (MREI Faridabad, Haryana (India)
                </p>
                <p>
                  Vice Chancellor, Manav Rachna International Institute of
                  Research and Studies (MRIIRS) (Deemed to be University)
                </p>
                <p>
                  Former Dean, Examination and Faculty of Management Studies
                  Chairman, Doctoral Program of Amity University, Uttar Prades
                </p> */}
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
                    Prof. PR Kumaraswamy teaches contemporary Middle East at
                    Jawaharlal Nehru University, New Delhi, since 1999. During
                    1992-1999 he was a research fellow at the Harry S Truman
                    Research Institute for the Advancement of Peace, Jerusalem.
                  </p>
                  <p>
                    Since joining JNU in September 1999, he has been teaching,
                    researching and writing on various aspects of the
                    contemporary Middle East. He obtained his Bachelor’s and
                    Master’s degrees from the University of Madras in Defence
                    Studies.                    
                  </p>
                  
                  <p>
                    His publications include Arab-Israeli Conflict: A Ringside
                    View (Routledge, forthcoming); Squaring the Circle: Mahatma
                    Gandhi and the Jewish National Home (New Delhi: for ICWA,
                    2018); India’s Israel Policy (Columbia University Press,
                    2010); Historical Dictionary of the Arab Israeli Conflict
                    (Scarecrow Press, 2015); India's Saudi Arabia Policy: Bridge
                    to the Future (Palgrave Macmillan, 2019, co-author); and
                    Handbook of the Hashemite Kingdom of Jordan (Palgrave
                    Macmillan, 2020, edited)
                  </p>
                  <p>
                    In October 1999, he set up <a target="_blank" href="www.mei.org.in">Middle East Institute</a>, New Delhi and serves as its Honorary Director. He
                    also edits Persian Gulf: India’s Relations with the Region
                    (Palgrave Macmillan), Contemporary Review of the Middle East
                    (Sage) and Middle East Book Series (KW).
                  </p>
                </div>
              </div>
              <div className="memberRight">
                <div className="checkOut">
                  <h2>Also Check Out</h2>
                  <div className="checkBox">
                    <div className="checkBox-img">
                      <img src={person5} alt="#" />
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
                      <img src={person4} alt="#" />
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
          <div class="row align-items-center justify-content-between contentFooter"><div class="col text-end"><a onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MemberDetails;
