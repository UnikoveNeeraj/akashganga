import React from 'react'
import { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillInfoCircle } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';

import fileLogo from '../../assets/img/icons/filelogo.svg'
import upArrow from '../../assets/img/icons/upArrow.svg'
import leftArrow from '../../assets/img/icons/arrow_left.svg'
import download from '../../assets/img/icons/downlaod.svg'
/* eslint-disable */
import Article from '../../components/dashboard/Article'
import Drafts from './Drafts';
import Report from './Report';
import Modal from './Modal';

// Values should be only date
const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

// Description array corresponding to values
const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
];

// const article = [
//     {date: 22, title: "Be Aware of Your Rights as an Author", author: "Dr. Umesh Chandra Dumka", tagsOne: "Research Article", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore...", tagsTwo: "Akashganga Journal of Social Science", tagsThree: "Research Article"},
//     {date: 23, title: "Understanding Copyright in an Indian Context", author:"Dr. Anita Jain"}
// ]

const MainContent = () => {
    return (
        <>
            <div className='d-flex justify-content-between border border-success p-2' style={{ borderRadius: "10px" }}>
                <div>
                    <p style={{ fontWeight: "bold", color: "#BF1E2E" }}>20% Profile Setup Complete</p>
                    <p style={{ color: "#BF1E2E" }}>Please complete your profile to submit your article for publication.</p>
                </div>
                <div style={{ marginTop: "7px" }}>
                    <button style={{ borderStyle: "none", backgroundColor: "#ffffff", fontWeight: "bold", color: "#167092", marginRight: "40px" }}>Dismiss</button>
                    <button style={{ backgroundColor: "#167092", borderStyle: "none", fontWeight: "bold", color: "#FFFFFF", padding: "5px", marginRight: "30px", borderRadius: "10px" }}>Complete Profile</button>
                </div>
            </div>
            {/*Start Status Board */}
            <div className='d-flex justify-content-between'>
                <div>
                    <h4 style={{ fontWeight: "bold", color: "#404040", marginTop: "25px" }}>Welcome, <span>Lokesh!</span></h4>
                    <h6 style={{ fontWeight: "bold", color: "#404040", marginTop: "15px" }}>My Dashboard</h6>
                    <div>
                        <h6 style={{ marginTop: "35px", fontWeight: "bold", color: "#167092" }}>Ready to share your research with the world?<br /><span style={{ color: "#404040", fontWeight: "normal" }}>Let's begin the journey now.</span></h6>
                    </div>
                </div>

                <div >
                    <h6>Upload your article in four easy steps!</h6>
                    {/* <div style={{
                                    width: "60%",
                                    height: "100px",
                                    margin: "0 auto"
                                }}>
                                    <HorizontalTimeline
                                        styles={{ outline: "#DFA867", foreground: "#19295C" }}
                                        index={value}
                                        indexClick={(index) => {
                                            setValue(index);
                                            setPrevious(value);
                                        }}
                                        values={VALUES}
                                    />
                                </div>
                                <div className="text-center">{description[value]}</div> */}
                </div>
            </div>
            <hr />
            <div className='mt-3'>
                <h5>My Articles</h5>
                <div className='d-flex gap-5' style={{
                    color: "#167092",
                    fontWeight: "bold"
                }}>
                    <p>Drafts</p>
                    <p>Under Review</p>
                    <p>Approved</p>
                    <p>Rejected</p>
                    <p>Published<span><AiFillInfoCircle color='#167092' /></span></p>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{
                marginTop: "100px",
                marginBottom: "100px"
            }}>
                <div className='align-items-center text-center'>
                    <img src={fileLogo} alt="fileLogo" />
                    <h5>No Articles Yet!</h5>
                    <p className="d-inline-block w-100">You have not written any articles.</p>
             <p className="d-inline-block w-100">Articles that you save as drafts will show here</p>
                </div>
            </div>

            <div>
                <div className='d-flex justify-content-between'>
                    <h4 style={{ fontWeight: "bold", color: "#404040" }}>Recommended Articles</h4>
                    <button style={{ borderColor: "#167092", color: "#167092", fontWeight: "bold", padding: "3px", borderRadius: "10px", width: "100px", backgroundColor: "#FFFFFF" }}>View All</button>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Article date={"20 May 2023"} title={"Be Aware of Your Rights as an Author"} author={"Dr. Umesh Chandra Dumka"} tagsOne={"Research Article"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore..."} tagsTwo={"Akashganga Journal of Social Science"} tagsThree={"Anthropology"} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Article date={"24 May 2023"} title={"Understanding Copyright in anIndian Context"} author={"Dr. Anita Jain"} tagsOne={"Research Article"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore..."} tagsTwo={"Akashganga Journal of Social Science"} tagsThree={"Anthropology"} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Article date={"16 jun 2023"} title={"The Press and Registration ofBooks Act"} author={"Dr. Vansh Gupta, Swati Rai..."} tagsOne={"Research Article"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lore..."} tagsTwo={"Akashganga Journal of Social Science"} tagsThree={"Anthropology"} />
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h5>Back</h5>
                    <img src={leftArrow} alt="leftArrow" />
                </div>
                <img src={upArrow} alt="upArrow" />

            </div>
            <Drafts />
            <Drafts />
            <hr />
            <Report />
            <Modal />
            <div>
                <div className='d-flex justify-content-center mb-3'>
                    <h5 style={{ color: "#404040", fontWeight: "bold" }}>Grant Details</h5>
                </div>
                <div className='d-flex'>
                    <div>
                        <h6 style={{ fontWeight: "500", color: "#404040" }}>Grant Name</h6>
                        <div>
                            <p style={{ fontWeight: "bold", color: "#009B94", backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "7px", width: "300px", borderRadius: "10px" }}>Vikramshila Grant for Authors</p>
                        </div>
                    </div>
                    <div>
                        <h6 style={{ marginLeft: "313px", fontWeight: "500", color: "#404040" }}>Available for</h6>
                        <div>
                            <p style={{ fontWeight: "bold", marginLeft: "313px", color: "#009B94", backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "7px", width: "136%", borderRadius: "10px" }}>Bio Researchers</p>
                        </div>
                    </div>
                </div>

                <h6 style={{ color: "#404040", marginTop: "10px", fontWeight: "450" }}>URL of Grant available for </h6>
                <p style={{ fontWeight: "bold", color: "#167092", backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "7px", borderRadius: "10px", marginTop: "5px" }}>Urban climate change management and society</p>
                <div style={{ color: "#404040", fontWeight: "500" }}>
                    <div className='mt-3'>
                        <h6>Description</h6>
                        <p style={{ backgroundColor: "rgba(64, 64, 64, 0.05)", borderRadius: "10px", padding: "15px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br></br>
                            veniam, quis labore et dolore magna aliqua labore et dolore magna...
                        </p>
                    </div>
                    <div className='mt-3'>
                        <h6>Eligibility</h6>
                        <div style={{ backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "15px", borderRadius: "10px" }}>
                            <ul className='mx-3'>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </li>
                                <li>
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </li>
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h6>Know More</h6>
                            <div style={{ backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "15px", borderRadius: "10px" }}>
                                <div className='grid-container'>
                                    <div > Grant Received On </div>
                                    <span>:</span>
                                    <div >12 May 2023</div>
                                </div>
                                <div className='grid-container'>
                                    <div > Valid Till </div>
                                    <span>:</span>
                                    <div >25 Aug 2023</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "15px", borderRadius: "10px", marginTop: "5px" }}>
                                <div className='grid-container'>
                                    <div > Amount Received </div>
                                    <span>:</span>
                                    <div >INR 7000</div>
                                </div>
                                <div className='grid-container'>
                                    <div > Amount Remaining </div>
                                    <span>:</span>
                                    <div >INR 6500</div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "rgba(64, 64, 64, 0.05)", padding: "15px", borderRadius: "10px", marginTop: "5px" }}>
                                <div className='grid-container'>
                                    <div > Transaction ID </div>
                                    <span>:</span>
                                    <div >826475844855</div>
                                </div>
                                <div className='grid-container'>
                                    <div > Invoice </div>
                                    <span>:</span>
                                    <img src={download} alt="fileLogo" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent