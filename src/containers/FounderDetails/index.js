import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import arrowLeft from "../../assets/img/icons/arrow_left.svg";
import sample06 from "../../assets/img/sample/sample_06.png";
import sample01 from "../../assets/img/sample/sample_01.jpg";
import vivekV2 from "../../assets/img/founder/vivek_mehra_v2.png";
import blogImg from "../../assets/img/icons/blog-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const MemberDetails = () => {
  const navigate = useNavigate();
  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="academicSection innerPages">
        <div className="containWrap">
          <a
            onClick={(e) => handleRedirect(e, "/teams")}
            className="memberBack"
            href="team.html"
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
                <img src={vivekV2} alt="#" />
              </div>
              <div className="memberBio-intro">
                <h1>Vivek Mehra</h1>
                <p>
                  TedX speaker | Mentor | Author | Higher Education evangelist |
                  Still a student
                </p>
                <div className="memberBio-social">
                  <ul>
                    <li>
                      <a>
                        <b className="icon-linkdin_fill" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <b className="icon-tweet_fill" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <b className="icon-blog_fill">
                          <img src={blogImg} alt="Blogs" />
                        </b>
                        {/* <b className="icon-blog_fill"><img src={blogIcon} alt="akashganga" /></b> */}
                      </a>
                    </li>
                  </ul>
                </div>
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
                    Vivek Mehra is the founder of Vikramshila Research Pvt Ltd,
                    an Indian platform specialising in open access research
                    dissemination for books and Journals, primarily from the
                    developing world.
                  </p>
                  <p>
                    He is the former CEO and Managing Director of SAGE
                    Publications India, a top-tier publishing house well known
                    for its books, journals, and digital products. He also
                    served as the chairman of the same company for a year.
                  </p>
                  <p>
                    Besides his professional designations, Vivek is a TEDx
                    speaker, a mentor to start-ups, an author, a workshop
                    trainer, a student of law, a fan of squash and yoga.
                  </p>
                  <p>
                    Vikramshila Research, his start-up in the space of
                    education, makes its debut in January 2023, aspiring to be a
                    contributor to the transformation of India into a 'knowledge
                    superpower' and a global leader.
                  </p>
                  <p>
                    Vivek Mehra is the recipient of many awards. In February
                    2019, The New Delhi Institute of Management awarded him the
                    Business Excellence and Innovative Best Practices Academia
                    Award. Before that in 2016, Sharda University conferred him
                    with the “Sharda Top Rankers Excellence Award for Visionary
                    Leadership”.
                  </p>
                  <p>
                    Vivek is also the recipient of the “Vijayshree” award by the
                    Government of Maharashtra, awarded in 1994, for simplifying
                    complex dehydrating technology, ensuring a brighter future
                    for small-scale farmers. Vivek Mehra also serves as the
                    honorary Council Member and Member of Board Studies for the
                    Association of Learned & Professional Society Publishers’
                    (ALPSP) journal, Learned Publishing.
                  </p>
                  <p>
                    He is currently a Board of Studies member at the School of
                    Business, Public Policy and Social Entrepreneurship at
                    Ambedkar University Delhi and is also a part of the Quality
                    Assurance Committee at the same university.
                  </p>
                  <p>
                    Vivek has served as the Vice President of the Association of
                    Publishers in India and is on the committee of CII and FICCI
                    on IPR, Copyright and Higher Education. He excels at
                    building teams and building careers. Passion for learning
                    drives him constantly.
                  </p>
                  <p>
                    {" "}
                    The words of sages and learned men continue to engage him
                    and he calls his path of discovery a never-ending one.
                  </p>
                </div>
              </div>
              <div className="memberRight">
                <div className="checkOut">
                  <h2>Also Check Out</h2>
                  <div className="checkBox">
                    <div className="checkBox-img">
                      <img src={sample06} alt="#" />
                    </div>
                    <div className="checkBox-info">
                      <h3>Our World, One World, You...</h3>
                      <p>
                        Have you ever wondered “Am I capable of doing anything?”
                        Hear this amazing TEDx talk from Vivek Mehra
                      </p>
                    </div>
                    <a href="https://youtu.be/FFF5ZZGB9WI" target="_blank">
                      EXPLORE
                    </a>
                  </div>
                  <div className="checkBox">
                    <div className="checkBox-img">
                      <img src={sample01} alt="#" />
                    </div>
                    <div className="checkBox-info">
                      <h3>Message from the Founder</h3>
                      <p>
                        Vikramshila is a mission. Listen to our founder talk
                        about the dream that is Vikramshila.
                      </p>
                    </div>
                    <Link to="/browse">WATCH NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberDetails;
