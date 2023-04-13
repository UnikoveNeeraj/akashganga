import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import person23 from "../../assets/img/members/person_23.jpg";
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
                <img src={person23} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Dr. Ankur Segon</h1>
                <p>
                  MD, MPH, M.Ed., FACP, SFHM <br />
                  Prof. and Chief, Division of Hospital Medicine <br />
                  Founding Director, Hospital Medicine Fellowship Program
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
                    Dr. Ankur Segon currently serves as a Professor of Medicine
                    and Chief of Hospital Medicine at University of Texas Health,
                    San Antonio. He has also served as the director of continuous
                    professional development, faculty development, and founding
                    director of the hospital medicine fellowship program at the
                    Medical College of Wisconsin.
                  </p>
                  <p>
                    Dr. Segon received his MBBS degree from University College
                    of Medical Sciences, New Delhi. He completed his MD in Internal
                    Medicine from St. Francis Hospital, University of Illinois,
                    Master of Public Health (MPH) in epidemiology from the University
                    of Massachusetts, and Master of Education (MEd) in medical education
                    from the University of Cincinnati.
                  </p>
                  <p>
                    After completing his training in internal medicine, Dr. Ankur
                    Segon has served in several leadership and mentorship role at
                    two large academic medical centers in the United States.
                  </p>
                  <p>
                    His research interests include clinical research and quality
                    improvement in the inpatient setting, and research in medical
                    education. Dr. Segon has mentored scores of medical students,
                    residents, and faculty in their scholarly endeavors over the
                    course of his career, and has authored close to 100 peer reviewed
                    abstracts, presentations, and publications.
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
