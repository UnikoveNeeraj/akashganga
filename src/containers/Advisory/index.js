import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import shaloTitle from "../../assets/img/members/shalo_title.png";
import pritamImg from "../../assets/img/members/Late_Dr._Pritam_Singh.png";
import shaloImg from "../../assets/img/members/shalo.png";
import sidMitra from "../../assets/img/members/Late_Dr._Sid_Mittra.png";
import person4 from "../../assets/img/members/person_04.jpg";
import person5 from "../../assets/img/members/person_05.jpg";
import person6 from "../../assets/img/members/person_06.jpg";
import person7 from "../../assets/img/members/person_07.jpg";
import person8 from "../../assets/img/members/person_08.jpg";
import person9 from "../../assets/img/members/person_09.jpg";
import person10 from "../../assets/img/members/person_10.jpg";
import person11 from "../../assets/img/members/person_11.jpg";
import person12 from "../../assets/img/members/person_12.jpg";
import person13 from "../../assets/img/members/person_13.jpg";
import person14 from "../../assets/img/members/person_14.jpg";
import person15 from "../../assets/img/members/person_15.jpg";
import person16 from "../../assets/img/members/person_16.jpg";
import person20 from "../../assets/img/members/person_20.svg";
import person22 from "../../assets/img/members/person_22.jpg";
import person23 from "../../assets/img/members/person_23.jpg";
import person24 from "../../assets/img/members/person_24.svg";
import { shuffleArray } from "../../utils";
import { useNavigate } from "react-router-dom";

const Advisory = () => {
  const navigate = useNavigate();
  const handleRedirect = (e, path = "/registration") => {
    window.scroll({ top: 0, behavior: "smooth" });
    e.preventDefault();
    navigate(path);
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  const memberList = () => {
    const rendered = [
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/amitabh-rajan")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person5} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Amitabh Rajan</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/amitabh-rajan")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Amitabh Rajan is a retired IAS Officer of Maharashtra cadre
              and the former Home Secretary and Additional Chief Secretary of
              Maharashtra. He currently heads the RBI's Services...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/amitabh-rajan")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          className="memberBox"
          onClick={(e) => handleRedirect(e, "/member-details/rajiv-bhatia")}
        >
          <div className="memberBox-img">
            {" "}
            <img src={person6} alt="#" />
            <div className="memberBox-know">
              <h3>AMB Dr. Rajiv Bhatia</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rajiv-bhatia")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div
            className="memberBox-info"
            onClick={(e) => handleRedirect(e, "/member-details/rajiv-bhatia")}
          >
            <p>
              Ambassador Dr. Rajiv Bhatia is Distinguished Fellow, Foreign
              Policy Studies Programme at Gateway House. He is a member of CII’s
              International Advisory Council, Trade Policy...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rajiv-bhatia")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/prof-ramesh-gaur")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person7} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Ramesh Gaur</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/prof-ramesh-gaur")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Ramesh Chandra Gaur is presently Director, National School of
              Drama (NSD), under Ministry of Culture, Govt. of India. He is also
              a Fulbright Scholar. He has received over 14 awards...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/prof-ramesh-gaur")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) =>
            handleRedirect(e, "/member-details/harivansh-chaturvedi")
          }
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person9} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Harivansh Chaturvedi</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/harivansh-chaturvedi")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              <strong>Dr.Harivansh Chaturvedi</strong> is Professor and Director
              at Birla Institute of Management Technology (BIMTECH), Greater
              Noida, India and Alternate President...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/harivansh-chaturvedi")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) =>
            handleRedirect(e, "/member-details/sanjay-shrivastava")
          }
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person10} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Sanjay Srivastava</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/sanjay-shrivastava")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Sanjay Srivastava is a PhD in Organizational Culture from
              University of Delhi. He is an expert in Psychometric Profiling and
              a trainer, practitioner of Transactional...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/sanjay-shrivastava")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/subir-verma")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person11} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Subir Verma</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/subir-verma")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Subir Verma is Professor of Organizational Behaviour and Human
              Resources with more than 30 years of teaching, training, research
              and consulting experience...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/subir-verma")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/asha")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person12} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Asha Bhandarker</h3>
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details/asha")}
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr.Bhandarker is well known in the field of Leadership and HR as a
              scholar, consultant, and researcher. She is a psychologist by
              training, a management professor...{" "}
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details/asha")}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/anmol-pandit")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person13} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Amol Pandit</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/anmol-pandit")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              A distinguished medical professional, a passionate researcher and
              a popular faculty in the domain of Urology, Dr. Amol Sharad Pandit
              started his journey by completing...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/anmol-pandit")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/sadhana-raut")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person14} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Sadhana Rout</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/sadhana-raut")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Sadhana Rout is a former officer of Indian Information Service
              (superannuated in 2019 in the scale of Secretary to Govt of India)
              with experience of 34 years in social sector...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/sadhana-raut")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/bharat-waklu")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person15} alt="#" />
            <div className="memberBox-know">
              <h3>Bharat Wakhlu</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/bharat-waklu")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Bharat Wakhlu is a seasoned business leader with diverse interests
              and gifts. He is the Founder, and the President of The Wakhlu
              Advisory, offering his services...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/bharat-waklu")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person16} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Rajesh Chandrashekharan</h3>
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details")}
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Rajesh Chandrashekaran holds a BS degree in Electrical and
              Electronics Engineering from India; and an MBA and Ph.D. in
              Marketing from Rutgers University. He is currently...{" "}
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details")}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,

      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/sam")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person20} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Sam Taraporevala</h3>
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details/sam")}
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Sam Taraporevala is currently the Executive Director of the
              Xavier’s Resource Centre for the Visually Challenged (XRCVC) which
              he founded in 2003. He has been actively involved...{" "}
              <a
                href="member_detail.html"
                onClick={(e) => handleRedirect(e, "/member-details/sam")}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,

      <li>
        <div
          onClick={(e) =>
            handleRedirect(e, "/member-details/rupamanjari-ghosh")
          }
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person22} alt="#" />
            <div className="memberBox-know">
              <h3>Prof. Rupamanjari Ghosh</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rupamanjari-ghosh")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Professor Rupamanjari Ghosh is a researcher, teacher, orator and
              an academic administrator par excellence. She is a former VC of
              Shiv Nadar University Delhi-NCR and former Professor...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rupamanjari-ghosh")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,

      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/ankur-segon")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person23} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Ankur Segon</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/ankur-segon")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Ankur Segon currently serves as a Professor of Medicine and
              Chief of Hospital Medicine at University of Texas Health, San
              Antonio. He has also served as the director of conti....{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/ankur-segon")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,

      <li>
        <div
          onClick={(e) => handleRedirect(e, "/member-details/rajiv-singla")}
          className="memberBox"
        >
          <div className="memberBox-img">
            {" "}
            <img src={person24} alt="#" />
            <div className="memberBox-know">
              <h3>Dr. Rajiv Singla</h3>
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rajiv-singla")
                }
              >
                Know More
              </a>
            </div>
          </div>
          <div className="memberBox-info">
            <p>
              Dr. Rajiv Singla is the Medical Director and Consultant Endocrinology
              of Kalpavriksh Healthcare, based in New Delhi. He is the co-founder
              of Kalpavriksh Healthcare...{" "}
              <a
                href="member_detail.html"
                onClick={(e) =>
                  handleRedirect(e, "/member-details/rajiv-singla")
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </li>,
    ];
    return shuffleArray(rendered);
  };

  return (
    <>
      <Header />
      <div className="academicSection innerPages">
        <div className="containWrap">
          <div className="lateWrap">
            <div className="text-center">
              <img src={shaloTitle} alt="#" />
              <img src={shaloImg} alt="#" />
            </div>
            <div className="lateGroup">
              <div className="lateBox">
                <div className="lateBox-img">
                  <img src={pritamImg} alt="#" />
                </div>
                <div className="lateBox-info">
                  <h2>Late Dr. Pritam Singh</h2>
                  <p>
                    The Late Padma Shri Dr. Pritam Singh, is my guru, my guiding
                    light, even to this day. He was everything a guru could ever
                    be and to me, one of his many students, he was the one to
                    turn to in every walk of life...{" "}
                    <a
                      onClick={(e) =>
                        handleRedirect(e, "/member-details/late-pritam-singh")
                      }
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
              <div className="lateBox">
                <div className="lateBox-img">
                  <img src={sidMitra} alt="#" />
                </div>
                <div className="lateBox-info">
                  <h2>Late Dr. Sid Mitra</h2>
                  <p>
                    Every once in awhile a soul crosses your path that
                    challenges your beliefs, then challenges your value system
                    and then departs from this world leaving you fulfilled. Dr
                    Sid Mittra or Dada as I fondly called him...{" "}
                    <a
                      onClick={(e) =>
                        handleRedirect(e, "/member-details/late-sid-mitra")
                      }
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center typeFont">
              <p className="lateOther">
                SOULFUL TRIBUTE
                <br />
                <span>Vivek Mehra</span>, Founder and CEO
              </p>
            </div>
          </div>
          <div className="advisoryWrap">
            <h1>
              <span>ADVISORY BOARD</span>
            </h1>
            <span className="likeBtn">
              Meet our Strategic Thought Partners{" "}
            </span>
            <p>
              Vikramshila’s mission is incomplete without understanding the
              circle of academic research, publishing and fueling new research
              to create more publishable material. Our advisory board is our
              guiding light helping us understand the landscape of creating and
              publishing research. The board represents the finest minds who
              have been instrumental in building institutions and scholars
              alike. We are grateful to them in helping us in setting achievable
              goals that align with our mission and vision.
            </p>
          </div>
          {/* <br/> */}
          {/* <div className="divideWrap" /> */}
          <div className="memberList">
            <ul>
              <li>
                <div
                  onClick={(e) =>
                    handleRedirect(e, "/member-details/jagdish-seth")
                  }
                  className="memberBox"
                >
                  <div className="memberBox-img">
                    {" "}
                    <img src={person4} alt="#" />
                    <div className="memberBox-know">
                      <h3>Prof Jagdish Sheth</h3>
                      <a
                        href="member_detail.html"
                        onClick={(e) =>
                          handleRedirect(e, "/member-details/jagdish-seth")
                        }
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="memberBox-info">
                    <p>
                      Dr. Jagdish Sheth is a recipient of the{" "}
                      <strong>2020 Padma Bhushan Award</strong> for literature
                      and education, one of the highest civilian awards given by
                      the Government of India. He is a renowned scholar...{" "}
                      <a
                        href="member_detail.html"
                        onClick={(e) =>
                          handleRedirect(e, "/member-details/jagdish-seth")
                        }
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="memberBox"
                  onClick={(e) =>
                    handleRedirect(e, "/member-details/bhimaraya-matri")
                  }
                >
                  <div className="memberBox-img">
                    {" "}
                    <img src={person8} alt="#" />
                    <div className="memberBox-know">
                      <h3>Dr. Bhimaraya Metri</h3>
                      <a
                        href="member_detail.html"
                        onClick={(e) =>
                          handleRedirect(e, "/member-details/bhimaraya-matri")
                        }
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="memberBox-info">
                    <p>
                      <strong>Dr. Bhimaraya Metri</strong>, Director, IIM Nagpur
                      is a distinguished academician and Mentor to Institutes of
                      Eminence and Member of Indian National Commission for
                      Cooperation...{" "}
                      <a
                        href="member_detail.html"
                        onClick={(e) =>
                          handleRedirect(e, "/member-details/bhimaraya-matri")
                        }
                      >
                        Read More
                      </a>
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
          <div class="row align-items-center justify-content-between contentFooter">
            <div class="col text-end">
              <a onClick={handleChatBot} class="helpLink">
                <b class="icon-help"></b>Help
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Advisory;
