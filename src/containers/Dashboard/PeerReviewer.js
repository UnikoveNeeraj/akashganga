import React from 'react';
import DashboardLayout from '../../layout/dashboard';
import './PeerReviewer.scss';
import { AiFillInfoCircle } from 'react-icons/ai';
import EditIcon1 from '../../assets/img/icons/EditIcon1.svg';
import ReportIcon from '../../assets/img/icons/ReportIcon.svg';
import SevaHat from '../../assets/img/icons/SevaHat.svg';
import Article from '../../components/article/Article';
import upArrow from '../../assets/img/icons/upArrow.svg';
import leftArrow from '../../assets/img/icons/arrow_left.svg';


const PeerReviewer = () => {
  return (
    <DashboardLayout>
      <div className='d-flex justify-content-between'>
        <div>
          <h4 style={{ fontWeight: "bold", color: "#404040" }}>Welcome, <span>Lokesh!</span></h4>
          <h6 style={{ fontWeight: "bold", color: "#404040", marginTop: "15px" }}>My Dashboard</h6>
          <div>
            <h6 style={{ marginTop: "35px", fontWeight: "bold", color: "#404040" }}>For Peer Review</h6>
            <div className='d-flex gap-4' style={{ color: "#167092", fontWeight: "bold" }}>
              <p>New Requests</p>
              <p>Accepted</p>
              <p>Reviewed</p>
              <p>Not Accepted</p>
            </div>
          </div>
        </div>

        <div>
          <div className='dashBoard-views d-flex gap-4 px-3 p-3'>
            <div>
              <p>Accepted</p>
              <p className='count'>43</p>
            </div>
            <div>
              <p>Reviewed</p>
              <p className='count'>43</p>
            </div>
            <div>
              <p>Not Accepted</p>
              <p className='count'>43</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "38%" }} />
      <div className='research-article'>
        <div className='d-flex gap-2'>
          <p>Requested On: 12 May 2023</p>
          <span>|</span>
          <p>Due By: 24 May 2023</p>
        </div>

        <p style={{ color: "#167092", fontWeight: "bold" }}>1914 translation by H. Rackham</p>
        <p style={{ backgroundColor: "#EBF4F4", width: "130px", padding: "3px", borderRadius: "5px" }}>Research Article</p>
        <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch.<br></br>
          Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over<br></br>
          the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...
        </p>
        <hr />
        <div className='d-flex justify-content-between'>
          <div className='d-flex gap-4'>
            <p className='description-text p-2'>Akashganga Journal of Social Science</p>
            <p className='description-text p-2'>Anthropology</p>
          </div>
          <div className='d-flex gap-4'>
            <button className='reject-for-review-btn'>Reject for Review</button>
            <button className='accept-for-review-btn'>Accept for Review</button>
          </div>
        </div>
      </div>
      <div className='research-article mt-3'>
        <div className='d-flex gap-2'>
          <p>Requested On: 12 May 2023</p>
          <span>|</span>
          <p>Due By: 24 May 2023</p>
        </div>

        <p style={{ color: "#167092", fontWeight: "bold" }}>1914 translation by H. Rackham</p>
        <p style={{ backgroundColor: "#EBF4F4", width: "130px", padding: "3px", borderRadius: "5px" }}>Research Article</p>
        <p>Public schools have several programs in place to mitigate the problem of food insecurity, including free breakfast and reduced lunch.<br></br>
          Over the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there. Over<br></br>
          the course of one school year to see how effective Call for papers: It gives me immense pleasure to announce that there...
        </p>
        <hr />
        <div className='d-flex justify-content-between'>
          <div className='d-flex gap-4'>
            <p className='description-text p-2'>Akashganga Journal of Social Science</p>
            <p className='description-text p-2'>Anthropology</p>
          </div>
          <div className='d-flex gap-4'>
            <button className='reject-for-review-btn'>Reject for Review</button>
            <button className='accept-for-review-btn'>Accept for Review</button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button style={{ backgroundColor: "#FFFFFF", borderColor: "#167092", borderRadius: "5px", color: "#167092", fontWeight: "bold", padding: "5px" }}>View All Requests</button>
      </div>
      <hr />
      <div className='mt-3'>
        <div className='d-flex justify-content-between'>
          <h5>My Articles</h5>
          <button className='my-artical-btn'>Collapse</button>
        </div>
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
        <div className='d-flex justify-content-end mt-1'>
          <div className='dashBoard-views d-flex gap-4 px-3 p-3'>
            <div>
              <p>Accepted</p>
              <p className='count'>43</p>
            </div>
            <div>
              <p>Reviewed</p>
              <p className='count'>43</p>
            </div>
            <div>
              <p>Not Accepted</p>
              <p className='count'>43</p>
            </div>
          </div>
        </div>
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


        </div>
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
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <button style={{ borderColor: "#167092", backgroundColor: "#ffffff", borderRadius: "10px", padding: "5px", fontWeight: "bold", color: "#167092" }}>View All Drafts</button>
          </div>
          <hr />
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
                    <h5 style={{color:"#167092",fontWeight:"bold"}}>Back</h5>
                    <img src={leftArrow} alt="leftArrow" />
                </div>
                <img src={upArrow} alt="upArrow" />

            </div>
      </div>
    </DashboardLayout>
  )
}

export default PeerReviewer