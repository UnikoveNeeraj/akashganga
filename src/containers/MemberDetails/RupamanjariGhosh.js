import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import person22 from "../../assets/img/members/person_22.jpg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
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
                <img src={person22} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Prof. Rupamanjari Ghosh</h1>
                <p>
                  Former Vice-Chancellor of Shiv Nadar University Delhi NCR<br />
                  Former Professor & Dean of School, Physical Sciences, JNU<br />
                  Former Co-Chair, FICCI Higher Education Committee
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
                    Professor Rupamanjari Ghosh is a researcher, teacher,
                    creator and an academic administrator par excellence. She is
                    a former Vice-Chancellor of Shiv Nadar University Delhi-NCR
                    (SNU), and former Professor of Physics & Dean of School of
                    Physical Sciences at Jawaharlal Nehru University (JNU), New
                    Delhi.
                  </p>
                  <p>
                    Professor Ghosh has B.Sc.(Physics honors) and M.Sc.(Physics)
                    degrees from the University of Calcutta, and a very
                    well-recognized Ph.D. from the University of Rochester, NY,
                    USA. Her pioneering work with Prof. L. Mandel on two-photon
                    interference has yielded a new direction in quantum optics
                    and quantum information, in the creation and use of a source
                    of entangled photon pairs, and of single photons, at the
                    forefront of research today.
                  </p>
                  <p>
                    Professor Ghosh has served as the Chief Advisor for the
                    NCERT (National Council of Educational Research and
                    Training) Science textbooks for Classes IX and X.
                  </p>
                  <p>
                    She is also well known for her stand and efforts to bring in
                    gender justice, environment consciousness and sustainability
                    in the higher education system.
                  </p>
                  <p>
                    Professor Ghosh joined the newly established Shiv Nadar
                    University in 2012 and was the Vice- Chancellor for 2 terms
                    till 31 January 2022, with the full responsibility of the
                    functioning of the University. She held multiple positions
                    at Shiv Nadar University in her tenure of ten plus years
                  </p>

                  <p>
                    SNU received the Atal Incubation Centre grant from Niti
                    Aayog, Government of India, in 2017, and has become an
                    ‘Institution of Eminence’ within few years of its existence
                    under her transformational leadership.
                  </p>
                  <p>
                    Professor Ghosh was felicitated as Visionary EduLeader of
                    India "for having championed a learner- centric higher
                    educational ecosystem at Shiv Nadar University in December
                    2017.
                  </p>
                  <p>
                    She wings honored her as India's Changemaker: Woman of the
                    Year 2022 for Excellence in Education.
                  </p>
                  <p>
                    Professor Ghosh has held several Visiting Faculty/ Scientist
                    positions on invitation abroad, and delivered numerous
                    invited research seminars in India and abroad.
                  </p>
                  <p>
                    Professor Ghosh is a recipient of the Stree Shakti Science
                    Samman for her “original contribution to Science”. She
                    received the DAE (Department of Atomic Energy, Government of
                    India) CV Raman Lecture award (in Physics) in 2018-19.
                  </p>

                  <p>
                    She Co-Chaired the FICCI (Federation of Indian Chambers of
                    Commerce and Industry) Higher Education Committee for 4
                    years (2018-2021).
                  </p>
                  <p>
                    In 2022, she contributed significantly to the NAAC (National
                    Assessment and Accreditation Council) whitepaper on
                    “Re-imagining Assessment and Accreditation in Higher
                    Education in India”, and then to the AIU (Association of
                    Indian Universities) thought paper on “National
                    Accreditation Council (NEC)” envisaged in NEP-2020.
                  </p>
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
                        Who are mad enough to dream of a different future for
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
