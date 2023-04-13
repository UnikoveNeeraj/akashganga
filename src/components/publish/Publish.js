import "./Publish.scss";

function Publish() {
    return (
        <>
         <section className="p-5 publish-section">
                <div className="container m-auto">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <h2>Why Publish With Vikramshila?</h2>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 text-start publish-box">
                                <div className="publish-row">
                                    <i className="fa fa-rocket"></i>
                                    <div className="description">
                                        <h4>Quick Onboarding</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-start publish-box">
                                <div className="publish-row">
                                    <i className="fa fa-file-text"></i>
                                    <div className="description">
                                        <h4>Easy Publishing Process</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-start publish-box">
                                <div className="publish-row">
                                    <i className="fa fa-usd"></i>
                                    <div className="description">
                                        <h4>Low Prices</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Publish