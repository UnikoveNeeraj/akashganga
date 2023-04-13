import "./Video.scss";

function Video() {
    return (
        <>
            <section className="p-5 video-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>How Vikramshila Works</h2>
                        <div className="col-lg-10 m-auto">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <video src="" controls className="w-100" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video