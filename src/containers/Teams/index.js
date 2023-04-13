import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import { useEffect } from "react";
import vivekImg from "../../assets/img/founder/vivek_title.png";
import vivekMehra from "../../assets/img/founder/vivek_mehra.png"
import shafinaTitle from "../../assets/img/founder/shafina_title.png";
import shafinaMain from "../../assets/img/founder/shafina_segon.png";
import blogImg from "../../assets/img/icons/blog-icon.svg";
import { useNavigate } from "react-router-dom";

const Teams = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path = "/registration") => {
        e.preventDefault();
        window.scroll({ top: 0, behavior: 'smooth' });
        navigate(path)
    }

    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
    }

    return (
        <>
            <Header />
            <div className="teamSection innerPages">
                <div className="teamBanner">
                    <div className="containWrap">
                        <p>
                            VIKRAMSHILA EDUCATION derives its name from Vikramshila University,
                            which was one of the two most important centres of learning in India
                            during the Pala Empire, along with Nalanda.
                        </p>
                    </div>
                </div>
                <div className="teamWrap">
                    <div className="containWrap">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-md-auto">
                                <h1>
                                    THE <span className="underLine">DREAM</span>
                                </h1>
                            </div>
                        </div>
                        <div className="songWrap">
                            <div className="songLyrics">
                                <p>First when there’s nothing, but a slow glowing dream</p>
                                <p>That your fear seems to hide, deep inside your mind</p>
                                <p>All alone, I have cried, silent tears full of pride</p>
                                <p>In a world made of steel, made of stone…</p>
                            </div>
                            <small>This is a song by <a href="https://youtu.be/Q4TK82N1nEk" target="_blank">Irene Cara</a> written in 1983 by Keith Forsey.</small>
                        </div>
                        <div className="quoteWrap scriptFont">
                            <p>
                                Nothing sums up the dream of Vikramshila better than the  two stanzas of Irene Cara’s song The idea of a mechanism to disseminate research that breaks the Wests’ dominance was seeded in a period of abject pain and humiliation that I went through. I was sure that the course of my life was not going to be determined by a handful of foreigners who understood little about my country or the contribution I could make. They understood even less about the pain of researchers in the developing world, and this is the point from which the dream called Vikramshila Education was born. Over the course of time there were many who rejected the idea, but the passion never waned. For every person who was skeptical, I found a dozen who supported the idea. Along the way I was joined by people who shared my passion and believed in the vision.
                            </p>
                            <small className="typeFont">-Vivek Mehra, Founder and CEO </small>
                        </div>
                    </div>
                </div>
                <div className="containWrap">
                    <div className="teamIntro">
                        <h3 style={{ textAlign: 'left' }}>
                            THE <span className="underLine">TEAM</span>
                        </h3>
                        <div className="teamIntro-row">
                            <div className="teamIntro-left">
                                <h4>
                                    It is our dream to see India become the frontrunner in scientific
                                    research output.
                                </h4>
                            </div>
                            <div className="teamIntro-right">
                                <h5>
                                    Meet the changemakers who are brave enough to dream of a different
                                    future for what is today referred to as, the developing world
                                </h5>
                                <p>
                                    Vikramshila Education is a tribute to all universities that helped humankind become knowledgeable. The principles remain the same, the means are more modern and adapted to the rapidly changing universe we live in. It is our dream to see India become the frontrunner in scientific research output and provide a platform to every researcher who wants to publish within an affordable budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="founderIntro">
                    <div className="founderIntro-left">
                        <div className="nameTag">
                            <h6>Vivek Mehra</h6>
                            <small>Founder and CEO</small>
                        </div>
                        <img src={vivekImg} alt="vivek_mehra" />
                    </div>
                    <div className="founderIntro-right">
                        <div className="founderbox">
                            <div className="founderbox-info">
                                <div className="founderbox-name">
                                    <h6>The Founder Dream Catcher</h6>
                                    <small>TedX speaker | Mentor | Author | Higher Education evangelist |  Still a student
                                    </small>
                                </div>
                                <div className="founderbox-self">
                                    <div className="founderbox-img">
                                        <img src={vivekMehra} alt="vivek_mehra" />
                                    </div>
                                    <div className="founderbox-social">
                                        <ul>
                                            <li>
                                                <a href="https://www.linkedin.com/in/vivekmehra03" target="_blank">
                                                    <b className="icon-linkdin_fill" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/vivekmehra03" target="_blank">
                                                    <b className="icon-tweet_fill" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="http://www.vivekmehra.in/" target="_blank">
                                                    <b className="icon-blog_fill"><img src={blogImg} alt="Blogs" /></b>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="founderbox-bio">
                                <p>
                                    I have been engaged in supporting Higher Education for twenty plus years. Sixteen
                                    of these were focused on publishing research. To grow a journals
                                    portfolio from 11 to 119 in these years hasn't been by accident. A similar
                                    growth was experienced in academic and professional books’
                                    publishing.
                                </p>
                                <p>
                                    My journey is of learning even though the early years were of
                                    strife. As a student, I understood more about my country when I was
                                    penniless in New York City than I did in my privileged schooling
                                    years in India. The NYC years shaped my thinking and, in many ways,
                                    determined my destiny. The commitment to do something for the
                                    country was made in 1987 when I headed back to India; a time when
                                    many my age were leaving it.
                                </p>
                                <p>
                                    I have a Bachelors in Textile Technology, a Masters in Marketing and
                                    two degrees in Intellectual Property Law; all from foreign
                                    universities. I am currently pursuing a PhD in management from an
                                    Indian University. These formal degrees coupled with my learning
                                    about the issues Higher Education in India faces make Vikramshila
                                    and I a perfect match.
                                </p>
                                <p>For a more detailed CV please <a href="/" onClick={(e) => handleRedirect(e, '/founder-details')}>Click here</a></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="founderIntro right">
                    <div className="founderIntro-left">
                        <div className="nameTag">
                            <h6>Shafina Segon</h6>
                            <small>Co-founder and CMO</small>
                        </div>
                        <img src={shafinaTitle} alt="shafina" />
                    </div>
                    <div className="founderIntro-right">
                        <div className="founderbox">
                            <div className="founderbox-info">
                                <div className="founderbox-name">
                                    <h6>The Co-founder Dream Catcher</h6>
                                    <small>
                                        For as long as I can remember, I have wanted to make a difference,
                                        especially in the field of education. This passion led me to
                                        choose my professional journey in publishing.
                                    </small>
                                </div>
                                <div className="founderbox-self">
                                    <div className="founderbox-img">
                                        <img
                                            src={shafinaMain}
                                            alt="shafina_segon"
                                        />
                                    </div>
                                    <div className="founderbox-social">
                                        <ul>
                                            <li>
                                                <a href="https://in.linkedin.com/in/shafinasegon" target="_blank">
                                                    <b className="icon-linkdin_fill" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://mobile.twitter.com/shafinasegon" target="_blank">
                                                    <b className="icon-tweet_fill" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="founderbox-bio">
                                <p>
                                    Before starting this journey, I have been an educator, a curriculum
                                    developer, and an author for schoolbooks. I have also been a
                                    teacher-trainer of English Language Teaching for over six years.
                                </p>
                                <p>
                                    For the last two decades, I have been lucky to work with many
                                    leading publishers, taking the front seat in marketing and sales. I
                                    also have experience of handling books, journals, and digital
                                    resources for schools as well as higher education.{" "}
                                </p>
                                <p>
                                    I come from an interdisciplinary background with degrees in
                                    marketing, education, basic sciences, journalism &amp; mass
                                    communication.{" "}
                                </p>
                                <p>
                                    I believe that makes me qualified to walk this journey with you.
                                </p>
                                <p>
                                    After three decades of being in the education industry, I feel that
                                    I’m just getting started. Vikramshila for me is a dream that allows
                                    me to contribute to my nation’s growth as a global leader in
                                    research and help shape the world for the better.
                                </p>
                                <p>
                                    We will make sure that Vikramshila always remains a mission with a
                                    conscience and is driven by our community of researchers and
                                    professors. That is why we have created its ecosystem uniting
                                    technology, research and community making access to information
                                    open, seamless and connected.
                                </p>
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
                <div className="containWrap">
                    <div class="row align-items-center justify-content-between contentFooter">
                        <div class="col text-end"><a class="helpLink" onClick={handleChatBot} ><b class="icon-help"></b>Help</a></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Teams;