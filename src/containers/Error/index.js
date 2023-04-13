import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import error01 from "../../assets/img/error/error_desktop.svg";
import error02 from "../../assets/img/error/error_desktop.svg";

const Error = () => {
  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  return (
    <>
      <Header />
      <div className="resourceSection errorPge innerPages">
        <div className="containWrap">
          <div className="errorWrap">
            <div className="errorImage">
              <span className="errorDesktop">
                <img src={error01} />
              </span>
              <span className="errorMobile">
                <img src={error02} />
              </span>
            </div>
            <div className="errorContent">
              <p>
                Congratulations! You are one of the elite few who has managed to
                find our 404 page.
              </p>
              <p>
                Don’t worry - this is not a dead end. Just use the navigation at
                the top to see more options.
              </p>
            </div>
            <div class="row align-items-center justify-content-between contentFooter pt-3">
              <div class="col text-end">
                <a onClick={handleChatBot} class="helpLink">
                  <b class="icon-help"></b>Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error;
