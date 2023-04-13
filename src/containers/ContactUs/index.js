import { BASE_APP, BASE_URL } from "../../config";
import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../assets/scss/sections/_contact_us.scss";
import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import sample_04 from "../../assets/img/sample/sample_04.jpg";
import sample_03 from "../../assets/img/sample/sample_03.jpg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { identityOptions, titleOptionsNew } from "../../constants";
import Select from "../../components/common/Select";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { validatePhoneNumber } from "../../utils";
import { useDispatch } from "react-redux";

const ContactUs = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [contactData, setContactData] = useState("");
  const handleClose = () => setShow(false);
  const initialValues = {
    title: "",
    fullName: "",
    emailId: "",
    code: "",
    mobile: "",
    identity: "",
    othersData: "",
    description: "",
  };

  const handleChatBot = (e) => {
    e.preventDefault();
    window.zE("messenger", "open");
  };

  const validate = Yup.object({
    fullName: Yup.string().required("*Full Name is required"),
    emailId: Yup.string()
      .email("*Email is invalid")
      .required("*Email is required"),
    identity: Yup.string().required("*Identity is required"),
    othersData: Yup.string().when("identity", {
      is: (value) => value === "Others",
      then: (schema) => schema.required("*Please specify your identity"),
    }),
    description: Yup.string().required("*Description is required"),
    mobile: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Mobile Number is Invalid"
      )
      .min(10, "Mobile Number is Invalid"),
  });

  const setParams = (values) => {
    const params = {
      title: values.title,
      fullName: values.fullName,
      email: values.emailId,
      code: values.code,
      phoneNumber: values.mobile,
      identify:
        formRef.current?.values?.identity === "Others"
          ? values.othersData
          : values.identity,
      helpData: values.description,
    };
    return params;
  };

  const contactUsData = async (values) => {
    dispatch({ type: "SET_LOADER", payload: true });
    const response = await axios.post(
      `${BASE_URL}AakashGanga/contactUs`,
      setParams(values)
    );
    dispatch({ type: "SET_LOADER", payload: false });
    setContactData(response);
  };

  useEffect(() => {
    if (contactData?.status === 200) {
      setShow(true);
    } else return;
  }, [contactData]);

  // console.log("othersData", othersData);

  return (
    <>
      <Header />
      <div>
        <div className="contactSection innerPages">
          <div className="containWrap">
            <div className="contactRow">
              <div className="contactLeft">
                <h1>
                  <span className="underLine">Contact</span> <b>Us</b>
                </h1>
                <Formik
                  initialValues={initialValues}
                  enableReinitialize={true}
                  innerRef={formRef}
                  validationSchema={validate}
                  onSubmit={(values, { resetForm }) => {
                    contactUsData(values);
                    resetForm();
                  }}
                >
                  {(props) => (
                    <Form>
                      <div className="contactForm">
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="row mb-5">
                              <div className="col-4">
                                <div className="fieldWrap-mobile">
                                  <Select
                                    handleChange={(value) =>
                                      props.setFieldValue("title", value)
                                    }
                                    selectedValue={props?.values.title}
                                    options={titleOptionsNew?.map(
                                      (val) => val?.key
                                    )}
                                    optionValues={titleOptionsNew?.map(
                                      (val) => val?.value
                                    )}
                                    labelClass={
                                      props?.values?.title ? "" : "hidden"
                                    }
                                    label="Title"
                                    placeholder="Title"
                                    name="title"
                                  />
                                </div>
                              </div>
                              <div className="col-8 ps-0">
                                <div className="fieldWrap">
                                  <label
                                    className={
                                      props?.values?.fullName ? "" : "hidden"
                                    }
                                  >
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="fieldForm"
                                    placeholder="Full Name*"
                                    onChange={(event) =>
                                      props.setFieldValue(
                                        "fullName",
                                        event.target.value
                                      )
                                    }
                                    name="fullName"
                                    value={props.values.fullName}
                                  />
                                  {props?.errors?.fullName &&
                                  props?.touched.fullName ? (
                                    <div className="error-field">
                                      {props?.errors?.fullName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="fieldIcon mb-5">
                              <div className="fieldWrap">
                                <label
                                  className={
                                    props?.values?.emailId ? "" : "hidden"
                                  }
                                >
                                  Email Id
                                </label>
                                <b
                                  style={{ top: "30px" }}
                                  className="icon-email"
                                />
                                <input
                                  type="email"
                                  className="fieldForm"
                                  placeholder="Email ID*"
                                  onChange={(event) =>
                                    props.setFieldValue(
                                      "emailId",
                                      event.target.value
                                    )
                                  }
                                  name="emailId"
                                  value={props.values.emailId}
                                />
                                {props?.errors?.emailId &&
                                props?.touched.emailId ? (
                                  <div className="error-field">
                                    {props?.errors?.emailId}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="row mb-5">
                              <div className="col-4">
                                <div className="mobileCode">
                                  <label>+91</label>
                                </div>
                              </div>
                              <div className="col-8 ps-0">
                                <div className="fieldIcon">
                                  <div className="fieldWrap-mobile">
                                    <label
                                      className={
                                        props?.values?.mobile ? "" : "hidden"
                                      }
                                    >
                                      Mobile Number
                                    </label>
                                    <b
                                      style={{ top: "30px" }}
                                      className="icon-call"
                                    />
                                    <input
                                      type="tel"
                                      className="fieldForm"
                                      placeholder="Mobile Number"
                                      onChange={(event) =>
                                        props.setFieldValue(
                                          "mobile",
                                          validatePhoneNumber(
                                            event.target.value
                                          )
                                        )
                                      }
                                      name="mobile"
                                      value={props.values.mobile}
                                      maxLength={10}
                                    />
                                    {props?.errors?.mobile &&
                                    props?.touched.mobile ? (
                                      <div className="error-field">
                                        {props?.errors?.mobile}
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="mb-5">
                              <div className="fieldWrap">
                                <Select
                                  handleChange={(value) =>
                                    props.setFieldValue("identity", value)
                                  }
                                  selectedValue={props?.values.identity}
                                  options={identityOptions?.map(
                                    (val) => val?.key
                                  )}
                                  optionValues={identityOptions?.map(
                                    (val) => val?.value
                                  )}
                                  labelClass={
                                    props?.values?.identity ? "" : "hidden"
                                  }
                                  label="Identity"
                                  placeholder="Identity"
                                  name="identity"
                                />
                                {props?.errors?.identity &&
                                props?.touched.identity ? (
                                  <div className="error-field">
                                    {props?.errors?.identity}
                                  </div>
                                ) : null}
                              </div>
                              {props?.values?.identity === "Others" ? (
                                <div style={{ marginTop: "10px" }}>
                                  <input
                                    type="text"
                                    onChange={(event) =>
                                      props.setFieldValue(
                                        "othersData",
                                        event.target.value
                                      )
                                    }
                                    value={props?.values?.othersData}
                                    name="othersData"
                                    className="fieldForm"
                                    placeholder="Please enter"
                                  />
                                </div>
                              ) : null}
                              {props?.errors?.othersData &&
                              props?.touched.othersData ? (
                                <div className="error-field">
                                  {props?.errors?.othersData}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              style={{ color: "black" }}
                              className="labelForm"
                            >
                              How can we help you?<sup>*</sup>
                            </label>
                            <textarea
                              className="fieldForm"
                              placeholder="Let us know your concern and we will get back to you ASAP"
                              onChange={(event) =>
                                props.setFieldValue(
                                  "description",
                                  event.target.value
                                )
                              }
                              name="description"
                              value={props.values.description}
                            />
                            {props?.errors?.description &&
                            props?.touched.description ? (
                              <div className="error-field">
                                {props?.errors?.description}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="text-center pt-4 mb-0">
                          <button
                            type="submit"
                            className="button button-fill button-sm"
                            disabled={!(props.isValid && props.dirty)}
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header className="justify-content-center" style={{ border: "none" }} closeButton>
                    <Modal.Title className="modal-title">
                      <p className="good-news">Your message is on its way to us.</p>
                      <p className="good-news" style={{ fontSize: '20px' }}>We will get back to you within two working days.</p>
                    </Modal.Title>
                  </Modal.Header>

                  {/* <Modal.Body className="pt-0 pb-0">
                    <p>
                      We will get back to you within two working days.
                    </p>
                  </Modal.Body> */}

                  <Modal.Footer className="pt-3 pb-3 contactModalFooter">
                    <button
                      className="button button-fill button-sm"
                      onClick={handleClose}
                    >
                      Okay
                    </button>
                  </Modal.Footer>
                </Modal>
              </div>

              <div className="contactRight">
                <div className="checkOut">
                  <h2>Also Check Out</h2>
                  <div className="checkBox">
                    <div className="checkBox-img">
                      <img src={sample_03} alt="#" />
                    </div>
                    <div className="checkBox-info">
                      <h3 className="text-center">Become A Seller</h3>
                      <p>
                        Forget the old rules. Join the largest network of
                        independent professionals. Find great work. Your terms,
                        Your time.
                      </p>
                    </div>
                    <a href={`${BASE_APP}/Sevahaat/registration`}>
                      REGISTER NOW
                    </a>
                  </div>
                  <div className="checkBox">
                    <div className="checkBox-img">
                      <img src={sample_04} alt="#" />
                    </div>
                    <div className="checkBox-info">
                      <h3 className="text-center">Meet the Dream Catchers</h3>
                      <p>
                        Who are brave enough to dream of a different future for
                        what is today referred to as, the developing world.
                      </p>
                    </div>
                    <Link to="/teams">THE TEAM</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pullUp"
              onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <b className="icon-arrow-right" />
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

export default ContactUs;
