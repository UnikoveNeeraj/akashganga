import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Report() {
    return (
        <div>
            <div className='d-flex justify-content-between px-3' style={{ backgroundColor: "#F6F9FB", padding: "10px", width: "100%", marginBottom: "20px" }}>
                <div className='d-flex gap-5'>
                    <h6 style={{ marginTop: '10px', color: "#404040", fontWeight: "bold" }}>View Report</h6><span style={{ marginTop: '10px', color: "#404040" }}>|</span>
                    <div>
                        <p style={{ color: "#404040" }}>Link to the Article</p>
                        <h6 style={{ color: "#167092", fontWeight: "bold" }}>1914 translation by H. Rackham</h6>

                    </div>
                </div>
                <div>
                    <button style={{ backgroundColor: "#167092", borderStyle: "none", color: "#FFFFFF", padding: "5px", width: "100px", fontWeight: "bold", borderRadius: "10px", marginTop: "10px" }}>Close</button>
                </div>

            </div>
            <div className='d-flex justify-content-center container'>
                <div>
                    <p>1. Does the manuscript contain new and significant information to justify publication?</p>
                    <p style={{color:"#009B94",fontWeight:"bold",marginLeft:"15px",marginBottom:"7px"}}>Yes</p>
                    <p>2. Does the abstract clearly and accurately describe the content of the article?</p>
                    <p style={{color:"#009B94",fontWeight:"bold",marginLeft:"15px",marginBottom:"7px"}}>No</p>
                    <p>3. Is adequate reference made to other work in the field?</p>
                    <p style={{color:"#009B94",fontWeight:"bold",marginLeft:"15px",marginBottom:"7px"}}>Not Applicable</p>
                    <p>4. Is the language acceptable?</p>
                    <p style={{color:"#009B94",fontWeight:"bold",marginLeft:"15px"}}>No</p>
                    <div className='border-bottom border-top mt-3 py-5'>
                        <p>Please rate the priority for publishing this article <span>(1 is the highest priority, 10 is the lowest priority)</span>.</p>
                        <ProgressBar style={{ width: "50%" }} variant="success" now={40} />
                    </div>
                    <div>
                        <p style={{ marginTop: "15px" }}>Please answer these questions <span>(Word limit is 150 words)</span>.</p>
                        <p style={{ marginTop: "20px" }}>1. Is the article well argued and structured? Are the conclusions supported by the argument and the<br></br> information presented here?</p>
                    </div>
                    <div className='mt-2' style={{backgroundColor:"#FFFFFF", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.15)",borderRadius:"20px",padding:"20px"}}>
                        <p>This is a brilliant article that describes the problem faced by academia across developing nations. It uses<br></br>
                            India as an example and doesn't touch upon other similar situations across the globe. I wish it did and that<br></br>
                            is perhaps the topic for another paper. The compilation of data, the systematic analysis written in a<br></br>
                            straightforward manner are simply refreshing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report