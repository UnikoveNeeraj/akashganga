import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import person24 from "../../assets/img/members/person_24.svg";
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
                <img src={person24} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Dr. Rajiv Singla</h1>
                <p>
                    Director and Consultant Endocrinologist, Kalpvriksh Healthcare <br />
                    Founder President, Society for Promotion of Education in Endocrinology and Diabetes (SPEED)
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
                    Dr. Rajiv Singla is the Medical Director and Consultant
                    Endocrinology of Kalpavriksh Healthcare, based in New Delhi.
                    He is the co-founder of Kalpavriksh Healthcare (www.kvsc.in).
                  </p>
                  <p>
                    Dr. Singla completed his MBBS from the University College
                    of Medical Sciences, MD from Maulana Azad Medical College Delhi,
                    DNB (Medicine) and DM Endocrinology from AIIMS followed by FRCP
                    from the Royal College of Physicians of Edinburgh, UK.
                  </p>
                  <p>
                    He has worked and has been associated with premier hospitals
                    throughout his career as a hospitalist and doctor. Dr Singla
                    has done more than 40 presentations at medical conferences.
                    He has also authored more than 60 research papers and written
                    book chapters in ten books.
                  </p>
                  <p>
                    Dr. Rajiv Singla is also on the reviewer panel of reputed journals,
                    such as BMJ case reports, Journal of Ovarian Research and Indian
                    Journal of Endocrinology and Metabolism, Diagnostics, Sensors,
                    BJBMS, Sports Medicine –Open, BMC Research Notes and Open Access
                    Journal of Endocrinology (OAJE).
                  </p>
                  <p>
                    Besides his work as a medical professional, Dr. Singla
                    is also an astute administrator. He has been instrumental
                    in developing an EMR system “Healthvriksh” (www.healthvriksh.com)
                    and establishing a paperless health establishment at his clinic
                    in New Delhi.
                  </p>
                  <p>
                    He has also supervised, as a medical advisor, the development
                    of an LIS (lab information system), integrated with clinic
                    software as well as android app “KV Labs”.
                  </p>
                </div>
                <div className="member-back">
                  <a
                    onClick={(e) => handleRedirect(e, "/advisory")}
                    className="memberBack"
                  >
                    Back
                    <b>
                      <img src={arrowLeft} alt="#" />
                    </b>
                  </a>
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
