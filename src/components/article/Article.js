import Button from "../common/Button";
import LightButton from "../common/Light_button";
import "./Article.scss";

function Article() {
    return (
        <>
            <section className="article-section">
                <div className="row">
                    <div className="col-lg-6 text-start">
                        <h2>Changing Higher Education <br /> Once Article At A Time</h2>
                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button title="Submit Your Article" /> <LightButton />
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Article