import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logos/aakashganga_full_logo.png";
import menudrop from "../../assets/img/icons/dashboard.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from "react-bootstrap";
import uploadArticle from "../../assets/img/icons/uploadarticle.svg";

const HomeHeader = () => {
    const navigate = useNavigate();
    const handleRedirect = (e, path) => {
        e.preventDefault();
        window.scroll({ top: 0, behavior: 'smooth' });
        navigate(path);
      }
      const [cancelArticle, setCancelArticle] = useState(false);
      function openCancelArticle() {
        setCancelArticle(true)
      }
    return(<>
        <header className="fixed home-header">
            <div className="headerLeft">
            <div className="cmyLogo">
                <img src={Logo} alt="#" />
            </div>
            <div className="maniSearch">
                <input type="search" placeholder="Search for journals and articles" />
            </div>
            </div>
            <div className="navheader">
                <div className="navLink">
                    <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Journals</a>
                    </li>
                    <li>
                        <a>Articles</a>
                    </li>
                    
                    </ul>
                </div>
                <a className="button button-primary mr-3" href="/dashboard/submit-article">Submit Article</a>
                <div className="customDrop">
                    <Dropdown className="removeArrow">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img src={menudrop} alt="#" />
                        Dashboard
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/dashboard">Aakashganga</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Kaashi</Dropdown.Item> 
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="navNotify">
                    <a>
                        <b className="icon-bell" />
                        <span />
                    </a>
                </div>
                {/* <div className="navDashboard">
                    <a href="ag_my_dashboard.html">
                        <b className="icon-dashboard" />
                        Aakashganga
                    </a>
                </div> */}
              
            </div>
        </header>
        <Modal
        show={cancelArticle}
        size="md mdl"
        id="unicheck-results__modal"
        tabIndex={-1}
        dialogClassName="modal-dialog-centered authorModal"
      >
        <Modal.Header className="modal-header">
          <h5 className="modal-title uploadTitle">Upload Your Article<span>Robust, Constructive and Fast Peer Review</span></h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={(e) => setCancelArticle(false)}
          />
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <div className="grantDetails pl-2 pr-2 mb-3">
            <div className="row text-center">
                <p>Welcome. You are about to begin a fresh submission.</p> 
                <p>You may resume it whenever you like from the "<b>My Articles</b>" menu.</p>
                <figure className="mt-4 mb-0">
                    <img src={uploadArticle} />
                </figure>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4 justify-content-center">
           <button className="button button-primary" type="button"   onClick={(e) => handleRedirect(e, '/draft')}>SUBMIT NEW</button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default HomeHeader;