import { Link } from "react-router-dom";
import Button from "../common/Button";
import "./ArticleList.scss";

function ArticleList() {
    return (
        <>
            <section className="p-5 article-section">
                <div className="row">
                    <div className="col-lg-12 text-start">
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <h2>Latest Articles</h2>
                            </div>
                            <div className="col-lg-6 text-end">
                                <Button title="View All" />
                            </div>
                        </div>
                        <div id="carouselArticles" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselArticles" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselArticles" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselArticles" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 p-0">
                                            <div className="article-box">
                                                <p className=""><span className="article-date">12 May 2023</span>
                                                    <span className="pull-right article-share"><i className="fa fa-share-alt me-3"></i>
                                                        <i className="fa fa-bookmark-o me-3"></i>
                                                        <i className="fa fa-ellipsis-v"></i>
                                                    </span></p>
                                                <p className="article-link">
                                                    <Link to="#">Urban climate change management & society</Link>
                                                </p>
                                                <p><span className="article-category"><i>Research Article</i></span>Dr. Umesh Chandra Dumkar, Anita Jain</p>
                                                <p className="article-description">Call for papers: It gives me immense pleasure to announce that there is a call for submitting research papers to the special issue "Urban Climate Change Management and Society" of the journal "Urban Science", ...</p>
                                                <span className="article-subject">Social Science</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselArticles" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselArticles" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArticleList