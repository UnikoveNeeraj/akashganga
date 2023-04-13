import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { handleShowPassword } from "../../../utils";
import { OnPasswordReset } from "./queries";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import Logo from "../../../components/logo/Logo";
import LeftBase from "../../../components/common/LeftBase";
import active_eye from '../../../svg/active-eye.svg';
import disable_eye from '../../../svg/disable-eye.svg';
import disable_lock from '../../../svg/disable-lock.svg';
import active_lock from '../../../svg/active-lock.svg';
import active_info from '../../../svg/active-info.svg';
import "./index.scss";
import SuccessModal from "../../../components/Modal/sucessModal";
import LightButton from "../../../components/common/Light_button";

function ResetPassword() {
  const [passwords, setPasswords] = useState({});
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const sucessHandler = (resetSucess) => {
    setShowModal(true)
  };
  const handleModalSubmit = (e) => {
    e.preventDefault();
    setShowModal(false)
    navigate('/login')
  }

  const handleCloseModal = () => {
    setShowModal(false)
    navigate('/login')
  }
  
  const { mutate: resetPassword } = OnPasswordReset(sucessHandler);
  const handleCancel =()=>{
    setPasswords({})
    navigate('/')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      header: { token: token },
      passwords,
    };
    resetPassword(queryParams);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  useEffect(() => {
    if (passwords?.newPassword) {
      setDisabled(passwords?.newPassword !== passwords?.confirmPassword);
    }
  }, [passwords]);

  return (
    <div className="container-flex reset-password-page login-page">
      <div className="row h-100">
        <div className="col-lg-4 col-xl-4 d-none d-lg-block left-base position-relative">
          <LeftBase />
        </div>
        <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 m-auto">
          <div className="p-3">
            <div className="text-end top-fixed_link">
              <span>
                <small className="labelColor">Not a member?</small>
              </span>
              <Link to="/registration" className="link ms-2">
                Register Now
              </Link>
            </div>
            <div className="frame w-75 m-auto">
              <Logo />
              <p className="m-auto title mt-3 mb-2">RESET PASSWORD</p>
              <p className="m-auto welcome-title mb-2">Almost there. Choose a password that is unique to you.</p>
              <Form onSubmit={handleSubmit}>
                <Input
                  name="newPassword"
                  handleChange={handleChange}
                  className={passwords?.newPassword ? 'form-control active-input with_icon' : 'form-control grey-input with_icon'}
                  type={!showPassword?.newPassword ? "password" : "text"}
                  labelClass={passwords?.newPassword ? "" : "hidden"}
                  preIconClass={passwords?.newPassword ? active_lock : disable_lock}
                  postIconClass={passwords?.newPassword ? active_eye : disable_eye}
                  value={passwords.newPassword}
                  labelIcon={active_info}
                  label='New Password'
                  placeholder="New Password"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  title="Password should be  1 number 1 capital case 8 digit and 1 special character"
                  onIconClick={(e) =>
                    handleShowPassword(
                      setShowPassword,
                      showPassword,
                      "newPassword"
                    )
                  }
                />
                <Input
                  name="confirmPassword"
                  handleChange={handleChange}
                  className={passwords?.confirmPassword ? 'form-control active-input with_icon' : 'form-control grey-input with_icon'}
                  type={!showPassword?.confirmPassword ? "password" : "text"}
                  labelClass={passwords?.confirmPassword ? "" : "hidden"}
                  preIconClass={passwords?.confirmPassword ? active_lock : disable_lock}
                  postIconClass={passwords?.confirmPassword ? active_eye : disable_eye}
                  value={passwords.confirmPassword}
                  label="Re-enter New Password"
                  placeholder="Re-enter New Password"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  title="password should be  1 number 1 capital case 8 digit and 1 special character"
                  onIconClick={() =>
                    handleShowPassword(
                      setShowPassword,
                      showPassword,
                      "confirmPassword"
                    )
                  }
                />
                <div className="mb-5 mt-4 forgot-buttom-button">
                  <LightButton title="Cancel" handleClick={handleCancel} />
                  <Button type="submit" title="Submit" disabled={disabled} />
                </div>
              </Form>
            </div>
          </div>
        </div>
        <SuccessModal
        size="sm"
        modalHeading='Password Updated'
          upperInformationText=
            "Your password has been changed successfully "
          lowerInformationText='Please login with your new password'
          show={showModal}
          closebutton={true}
          handleClose={handleCloseModal}
          submitButtonTitle={"Login"}
          LinkTitle='Home'
          LinkPath='/'
          onSubmit={handleModalSubmit}
        />
      </div>
    </div>
  );
}
export default ResetPassword;
