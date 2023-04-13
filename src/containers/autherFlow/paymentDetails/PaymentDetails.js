import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import RadioButton from "../../../components/common/Radio_button";
import Header from "../../../layout/header";
import "./PaymentDetails.scss";

function PaymentDetails() {
  return (
    <div>
      <Header />
      <div className="container-flex payment-details">
        <div className="row">
          <h6 className="my-5">
            Thank you for registering with us. Please fill in some additional
            information to continue with us.
          </h6>
          <div className="col-lg-7 col-xl-5 col-md-8 m-auto">
            <p className="text-end mt-3">
              <Link to="/"> Do it later </Link>
            </p>
            <div className="frame">
              <div>
                <Form>
                  <p className="text-muted">3. Payment Details</p>
                  <p className="text-muted">
                    You have to deposit Rs 1000 for upload of an article and Rs
                    6000 for publishing per article. This will appear in your
                    Wallet for later use.
                  </p>
                  <p className="text-muted">
                    What more are you paying for? <Link to="#">Learn More</Link>
                  </p>

                  <p className="text-muted">2. Work/Professional Details</p>
                  <br />
                  <div className="grey-row">
                    <RadioButton
                      label="Add Credit/Debit/ATM Card"
                      name="addCard"

                    />
                  </div>
                  <div className="grey-row">
                    <RadioButton label="Gpay" name="paymentMode" />
                    <div className="d-flex justify-content-between ms-4 align-items-center">
                      <Input
                        placeholder="example-1@okicici"
                        labelClass="d-none"
                        className="form-control me-3 p-1 border-0"
                      />
                      <Link to="#" className="mx-4">
                        Verify
                      </Link>
                    </div>
                  </div>
                  <div className="grey-row">
                    <RadioButton label="Paytm" name="paymentMode" />
                  </div>
                  <div className="grey-row">
                    <RadioButton label="UPI" name="paymentMode" />
                  </div>
                  <div className="grey-row">
                    <RadioButton label="Net Banking" name="paymentMode" />
                  </div>
                  <div className="my-5">
                    <Button title="CONTINUE" disabled />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
