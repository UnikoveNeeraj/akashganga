import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { updateProfilePassword } from "../../../store/apiCalls/profileDetails";
import doneSvg from "../../../assets/img/icons/done02.svg";
import { handleShowPassword } from "../../../utils";
import infoIcon from "../../../svg/infoIcon.svg";
import active_eye from "../../../svg/active-eye.svg";
import disable_eye from "../../../svg/disable-eye.svg";
import disable_lock from "../../../svg/disable-lock.svg";
import active_lock from "../../../svg/active-lock.svg";
import Input from "../../../components/common/Input";
import Form from "../../../components/common/Form";

const PasswordUpdate = ({
  show = true,
  handleClose = () => {},
  headers = {},
  id = "",
}) => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const resp = await updateProfilePassword({
        data: {
          newPassword: data.password,
          reEnterPassword: data.confirmPassword,
        },
        id,
        headers,
      });
      if (resp.data.success) {
        setData({ password: '', confirmPassword: '' })
        handleClose("phone", false);
        setShowCongrats(true);
      } else {
        setError({ mobileError: resp.data.message });
      }
    } else {
      setError("Password confirm doesn't match");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePasswordClose = (e) => {
    e.preventDefault();
    setShowCongrats(false);
    handleClose("password", false);
  };

  useEffect(() => {
    setDisabled(
      !(
        data?.password &&
        data?.confirmPassword
      )
    );
  }, [data]);

  return (
    <>
      <Modal
        show={show}
        dialogClassName="modal-dialog modal-dialog-centered modal-md authorModal"
        id="updatePassword"
        tabIndex={-1}
      >
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Header className="modal-header">
            <h5 className="modal-title">Change Password</h5>
            <p>Choose a password that is unique to you</p>
            <button
              type="button"
              className="btn-close"
              onClick={(e) => handleClose("password", false)}
            />
          </Modal.Header>
          {/* <Modal.Body className="modal-body"> */}
          <div className="password-body">
            <div className="px-2 pt-1">
              <Input
                name="password"
                handleChange={handleChange}
                className={
                  data?.password
                    ? "form-control active-input with_icon"
                    : "form-control grey-input with_icon"
                }
                type={!showPassword?.password ? "password" : "text"}
                labelClass={data?.password ? "" : "hidden"}
                preIconClass={data?.password ? active_lock : disable_lock}
                postIconClass={data?.password ? active_eye : disable_eye}
                value={data?.password}
                profileIcon={infoIcon}
                label="New Password"
                placeholder="New Password"
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                title="Password should be  1 number 1 capital case 8 digit and 1 special character"
                onIconClick={() =>
                  handleShowPassword(setShowPassword, showPassword, "password")
                }
              />
              <div className="fieldWrap mt-3">
                <Input
                  name="confirmPassword"
                  handleChange={handleChange}
                  className={
                    data?.confirmPassword
                      ? "form-control active-input with_icon"
                      : "form-control grey-input with_icon"
                  }
                  type={!showPassword?.confirmPassword ? "password" : "text"}
                  labelClass={data?.confirmPassword ? "" : "hidden"}
                  preIconClass={
                    data?.confirmPassword ? active_lock : disable_lock
                  }
                  postIconClass={
                    data?.confirmPassword ? active_eye : disable_eye
                  }
                  value={data?.confirmPassword}
                  label="Re-enter New Password"
                  placeholder="Re-enter New Password"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  title="Password should be  1 number 1 capital case 8 digit and 1 special character"
                  onIconClick={() =>
                    handleShowPassword(
                      setShowPassword,
                      showPassword,
                      "confirmPassword"
                    )
                  }
                />
              </div>
              {error && (
                <div className="fieldWrap mt-3">
                  <p className="error-msg">{error}</p>
                </div>
              )}
            </div>
          </div>
          {/* </Modal.Body> */}
          <Modal.Footer className="modal-footer">
            <button className="button button-primary mb-4" disabled={disabled}>CONFIRM</button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal
        dialogClassName="modal-dialog-centered modal-sm authorModal"
        show={showCongrats}
        id="congratsMobile"
        tabIndex={-1}
      >
        <Modal.Header className="modal-header">
          <div class="modal-icon">
            {" "}
            <img src={doneSvg} alt="#" />
          </div>
          <h5 class="modal-title pt-2">Password Updated</h5>
          <button
            type="button"
            class="btn-close"
            ariaLabel="Close"
            onClick={handlePasswordClose}
          ></button>
        </Modal.Header>
        <Modal.Footer className="modal-footer pb-4 pt-1 mb-2">
          <button class="button button-primary" onClick={handlePasswordClose}>
            DONE
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PasswordUpdate;
