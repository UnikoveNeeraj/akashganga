import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import person1 from "../../assets/img/members/Late_Dr._Pritam_Singh.png";
import { Link } from "react-router-dom";
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
                  <h1>Late Dr. Pritam Singh</h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="containWrap">
              <div className="memberRow">
                <div className="memberLeft">
                  <div className="memberBio-sum">
                    {/* <p>
                                The late Dr. Pritam Singh is that to me even today. He was everything a guru could ever be and to me, one of his many students, he was the one to turn to in every walk of life. There are many interactions worth knowing but the most important one is the one where he spoke to me about India’s needs. He was a patriot, a believer in India and one who was ever conscious of challenges in and around us. His life’s mission was to ignite the spark of knowledge and to kinder the spirit of self-reliance. When I felt lost in my search for myself, he provided the direction that eventually manifested into Vikramshila Education. I miss him every single day but somewhere in my heart I know I am helping fulfil my guru’s dream of an ‘Atmanirbhar Bharat’ and a higher education system that will set the standards for the world. 
                            </p> */}
                    <p>
                      The late Padma Shri Dr. Pritam Singh, is my guru, my
                      guiding light, even to this day. He was everything a guru
                      could ever be and to me, one of his many students, he was
                      the one to turn to in every walk of life. There are many
                      interactions worth knowing but the most important one is
                      the one where he spoke to me about India’s needs.
                    </p>
                    <p>
                      He was a patriot, a believer in India and one who was ever
                      conscious of challenges in and around us. His life’s
                      mission was to ignite the spark of knowledge and to kinder
                      the spirit of self-reliance. When I felt lost in my search
                      for myself, he provided the direction that eventually
                      manifested into Vikramshila Education. 
                    </p>
                    <p>
                      I miss him every single day but somewhere in my heart I know I am helping
                      fulfil my guru’s dream of an ‘Atmanirbhar Bharat’ and a
                      higher education system that will set the standards for
                      the world.
                    </p>
                    
                    <p>Guruji, this life is dedicated to you…</p>
                  <div className="advisory-late-member">
                    <p className="lateOther">
                      SOULFUL TRIBUTE
                      <br />
                      <span>Vivek Mehra</span>, Founder and CEO
                    </p>
                  </div>
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
                          Your words have the power to change the world.
                          Register as a Peer Reviewer and/or a Publishing
                          Editor.
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
}


export default MemberDetails;