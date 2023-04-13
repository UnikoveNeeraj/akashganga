import Button from "../common/Button";
import "./NeedHelp.scss";

function NeedHelp() {
    return (
        <>
            <section className="p-5 need-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Need More Help? Request A Callback</h2>
                        <p className="my-4">Get in touch with us and we will help you achieve your goals</p>
                        <Button title="Request A Call" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NeedHelp