import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import { useEffect } from "react";

const PrivacyPolciy = () => {
  useEffect(() => {
    $(".legalBox-head").click(function () {
      $(this).closest(".legalBox").siblings(".legalBox").removeClass("active");
      $(this)
        .closest(".legalBox")
        .siblings(".legalBox")
        .find(".legalBox-body")
        .slideUp();
      $(this).closest(".legalBox").toggleClass("active");
      $(this).closest(".legalBox").find(".legalBox-body").slideToggle();
    });
  }, []);

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  return (
    <>
      <Header />
      <div className="legalSection innerPages">
        <div className="containWrap">
          <div className="legalWrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-md-auto">
                <h1>Privacy Policy</h1>
              </div>
            </div>
          </div>
          <div className="legalList">
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Introduction</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  This privacy policy is an electronic record in the form of an
                  electronic contract formed under the Information Technology
                  Act, 2000 and the rules made there under and the amended
                  provisions pertaining to electronic documents/records in
                  various statutes as amended by the Information Technology Act,
                  2000. This privacy policy does not require any physical,
                  electronic or digital signature. This document is published
                  and shall be construed in accordance with the provisions of
                  Rule 3(1) of Information Technology (Intermediaries
                  guidelines) Rules, 2011 and Information Technology (Reasonable
                  security practices and procedures and sensitive personal data
                  of information) Rules, 2011, under Information Technology Act,
                  2000 that requires the publishing of privacy policy in
                  relation to collection, usage, storage, dealing and transfer
                  of personal information including sensitive personal data or
                  information. This privacy policy is a legally binding document
                  between you and Vikramshila Research Private Limited
                  (‘Vikramshila/we/our/us’). The terms of this privacy policy
                  will be effective upon your acceptance of the same (directly
                  or indirectly in electronic form by clicking on the “i accept”
                  tab or by use of the website or by any other means) and will
                  govern the relationship between you and Vikramshila, for your
                  use of the website. Please read this privacy policy carefully.
                  By using our website, you indicate that you understand, agree
                  and consent to this privacy policy. If you do not agree with
                  the terms of this privacy policy, please do not use this
                  website. We value the trust you place in us and we recognize
                  the importance of information privacy and secure transactions.
                  This Privacy Policy describes how we collect, store, use,
                  protect or otherwise process your information through our
                  website{" "}
                  <a href="https://www.vikramshilaedu.in">
                    https://www.vikramshilaedu.in.
                  </a>
                  This privacy policy shall be read together with the respective
                  terms of use or other terms and conditions of our website.
                  Your personal information will be stored and processed in
                  India and may have data protection laws that are different
                  from those that apply in the country in which you are located.
                  By visiting our website, providing your information or
                  availing any product/service offered by us on our website, you
                  hereby consent to the collection, storage, processing and
                  transfer of any or all of your personal and non-personal
                  information by us as specified under this privacy policy. You
                  further agree that such collection, use, storage and transfer
                  of your information shall not cause any loss or wrongful gain
                  to you or any other person and expressly agree to be bound by
                  the terms and conditions of this Privacy Policy, the Terms of
                  Use and the applicable service/product terms and conditions,
                  and also agree to be governed by the laws of India including
                  but not limited to the laws applicable to data protection and
                  privacy.
                </p>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Collection and storage of information/data</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  <ol className="terms-list" type="a">
                    <li>
                      The information/data provided by you to us or collected
                      from you by us may consist of “personal information” and
                      “non-personal information”.
                    </li>
                    <li>
                      Personal information is the information collected that can
                      be used to identify you. Personal information that we may
                      collect include but not limited to name, date of birth,
                      address, contact number, PAN, GST number, Government
                      issued ID cards/number, email ID, occupation, any such
                      information shared as proof of identity/address,
                      information regarding your transactions on the website,
                      internet protocol address and any other items of
                      “sensitive personal data or information” as such term is
                      defined under the Information Technology (Reasonable
                      security practices and procedures and sensitive personal
                      data of information) Rules, 2011, enacted under the
                      Information Technology Act, 2000. Such personal
                      information may be collected in various ways including
                      during signing-up/registering in our website or
                      participating in any online survey or contest or posting
                      user reviews or using our website in any manner.
                    </li>
                    <li>
                      We may also collect non-personal information relating to
                      you such as your buying behaviour, preferences, call data
                      records, device location, voice, your browsing history,
                      details of your telecom service provider or internet
                      service provider, the type of browser (internet explorer,
                      firefox, opera, google chrome etc.), the duration of your
                      stay on our website along with the date and time of your
                      access when you visit and/or use the website, and other
                      information that you may provide to us from time to time.
                      Our sole objective in doing so is to provide you a safe,
                      efficient, smooth, and customized experience. This allows
                      us to recommend to you or offer/provide information about
                      products/services and features that most likely meet your
                      needs, and to customize our website to make your
                      experience easier and safer. We retain this information as
                      necessary to resolve disputes, provide customer support,
                      internal research and troubleshoot problems, if any.
                    </li>
                    <li>
                      We may also receive your information/information related
                      to your transactions from third parties such as social
                      media or other business partner platforms. When such a
                      social media service provider or third-party business
                      partner collects your personal information directly from
                      you, you will be governed by their privacy policies. We
                      shall not be responsible for the third-party business
                      partner’s privacy practices or the content of their
                      privacy policies, and we request you to read their privacy
                      policies prior to disclosing any information. And, if you
                      access our website through a social media service or
                      connect any of our product/service on our website to a
                      social media service, the information we collect may
                      include your user name associated with that social media
                      service, any information or content the social media
                      service has the right to share with us, such as your
                      profile picture, email address or friends’ list, and any
                      information you have made public in connection with that
                      social media service. When you access the website through
                      social media services or when you connect our website to
                      social media services, you are authorizing us to collect,
                      store, use and retain such information and content in
                      accordance with this privacy policy.
                    </li>
                    <li>
                      You hereby represent to us that the information you
                      provide from time to time is and shall be authentic,
                      correct, current and updated and you have all the rights,
                      permissions and consents as may be required to provide
                      such information to us. You also represent to us that your
                      providing the information to us and our consequent
                      storage, collection, usage, access or processing of the
                      same shall not be in violation of any third party
                      agreement(s), laws, charter documents, judgments, orders
                      and decrees.
                    </li>
                    <li>
                      Vikramshila and its officers, directors, contractors or
                      agents shall not be responsible for the authenticity of
                      the information that you provide to us. You shall
                      indemnify and hold harmless Vikramshila and its officers,
                      directors, contractors or agents and any third party
                      relying on the information provided by you in the event
                      you are in breach of this privacy policy.{" "}
                    </li>
                    <li>
                      Your information will primarily be stored in electronic
                      form; however, certain data may be stored in physical form
                      as well. We may enter into agreements with third parties
                      (in or outside of India) to store and/or process your
                      information or data. These third parties may have their
                      own security standards to safeguard your information or
                      data and we will, on commercial reasonable basis, require
                      from such third parties to adopt reasonable security
                      standards to safeguard your information/data.{" "}
                    </li>
                    <li>
                      <strong>
                        If you receive an e-mail, a call from a
                        person/association claiming to be from Vikramshila
                        seeking sensitive personal information like debit/credit
                        card PIN, net-banking or mobile banking password, we
                        request you to never provide such information. We, at
                        Vikramshila,or our affiliate logistic partner(s) do not
                        at any time connect with you requesting for such
                        information. If you have already revealed such
                        information, report it immediately to the appropriate
                        law enforcement agency.
                      </strong>
                    </li>
                  </ol>
                </p>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>
                  Purpose for collecting, storing using and processing of
                  information/data
                </h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  We collect, store, use and process your information for any
                  purpose as may be permissible under the applicable laws
                  (including where the applicable law provides for such
                  collection, storage, usage or processes in accordance with the
                  consent of the user) and shall include the following:
                </p>
                <ol className="terms-list" type="a">
                  <li>to facilitate your use of our website;</li>
                  <li>
                    to personalize/enhance your experience on our website by
                    presenting advertisements and information about
                    products/services available on our website tailored to your
                    preferences;
                  </li>
                  <li>
                    to respond to your inquiries and/or fulfil your requests for
                    information about the products/services ordered on our
                    website;
                  </li>
                  <li>
                    to process and complete the orders placed with the
                    participating merchants and is shared as needed to process
                    and complete the orders;
                  </li>
                  <li>
                    to send you important information regarding the website,
                    changes in terms and conditions, user agreements, and
                    policies and/or other administrative information;
                  </li>
                  <li>to send you surveys and marketing communications;</li>
                  <li>
                    to help you address the problems faced by you on our
                    website;
                  </li>
                  <li>
                    to administer our websites and for internal operations,
                    including troubleshooting, data analysis, testing, research,
                    statistical and survey purposes;
                  </li>
                  <li>to improve the services and content on the website;</li>
                  <li>
                    to respond to legal, judicial, quasi-judicial process and
                    provide information to law enforcement agencies in
                    connection with any investigation, as required by law;
                  </li>
                  <li>to implement information security practices;</li>
                  <li>
                    to determine any security breaches, computer contaminant or
                    computer virus;
                  </li>
                  <li>
                    to investigate, prevent, or take action regarding illegal
                    activities and suspected fraud;
                  </li>
                  <li>
                    to undertake forensics of the concerned computer resource as
                    part of any investigation or internal audit;
                  </li>
                  <li>to process any job application you may submit; and</li>
                  <li>
                    to trace computer resources or any person who may have
                    contravened or is suspected of having or being likely to
                    contravene, any provision of law including the Information
                    Technology Act, 2000, that is likely to have an adverse
                    impact on the products/ services offered/ provided on our
                    website or by us.
                  </li>
                </ol>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Cookies</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  We may use data collection devices such as "cookies" on
                  certain pages of our website to help analyse our web page
                  flow, measure promotional effectiveness, and to promote trust
                  and safety. "Cookies" are small files placed on your hard
                  drive that assist us in providing our services. Cookies do not
                  contain any of your personal information. We offer certain
                  features that are only available through the use of cookies.
                  Cookies help us provide information that is targeted to your
                  interests. Most cookies are "session cookies," meaning that
                  they are automatically deleted from your hard drive at the end
                  of a session. You have the option to block/delete our cookies
                  if your browser permits; although, in that case, you may not
                  be able to use certain features on our website. Additionally,
                  you may encounter "cookies" or other similar devices on
                  certain pages of our website that are placed by third parties.
                  We do not control the use ofcookies by third parties.
                </p>
              </div>
            </div>

            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Sharing and disclosure of data/information</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <ol className="terms-list" type="a">
                  <li>
                    We may share/disclose your personal information to third
                    parties and this may be necessary for us to provide you
                    access to our services and products, to comply with our
                    legal obligations, to enforce our user agreement, to
                    facilitate our marketing and advertising activities, to
                    prevent/detect/mitigate/investigate fraudulent or illegal
                    activities related to our products/services or involving
                    potential threats to the physical safety of any person,
                    violations of the terms and conditions or our policies.{" "}
                  </li>
                  <li>
                    We may share/disclose statistical data and other details
                    (other than your personal information) to support various
                    programmes or initiatives launched by us, our agents, third
                    party service providers, partners or banks & financial
                    institutions, from time to time. We may share/disclose
                    information (other than your personal information) with
                    parties who support us in providing technical infrastructure
                    services, analyzing how our services are used, providing
                    merchant services, facilitating payments, or conducting
                    academic research and surveys. These third party service
                    providers shall adhere to confidentiality obligations
                    consistent with this privacy policy. We also associate with
                    third parties such as credit/debit card processing
                    companies/payment gateways/pre-paid card service providers
                    etc. to enable you to make payments to us for your access of
                    our products/services. When you sign up for these services,
                    you may have the option to save your card details for future
                    reference and faster future payments. In such case, we may
                    share your relevant personal information, as necessary, for
                    the third parties to provide such services. The processing
                    of payments or authorization is solely in accordance with
                    these third parties’ policies, terms and conditions and we
                    are not in any manner responsible or liable to you or any
                    third party for any delay or failure at their end in
                    processing the payments or for any security breach of such
                    third party websites.
                  </li>
                  <li>
                    We may share/disclose personal and sensitive personal
                    information to government agencies or other authorised law
                    enforcement agencies or judicial, quasi-judicial or any
                    other statutory or constitutional authority, if required to
                    do so by any law/regulation,and in the good faith that such
                    disclosure is reasonably necessary to respond to summons,
                    court orders or other legal proceedings.{" "}
                  </li>
                  <li>
                    We may share/disclose personal information to law
                    enforcement offices, third party rights owners, or others in
                    the good faith belief that such disclosure is reasonably
                    necessary to enforce our Terms of use or Privacy Policy,to
                    respond to claims that an advertisement or any other content
                    violates the rights of a third party or to protect the
                    rights, property or personal safety of our users or the
                    general public.{" "}
                  </li>
                  <li>
                    We will share/sell some or all of your personal information
                    with another business entity should we (or our assets) plan
                    to merge with, or be acquired by that business entity, or in
                    the event of any re-organization/amalgamation/restructuring
                    of our business. Should such a transaction occur, that other
                    business entity (or the new combined entity) will be
                    required to follow this privacy policy, updated where
                    necessary, with respect to your personal information.
                  </li>
                </ol>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Data/Information Retention</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <ol className="terms-list" type="a">
                  <li>
                    We take every reasonable step to ensure that your personal
                    information that we store and process is accurate and, where
                    necessary, kept up to date. You may access, review, correct,
                    changeand update your personal or non-personal information
                    directly through the functionalities provided on the
                    website. Your access to or correction/updating/deletion of
                    your personal or non-personal information may be denied or
                    limited by us if it would violate another person’s rights
                    and/or is not otherwise permitted by any applicable law.{" "}
                  </li>
                  <li>
                    We have put in place systems & measures to ensure that your
                    personal information is not retained for a period longer
                    than is required for the purpose for which it was collected
                    or as required under any applicable law. However, we may
                    retain data related to you if there is a legal obligation to
                    do so; if we believe it may be necessary to prevent fraud or
                    future abuse; to enable Vikramshila to exercise its legal
                    rights and/or defend against legal claims; or for other
                    legitimate purposes.{" "}
                  </li>
                  <li>
                    You have an option to withdraw your consent that you have
                    already provided by writing to us at the contact information
                    provided below. Please note, however, that withdrawal of
                    consent will not be retroactive and will be in accordance
                    with the terms of this Privacy Policy, related Terms of Use
                    and applicable laws. In the event you withdraw the consent
                    given to us under this Privacy Policy, such withdrawal may
                    hamper your access to our websites or restrict us from
                    making available our products/services to you for which we
                    consider that information to be necessary.
                  </li>
                  <li>
                    If you wish to deactivate your account, you may do the same
                    by visiting “my profile” section on the website. You would
                    be prompted for sharing a reason for discontinuing your
                    association with us. Post this,your account would be
                    deactivated.{" "}
                  </li>
                  <li>
                    If you wish to delete your account and thereby discontinue
                    your association with us, you may do so at any time. We,
                    however, reserve the right to retain, store and use your
                    personal or non-personal information or content for our
                    business purposes, whether such information or your account
                    has been deleted or not. After a period of time, your data
                    may be anonymized and aggregated, and then may be held by us
                    as long as necessary for us to provide our services
                    effectively, but our use of the anonymized data will be
                    solely for analytic purposes.{" "}
                  </li>
                  <li>
                    Please note that your withdrawal of consent or deactivation
                    of your account may result in us not being able to provide
                    you with our products/services or terminate any existing
                    relationship that we may have with you.
                  </li>
                </ol>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Links to other websites</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  Our website may provide links to websites of entities/third
                  parties not belonging to the group of/not owned by
                  Vikramshila, that may collect personal information about you.
                  These links are provided for your convenience only and the
                  provision of these links does not mean that those websites are
                  related to or associated with us. Please note that these sites
                  will have their terms of use and privacy policies. You should
                  check their privacy policy before you submit your personal
                  information or any other data with them. We do not guarantee
                  the content and the security of those sites.
                </p>
                <p>
                  We may have certain features on our website which may be
                  hosted by third parties. Your interaction with such features
                  shall be governed by the privacy policy of such third parties.
                  We shall not be responsible for any loss, damage, claim or
                  expense caused as a result of you accessing these third party
                  sites and features.
                </p>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Security precautions</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <ol className="terms-list" type="a">
                  <li>
                    To ensure the security, integrity and privacy of your
                    information and to protect your personal information from
                    unauthorised access/disclosure/loss/misuse, we adopt
                    reasonable security practices and procedures, in line with
                    international standards IS/ISO/IEC 27001 which is recognised
                    as one of the highest information security standards.{" "}
                  </li>
                  <li>
                    We reserve the right to conduct a security review at any
                    time to verify and authenticate your identity, your personal
                    and non-personal information. You agree to provide us all
                    the information that we request for the security review. If
                    you fail to comply with any security request, we reserve the
                    right to terminate your account with us and prohibit your
                    access to the website.{" "}
                  </li>
                  <li>
                    The trademarks, logos and service marks displayed on the
                    website (“marks”) are the property of Vikramshilaor our
                    merchants or respective third parties. You are not permitted
                    to use the marks without the prior consent of Vikramshila,
                    the merchants or the third party that owns the marks.
                  </li>
                  <li>
                    Whenever you access your account information, we offer the
                    use of a secure server. We adopt industry standard security
                    measures and keep updating our systems from time to time to
                    protect your personal information against any hacking or
                    virus dissemination. However, you understand that the
                    transmission of information may not be completely secure
                    always due to any force majeure event i.e. any event beyond
                    our reasonable control. By using our website, you accept the
                    security implications of data transmission over the internet
                    and the World Wide Web which cannot always be guaranteed as
                    completely secure, and therefore, there would always remain
                    certain inherent risks regarding use of the website. You are
                    responsible for ensuring the protection of login and
                    password records for your accounts.
                  </li>
                </ol>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Choice/Opt-Out</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  You agree and acknowledge that you are providing your
                  information out of your free will. You have an option not to
                  provide or permit us to collect your personal information or
                  later on withdraw your consent with respect to such personal
                  information so provided herein by sending an email to the
                  grievance officer or such other electronic address as may be
                  notified to you.
                </p>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Updates to the Privacy Policy</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes to our information practices. But our commitment to
                  protect the privacy of our website users shall remain. We
                  suggest that you check our Privacy Policy periodically to
                  apprise yourself of the updates. Your continued use of our
                  website or provision of data or information thereafter will
                  imply your unconditional acceptance of such updates to this
                  privacy policy.
                </p>
              </div>
            </div>
            <div className="legalBox">
              <div className="legalBox-head">
                <h3>Grievance Officer</h3>
                <b className="icon-arrow-down" />
              </div>
              <div className="legalBox-body">
                <p>
                  If you have any query, concern, or complaint in relation to
                  collection or usage of your information under this Privacy
                  Policy, you can reach us at the contact details provided
                  hereunder:
                </p>
                <p>Grievance Officer: Ms. Shafina Segon</p>
                <p>
                  Address: Vikramshila Research Private Limited I–1667, 3
                  <sup style={{ color: "#000" }}>rd</sup>&nbsp; Floor, CR Park,
                  New Delhi 110019
                </p>
                <p>Email: contactus@vikramshilaedu.in</p>
                <p>Time: Monday – Saturday 9.30 am to 5.30 pm</p>
              </div>
            </div>
          </div>
          <div
            className="pullUp"
            onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <b className="icon-arrow-right" />
          </div>
          <div className="row align-items-center justify-content-between contentFooter">
            <div className="col  text-end">
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
  );
};

export default PrivacyPolciy;
