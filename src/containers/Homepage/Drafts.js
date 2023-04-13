import React from 'react'
import EditIcon1 from '../../assets/img/icons/EditIcon1.svg';
import ReportIcon from '../../assets/img/icons/ReportIcon.svg';
import SevaHat from '../../assets/img/icons/SevaHat.svg';
import Accordion from 'react-bootstrap/Accordion';

function Drafts() {
    return (
        <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)", borderRadius: "20px", padding: "20px", marginTop: "50px" }}>
            <div className='d-flex justify-content-between'>
                <p style={{ fontWeight: "400" }}>Created On: 12 May 2023 <span>|</span> Last Edited: 24 May 2023</p>
                <p style={{ color: "#009B94", backgroundColor: "#EBF4F4", padding: "5px", borderRadius: "10px" }}>Second Revision</p>
            </div>
            <div>
                <h6 style={{ color: "#167092", fontWeight: "bold" }}>1914 translation by H. Rackham</h6>
                <p style={{ color: "#009B94", backgroundColor: "#EBF4F4", borderRadius: "10px", width: "135px", padding: "5px" }}>Research Article</p>
                <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch.<br></br>
                    Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over<br></br>
                    the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...</p>
            </div>
            <div className='d-flex justify-content-end mt-3'>
                <div className='d-flex gap-5 text-center'>
                    <div>
                        <img src={EditIcon1} alt="EditIcon" style={{ backgroundColor: "#167092", width: "35px", padding: "5px", borderRadius: "100px" }} />
                        <p>Edit</p>
                    </div>
                    <div>
                        <img src={ReportIcon} alt="EditIcon" style={{ backgroundColor: "#167092", width: "32px", padding: "7px", borderRadius: "100px" }} />
                        <p>Report</p>
                    </div>
                    <div>
                        <img src={SevaHat} alt="EditIcon" style={{ width: "30px", padding: "5px", borderRadius: "50px" }} />
                        <p>Seva Hatt</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <p style={{ color: "#009B94", backgroundColor: "#EBF4F4", padding: "5px", borderRadius: "10px" }}>Akashganga Journal of Social Science</p>
                    <p style={{ color: "#009B94", backgroundColor: "#EBF4F4", padding: "5px", borderRadius: "10px", marginLeft: "10px" }}>Anthropology</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button style={{ borderColor: "#167092", backgroundColor: "#ffffff", borderRadius: "10px", padding: "5px", fontWeight: "bold", color: "#167092" }}>View All Drafts</button>

            </div>
            <div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> For Peer Review </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    )
}

export default Drafts