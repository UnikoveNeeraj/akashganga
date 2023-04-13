import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    $(".faqBox-head").click(function () {
      $(this).closest(".faqBox").siblings(".faqBox").removeClass("active");
      $(this)
        .closest(".faqBox")
        .siblings(".faqBox")
        .find(".faqBox-body")
        .slideUp();
      $(this).closest(".faqBox").toggleClass("active");
      $(this).closest(".faqBox").find(".faqBox-body").slideToggle();
    });
  }, [activeTab]);

  const isActiveClass = (type = "All") => {
    return activeTab === type ? "active" : "";
  };
  const handleActiveLink = (e, type = "All") => {
    e.preventDefault();
    setActiveTab(type);
  };

  const navigate = useNavigate();
  const handleRedirect = (e, path = "/registration") => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  return (
    <>
      <Header />
      <div className="faqSection innerPages">
        <div className="containWrap">
          <div className="faqWrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-auto">
                <h1>
                  <span className="underLine">FAQs</span>
                </h1>
              </div>
              {/* <div className="col-12 col-md-auto text-end">
                                <p>
                                    If you have a question that is not answered below, please{" "}
                                    <a href="/" onClick={(e) => handleRedirect(e, '/contactus')}>Contact Us</a>
                                </p>
                            </div> */}
            </div>
            <div className="row justify-content-between align-items-center mt-4 pt-2">
              <div className="col-12 col-md-auto">
                <p>
                  If you have a question that is not answered below, please{" "}
                  <a href="/" onClick={(e) => handleRedirect(e, "/contactus")}>
                    Contact Us
                  </a>
                </p>
                {/* <h2>Let us help you navigate the site in a better manner</h2>
                                <p>Check out this interactive walkthrough we have designed for you</p> */}
              </div>
              {/* <div className="col-12 col-md-auto text-end">
                                <a className="button button-fill">VIEW WALKTHROUGH</a>
                            </div> */}
            </div>
          </div>
          <div className="row justify-content-between align-items-center mt-4 pt-2">
            <div className="col-12 col-md-auto order-last order-sm-first">
              <div className="simpleTabs">
                <ul>
                  <li>
                    <a
                      onClick={(e) => handleActiveLink(e, "All")}
                      className={isActiveClass("All")}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => handleActiveLink(e, "Vikramshila")}
                      className={isActiveClass("Vikramshila")}
                    >
                      Vikramshila
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => handleActiveLink(e, "Registration")}
                      className={isActiveClass("Registration")}
                    >
                      Registration
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => handleActiveLink(e, "SevaHaat")}
                      className={isActiveClass("SevaHaat")}
                    >
                      Seva Haat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-12 col-md-auto text-end order-first order-sm-last">
                            <div className="searchWrap">
                                <b className="icon-lens" />
                                <input type="text" placeholder="Search for questions" />
                            </div>
                        </div> */}
          </div>
          <div className="faqList">

          {activeTab === "All" && (
              <>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      I want to know more about Vikramshila? What does it stand
                      for?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila aims to be an Open Access digital platform of
                      choice for institutions, researchers, academics, and
                      students. Content on the platform will be published in
                      multiple formats including but not limited to books and
                      journals.
                    </p>
                    <p>
                      Futhur, Vikramshila exists to represent every research
                      scholar who feels she isn’t given a fair chance to present
                      her case for publishing her research.
                    </p>
                    <p>
                      Our key aim is to make access to information free as
                      freedom so that it is seamless and connected.
                    </p>
                    <p>
                      Vikramshila stands for transparency in the dissemination
                      process. The entire journey will always be driven by the
                      community of researchers and professors who are, in
                      reality, truly qualified to determine what is publishable
                      and hence noteworthy.{" "}
                    </p>
                    <p>
                      At our core, we make every effort to share the work of the
                      scholarly community rapidly and as widely as possible.
                      Technology is at the heart of all that we do without
                      losing sight of the researcher’s primary objective to be
                      published.{" "}
                    </p>
                    <p>
                      We remain committed to being inclusive, affordable and{" "}
                      <b>Open for All</b>.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>How is Vikramshila different?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is a dream that aspires to be a contributor to
                      the transformation of India into a 'knowledge superpower'
                      and a global leader. Atmanirbhar Bharat is at the core of
                      our beliefs.
                    </p>
                    <p>
                      We understand that the future is open. Open Access is the
                      vehicle to disseminate knowledge freely and innovative use
                      of technology is the only means of achieving this
                      objective. Vikramshila is our contribution to the process.
                    </p>
                    <p>
                      We exist to serve the interest of the scholarly community
                      in the larger good of the society. Since our model is open
                      access, it complements the Central Government’s initiative
                      of One Nation One Subscription [ONOS] program, with the
                      objective of ensuring content accessibility for all and
                      building country’s e-resources’ infrastructure.
                    </p>
                    <p>
                      Unlike the paywall models of publishing, we are inspired
                      to think about how research in our country and across the
                      world should contribute to open and unrestricted data
                      sharing, transparent peer review and a connected community
                      working collectively.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Why should I publish my article with you?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>Because we want to make a difference.</p>
                    <p>
                      We are the first homegrown Indian platform offering an APC(Article Processing Charge)
                      that is affordable for Indian researchers and
                      researchers from the developing world. Further, we are
                      passionate enough to build from scratch multiple digital
                      platforms to lend a hand to those who feel lost in the
                      world of academic publishing.
                    </p>
                    <p>
                      It is our dream to see India become the frontrunner in
                      scientific research output and provide a platform to every
                      researcher who wants to publish within an affordable
                      budget.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      Who owns the copyright of anything I publish with
                      Vikramshila?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is an Open Access platform. The author owns
                      the copyright of all their work while at the same time
                      granting permission for anyone, anywhere in the world to
                      read, share, reuse or remix the work for their purpose, as
                      long as the original author is properly credited.
                    </p>
                    <p>
                      It is as straight forward as that. We believe that full
                      research and economic benefit of published content will
                      only be realised when there are no restrictions on access
                      to, and re-use of, this information.
                    </p>
                    <p>
                      Therefore, when you publish articles or launch journals on
                      our platform, you are doing so under the{" "}
                      <strong>
                        <u>CC BY NC</u>
                      </strong>{" "}
                      licence, meaning anyone is free to use and reuse the
                      content provided the original source and authors are
                      credited.The license is for non-commercial use ONLY.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What are the main offerings of Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is all set to offer multiple digital platforms
                      that help disseminate research, primarily from the
                      developing world. Researchers from all across the world
                      are welcome too.
                    </p>
                    <p>
                      Our offerings will include article publishing, book
                      publishing and e-textbook resource publishing in the
                      coming time.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who should I contact if I have a question?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      You can write to us at{" "}
                      <a href="mailto:contactus@vikramshilaedu.in">
                        contactus@vikramshilaedu.in
                      </a>
                      , and we will promptly respond to your questions.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Can I contribute articles to the Vikramshila Blog?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      That is our expectation as well. By contributing articles
                      to the Vikramshila Blog, you will not only share your
                      knowledge and expertise, but you will also be able to
                      build a community of researchers sharing a common goal and
                      purpose.
                    </p>
                    <p>
                      To express interest in contributing an article to
                      Vikramshila, please write to us here:{" "}
                      <a href="mailto:contactus@viklramshilaedu.in">
                        contactus@viklramshilaedu.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What happens after I register?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      After you complete your registration process, you join the
                      Vikramshila tribe. This means that you will always have
                      the firstmover advantage to be contacted for peer review
                      and publishing editor opportunities.
                    </p>
                    <p>
                      You can also list your self as a vendor on Seva Haat and
                      earn with us.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Do I need to pay anything to register?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Registration is always free on Vikramshila – just as our
                      objective of research being ‘free as freedom’ for
                      everyone.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who can become a Publishing Editor on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Established researchers, senior professors, deans,
                      directors can be the guiding light, helping the community
                      by donning the mantle of a Publishing Editor. As a
                      Publishing Editor you will be playing a key role in deciding
                      what should be given a fair chance to be published.
                    </p>
                    <p>
                      To become a Publishing Editor on the Vikramshila platform,
                      you need to register through the link provided on Vikramshila’s
                      homepage. The registration process is simple and will
                      always remain free for all. The answers you provide will
                      help us determine the best fit for your skills and
                      experience. We strive to provide opportunities for as many
                      deserving candidates as we can. The choice of appointing a
                      Publishing Editor is determined in a transparent process
                      internal to Vikramshila. The typical term of a Publishing
                      Editor will be around two years.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who can become a Peer reviewer on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Early career researchers, associate professors, lecturers
                      can all become peer reviewers. We believe you are
                      reviewing material daily as you aspire to grow your own
                      careers.
                    </p>
                    <p>
                      To become a Peer Reviewer on the Vikramshila platform, you
                      need to register through the link provided on Vikramshila’s
                      homepage. The registration process is simple and will
                      always remain free for all. The answers you provide will
                      help us determine the best fit for your skills and
                      experience. Please do see our PPT/video on roles and
                      responsibilities of a Peer Reviewer.
                    </p>
                    <p>
                      As a peer reviewer, you choose the type and number of
                      articles you wish to review.
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Will I get trained to be a Peer Reviewer?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We have a section called ‘Resource Centre’ on the
                      platform, which has multiple resources to refer and learn
                      from. This section has a blog too, providing guidance on
                      your journey as a Peer Reviewer, and other similar topics.
                    </p>
                    <p>
                      In due course, we will also be launching videos and
                      training courses on Peer Review.
                    </p>
                    <p>
                      All of this in form of continuing education will help you
                      become a Peer Reviewer to reckon with.{" "}
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Why should I become a Peer Reviewer on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      <strong>
                        Peer Review is at the heart of every research.
                      </strong>{" "}
                      It allows your research to be evaluated and commented upon
                      by independent experts (your ‘peers’) who work within the
                      same academic field as you.
                    </p>
                    <p>
                      It is the gold standard for ensuring the trust and
                      integrity of scholarly communication. More still, it is a
                      form of collaboration between experts, with critical
                      feedback often improving research and helping propel
                      research forward.
                    </p>
                    <p>
                      Let us quickly look at{" "}
                      <strong>
                        <u>five</u>
                      </strong>{" "}
                      basic reasons why becoming a Peer Reviewer is important
                      for you:
                    </p>
                    <ul>
                      <li>
                        Becoming a Peer Reviewer equals being an expert in your
                        field of specialisation. Just think about the value it
                        adds to your reputation and career graph! Awesome isn’t
                        it?{" "}
                      </li>
                      <li>
                        Peer Reviewing manuscripts allows you to significantly
                        add to your knowledge and sharpen your understanding of
                        your subject area. That in turn will speed up your
                        chances of publishing your paper faster!
                      </li>
                      <li>
                        It is a great skill to build as it allows you to stay
                        abreast with the latest cutting-edge research and build
                        new connections to collaborate. That is so great!
                      </li>
                      <li>
                        While Peer Reviewing builds on your critical thinking
                        skills, it also helps you learn to spot common mistakes
                        faster. And that, my friend, will help you enormously in
                        authoring your own papers better. How’s that!
                      </li>
                    </ul>
                    <p>
                      Please register on our website and take benefit of the
                      early registration to become a peer reviewer.{" "}
                    </p>
                    <p>
                      Registering on Vikramshila entitles you to become an Open
                      Peer Reviewer immediately.{" "}
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      Is there any incentive to be a Peer Reviewer on
                      Vikramshila platform?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We believe that the Peer Review process is an institution
                      in itself. That is a big incentive to establish yourself
                      as a more credible researcher.{" "}
                    </p>
                    <p>
                      On Vikramshila, there are multiple benefits of becoming a
                      Peer Reviewer:
                    </p>
                    <ol>
                      <li>
                        Strengthening your profile and creating a community for
                        your research
                      </li>
                      <li>
                        We offer 250 Mudras (Vikramshila’s own tokens) on
                        successful completion of every Peer Review. You can use
                        these tokens to subsidise the cost of publishing a paper
                        on the platform.
                      </li>
                      <li>
                        We will be happy to mark a copy of our Peer Review
                        completion letter (email) to your supervisor, should you
                        want so, making them aware of your efforts.
                      </li>
                      <li>
                        You get a chance to be rated as a top performing Peer
                        Reviewer on the platform thus getting entitled to
                        multiple extra benefits.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What is Seva Haat? What does it do?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      The publishing process has always had an army of silent,
                      unrecognized workers. These are the people that take raw
                      words and transform them into magical research resources.
                      Seva Haat is the place where content creators find all the
                      human resources, they will need to make their work
                      publishable.
                    </p>
                    <p>
                      If you are a freelancer, a vendor or a gig worker looking
                      to expand your portfolio then we invite you to join this
                      community. You can showcase your work and be open about
                      what projects you would like to work on.
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      If I want to enlist on Seva Haat, with a different service
                      than listed on the website, how can I do that?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We encourage you to register with your skill if you
                      believe that you can add value to the publishing process
                      of books journals, e-resources. Please register on Seva
                      Haat under the category ‘Others’.
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Vikramshila" && (
              <>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      I want to know more about Vikramshila? What does it stand
                      for?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila aims to be the Open Access digital platform of
                      choice for institutions, researchers, academics, and
                      students. Content on the platform will be published in
                      multiple formats including but not limited to books and
                      journals.
                    </p>
                    <p>
                      Futhur, Vikramshila exists to represent every research
                      scholar who feels she isn’t given a fair chance to present
                      her case for publishing her research.
                    </p>
                    <p>
                      Our key aim is to make access to information free as
                      freedom so that it is seamless and connected.
                    </p>
                    <p>
                      Vikramshila stands for transparency in the dissemination
                      process. The entire journey will always be driven by the
                      community of researchers and professors who are, in
                      reality, truly qualified to determine what is publishable
                      and hence noteworthy.{" "}
                    </p>
                    <p>
                      At our core, we make every effort to share the work of the
                      scholarly community rapidly and as widely as possible.
                      Technology is at the heart of all that we do without
                      losing sight of the researcher’s primary objective to be
                      published.{" "}
                    </p>
                    <p>
                      We remain committed to being inclusive, affordable and{" "}
                      <b>Open for All</b>.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>How is Vikramshila different?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is a dream that aspires to be a contributor to
                      the transformation of India into a 'knowledge superpower'
                      and a global leader. Atmanirbhar Bharat is at the core of
                      our beliefs.
                    </p>
                    <p>
                      We understand that the future is open. Open Access is the
                      vehicle to disseminate knowledge freely and innovative use
                      of technology is the only means of achieving this
                      objective. Vikramshila is our contribution to the process.
                    </p>
                    <p>
                      We exist to serve the interest of the scholarly community
                      in the larger good of the society. Since our model is open
                      access, it complements the Central Government’s initiative
                      of One Nation One Subscription [ONOS] program, with the
                      objective of ensuring content accessibility for all and
                      building country’s e-resources’ infrastructure.
                    </p>
                    <p>
                      Unlike the paywall models of publishing, we are inspired
                      to think about how research in our country and across the
                      world should contribute to open and unrestricted data
                      sharing, transparent peer review and a connected community
                      working collectively.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Why should I publish my article with you?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>Because we want to make a difference.</p>
                    <p>
                      We are the first homegrown Indian platform offering an APC
                      that is affordable for the Indian researchers and
                      researchers from the developing world. Further, we are
                      passionate enough to build from scratch multiple digital
                      platforms to lend a hand to those who feel lost in the
                      world of academic publishing.
                    </p>
                    <p>
                      It is our dream to see India become the frontrunner in
                      scientific research output and provide a platform to every
                      researcher who wants to publish within an affordable
                      budget.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      Who owns the copyright of anything I publish with
                      Vikramshila?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is an Open Access platform. The author owns
                      the copyright of all their work while at the same time
                      granting permission for anyone, anywhere in the world to
                      read, share, reuse or remix the work for their purpose, as
                      long as the original author is properly credited.
                    </p>
                    <p>
                      It is as straight forward as that. We believe that full
                      research and economic benefit of published content will
                      only be realised when there are no restrictions on access
                      to, and re-use of, this information.
                    </p>
                    <p>
                      Therefore, when you publish articles or launch journals on
                      our platform, you are doing so under the{" "}
                      <strong>
                        <u>CC BY NC</u>
                      </strong>{" "}
                      licence, meaning anyone is free to use and reuse the
                      content provided the original source and authors are
                      credited.The license is for non-commercial use ONLY.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What are the main offerings of Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Vikramshila is all set to offer multiple digital platforms
                      that help disseminate research, primarily from the
                      developing world. Researchers from all across the world
                      are welcome too.
                    </p>
                    <p>
                      Our offerings will include article publishing, book
                      publishing and e-textbook resource publishing in the
                      coming time.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who should I contact if I have a question?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      You can write to us at{" "}
                      <a href="mailto:contactus@vikramshilaedu.in">
                        contactus@vikramshilaedu.in
                      </a>
                      , and we will promptly respond to your questions.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Can I contribute articles to the Vikramshila Blog?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      That is our expectation as well. By contributing articles
                      to the Vikramshila Blog, you will not only share your
                      knowledge and expertise, but you will also be able to
                      build a community of researchers sharing a common goal and
                      purpose.
                    </p>
                    <p>
                      To express interest in contributing an article to
                      Vikramshila, please write to us here:{" "}
                      <a href="mailto:contactus@viklramshilaedu.in">
                        contactus@viklramshilaedu.in
                      </a>
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Registration" && (
              <>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What happens after I register?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      After you complete your registration process, you join the
                      Vikramshila tribe. This means that you will always have
                      the firstmover advantage to be contacted for peer review
                      and publishing editor opportunities.
                    </p>
                    <p>
                      You can also list your self as a vendor on Seva Haat and
                      earn with us.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Do I need to pay anything to register?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Registration is always free on Vikramshila – just as our
                      objective of research being ‘free as freedom’ for
                      everyone.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who can become a Publishing Editor on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Established researchers, senior professors, deans,
                      directors can be the guiding light, helping the community
                      by donning the mantle of a publishing editor. As a
                      publishing editor you would play a key role in deciding
                      what should be given a fair chance to be published.
                    </p>
                    <p>
                      To become a Publishing Editor on the Vikramshila platform,
                      you need to register in the link provided on Vikramshila’s
                      homepage. The registration process is simple one and will
                      always remain free for all. The answers you provide will
                      help us determine the best fit for your skills and
                      experience. We strive to provide opportunities for as many
                      deserving candidates as we can. The choice of appointing a
                      publishing editor is determined in a transparent process
                      internal to Vikramshila. The typical term of a Publishing
                      Editor will be around 2 years.
                    </p>
                  </div>
                </div>

                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Who can become a Peer reviewer on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      Early career researchers, associate professors, lecturers
                      can all become peer reviewers. We believe you are
                      reviewing material daily as you aspire to grow your own
                      careers.
                    </p>
                    <p>
                      To become a Peer Reviewer on the Vikramshila platform, you
                      need to register in the link provided on Vikramshila’s
                      homepage. The registration process is simple and will
                      always remain free for all. The answers you provide will
                      help us determine the best fit for your skills and
                      experience. Please do see our PPT/video on roles and
                      responsibilities of a Peer Reviewer.
                    </p>
                    <p>
                      As a peer reviewer, you choose the type and number of
                      articles you wish to review.
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Will I get trained to be a peer reviewer?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We have a section called ‘Resource Centre’ on the
                      platform, which has multiple resources to refer and learn
                      from. This section has a blog too, providing guidance on
                      your journey as a peer reviewer, and similar topics.
                    </p>
                    <p>
                      In due course, we will also be launching videos and
                      training courses on Peer review.
                    </p>
                    <p>
                      All of this in form of continuing education will help you
                      become a Peer reviewer to reckon with.{" "}
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>Why should I become a Peer Reviewer on Vikramshila?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      <strong>
                        Peer review is at the heart of every research.
                      </strong>{" "}
                      It allows your research to be evaluated and commented upon
                      by independent experts (your ‘peers’) who work within the
                      same academic field as you.
                    </p>
                    <p>
                      It is the gold standard for ensuring the trust and
                      integrity of scholarly communication. More still, it is a
                      form of collaboration between experts, with critical
                      feedback often improving research and helping propel
                      research forward.
                    </p>
                    <p>
                      Let us quickly look at{" "}
                      <strong>
                        <u>five</u>
                      </strong>{" "}
                      basic reasons why becoming a Peer Reviewer is important
                      for you:
                    </p>
                    <ul>
                      <li>
                        Becoming a Peer Reviewer equals being an expert in your
                        field of specialisation. Just think about the value it
                        adds to your reputation and career graph! Awesome isn’t
                        it?{" "}
                      </li>
                      <li>
                        Peer Reviewing manuscripts allows you to significantly
                        add to your knowledge and sharpen your understanding of
                        your subject area. That in turn will speed up your
                        chances of publishing your paper faster!
                      </li>
                      <li>
                        It is a great skill to build as it allows you to stay
                        abreast with the latest cutting-edge research and build
                        new connections to collaborate. That is so great!
                      </li>
                      <li>
                        While Peer Reviewing builds on your critical thinking
                        skills, it also helps you learn to spot common mistakes
                        faster. And that, my friend, will help you enormously in
                        authoring your own papers better. How’s that!
                      </li>
                    </ul>
                    <p>
                      Please register on our website and take benefit of the
                      early registration to become a peer reviewer.{" "}
                    </p>
                    <p>
                      Registering on Vikramshila entitles you to become an Open
                      Peer Reviewer immediately.{" "}
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      Is there any incentive to be a peer reviewer on
                      Vikramshila platform?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We believe that the Peer Review process is an institution
                      in itself. That is a big incentive to establish yourself
                      as a more credible researcher.{" "}
                    </p>
                    <p>
                      On Vikramshila, there are multiple benefits of becoming a
                      Peer Reviewer:
                    </p>
                    <ol>
                      <li>
                        Strengthening your profile and creating a community for
                        your research
                      </li>
                      <li>
                        We offer 250 Mudras (Vikramshila’s own tokens) on
                        successful completion of every Peer Review. You can use
                        these tokens to subsidise the cost of publishing a paper
                        on the platform.
                      </li>
                      <li>
                        We will be happy to mark a copy of our Peer Review
                        completion letter (email) to your supervisor, should you
                        want so, making them aware of your efforts.
                      </li>
                      <li>
                        You get a chance to be rated as a top performing Peer
                        Reviewer on the platform thus getting entitled to
                        multiple extra benefits.
                      </li>
                    </ol>
                  </div>
                </div>
              </>
            )}

            {activeTab === "SevaHaat" && (
              <>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>What is Seva Haat? What does it do?</h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      The publishing process has always had an army of silent,
                      unrecognized workers. These are the people that take raw
                      words and transform them into magical research resources.
                      Seva Haat is the place where content creators find all the
                      human resources, they will need to make their work
                      publishable.
                    </p>
                    <p>
                      If you are a freelancer, a vendor or a gig worker looking
                      to expand your portfolio then we invite you to join this
                      community. You can showcase your work and be open about
                      what projects you would like to work on.
                    </p>
                  </div>
                </div>
                <div className="faqBox">
                  <div className="faqBox-head">
                    <h3>
                      If I want to enlist on Seva Haat, with a different service
                      than listed on the website, how can I do that?
                    </h3>
                    <b className="icon-arrow-down" />
                  </div>
                  <div className="faqBox-body">
                    <p>
                      We encourage you to register with your skill if you
                      believe that you can add value to the publishing process
                      of books Journals, e-resources. Please register on Seva
                      Haat under the category ‘Others’.
                    </p>
                  </div>
                </div>
              </>
            )}
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

export default FAQ;
