import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_07.jpg";
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

    return(
        <>
            <Header />
            <div className="academicSection innerPages">
                <div className="containWrap">
                    <a onClick={(e) => handleRedirect(e,'/advisory')} className="memberBack">
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
                        <h1>Dr. Ramesh Gaur </h1>
                        
                        <p>
                            Director, National School of Drama<br />
                            Dean (Academics), Indira Gandhi National Centre for the Arts<br />
                            Member, UNESCO Global Task Force on Indigenous Languages
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
                                Prof. (Dr.) Ramesh Chandra Gaur is presently Director, National School of Drama (NSD), an 
                                autonomous institute under Ministry of Culture, Govt. of India. He has assumed his office in NSD
                                w.e.f. 15.03.2022 (A/N). </p>
                                
                            <p> As Director, NSD, he is Head of Department and Principle Executive 
                                Officer of NSD, New Delhi and its centres situated at Gangtok, Agartala, Varanasi, Bengaluru and 
                                also of TIE wing Srinagar (J & K). </p>
                            <p> Prof. Gaur is also associated with Indira Gandhi National Centre for the Arts, New Delhi as 
                                Dean (Academics). He has been previously associated with renowned
                                organizations like JNU, TIFR, CSIR-CRRI, IMT, MDI and RIS.
                            </p>

                            <p>
                                A Fulbright Scholar (VT, USA), Prof. Gaur has visited 24 countries, in relation to various professional assignments.
                            </p>
                            <p>
                                Prof. Gaur has been honoured with over 
                                Fourteen National and International awards. Some of these are NCPEDP-Mphasis 
                                Universal design Award 2017, Turnitin Global Innovation Awards 2017(USA): Honorable 
                                Mention Category: Royal Society of Chemistry (RSC) India, Librarians choice award to Dynamic 
                                Librarians, India CSR Dr. Velaga Memorial Awards for Innovative Library Services (Leadership) 
                                for the year 2019, The “Most Fabulous Global Knowledge Management Leader’’ 2020 award at 
                                Global Knowledge Management Congress & Awards, World HRD Congress 2020 , Best Library 
                                Leader Award and others.
                            </p>
                            <p>
                                Prof. Gaur is the first Indian nominated as Member- International Advisory Committee (IAC) 
                                UNESCO Memory of the World (MoW) Programme (2018-2025) as well as Member UNESCO 
                                Global Task Force on Indigenous Languages (2020-2032).
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
                        handleRedirect(e, "/member-details/bhimaraya-matri")
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
                                Your words have the power to change the world. Register as a
                                Peer Reviewer and/or a Publishing Editor.
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
                                Who are brave enough to dream of a different future for what is
                                today referred to as, the developing world.
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
    )
}


export default MemberDetails;