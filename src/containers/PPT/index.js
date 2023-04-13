import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import ppt1 from "../../assets/img/articles/ppt_01.jpg"
import ppt2 from "../../assets/img/articles/ppt_02.png"
import ppt3 from "../../assets/img/articles/ppt_03.png"
import ppt4 from "../../assets/img/articles/ppt_04.png"
import ppt5 from "../../assets/img/articles/ppt_05.png"
import ppt6 from "../../assets/img/articles/ppt_06.png"
import ppt7 from "../../assets/img/articles/Research.png"
import ppt8 from "../../assets/img/articles/Textbook.png"
import file1 from "../../assets/files/How to write a research paper.pdf";
import file2 from "../../assets/files/Identifying Journals.pdf";
import file3 from "../../assets/files/Publishing in a Credible Journal.pdf";
import file4 from "../../assets/files/Understanding the Environment.pdf";
import file5 from "../../assets/files/Research and Publishing Ethics Part 1.pdf";
import file6 from "../../assets/files/Research and Publishing Ethics Part 2.pdf";
import file7 from "../../assets/files/Structure of an Academic Book.pdf";
import file8 from "../../assets/files/Structure of a Textbook.pdf";

import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import { useNavigate } from "react-router-dom";
const PPT = () => {
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
            <div className="resourceSection innerPages">
                <div className="containWrap">
                    <div className="resourceWrap">
                        <h1>
                            <b>PowerPoint Presentations</b> 
                        </h1>

                        <div class="searchWrap"><b class="icon-lens"></b><input type="text" placeholder="Search" /></div>
                    </div>
                    <div className="pptList">
                        <ul>
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt1} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>How to write a Research Paper</h3>
                                        <p>
                                            Learn the steps to write a comprehensive research paper and be
                                            successful.{" "}
                                        </p>
                                        <a onClick={(e) => window.open(file1)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt4} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Identifying Journals</h3>
                                        <p>Know how to promote your research and get visible by personalizing the conversation.</p>
                                        <a onClick={(e) => window.open(file2)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt5} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Publishing in a Credible Journal</h3>
                                        <p>
                                            Learn the process of publishing a paper and everything related
                                            to its decision process.
                                        </p>
                                        <a onClick={(e) => window.open(file3)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt2} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Research and Publishing Ethics - I</h3>
                                        <p>
                                            Access the right ethical advice and make the best decision for publishing your paper.
                                        </p>
                                        <a onClick={(e) => window.open(file5)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt7} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Research and Publishing Ethics - II</h3>
                                        <p>
                                            Access the right ethical advice and make the best decision for publishing your paper.
                                        </p>
                                        <a onClick={(e) => window.open(file6)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>

                            
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt6} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Understanding The Environment</h3>
                                        <p>
                                            Learn all the misdemeanors that you should be aware of while publishing your paper
                                        </p>
                                        <a onClick={(e) => window.open(file4)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt3} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Structure of an Academic Book</h3>
                                        <p>
                                            Learn how an academic book is divided into various sections.
                                        </p>
                                        <a onClick={(e) => window.open(file7)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="pptBox">
                                    <div className="pptBox-icon">
                                        <img alt="Resource Centre" src={ppt8} />
                                    </div>
                                    <div className="pptBox-text">
                                        <h3>Structure of a Textbook</h3>
                                        <p>
                                            Learn how a textbook is divided into various sections.
                                        </p>
                                        <a onClick={(e) => window.open(file8)} className="button button-white button-sm">ACCESS ME</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="row align-items-center justify-content-between contentFooter">
                        <div className="col-auto">
                            <a onClick={(e) => handleRedirect(e, '/resourcecentre')} className="goBack" href="resource_centre.html">
                                Back
                                <b>
                                    <img src={arrowLeft} alt="#" />
                                </b>
                            </a>
                        </div>
                        <div className="col-auto text-center resourceBtn">
                            {/* <a className="button button-fill">View All</a> */}
                        </div>
                        <div
                            className="pullUp"
                            onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <b className="icon-arrow-right" />
                        </div>
                        <div className="col-auto text-end">
                            <a className="helpLink" onClick={handleChatBot}>
                                <b className="icon-help" />
                                Help
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default PPT;