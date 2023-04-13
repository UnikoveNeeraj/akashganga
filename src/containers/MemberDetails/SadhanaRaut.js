import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import arrowRight from "../../assets/img/icons/arrow_right.svg";
import person1 from "../../assets/img/members/person_14.jpg";
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
                            <h1>Dr. Sadhana Rout</h1>
                            <p>
                                Senior Consultant, Election Commission of India <br />
                                Member, Governing body, National Gandhi Museum <br /> 
                                Former Principal DG, Publications Division, I&B Ministry
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
                                Dr. Sadhana Rout is a former officer of Indian Information Service (superannuated in 2019 in the scale of Secretary to Govt of India) with experience of 34 years in social sector, development communication, research, documentation and publication, people’s mobilization and promotion of rights of vulnerable segments of population.
                            </p>

                            <p>
                                Dr. Rout is currently Senior Consultant with the Election Commission of India with responsibility for higher realization of the citizen’s right to franchise and democratic assertion. She is also a member in the governing body of the National Gandhi Museum in New Delhi. In the year 2020-21, Dr. Rout was the Special Rapporteur at the National Human Rights Commission for West Zone.
                            </p>
                            <p>
                                As Principal Director General of Publications Division, Ministry of I&B (2014-2019), she was responsible for publication of books and journals on matters of national importance and making them available and accessible to wider population. She brought out a large number of books on art, culture, heritage, freedom struggle, Gandhian Literature and selected speeches of President, Vice President and Prime Minister. 
                            </p>
                            <p>
                                Dr. Rout also handled special publication projects for the Rashtrapati Bhawan, Election Commission and the Supreme Court. She guided public service publications towards becoming a modern publishing outfit with contemporary mandate, capable of digital publishing and on-line sales. Preparation of an e-version of the monumental 100 volumes of Collected Works of Mahatma Gandhi is among her achievements. 
                            </p>
                            <p>
                                Dr. Rout catalyzed participatory development through publication of over a dozen monthly development journals that profile government flagship programmes and policies. She organized and participated in book launch events, fairs and exhibitions and author-publisher-knowledge conclaves.
                            </p>
                            <p>
                                Earlier, Dr.Sadhana Rout held senior management position in several central Ministries. In the Ministry of Tribal Affairs, as Joint Secretary, she was responsible for implementation of the historic Forest Rights Act for ensuring the traditional rights of the scheduled tribe personsandprogrammes relating to tribal health and tribal education and livelihood generation. 
                            </p>
                            <p>
                                In the Ministry of Women and Child Development, Dr. Rout implemented schemes concerning women’s empowermentand protection and worked closely with the National Commission for Women. Worked as Executive Director, in-charge of Central Social Welfare Board.
                            </p>
                            <p>
                                In National AIDS Control Programme, Dr. Sadhana Rout served the focus areas of communication, social mobilizationand Targeted Interventions for prevention of HIV transmission among High-Risk groups; working closely with the state governments, civil society, health experts, and development partners. She also guided the sensitive part of knowledge proliferation in a hitherto stigmatized area. As part of a four-member design team supported by UNAIDS, she developed the Project Implementation Plan for National AIDS Control Programme Phase-III. <br />
                                She also worked in UNFPA supported Adolescent Health and Development Project.
                            </p>
                            <p>
                                Dr. Rout’s contribution during her tenure in Ministry of Rural Development related to communication and media for programmes related to poverty alleviation, rural employment and infrastructure and local self-governance. She also amplified and disseminated the knowledge base in the policy and programme domain of the rural development sector.
                            </p>
                            <p>
                                Earlier working in the Ministry of Education, Dr. Sadhana Rout was responsible for planning, management and monitoring the programme of Non-Formal Education for out of school children delivered through State Education Depts and NGOs. She also had the charge of implementation of the scheme for experimental and innovative programmes for elementary education.
                            </p>
                            <p>
                                Dr. Sadhana Rout is a Masters in Social Sciences (Economics and Management of Rural Development) from University of Manchester, UK. She also did a self-study on “Innovations and Best Practices in Communication for Enhancing Participation of Communities in Rural Development”.
                            </p>
                            <p>
                                Her first Masters in Science (Botany) was quickly followed by a PhD. in Tissue Culture and publication of associated research papers. She had a yearlong certification course in communication at the Indian Institute of Mass Communication and availed another course in Advances in Health Communication and Advocacy from John Hopkins Bloomberg School of Public Health, USA and yet another short course in Leadership and Strategic Thinking from University of Cambridge.
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
                        handleRedirect(e, "/member-details/bharat-waklu")
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