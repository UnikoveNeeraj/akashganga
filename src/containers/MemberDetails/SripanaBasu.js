import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person5 from "../../assets/img/sample/sample_05.jpg";
import person4 from "../../assets/img/sample/sample_04.jpg";
import person17 from "../../assets/img/members/person_17.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                <img src={person17} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Prof. Sriparna Basu</h1>
                <p>
                  Distinguished Speaker and Panellist <br />
                  Visiting Professor, IIM, Sambalpur <br />
                  Teaching & Consulting Experience across industry sectors <br />
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
                    Prof. Sriparna Basu is a Ph.D. (University of Illinois, at
                    Urbana-Champaign, USA), M.A. (Cultural Studies), from
                    University of Illinois, at Urbana-Champaign, and M.A. from
                    Jadavpur University, Calcutta (Gold medallist).
                  </p>
                  <p>
                    She has more than 22 years of teaching experience which also
                    includes consulting experience across various industry
                    sectors. Her current research is in the intersection of
                    human-tech, appbased behaviour, and technology and culture.
                    She has also undertaken policy projects relating to digital
                    policy impact evaluation in rural India
                  </p>
                  <p>
                    Dr.Basu has presented research papers in 16 national and
                    international conferences. She has published extensively –
                    her research contributions include research papers in top
                    category international peer-reviewed journals such as
                    Journal of Business Research (2022), case studies published
                    with Richard Ivey and WDI Publishing (Ross School of
                    Business, University of Michigan USA). She has won
                    international awards for her case publications.
                  </p>
                  <p>
                    Prof. Sriparna Basu has cited by Education Post 2021 as among the top six women leaders in higher in education in
                    India. 
                  </p>
                  <p>
                    She has been invited as distinguished speaker and
                    panellist, multiple times, in various reputed forums. Please access here Dr. Basu's talk given for <u><a target="_blank" href="http://www.uniindia.com/brics-cci-hostswomen-for-atmanirbhar-bharat-programme/business-economy/news/2341899.html">BRICS
                    Chamber of Commerce & Industry</a></u>.
                  </p>

                  <p>
                    Dr. Basu has been involved in training and consulting
                    activities with organizations such as ONGC, NHPC, MCL, NCDC,
                    IFFCO, IOCL, Power Grid, Bayer, Mitsui, Aviation Academy of
                    India, Punjab National Bank, Tata Motors, Indian Institute
                    of Public Administration, British Council, Relaxo, and some
                    start-up organizations.
                  </p>
                  <p>
                    She has been involved in training and consulting activities
                    with several public and private sector organizations like
                    ONGC, Power Grid, NHPC, Mitsui, Bayer, Indian Oil, British
                    Council, Tata Motors, and also some start-up organizations.
                    She has presented papers in 16 international and national
                    conferences and has publications in the form of research
                    papers in peer-reviewed top ranked journals, cases, and book
                    chapters in national and international peerreviewed journals
                    and books.
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
                        handleRedirect(e, "/member-details/kumaraswamy")
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
