import { BASE_APP, SERVER_URL} from "../../config";
import PlaySvg from  "../../assets/img/icons/play.svg";
import helpSvg from "../../assets/img/articles/helpSvg.svg";
import ResourceSvg from "../../assets/img/articles/resource.jpg";
import WithUsSvg from  "../../assets/img/logos/earn_with_us_logo_01.png";
import sevaHaat from  "../../assets/img/logos/seva_haat_full_logo.svg";
import clientFirst from "../../assets/img/members/person_06.jpg";
import heartSvg from  "../../assets/img/icons/heart.svg";
import client3 from "../../assets/img/members/person_14.jpg";
import client2 from "../../assets/img/members/person_08.jpg";
import client4 from "../../assets/img/members/person_12.jpg";
import client5 from "../../assets/img/members/person_05.jpg";
import client6 from "../../assets/img/members/person_07.jpg";
import client7 from "../../assets/img/members/person_04.jpg";
import client8 from "../../assets/img/members/person_09.jpg";
import Article1 from "../../assets/img/articles/article_01.jpg";
import Article2 from "../../assets/img/articles/article_02.jpg";
import chart from "../../assets/img/chart/chart_01.svg";
import Article3 from "../../assets/img/articles/article_03.jpg";
import posterImg from "../../assets/img/videos/home_video_placeholder.jpg";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useEffect } from "react";
import { useState } from "react";
import { subscribeNotification } from "../../store/apiCalls/profileDetails";
import ToolTip from "../../components/common/ToolTip";

const MainContent = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [subscribedShow, setSubscribedShow] = useState(false);
    const [email, setEmail] = useState('');
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({top: 0, behavior: 'smooth'});
        navigate(path)
    }

    const handleChatBot= (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    useEffect(() => {
      $('.videoList').slick({
          infinite: true,
          arrows: false,
          dots: false,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          // prevArrow: '<button type="button" class="slick-prev"><b class="icon-arrow-left"></b></button>',
          // nextArrow: '<button type="button" class="slick-next"><b class="icon-arrow-right"></b></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });
    }, [])



    const handleSubmit = async (e) => {
      e.preventDefault();
      const resp = await subscribeNotification({email: email})
      if(resp.data?.success) {
        setShow(true);
        setEmail('');
      } else {
        setSubscribedShow(true);
        setEmail("");
      }
    }

    return (
      <div className="homepage">
        <div className="homeBanner">
          <div className="bannerSlider">
            <div className="bannerItem">
              <div className="bannerItem-text">
                <h2>
                  Reimagining Higher Education, one{" "}
                  <div id="typed" className="changeText">
                    <b className="ani_01">article</b>
                  </div>
                  &nbsp;at a time
                </h2>
                <h3>The future is already here, and it is open...</h3>
                <a href="#" onClick={(e) => handleRedirect(e)}>
                  JOIN THE MISSION
                </a>
              </div>
            </div>
          </div>
          <div
            className="pullUp"
            onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <b className="icon-arrow-right" />
          </div>
          <a className="helpLink" onClick={handleChatBot}>
            <b className="icon-help" />
            Help
          </a>
        </div>
        <div className="homeIntro">
          <div className="containWrap">
            <div className="homeIntro-row">
              <div className="homeIntro-col first">
                <h2>
                  Are you ready to break the
                  <span className="boundaries-underline">boundaries</span>?
                </h2>
                <h3>
                  Be a part of the <span>largest database</span> of research
                  professionals.
                </h3>
                <p>
                  We don't mind seeing you register multiple times. Choose <br/> the
                  profile you want to register for and start your journey.{" "}
                </p>
              </div>
              <div className="homeIntro-col last">
                <h3>PEER REVIEWER and PUBLISHING EDITOR</h3>
                <p>
                  <span>Join us as a Peer Reviewer</span>, if you are a curious
                  researcher who is pursuing a Masters or PhD degree and wants
                  to contribute to research publishing. Get an early view of
                  exciting new research happening in your field. Experienced
                  researchers are also most welcome.
                </p>
                <p>
                  <span>Join us as a Publishing Editor</span> and be the Bond of
                  Journal and Article publishing. Lay down the rules for
                  improving the quality of research and integrity of its peer
                  review. We will help you in getting your contribution
                  recognised.
                </p>
                <div className="text-center stepBtn">
                    <a href="#" onClick={(e) => handleRedirect(e)}>STEP <i className="dots">i</i>nto GREATNESS NOW</a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="homeIntroVideo">
          <div className="containWrap">
            <div className="videoWrap">
              {/* <span className="videoButton">
                <img alt="play" src={PlaySvg} />
                </span>
                <video
                id="processVideo"
                width="100%"
                poster={posterImg}
                >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
                </video> */}
              <ul className="videoList">
                <li>
                <div className="videoBanner">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Iewt4-w2R9g"
                    playing={false}
                    controls={true}
                    loop={true}
                    width="100%"
                  />
                  </div>
                </li>
                <li>
                <div className="videoBanner">
                  <ReactPlayer
                    url="https://youtu.be/pDaq7mv5E-Q"
                    playing={false}
                    controls={true}
                    loop={true}
                    width="100%"
                  />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="homeOther">
          <div className="containWrap">
            <div className="homeOther-row">
              <div className="otherBox left">
                <img alt="Resource Centre" src={ResourceSvg} />
                <div className="otherBox-text">
                  <h3>Resource Centre</h3>
                  <p>
                    Find diverse resources to support you through every stage of
                    your research dissemination. Know that you are not alone in
                    this publishing journey. We are with you, every step of the
                    way!
                  </p>
                  <a
                    href="/"
                    onClick={(e) => handleRedirect(e, "/resourcecentre")}
                    className="button button-white"
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
              <div className="otherBox right">
                <img alt="How Can We Help You?" src={helpSvg} />
                <div className="otherBox-text">
                  <h3>How Can We Help You?</h3>
                  <p>
                    Browse our selection of many questions that we have
                    answered. If you cannot find what you are looking for,
                    please write to us and we will respond promptly.
                  </p>
                  <a
                    href="/"
                    onClick={(e) => handleRedirect(e, "/faq")}
                    className="button button-white"
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sevaSection">
          <div className="containWrap">
            <div className="sevaSection-title">
                <div className="sevaSection-col">
                <h2 className="sevaHaatLogo" style={{textAlign: 'left'}}>
                    <span className="underLine"><img alt="#" src={sevaHaat} /></span>
                </h2>
                <h3>The growing freelance community</h3>
                <p>
                  You have a <span>SKILL</span> to offer? We have the{" "}
                  <span>USER</span> for it.
                </p>
              </div>
              <div className="sevaSection-col">
                <a
                  href={`${BASE_APP}/Sevahaat/registration`}
                  className="button button-white"
                >
                  BECOME A SELLER
                </a>
              </div>
            </div>
            <div className="sevaSection-chart">
              <div className="workFlow">
                <img src={chart} alt="#" />
              </div>
              <div className="emailUs">
              <ToolTip placement="top" classNameTooltip="emailUs-tooltip" toolTipMessage="contactus@vikramshilaedu.in">
                <div className="emailUs-title"><a href="mailto:contactus@vikramshilaedu.in?subject=Tell me more: I`m interested in doing Projects with Vikramshila">Email Us</a></div>
              </ToolTip>
                <div className="emailUs-text">
                  if you are a Project Manager or a Commissioning Editor.
                  <small>the possibilities are endless...</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sevaHaatSection">
          <div className="containWrap">
            <div className="sevaHaatSection-row">
              <div className="sevaHaatSection-work">
                <h3>
                  Curious how <span className="underLine">Seva Haat</span>{" "}
                  works?
                </h3>
                <ul>
                  <li>
                    <span>
                      <b className="icon-register" />
                    </span>
                    <p>1. Register with us</p>
                  </li>
                  <li>
                    <span>
                      <b className="icon-tool" />
                    </span>
                    <p>2. Set up your skills</p>
                  </li>
                  <li>
                    <span>
                      <b className="icon-send" />
                    </span>
                    <p>3. Deliver great work</p>
                  </li>
                  <li>
                    <span>
                      <b className="icon-rupee" />
                    </span>
                    <p>4. Get paid. Guaranteed!</p>
                  </li>
                </ul>
              </div>
              <div className="sevaHaatSection-more">
                <div className="earnLogo">
                  <span>
                    <img src={WithUsSvg} alt="#" />
                  </span>
                </div>
                <p>
                  Let your expertise <span>earn money</span> the simple way.
                </p>
                <p>
                  Join our database of <span>freelancers</span> and let our
                  platform do the rest.
                </p>
                <div className="sevaHaatSection-links text-center">
                  <a href={`${BASE_APP}/Sevahaat/registration`}>
                    REGISTER TODAY!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wishSection">
          <div className="containWrap">
            <div className="text-center">
              <h2>
              <span>ADVISORY BOARD</span>
              </h2>
              <a onClick={(e) => handleRedirect(e, "/advisory")}>
                Meet our Strategic Thought Partners
              </a>
            </div>
            <div class="memberListBox"> 
                {/* <div className="memberListBtn">
                    <a onClick={(e) => handleRedirect(e, "/advisory")} class="button button-white button-sm" href="">View All</a>
                </div> */}
            <ul className="memberList" style={{marginTop: '3rem'}}>
              <li onClick={(e) => handleRedirect(e, '/member-details/jagdish-seth')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client7} />
                  </div>
                  <div className="memberBox-text">
                    <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/jagdish-seth" onClick={(e) => handleRedirect(e, "/member-details/jagdish-seth")}><h3>Prof. Jagdish Sheth</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/bhimaraya-matri')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client2} />
                  </div>
                  <div className="memberBox-text">
                  <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/bhimaraya-matri" onClick={(e) => handleRedirect(e, "/member-details/bhimaraya-matri")}><h3>Dr. Bhimaraya Metri</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/sadhana-raut')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client3} />
                  </div>
                  <div className="memberBox-text">
                  <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/prof-ramesh-gaur" onClick={(e) => handleRedirect(e, "/member-details/sadhana-raut")}><h3>Dr. Sadhana Rout</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/amitabh-rajan')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client5} />
                  </div>
                  <div className="memberBox-text">
                  <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/sanjay-shrivastava" onClick={(e) => handleRedirect(e, "/member-details/amitabh-rajan")}><h3>Dr. Amitabh Rajan</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/rajiv-bhatia')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={clientFirst} />
                  </div>
                  <div className="memberBox-text">
                    <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/rajiv-bhatia" onClick={(e) => handleRedirect(e, "/member-details/rajiv-bhatia")}><h3>AMB Dr. Rajiv Bhatia</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/asha')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client4} />
                  </div>
                  <div className="memberBox-text">
                  <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="/member-details/harivansh-chaturvedi" onClick={(e) => handleRedirect(e, "/member-details/asha")}><h3>Dr. Asha Bhandarker</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li onClick={(e) => handleRedirect(e, '/member-details/prof-ramesh-gaur')}>
                <div className="memberBox">
                  <div className="memberBox-img">
                    <img alt="client" src={client6} />
                  </div>
                  <div className="memberBox-text">
                  <a style={{ background: 'none', boxShadow: 'none', paddingLeft: '0', paddingRight: '0' }} href="#" onClick={(e) => handleRedirect(e, "/member-details/prof-ramesh-gaur")}><h3>Dr. Ramesh Gaur</h3></a>
                    <span className="markFav">
                      <img alt="heart" src={heartSvg} />
                    </span>
                  </div>
                </div>
              </li>
              <li className="view-all_container" onClick={(e) => handleRedirect(e, '/advisory')}>
                <div className="memberBox view-all">
                <div className="memberBox-text">
                  <span className="markFav">
                    <img alt="heart" src={heartSvg} />
                  </span>
                    VIEW ALL
                </div>
                </div>
              </li>
            </ul>
        </div>
            </div>
        </div>
        <div style={{ display: "none" }} className="blogSection">
          <div className="containWrap">
            <div className="blogSection-title">
              <h2>Blogs</h2>
              <a className="button button-sm button-white">VIEW ALL</a> 
            </div>
            <ul className="articleList">
              <li>
                <div className="articleBox">
                  <div className="articleBox-img">
                    <img alt="article" src={Article1} />
                  </div>
                  <div className="articleBox-title">
                    <small>12th March, 2022</small>
                    <h3>
                      Materials Open Research (MOR)has published its first...{" "}
                    </h3>
                  </div>
                  <div className="articleBox-text">
                    <p>
                      As one of the world’s first open research publishing
                      Platforms in the fields of materials science and
                      engeering, the new Platform...{" "}
                    </p>
                    <a className="button button-sm button-white">READ MORE</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="articleBox">
                  <div className="articleBox-img">
                    <img alt="article" src={Article2} />
                  </div>
                  <div className="articleBox-title">
                    <small>12th March, 2022</small>
                    <h3>
                      Materials Open Research (MOR)has published its first...{" "}
                    </h3>
                  </div>
                  <div className="articleBox-text">
                    <p>
                      As one of the world’s first open research publishing
                      Platforms in the fields of materials science and
                      engeering, the new Platform...{" "}
                    </p>
                    <a className="button button-sm button-white">READ MORE</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="articleBox">
                  <div className="articleBox-img">
                    <img alt="article" src={Article3} />
                  </div>
                  <div className="articleBox-title">
                    <small>12th March, 2022</small>
                    <h3>
                      Materials Open Research (MOR)has published its first...{" "}
                    </h3>
                  </div>
                  <div className="articleBox-text">
                    <p>
                      As one of the world’s first open research publishing
                      Platforms in the fields of materials science and
                      engeering, the new Platform...{" "}
                    </p>
                    <a className="button button-sm button-white">READ MORE</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="subscribeSection">
          <div className="containWrap">
            <div className="subscribeWrap">
              <div className="subscribeWrap-text">
                <h2 style={{ textAlign: "left" }}>
                  Get the latest content delivered straight to your inbox!
                </h2>
                <p>
                  Subscribe to get our best content in your inbox. One post at a
                  time. No spam, ever!
                </p>
              </div>
              <div className="subscribeWrap-form">
                <div className="subscribeWrap-fill">
                  <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <button type="submit" className="button button-white">COUNT ME IN</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          dialogClassName="modal-dialog-centered"
          onHide={(e) => setShow(false)}
          show={show}
          className="success-modal"
          id="subscribed-msg"
          tabIndex={-1}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header
            closeButton
            className="justify-content-center pb-1 px-0 pt-0"
          >
            <Modal.Title>
              Thank you for subscribing
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We are excited to have you join our community. <br /> <br /> You have been successfully added to our list. <br /> <br /> We will be in touch soon. <br /> Keep Safe, Keep Smiling.
          </Modal.Body>
          <Modal.Footer className="justify-content-center d-grid">
            <Button className="button-primary" onClick={(e) => setShow(false)}>Okay</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          dialogClassName="modal-dialog-centered"
          onHide={(e) => setSubscribedShow(false)}
          show={subscribedShow}
          className="success-modal"
          id="subscribed-msg"
          tabIndex={-1}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header
            closeButton
            className="justify-content-center pb-1 px-0 pt-0"
          >
            <Modal.Title style={{ fontSize: '22px' }}>
            <p className="good-news">GOOD NEWS!</p> You are already subscribed with Mission Vikramshila
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
            Good news! You are already subscribed with mission Vikramshila.
          </Modal.Body> */}
          <Modal.Footer className="justify-content-center d-grid">
            <Button className="button-primary" onClick={(e) => setSubscribedShow(false)}>Thanks, I got it</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default MainContent;