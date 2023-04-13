import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_05.jpg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
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
    window.zE("messenger", "open");
  };

  return (
    <>
      <Header />
      <div className="academicSection innerPages">
        <div className="containWrap">
          <a
            onClick={(e) => handleRedirect(e, "/advisory")}
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
                <img src={person1} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Dr. Amitabh Rajan</h1>
                <p>Chairman, Reserve Bank of India Services Board<br/>
                Former Home Secretary & (Add.) Chief Secretary, Maharashtra<br/>
                Independent Director, Board of the State Trading Corporation</p>
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
                    Dr.Amitabh Rajan is a retired Indian Administrative Services
                    Officer of Maharashtra cadre and the former Home Secretary
                    and Additional Chief Secretary of Maharashtra. He currently
                    heads the Reserve Bank of India Services Board as its
                    Chairman and is also an Independent Director in the Board of
                    the State Trading Corporation of India.
                  </p>

                  <p>
                    He also served as a District Magistrate for five years and at
                    the highest policy levels in the union ministries of
                    finance, personnel, and social justice for several years. He
                    was also Chairman and Managing Director of a national
                    development finance corporation for five years and an
                    Independent Director in the Board of the State Trading
                    Corporation for three years. Dr.Rajan is also a member of
                    the State Bank of India’s independent committee on stressed
                    assets.
                  </p>
                  <p>
                    Dr.Rajan is the recipient of several prestigious awards
                    including the <strong>Government of India Award</strong> for
                    Excellence in the Achievement of MOU Targets from the
                    President of India (2003), the{" "}
                    <strong>Indian Institute of Public Administration</strong>{" "}
                    Award for Best Article in the Indian Journal of Public
                    Administration from the Vice-President of India (2018),{" "}
                    <strong>SCOPE Meritorious Award</strong> for Best Managed
                    Public Sector Enterprise from the Prime Minister of India
                    (2008) and{" "}
                    <strong>Institute of Chartered Accountants</strong> of India
                    Award for Excellence in financial reporting from the
                    Governor of Jammu and Kashmir (2005).
                  </p>
                  <p>
                    Dr.Rajan has represented India in various international
                    venues including the Ministerial Conference of the Paris
                    Pact, where he led the Indian delegation in the absence of
                    the Union Finance Minister. He also led the Indian
                    delegation at the SAARC Technical Committees in Pakistan and
                    Bangladesh.
                  </p>
                  <p>He has held memberships in the council of
                    administration, International Institute of Administrative
                    Sciences, Brussels, and the governing council of the Asian
                    Group for Public Administration, Beijing. He currently holds
                    the position of the President of the International Chamber
                    of Professional Education and Industry.</p>
                  <p>
                    Dr.Rajan is now settled in Delhi and occupies himself with
                    intellectual pursuits in the exploration of the ongoing
                    paradigm shifts in finance, technology and society. He has
                    authored several research papers and is frequently invited
                    to give talks on these topics. He also serves on various
                    advisory boards, editorial boards, research councils and
                    governing councils.
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
                        handleRedirect(e, "/member-details/rajiv-bhatia")
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
