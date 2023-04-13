import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
/*import "../../assets/scss/sections/_about.scss";*/
import "../Homepage/common.js";
import { useEffect } from "react";
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    const handleChatBot= (e) => {
        e.preventDefault();
        window.zE('messenger', 'open');
      }

    return (
        <>
            <Header />
            <div>
                <div className="aboutSection innerPages">
                    <div className="containWrap">
                        <div className="aboutWrap">
                            <h1>
                                Why <span className="underLine aboutDots">V<i className="dots">i</i>kramsh<i className="dots">i</i>la</span>
                            </h1>
                            <p className="type">
                                Vikramshila aspires to be a contributor to the transformation of India
                                into a 'knowledge superpower' and a global leader in Higher Education.
                            </p>
                            <div className="quoteWrap">
                                <div className="quoteWrap-rest">
                                    <p>
                                        In ancient times, India was the center of Higher Education and
                                        Learning where scholars from across the globe came to be
                                        enlightened. Years of foreign invasion, occupation and
                                        colonization destroyed this age-old rich tradition of imparting knowledge.
                                    </p>
                                    <p>
                                        The end result is that education in India today follows a model that is
                                        rapidly becoming segmented, selective and unaffordable especially in
                                        the process of disseminating knowledge.
                                    </p>
                                    <p>
                                        <b>Atmanirbhar Bharat</b> is at the core of our beliefs. Open
                                        Access is the vehicle to disseminate knowledge freely and
                                        innovative use of technology is the only means of achieving this
                                        objective.
                                    </p>
                                </div>
                                <div className="quoteWrap-main rightNill">
                                    <div className="quoteBox big">
                                        <p>
                                            The entire journey will always be driven by the community of
                                            researchers and professors who are, in reality, truly qualified
                                            to determine what is publishable and hence noteworthy
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <p>
                                Vikramshila is a name that represents transparency in the
                                dissemination process. The entire journey will always be driven by the
                                community of researchers and professors who are, in reality, truly
                                qualified to determine what is publishable and hence noteworthy.
                            </p>
                            <p>Vikramshila is our contribution to this process.</p>
                        </div>
                        <div className="aboutWrap">
                            <h2>
                                OUR <span className="underLine twoDots">M<i className="dots">I</i>SS<i className="dots">I</i>ON</span>
                            </h2>
                            <p>
                                Vikramshila is on a mission to create multiple digital platforms that
                                help disseminate research, primarily from the developing world.
                            </p>
                            <p>
                                We break barriers of exclusion, regionalism and discrimination faced
                                by scholars and researchers across the globe. Technology is at the
                                heart of all that we do without losing sight of a researcher’s
                                objective to be published.
                            </p>
                            <p>
                                We remain committed to being inclusive, affordable and <i>Open for All</i>.
                            </p>
                        </div>
                        <div className="aboutWrap">
                            <h2>
                                OUR <span className="underLine twoDots">V<i className="dots">I</i>S<i className="dots">I</i>ON</span>
                            </h2>
                            <p>
                                Vikramshila aims to be the Open Access platform of choice for
                                institutions, researchers, academics, professionals and students.
                            </p>
                            <div className="quoteWrap">
                                <div className="quoteWrap-main leftNill">
                                    <div className="quoteBox small">
                                        <p>
                                            Our key aim is to make access to information free as freedom so
                                            that it is seamless and connected
                                        </p>
                                    </div>
                                </div>
                                <div className="quoteWrap-rest">
                                    <p>
                                        It exists to represent every research scholar who feels she isn’t
                                        given a fair chance to present her case for publishing her
                                        research.
                                    </p>
                                    <p>
                                        Our vision is to help make the research journey more transparent,
                                        efficient and affordable for every researcher.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div style={{right: '85px'}} className="pullUp" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <b className="icon-arrow-right" />
                    </div>
                    <div style={{ position: 'relative', right: '30px' }} class="row align-items-center justify-content-between contentFooter pt-3"><div class="col text-end"><a onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>

                    </div>
                 
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;