import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import person20 from "../../assets/img/members/person_20.svg";
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
                <img src={person20} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Dr. Sam Taraporevala</h1>
                <p>
                  VP & Chair, Committee on Policy Intervention, DAISY Forum, India<br />
                  ED, Xavier’s Resource Centre for the Visually Challenged<br />
                  Member, Braille Council of India (BCI) <br />
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
                    Sam Taraporevala retired as Associate Professor & Head Department of Sociology and Anthropology of St. Xavier’s College, Autonomous, Mumbai. He is currently the Executive Director of the Xavier’s Resource Centre for the Visually Challenged (XRCVC) which he founded in 2003. 
                  </p>

                  <p>
                    He has been actively involved in advocacy and awareness work in the field of social inclusion using applied research to address key access challenges for persons with blindness and low vision.
                  </p>
                  <p>
                    He has been at the forefront of work resulting in the amendment of the Copyright Act, India in 2012, deployment of over 30000 accessible ATMs in India and opening up of science education for blind and low vision students.
                  </p>
                  <p>
                    He is currently on various national bodies including
                    <ol type="a">
                      <li>Vice President & Chair, Committee on Policy Intervention, DAISY Forum of India</li>
                      <li>Member, Braille Council of India (BCI)</li>
                      <li>He has also been Member, Expert committee to decide and list out modern</li>
                      <li>Assistive devices for all categories of PWDs under revised ADIP Scheme,
                    Department of Disability Affairs, Ministry of Social Justice and Empowerment,
                    Govt of India</li>
                    </ol>                    
                  </p>
                  <p>
                    Other positions held:
                    <ol>
                      <li>
                        Member, Expert Committee for the Resource Centre for Persons with Different Disabilities, National Library, Kolkata.</li><li>
                        Member, Task force for National Centre of Universal Design and Barrier free Environment for Persons with Disabilities, India.</li><li>
                        Member, Board of Studies, Department of Sociology, University of Mumbai.</li><li>
                        Member, National Selection Committee for selecting the awardees for the National Awards for the Empowerment of Persons with Disabilities for the Ministry of Social Justice and Empowerment.</li><li>
                        Member, Sub-group on Accessibility, Mobility, Research & Innovation to give inputs for the 12th Five year Plan
                      </li>
                    </ol>
                  </p>
                  <p>
                    At St. Xavier’s College, Autonomous Mumbai he was on various committees including:
                    <ul style={{marginLeft: '5%'}}>
                      <li>Member, Internal Quality Assurance Cell (IQAC)</li>
                      <li>Member Academic board</li>
                      <li>Chairman Board of Studies – Sociology and Anthropology</li>
                      <li>Executive Convenor – Enabling Committee</li>
                    </ul>
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
                        handleRedirect(e, "/member-details/rupamanjari-ghosh")
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
