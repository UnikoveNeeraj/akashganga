import Button from "../common/Button";
import "./ArticlesServices.scss";

function ArticlesServices(){
    return(
        <>
        <section className="p-5 article-services">
                    <div className="row">
                        <div className="col-lg-7 text-start">
                            <h2>Enhance Your Articles with Our Services</h2>
                            <p className="w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul>
                                <li>Book Cover Creators</li>
                                <li>Editing & Proof Reading</li>
                                <li>eBook Formatting</li>
                                <li>eBook Conversion Translation Services</li>
                                <li>Social Media</li>
                                <li>Online PR</li>
                                <li>Lead Generation</li>
                            </ul>
                            <Button title="Browse Services" />
                        </div>
                        <div className="col-lg-5">

                        </div>
                    </div>
                </section>
        </>
    )
}

export default ArticlesServices