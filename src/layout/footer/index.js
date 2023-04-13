import Logo from "../../components/logo/Logo";
import akeshlogo from "../../assets/img/logos/aakashganga_full_logo.png";
import startUpIndia from "../../assets/img/banner/startupIndia.svg" 
import emosys from "../../assets/img/bg/feedback_banner.png" 
import bync from "../../assets/img/bg/bync.png"
import { Link } from "react-router-dom";
import "./index.scss";

function Footer() {
    return <>
        <div className="footer-author">
        <footer className="footer">
            <div className="footer-title">
                <div className="containWrap">
                    <h2>A HOMEGROWN INDIAN PLATFORM FOR RESEARCH DISSEMINATION</h2>
                    </div>
                    </div>
                <div className="containWrap">
                    <div className="row">
                        <div className="col-lg-4 text-start">
                            <img src={akeshlogo} />
                           <div className="navListSite">
                            <Link to="#">Vikramshila</Link>
                            <Link to="#">Seva Haat</Link>
                            <Link to="#">Kaashi</Link>
                           </div>
                           
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                        <div className="col-lg-4 navListAuthor">
                            <h3>Aakashganga</h3>
                            <ul>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Publish with Us</Link></li>
                                <li><Link to="#">How it Works</Link></li>
                                <li><Link to="#">Submit Your Manuscript</Link></li> 
                            </ul>
                        </div>
                        <div className="col-lg-4 navListAuthor">
                            <h3>Publish</h3>
                            <ul>
                                <li><Link to="#">How to Publish</Link></li>
                                <li><Link to="#">Society Publishing</Link></li>
                                <li><Link to="#">Article Publishing Charge</Link></li>
                                <li><Link to="#">Research Disciplines</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 navListAuthor">
                            <h3>Find</h3>
                            <ul className="">
                                <li><Link to="#">Articles</Link></li>
                                <li><Link to="#">Journals</Link></li>
                                <li><Link to="#">Submission Guidelines</Link></li>
                                <li><Link to="#">Reviewer Guidelines</Link></li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        
                       
                    </div>

                </div>
                <div className="footerMidd">
                    <div className="containWrap">
                    <div className="row">
                        <div className="col-md-4 text-start">
                        <img src={startUpIndia} alt="#" />
                           
                        </div>
                        <div className="col-md-4">
                            <div className="contactLinks">
                                <p>
                                    <b className="icon-mail" />
                                    contactus@vikramshilaedu.in
                                </p>
                            </div>
                            <div className="socialLinks">
            
                                <div className="socialLinks-wrap">
                                        <h3>Follow Us</h3>
                                        <ul>
                                        <li>
                                            <a href="https://m.facebook.com/100089485867225/" target="_blank" >
                                            <b className="icon-facebook_fill" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/vikramshila-education-pvt-ltd/" target="_blank">
                                            <b className="icon-linkdin_fill" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/VikramshilaL" target="_blank">
                                            <b className="icon-tweet_fill" />
                                            </a>
                                        </li>

                                        </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-3">
                            <div className="emosyWrap">
                                <img src={emosys} />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="byncWrap">
                                <img src={ bync } />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="containWrap">
                        <p>© Vikramshila Research Pvt Ltd 2023</p>
                        <div className="tremNav">
                        <Link to="#">Terms & Conditions</Link>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Copyright Information</Link>
                        <Link to="#">Help & Support</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
}

export default Footer