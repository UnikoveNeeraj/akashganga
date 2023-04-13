import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import person1 from "../../assets/img/members/person_01.jpg";
import person2 from "../../assets/img/members/person_02.jpg";
import person3 from "../../assets/img/members/person_03.jpg";
import person17 from "../../assets/img/members/person_17.svg";
import person18 from "../../assets/img/members/person_18.svg";
import person21 from "../../assets/img/members/person_21.svg";
import { useNavigate } from "react-router-dom";
import { shuffleArray } from "../../utils";

const Council = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        window.scroll({ top: 0, behavior: 'smooth' })
        e.preventDefault();
        navigate(path)
    }

    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    const memberList = () => {
        const rendered = [
            <li>
                <div className="memberBox" onClick={(e) => handleRedirect(e,'/member-details/suchiradipta-bhattacharjee')}>
                    <div className="memberBox-img">
                    {" "}
                    <img src={person3} alt="#" />
                    <div className="memberBox-know">
                        <h3>Suchiradipta Bhattacharjee</h3>
                        <a onClick={(e) => handleRedirect(e,'/member-details/suchiradipta-bhattacharjee')} href="member_detail.html">Know More</a>
                    </div>
                    </div>
                    <div className="memberBox-info" onClick={(e) => handleRedirect(e,'/member-details/suchiradipta-bhattacharjee')}>
                    <p>
                        Suchiradipta Bhattacharjee is a social scientist with a PhD in Agricultural Extension. Her work revolves around understanding what it takes to sustainably transition... {" "}
                        <a onClick={(e) => handleRedirect(e,'/member-details/suchiradipta-bhattacharjee')} href="member_detail.html">Read More</a>
                    </p>
                    </div>
                </div>
            </li>,

            <li>
                <div className="memberBox" onClick={(e) => handleRedirect(e,'/member-details/neeraj-kapoor')}>
                    <div className="memberBox-img">
                    {" "}
                    <img src={person21} alt="#" />
                    <div className="memberBox-know">
                        <h3>Neeraj Kapoor</h3>
                        <a onClick={(e) => handleRedirect(e,'/member-details/neeraj-kapoor')} href="member_detail.html">Know More</a>
                    </div>
                    </div>
                    <div className="memberBox-info">
                    <p>
                        Neeraj has 27-year experience, having worked both on big brands and in large agencies. He has worked with MNCs like Philips, OSRAM Siemens, Gillette & Bates 141 and... {" "}
                        <a onClick={(e) => handleRedirect(e,'/member-details/neeraj-kapoor')} href="member_detail.html">Read More</a>
                    </p>
                    </div>
                </div>
            </li>,

            <li>
                <div className="memberBox" onClick={(e) => handleRedirect(e, "/member-details/sriparna-basu")}>
                <div className="memberBox-img">
                    {" "}
                    <img src={person17}  alt="#" />
                    <div className="memberBox-know">
                    <h3>Prof. Sriparna Basu</h3>
                    <a
                        href="member_detail.html"
                        onClick={(e) => handleRedirect(e, "/member-details/sriparna-basu")}
                    >
                        Know More
                    </a>
                    </div>
                </div>
                <div className="memberBox-info">
                    <p>
                    Prof. Sriparna Basu is a Ph.D. (University of Illinois, at
                    Urbana-Champaign, USA), M.A. (Cultural Studies), from
                    University of Illinois, at Urbana-Champaign, and M.A. from
                    Jadavpur... {" "}
                    <a
                        href="member_detail.html"
                        onClick={(e) => handleRedirect(e, "/member-details/sriparna-basu")}
                    >
                        Read More
                    </a>
                    </p>
                </div>
                </div>
            </li>,

            <li>
                <div className="memberBox" onClick={(e) =>handleRedirect(e, "/member-details/kumaraswamy")}>
                    <div className="memberBox-img">
                        {" "}
                        <img src={person18}  alt="#" />
                        <div className="memberBox-know">
                        <h3>Prof. PR Kumaraswamy</h3>
                        <a
                            href="member_detail.html"
                            onClick={(e) =>
                            handleRedirect(e, "/member-details/kumaraswamy")
                            }
                        >
                            Know More
                        </a>
                        </div>
                    </div>
                    <div className="memberBox-info">
                        <p>
                        Prof. P R Kumaraswamy teaches contemporary Middle East at
                        Jawaharlal Nehru University, New Delhi, since 1999. During
                        1992-1999 he was a research fellow at the Harry... {" "}
                        <a
                            href="member_detail.html"
                            onClick={(e) =>
                            handleRedirect(e, "/member-details/kumaraswamy")
                            }
                        >
                            Read More
                        </a>
                        </p>
                    </div>
                </div>
            </li>
        ];
        return shuffleArray(rendered)
    }

    return (
        <>
            <Header />
            <div className="academicSection innerPages">
                <div className="containWrap">
                    <div className="academicWrap">
                        <h1>
                            <span>ACADEMIC CONSULTATION GROUP</span>
                        </h1>
                        <span className="likeBtn">Get to Know Our Experts</span>
                        <p>
                            We strongly believe that once direction is set, one needs to take along
                            learned scholars who can ensure the journey adopts the best,
                            transparent, and academic centric practices. The Academic Consultation
                            Group is the backbone of Vikramshila's foray into academic publishing.
                            We are in debt to this group for helping us build practices that address
                            current needs with a keen eye on anticipating what an uncertain future
                            holds for all of us.
                        </p>
                    </div>
                    {/* <div className="divideWrap" /> */}
                    <div className="memberList">
                    <ul>
                        <li>
                            <div className="memberBox" onClick={(e) => handleRedirect(e,'/member-details/rishi-kalpal')}>
                                <div className="memberBox-img">
                                {" "}
                                <img src={person1} alt="#" />
                                <div className="memberBox-know">
                                    <h3>Rishi Kapal</h3>
                                    <a onClick={(e) => handleRedirect(e,'/member-details/rishi-kalpal')} href="member_detail.html">Know More</a>
                                </div>
                                </div>
                                <div className="memberBox-info">
                                <p>
                                    A speaker at United Nations HQ in New York, a Stanford LEAD
                                    alumni, author of multiple books, Rishi Kapal coaches
                                    organizations and professionals for strategic transformational...{" "}
                                    <a onClick={(e) => handleRedirect(e,'/member-details/rishi-kalpal')} href="member_detail.html">Read More</a>
                                </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="memberBox" onClick={(e) => handleRedirect(e,'/member-details/nandini')}>
                                <div className="memberBox-img">
                                {" "}
                                <img src={person2} alt="#" />
                                <div className="memberBox-know">
                                    <h3>Dr. Nandini Srivastava</h3>
                                    <a onClick={(e) => handleRedirect(e,'/member-details/nandini')} href="member_detail.html">Know More</a>
                                </div>
                                </div>
                                <div className="memberBox-info">
                                <p>
                                    Dr. Nandini Srivastava is currently working as the Director and Professor for council for doctoral program at Manav Rachna International Institute of Research and studies... {" "}
                                    <a onClick={(e) => handleRedirect(e,'/member-details/nandini')} href="member_detail.html">Read More</a>
                                </p>
                                </div>
                            </div>
                        </li>
                        {memberList()}
                    </ul>
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


export default Council;