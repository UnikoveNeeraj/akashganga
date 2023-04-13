import { Link } from "react-router-dom"

const SubmitArticleButton = () => {
    return (
        <div className="submit-article_area">
        <Link to="/submitarticle" className="">
            <div className="submit-article_button">
                <p><u>Submit Article</u></p>
                <i className="fa fa-plus"></i>
            </div>
        </Link>
        </div>
    )
}

export default SubmitArticleButton