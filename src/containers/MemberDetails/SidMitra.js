import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import person1 from "../../assets/img/members/Late_Dr._Sid_Mittra.png";
import sample5 from "../../assets/img/sample/sample_05.jpg";
import sample4 from "../../assets/img/sample/sample_04.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                  <h1>Late Dr. Sid Mitra</h1>
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
                                Every once in awhile a soul crosses your path that challenges your beliefs, then challenges your value system and then departs from this world leaving you fulfilled. Dr.Sid Mittra or Dada as I fondly called him, was such a soul that came into my life. He contacted me to publish his book. He invited me to share his home. But we ended up being two souls who found each other. Dada’s greatest contribution to my life was making me understand how Indians who emigrated between the 40’s and the 90’s felt and why they held on to certain types of views even when India changed. It helped me empathize with Indian academics both within India and overseas. His traditional views on pedagogy and teaching methods spurred me on to dream differently. Dada was a kind hearted soul who remained an atheist for the most part of his life. But he loved a good discourse on Goddess Kali. His love for his country and his yearning to contribute to growing Indian academia is another reason he and I connected so well. 
                            </p> */}
                    <p>
                      Every once in a while a soul crosses your path that
                      challenges your beliefs, then challenges your value system
                      and then departs from this world leaving you fulfilled. Dr
                      Sid Mittra or Dada as I fondly called him, was such a soul
                      that came into my life. He contacted me to publish his
                      book.
                    </p>
                    <p>
                      He invited me to share his home. But we ended up being two
                      souls who found each other. Dada’s greatest contribution
                      to my life was making me understand how Indians who
                      emigrated between the 40’s and the 90’s felt and why they
                      held on to certain types of views even when India changed.
                      It helped me empathize with Indian academics both within
                      India and overseas.
                    </p>
                    <p>
                      His traditional views on pedagogy and teaching methods
                      spurred me on to dream differently. Dada was a kind
                      hearted soul who remained an atheist for the most part of
                      his life. But he loved a good discourse on Goddess Kali.
                      His love for his country and his yearning to contribute to
                      growing Indian academia is another reason he and I
                      connected so well.
                    </p>
                    <p>Dada, thank you for coming into my life…</p>
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