const ArticleRow = () => {
    return (
        <>
            <div className="article-row">
                <div>
                    <small className="d-flex justify-content-between flex-wrap">
                        <ul className="d-flex article-list">
                            <li>Created 12 May 2023</li>
                            <li><i className="fa fa-circle mx-2"></i></li>
                            <li>Last Edited 12 May 2023</li>
                        </ul>
                        <span className="float-end">
                            <i className="fa fa-share-alt me-3"></i>
                            <i className="fa fa-bookmark-o me-3"></i>
                            <i className="fa fa-ellipsis-v"></i>
                        </span>
                    </small>
                </div>
                <p className="article-name"><u>1914 translation by H. Rackham</u><span className="article-badge"><i>Research Articl</i>e</span></p>
                <div className="article-label">Dr. Umesh Chandra Dumkar, Anita Jain</div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <div>
                    <span className="article-badge m-0">Social Science</span>
                    <span className="article-badge">Anthropology</span>
                </div>
            </div>
        </>
    )
}

export default ArticleRow