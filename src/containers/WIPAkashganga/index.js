import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import "../../assets/scss/sections/_soon.scss";
import moreImg from "../../assets/img/icons/more.png";
import Akashganga from "../../assets/img/icons/akashganga.svg";
import { useNavigate } from "react-router-dom";

const WIP = () => {
  const navigate = useNavigate();
  const handleRedirect = (e, path = "/") => {
    navigate(path);
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE('messenger', 'open');
}

  return (
    <>
      <Header />
      <div className="centerSection">
        <div className="soonSection innerPages">
          <div className="containWrap">
            <div className="row justify-content-between align-items-center">
              <div className="cmyMessage">
                <div className="messageWrap">
                  <h2>
                    {" "}
                    <img src={Akashganga} alt="akashganga" />
                  </h2>
                  <p>
                    The term "Aakashganga" is found in the Puranas (ancient Indian
                    literature). In contemporary day-to-day usage, Aakashganga is a Hindi
                    word synonymous with the Milky Way, our galaxy.
                  </p>
                  <p>
                    Aakashganga is an automated platform that will host Open
                    Access Journals. It will also host what will become India’s
                    first series of Mega Journals. Each of these journals will
                    provide world class peer review and publishing processes.
                    While being born Indian it will help the developing world
                    find its place in publishing creditable research at an
                    affordable price.
                  </p>
                  <p>
                    Aakashganga is on track to be the platform that provides an
                    alternative to Western dominated high priced, exclusive and
                    at times discriminatory publishing vehicles.
                  </p>
                </div>
              </div>

              <div className="soonContent">
                <h1>ALL GOOD THINGS TAKE TIME...</h1>
                <p>
                  While we work tirelessly to build this phenomenal platform,
                  here’s what you can do in the meantime:
                </p>
                <ul className="otherLinks">
                  <li>
                    <div className="linkBox">
                      <div className="linkBox-img">
                        {" "}
                        <img src={moreImg} alt="#" />
                      </div>
                      <div className="linkBox-info">
                        <p>Join the movement</p>
                        <span
                          onClick={(e) => handleRedirect(e, "/registration")}
                        >
                          Register with us now!
                        </span>
                        <a onClick={(e) => handleRedirect(e, "/registration")}>
                          <b className="icon-arrow-long-left"></b>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="linkBox">
                      <div className="linkBox-img">
                        {" "}
                        <img src={moreImg} alt="#" />
                      </div>
                      <div className="linkBox-info">
                        <p>We make a difference</p>
                        <span onClick={(e) => handleRedirect(e, "/browse")}>
                          Message from the Founder
                        </span>
                        <a onClick={(e) => handleRedirect(e, "/browse")}>
                          <b className="icon-arrow-long-left"></b>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="linkBox">
                      <div className="linkBox-img">
                        {" "}
                        <img src={moreImg} alt="#" />
                      </div>
                      <div className="linkBox-info">
                        <p>Meet the dreamcatchers</p>
                        <span onClick={(e) => handleRedirect(e, "/teams")}>
                          The Vikramshila team
                        </span>
                        <a onClick={(e) => handleRedirect(e, "/teams")}>
                          <b className="icon-arrow-long-left"></b>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="linkBox">
                      <div className="linkBox-img">
                        {" "}
                        <img src={moreImg} alt="#" />
                      </div>
                      <div className="linkBox-info">
                        <p>Share our love of music</p>
                        <span onClick={(e) => handleRedirect(e, "/playlist")}>
                          Go to our curated playlists
                        </span>
                        <a onClick={(e) => handleRedirect(e, "/playlist")}>
                          {/* <a href="https://open.spotify.com/playlist/0FoubBS5ukCp1flFkTd1IT?si=FjIblG89SHiffKer0ihM1A" target="_blank"> */}
                          <b className="icon-arrow-long-left"></b>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="pullUp"
              onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <b className="icon-arrow-right" />
            </div>
            <div className="row align-items-center justify-content-between contentFooter">
              <div class="col text-end">
                <a onClick={handleChatBot} class="helpLink">
                  <b class="icon-help"></b>Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WIP;
