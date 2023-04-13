import React from 'react'

const ViewArticle = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between">
                            <h6 style={{ fontWeight: "bold", color: "#404040" }}>View Article</h6>
                            <div className="d-flex gap-5">
                                <button style={{ borderStyle: "none", backgroundColor: "#FFFFFF", fontWeight: "bold", fontSize: "12px" }}>CLOSE</button>
                                <button style={{ borderStyle: "none", backgroundColor: "#FFFFFF", fontWeight: "bold", color: "#167092", fontSize: "13px" }}>REJECT FOR PEER REVIEW</button>
                                <button style={{ borderStyle: "none", fontWeight: "bold", backgroundColor: "#167092", color: "#FFFFFF", padding: "7px", borderRadius: "10px" }}>Send for Peer Review</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4" style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)", borderRadius: "20px", padding: "20px" }}>
                        <div>
                            <h6 style={{ fontWeight: "500" }}>Stream</h6>
                            <p style={{ fontWeight: "bold", color: "#009B94" }}>Social Science</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <h6 style={{ fontWeight: "500" }}>Specialization</h6>
                            <p style={{ fontWeight: "bold", color: "#009B94" }}>Anthropology</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <h6 style={{ fontWeight: "500" }}>Type of Article</h6>
                            <p style={{ fontWeight: "bold", color: "#009B94" }}>Review Article</p>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <h6 style={{ fontWeight: "500" }}>Keywords</h6>
                            <p style={{ fontWeight: "400", color: "#009B94", backgroundColor: "#EBF4F4", padding: "5px", borderRadius: "10px", width: "300px" }}>Akashganga Journal of Social Science</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 " >
                        <div className="card" style={{ borderRadius: "20px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between" >
                                    <div>
                                        <h6>Article Title</h6>
                                        <p>Author Affiliation</p>
                                        <p><span>1. </span>Department of developmental bioengineering, University of Delhi,</p>
                                        <p><span>2. </span>Department of developmental bioengineering, University of Delhi,</p>
                                        <p>Public schools have several programs in place to mitigate the problem of food insecurity,
                                            including free breakfast and reduced lunch. We surveyed 100 students at Arbor Elementary
                                            School over the course of one school year to see how effective these programs were in improving
                                            their academic performance and general contentment in school. The results of these surveys reveal
                                            how long children are academically affected by systemic
                                            food insecurity, even when their stomachs are currently full.
                                        </p>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" card" style={{ borderRadius: "20px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',marginTop:"15px" }}>
                            <div className="card-body">
                                <h5>Introduction</h5>
                                <p>Poverty and poor school performance are two problems that keep Americans from reaching their full potential.
                                    Alongside poverty is food insecurity, which affects millions of households – and children – every day.
                                    But could focusing on one problem help to solve the other? We wanted to find out whether programs designed to reduce food insecurity
                                    for targeted children would improve their school performance, and therefore, give them a more successful start in life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewArticle