import Modal from "react-bootstrap/Modal";
import Button from "../common/Button";
import "./formModal.scss";

const TermsModal = ({ showTermsModal, handleTermsClose, handleAcceptTermsClose }) => {
  return (
    <>
      <Modal
        className="termsModal"
        dialogClassName="modal-dialog-centered modal-bg modal-xl"
        show={showTermsModal}
        onHide={handleTermsClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="modal-header"
          style={{ border: "none" }}
        >
          <Modal.Title className="modal-title">Terms of use</Modal.Title>
            <button
              className="btn-footer"
              onClick={handleTermsClose}
            >
              Close
            </button>
            <button
              className="btn-footer"
              onClick={handleTermsClose}
            >
              Decline
            </button>
            <Button className="agree-btn" handleClick={handleAcceptTermsClose}  title="I AGREE" />
        </Modal.Header>

        <Modal.Body className="modal-body">
          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Introduction</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>Welcome to Vikramshila Research Private Limited!</p>
              <p>
                This Terms of Use is an electronic record in the form of an
                electronic contract formed under the Information Technology Act,
                2000 and the rules made thereunder and the amended provisions
                pertaining to electronic documents/ records in various statutes
                as amended by the Information Technology Act, 2000. This
                document does not require any physical, electronic or digital
                signature.
              </p>
              <p>
                This document is published in accordance with the provisions of
                Rule 3(1) of Information Technology (Intermediaries guidelines)
                Rules, 2011, under Information Technology Act, 2000 that
                requires the publishing of rules and regulations, privacy policy
                and user agreement for access or usage of the website of
                Vikramshila Research Private Limited located at the URL &nbsp;
                <a href="https://www.vikramshilaedu.in">www.vikramshilaedu.in.</a>
              </p>
              <p>
                This Terms of Use is a legally binding document between guest
                users and registered users of our website (‘user/ you/ your/
                yourself’) and Vikramshila Research Private Limited
                (‘Vikramshila/ we/ our/ us’), a company incorporated under the
                Companies’ Act, 2013, with its registered office at I-1667, 3rd
                Floor, CR Park, New Delhi – 110 019, India, and describes the
                terms on which we offer you access to and use of our website and
                such other services as are incidental and ancillary thereto.
                These terms will be effective upon your acceptance of the same
                (directly or indirectly in electronic form by clicking on the “i
                accept” tab or by means of an electronic record or by use of the
                website) and will govern the relationship between you and
                Vikramshila, for your use of our website.
              </p>
              <p>
                These Terms of Use shall be read together with the privacy
                policy and/or other terms and conditions with all other
                notices, disclaimers, guidelines appearing on the website from
                time to time (collectively referred to as "agreement(s)") and
                constitutes the entire agreement upon which you are allowed to
                access and use our website and other incidental/ancillary
                services.
              </p>
              <p>
                Please read this Terms of Use carefully. By using our website,
                you indicate that you understand, agree and consent to this
                Terms of Use and, also agree to be governed by the laws of
                India. If you do not agree with the Terms of Use, please do not
                use this website.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Interpretation</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                Any reference to the singular includes a reference to the plural
                and vice versa and any reference to the masculine includes a
                reference to the feminine and vice versa, unless explicitly
                provided for otherwise.
              </p>
              <p>
                Headings and captions are used for convenience only and will not
                affect the interpretation of these Terms of Use.
              </p>
              <p>
                Any reference to a natural person, unless repugnant to the
                context, includes his heirs, executors and permitted assignees.
                Similarly, any reference to a juristic person such as
                Vikramshila, unless repugnant to the context, includes its
                affiliates, successors and permitted assignees.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>User account security</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                You may visit, access and use our website either as a registered
                user or as a guest user. However, not all sections of the
                website and products/services will be accessible to the guest
                users.
              </p>
              <p>
                You shall be responsible for maintaining the confidentiality of
                your account credentials involving username and password. You
                shall be responsible for all activities that occur within your
                account credentials i.e.under your username and password. You
                shall ensure that the account information that you provide at
                the time of registration on our website is complete, accurate
                and uptodate. You understand and agree that if you provide any
                information that is untrue, inaccurate, not current or
                incomplete or we have reasonable grounds to suspect that any
                information that you furnish is untrue, inaccurate, not current
                or incomplete, we shall have the right to suspend/terminate your
                account or refuse access to any or all sections of our website/products/services.
              </p>
              <p>You agree to</p>
              <p>
                - immediately notify us of any unauthorized use/breach of your
                password or account details; and
              </p>
              <p>
                - ensure that you exit from your account at the end of each
                session.
              </p>

              <p>
                We will not be liable for any loss or damage on account of your
                failure to comply with this section. You may be held liable for
                losses incurred by us or any other user of or visitor to the
                website due to authorized or unauthorized use of your account
                owing to your failure to keep your account credentials safe,
                secure and confidential. Use of another user's account
                information for accessing our website is expressly prohibited.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Use of our website</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                You acknowledge, agree and undertake that your use of our
                website shall be strictly in adherence to the following
                principles:-
              </p>
              <p>You shall not</p>
              <p>
                <ol className="terms-list" type="a">
                  <li>
                    promote illegal activities or conduct in a manner that is
                    abusive, threatening, obscene, defamatory, libellous or
                    otherwise violate the legal rights of any person;
                  </li>
                  <li>
                    publish, post, upload, modify, distribute or disseminate any
                    inappropriate, defamatory, infringing, obscene, indecent,
                    profane, hateful or unlawful material, information, picture or
                    subject;
                  </li>
                  <li>
                    publish, post, upload, modify, distribute or disseminate
                    anyinformation that threatens the unity, integrity, defence,
                    security or sovereignty of India, its friendly relations with
                    foreign states, or public order or causes incitement to
                    thecommission of any cognizable offence or prevents
                    investigation of any offence or is insulting to any other
                    nation;
                  </li>
                  <li>
                    publish, post, upload, distribute or disseminate any
                    information or data belonging to another person and to which
                    you do not have a right or which is invasive of another’s
                    privacy
                  </li>
                  <li>
                    try to gain unauthorized access or exceed the scope of
                    authorized access to the website or to profiles, blogs,
                    communities, account information or other fragments of the
                    website or solicit passwords or personal information for
                    commercial or unlawful purposes from other users;
                  </li>
                  <li>
                    post or share any information on this website which is or can
                    be false, inaccurate or misleading in any way;{" "}
                  </li>
                  <li>violate any law for the time being in force;</li>
                  <li>
                    infringe any patent, trademark, copyright or other proprietary
                    rights or third party's trade secrets or rights of publicity
                    or privacy or be fraudulent in any manner;
                  </li>
                  <li>
                    conduct or forward surveys, contests or schemes without our
                    knowledge and consent;
                  </li>
                  <li>
                    transmit junk mails or unsolicited mass mails or spam mails;
                  </li>
                  <li>
                    use any deep-link, robot, spider or other automatic device,
                    program, algorithm or methodology or similar or equivalent
                    manual process to access, acquire, copy, monitor, alter, share
                    or delete any portion of this website or content, or in any
                    way reproduce or circumvent the structure or presentation of
                    the website to obtain or attempt to obtain any information,
                    data, materials or documents through any means not
                    specifically made available through the website;
                  </li>
                  <li>
                    l. post, publish, edit, copy, distribute, transmit, display,
                    perform, reproduce, publish, license, create derivative works
                    from, transfer or sell any information or software obtained
                    from the website without our knowledge and consent.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Links to other websites</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                Our website may contain links to websites of third parties not
                owned by Vikramshila. These links are provided for your
                convenience only and the provision of these links does not mean
                that those websites are related to or associated with us. Please
                note that these sites will have their terms of use and privacy
                policies. You should check their terms of use before you use
                their websites. We do not guarantee the content and the security
                of those sites. We shall not be responsible for any loss,
                damage, claim or expense caused as a result of you accessing
                these third party sites. We reserve the right to disable links to
                and/or from third-party sites to our website/products/services, although we are under no obligation to do so.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Discounts, credits and promotions</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                We reserve the right to offer discounts/promotional offers/credits to any user of our choice and shall not be held
                liable by/to any other user for not offering the same. The
                discounts/offers/credits are made available at our sole
                discretion and are subject to change/amendment/modification from
                time to time. We may, at our sole discretion and at any time,
                discontinue the discounts/offers/credits without assigning any
                reason or without any prior intimation whatsoever. The
                participation in discounts/offers/credits is voluntary and it is
                understood that suchvoluntary participation by the user shall be
                deemed to have been made with full acceptance of this Terms of
                use, including this clause.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Communications</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                When you use our website or send emails/communication to us or
                share data/information with us, you agree, acknowledge and
                understand that you are communicating with us via. electronic
                means and you consent to receive communications via. electronic
                means from us as and when required. We may communicate with you
                by email or by any other mode of communication, electronic or
                otherwise.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Intellectual Property Rights</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                Our websites, materials/contents/products/services posted/published/made available through our websites, any supporting
                software/applications/systems and trademarks/service marks/logos/any other marks (collectively referred to as ‘Intellectual
                Property Rights or IPR’) are the exclusive property of
                Vikramshila or its licensors and are protected by Intellectual
                Property Laws. No IPR owned by Vikramshila or its licensors be used
                without our prior written consent. You acknowledge that the said
                IPR shall remain the sole and exclusive property of Vikramshila or
                its licensors and agree that you will not contest the ownership
                of the said IPR for any reason whatsoever.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>No Warranties</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                The website and the services are provided on "as is" basis. We do
                not make any other representations or warranties of any kind,
                express or implied, including without limitation that the
                website or the services will meet your requirements/will always
                be available, accessible, uninterrupted, timely, secure or
                operate without error.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Limitation of liability</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                In no event shall Vikramshila be liable for any indirect,
                punitive, incidental, special, consequential or any other
                damages resulting from:
                <br />
                - the use or inability to use our website/services/products;
                <br />
                - unauthorized access to or alteration of our website/contents
                hosted therein;
                <br />
                - breach of condition, representations or warranties by the
                author(s) of contents/provider(s) of services;
                <br />
                - any other matter relating to the website including but not
                limited to damages for loss of use or data, arising out of or in
                any way connected with the use or performance of the website/its services. <br />
              </p>
              <p>
                Vikramshila shall not be responsible for non-availability of the
                website/its services during periodic maintenance operations or
                any unplanned suspension of access to the website. You
                acknowledge that you understand and agree that any material
                and/or data uploaded/downloaded from Vikramshila is done
                entirely at your own discretion and risk and that you will be
                solely responsible for any damage to your device or loss of data
                that results from the upload/download of such material and/or
                data.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Indemnity</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                You shall indemnify and hold harmless Vikramshila, its owners,
                officers, directors, employees, contractors and agents from any
                claim or demand or actions made by any third party or any
                penalty imposed due to or arising out of your breach of these
                Terms of Use, our website and other terms and conditions or your
                violation of any law, rules or regulations or the rights
                (including infringement of intellectual property rights) of a
                third party.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Updates to Terms of Use</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                We may modify, delete, add and update portion(s) of this Terms
                of Use from time to time. We suggest that you check our Terms of
                Use periodically to apprise yourself of the updates. Your
                continued visit and use of our website thereafter will imply
                your unconditional acceptance of such revisions to the Terms of
                Use.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Severability</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                If any of these terms is determined to be illegal, invalid or
                otherwise non-enforceable by reason of the laws of any state in
                which these terms are intended to be effective, then to the
                extent and within the jurisdiction in which that term is
                illegal, invalid or non-enforceable, it shall be severed and the
                remaining terms of use shall survive, remain in full force and
                effect and continue to be binding and enforceable.
              </p>
            </div>

            <hr />

          </div>
          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Non-assignment</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                In no event shall you assign or transfer or purport to assign or
                transfer the contract between you and us to any other person,
                without our knowledge and consent.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Governing law, jurisdiction and dispute resolution</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of India. Any action, suit or other
                legal proceeding for the resolution of any matter arising under
                or relating to the access/use of this website/products/services shall be subject to the exclusive jurisdiction of the
                courts at New Delhi, India.
              </p>
            </div>
          </div>

          <hr />

          <div className="legalBox">
            <div className="legalBox-head">
              <h3>Grievance Officer</h3>
              <br />
            </div>
            <div className="legalBox-body">
              <p>
                In accordance with the Information Technology Act, 2000 and the
                rules made there under and also the Consumer Protection
                (E-Commerce) Rules, 2020, the name and contact details of the
                Grievance Officer are provided here under:
              </p>
              <p>
                Grievance Officer: Ms. Shafina Segon
                <br />
                Address: Vikramshila Research Private Limited I–1667, 3<sup style={{color: '#000'}}>rd</sup>&nbsp;
                Floor, CR Park, New Delhi 110019
                <br />
                Email: contactus@vikramshilaedu.in
                <br />
                Time: Monday - Saturday, 9.30 am to 5.30 pm
                <br />
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          <button
            className="btn-footer"
            onClick={handleTermsClose}
          >
            Decline
          </button>
          <Button className="agree-btn" handleClick={handleAcceptTermsClose}  title="I AGREE" />
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TermsModal;
