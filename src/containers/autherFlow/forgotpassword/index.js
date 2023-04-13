import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import Logo from "../../../components/logo/Logo";
import { validateEmail } from "../../../utils";
import { OnForgotPassword } from "./queries";
import active_email from "../../../svg/active-email.svg";
import disable_email from "../../../svg/disable-email.svg";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const sucessHandler = (forgotSucess) => {
    // alert('success')
    // toast.success(forgotSucess?.data?.message);
  };
  const { mutate: forgotPassword } = OnForgotPassword(sucessHandler);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email };
    forgotPassword(data);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setDisabled(!validateEmail(email));
    // eslint-disable-next-line
  }, [email]);

  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-lg-7 col-xl-5 col-md-8 m-auto">
          <p className="text-start mt-3">
            <Link to="/login">
              <i className="fa fa-times"></i> Cancel{" "}
            </Link>
          </p>
          <div className="frame">
            <Logo />
            <p className="welcome_title pt-4 px-4">
              Please enter your registered email ID and you will get a link to
              reset your password
            </p>
            <Form onSubmit={handleSubmit}>
              <Input
                className={!!email ? "form-control active-input with_icon" : "form-control grey-input with_icon"
                }
                name="email"
                handleChange={handleChange}
                type="email"
                preIconClass={email ? active_email : disable_email}
                labelClass={email ? "" : "hidden"}
                showLabel
                label="Email ID"
                placeholder="Email ID"
                value={email}
              />
              <div className="mb-5 mt-5">
                <Button type="submit" title="SUBMIT" disabled={disabled} />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
