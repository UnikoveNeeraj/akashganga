import "./index.scss";
import active_email from "../../../svg/active-email.svg";
import active_phone from "../../../svg/active-phone.svg";
import LightButton from "../../../components/common/Light_button";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { Link, useNavigate } from "react-router-dom";
import { FetchProfileDetails, UpdateProfile } from "../personalDetails/queries";
import { getProfileDetails } from "../../../store/apiCalls/profileDetails";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { profileIMG, splitName } from "../../../constants";
import SuccessModal from "../../../components/Modal/sucessModal";
import LeftArrow from "../../../svg/LeftArrow.svg"
import FormModal from "../../../components/Modal/formModal";
import EmojiModal from "../../../components/Modal/emojiModal";
import FeedbackFlow from "../Feedback";
import { isPublishable, unPublishToolTip } from "../../../utils";
import UpArrowQuestion from "../../../components/UpArrowQuestion/UpArrowQuestion";

const initialState = {showFeedbackModal: false, skipModal: false, congratsModal: false, referModal: false, congratsPreview: false };
const PreviewProfile = () => {
    const [showFeedbackModal, setShowFeedbackModal] = useState(initialState);
    const [PreviewProfile, setPreviewProfile] = useState({});
    const [profile, setProfile] = useState("");
    const [error, setError] = useState({ apiErrors: '' })
    const navigate = useNavigate();
    const { user, userLoginDetails } = useSelector(
        (state) => state?.LoginReducer
    );
    const [openFounderPopup, setOpenFounderPopup] = useState(false);
    const storedIMG = PreviewProfile?.profilePicture || "";

    useEffect(() => {
        setProfile(storedIMG);
    }, [storedIMG]);

    const handleFeedback = (e) => {
        e.preventDefault();
        setShowFeedbackModal({...initialState, showFeedbackModal: !PreviewProfile.feedbackDone, congratsModal: PreviewProfile.feedbackDone})
    }

    const sucessHandler = (sucess) => {
        const clonedProfile = JSON.parse(JSON.stringify(sucess.data.data));
        clonedProfile?.affiliation?.affiliations?.map(aff => {
            if(aff.url) {
                aff.verified = true;
            }
        })
        setPreviewProfile(clonedProfile || {});
        // setProfile(sucess?.data?.data?.profilePicture)
    };

    const fetchdata = async () => {
        const params = { id: user?._id };
        const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
        return getProfileDetails(headers, params);
    };

    const updedProfile = (_sucess) => {
        setOpenFounderPopup(true);
    };

    FetchProfileDetails(fetchdata, sucessHandler, setError, error);
    const { mutate: PublishProfile } = UpdateProfile(updedProfile, setError, error);

    const handlePublishProfile = () => {
        const formdata = JSON.parse(JSON.stringify(PreviewProfile));
        formdata.publishProfile = true;
        formdata.Education.qualification =
            PreviewProfile?.Education?.qualification?._id;
        formdata.Education.specialization =
            PreviewProfile?.Education?.specialization?.map((val) => val?._id);
        formdata.Education.subject = PreviewProfile?.Education?.subject?._id;

        formdata.subjectOfInterest = PreviewProfile?.subjectOfInterest?.map(
            (val) => {
                if (val?.interestedsubject) {
                    delete val._id;
                    return {
                        ...val,
                        interestedsubject: val?.interestedsubject?._id,
                        specialization: val?.specialization?.map((spec) => spec?._id),
                    };
                }
                return { ...val };
            }
        );
        formdata.affiliation = PreviewProfile?.affiliation;
        formdata.affiliation.affiliations = formdata.affiliation.affiliations.map(
            (val) => {
                delete val._id;
                return {
                    ...val,
                    specialization: val?.specialization?.map((sp) => sp._id),
                    order: Number(val?.order),
                    subject: val?.subject?._id || "",
                };
            }
        );
        formdata.profilePicture = ''
        // delete formdata?.profilePicture;.
        delete formdata?.emailVerified;
        delete formdata?.updated_at;
        delete formdata?.email;
        delete formdata?.created_at;
        delete formdata?.__v;
        delete formdata?._id;
        delete formdata?.Education?._id
        delete formdata?.isSetupProfile;
        delete formdata?.mobileVerified;
        delete formdata?.password;
        delete formdata?.policyCheck;
        delete formdata?.signupForUpdates;
        callUpdateApi({ isSetupProfile: true, publishProfile: true });
    };
    const callUpdateApi = (data) => {
        const headers = { Authorization: `Bearer ${userLoginDetails?.token}` };
        const queryParams = {
            params: { id: user?._id },
            data,
            headers,
        };
        PublishProfile(queryParams);
    };

    const handleSubmitConfermationModal = () => {
        setOpenFounderPopup(false);
    };
    const handleGoBack = () => {
        navigate(-1)
    }

    const renderHeading = (value) => {
        if (value?.order == 2) {
            return "Secondary Affiliation"
        }
        else if (value?.order == 3) {

            return "Tertiary Affiliation"
        }
        return "Primary Affiliation"

    }

    const isProfilePublishable =  PreviewProfile?.email ? isPublishable({...PreviewProfile, affiliations: PreviewProfile.affiliation?.affiliations, subjects: PreviewProfile?.Education, educationSection: PreviewProfile.Education}) : false;
    const handleFeedbackModalStat = async (data, refetchData = false) => {
        setShowFeedbackModal(data);
        if(refetchData) {
            const response = await fetchdata()
            if(response.status === 200) {
                const clonedProfile = JSON.parse(JSON.stringify(response.data.data));
                clonedProfile?.affiliation?.affiliations?.map(aff => {
                    if(aff.url) {
                        aff.verified = true;
                    }
                })
                setPreviewProfile({...clonedProfile, feedbackDone: refetchData})
            }
        }
    }

    return (
      <div className="preview-profile centerSection">
        {showFeedbackModal && (
          <FeedbackFlow
            handleModalClose={handleFeedbackModalStat}
            code={PreviewProfile.promoCode}
            modalStat={showFeedbackModal}
          />
        )}
        <div className="view-profile">
          <div className="container m-auto">
            <h1>Preview Profile</h1>
            <p className="m-0">
              Looking good, {splitName(PreviewProfile?.fullName || "")}! Take
              this moment to make any edits you want and publish your profile.
            </p>
            <p>You can always make more changes even after it is live.</p>
          </div>
        </div>
        <div className="my-5 mb-0">
          <div className="label-error text-center">{error?.apiErrors}</div>
          <div className="container m-auto profile-box mb-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="profile-upload">
                    {profile ? (
                      <img
                        src={PreviewProfile?.profilePicture}
                        alt="img not found"
                      />
                    ) : (
                      <i className="fa fa-camera"></i>
                    )}
                  </div>
                  <div className="text-start ms-3 d-flex align-items-center">
                    <span className="inputActive border-0 p-0">
                      <img
                        src={active_email}
                        alt="email"
                        className="me-2"
                        style={{ height: "13px" }}
                      />
                      {PreviewProfile?.email}
                    </span>
                    <span className="vr mx-3"></span>
                    {PreviewProfile.nationality !== "outSideIndia" && (
                      <span className="inputActive border-0 p-0">
                        <img src={active_phone} alt="phone" className="me-2" />
                        {PreviewProfile?.phoneNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-end">
                <div>
                  <LightButton
                    title="Cancel"
                    handleClick={() => {
                      navigate("/personaldetails");
                    }}
                  />

                  <Button
                    // handleClick={handlePublishProfile}
                    title="Publish Profile"
                    type="submit"
                    placement="auto"
                    toolTipMsg={isProfilePublishable ? "" : unPublishToolTip}
                    onClick={(e) => handleFeedback(e)}
                    disabled={!isProfilePublishable}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto py-4">
            <div className="text-start row">
              <div className="col-lg-12 mb-4">
                <h2 className="midHeading">Personal Details</h2>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-flex">
                  <div className="w-20 me-2">
                    <Input
                      label="Title"
                      name="title"
                      placeholder={PreviewProfile?.title}
                      labelClass="labelFont"
                      className="form-control grey-input border-0"
                    />
                  </div>
                  <div className="w-80">
                    <Input
                      name="fullName"
                      type="text"
                      label="Full Name"
                      placeholder={PreviewProfile?.fullName}
                      labelClass="labelFont"
                      className="form-control grey-input border-0"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <label className="labelFont">
                  Gender
                  <span className="badge-view ms-2">
                    <i>Private</i>
                  </span>
                </label>
                <Input
                  name="gender"
                  type="text"
                  label=""
                  placeholder={PreviewProfile?.gender}
                  required
                  labelClass="d-none"
                  className="form-control grey-input border-0"
                />
              </div>

              <div className="col-lg-12 mb-4">
                <h2 className="midHeading">Professional Details</h2>
                <div className="br mt-3"></div>
              </div>

              <div className="col-lg-6 mb-4">
                <p className="mb-2">Work Type</p>
                <Input
                  type="text"
                  placeholder={PreviewProfile?.workType}
                  className="form-control grey-input border-0"
                  label=""
                  labelClass="d-none"
                />
              </div>

              <div className="col-lg-12 mb-4">
                <div className="br"></div>
              </div>
              {PreviewProfile?.affiliation?.affiliations?.map((val, ind) => {
                if (val?.name && val?.url) {
                  return (
                    <div className="row" key={ind}>
                      <div className="col-lg-12">
                        <div className="col-lg-6 mb-4">
                          <p className="mb-2">
                            {
                              //  // eslint-disable-next-line
                              // val?.order == 1
                              //     ? "Primary Affiliation"
                              //     // eslint-disable-next-line
                              renderHeading(val)
                              // : val?.order == 2
                              //     ? "Secondary Affiliation"
                              //     : "Tertiary Affiliation"
                            }
                          </p>
                          {ind === 0 && (
                            <Input
                              type="text"
                              placeholder={
                                PreviewProfile?.affiliation?.affiliation_type
                              }
                              className="form-control grey-input border-0"
                              label=""
                              labelClass="d-none"
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.name}
                          className="form-control grey-input border-0"
                          label={`Name of ${PreviewProfile?.affiliation?.affiliation_type}`}
                          labelClass="labelFont"
                        />
                      </div>
                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.url}
                          className="form-control grey-input border-0"
                          label={`URL of ${PreviewProfile?.affiliation?.affiliation_type}`}
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.department || "APi Update needed"}
                          className="form-control grey-input border-0"
                          label={
                            PreviewProfile?.affiliation?.affiliation_type ===
                            "Company"
                              ? "Designation"
                              : "Affiliated Department"
                          }
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.subject?.subjectName}
                          className="form-control grey-input border-0"
                          label="Primary Subject"
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={
                            val?.specialization?.length === 0
                              ? ""
                              : val?.specialization.length > 1
                              ? val?.specialization[0].specialization +
                                " +" +
                                String(val?.specialization.length - 1)
                              : val?.specialization[0].specialization
                          }
                          className="form-control grey-input border-0"
                          label="Specialization"
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.state}
                          className="form-control grey-input border-0"
                          label="State"
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.city}
                          className="form-control grey-input border-0"
                          label="City"
                          labelClass="labelFont"
                        />
                      </div>

                      <div className="col-lg-6 mb-4">
                        <Input
                          type="text"
                          placeholder={val?.pincode !== 0 ? val?.pincode : ""}
                          className="form-control grey-input border-0"
                          label="Pin Code"
                          labelClass="labelFont"
                        />
                      </div>
                      {/* <hr /> */}
                    </div>
                  );
                }
                return null;
              })}

              <div className="col-lg-12 mb-4">
                <div className="br mt-2"></div>
              </div>

              <p className="preview-margin">Education</p>

              <div className="col-lg-6 mb-4">
                <Input
                  type="text"
                  placeholder={
                    PreviewProfile?.Education?.qualification?.qualification
                  }
                  className="form-control grey-input border-0"
                  label="Qualification"
                  labelClass="labelFont"
                />
              </div>

              <div className="col-lg-6 mb-4">
                <Input
                  type="text"
                  placeholder={PreviewProfile?.Education?.subject?.subjectName}
                  className="form-control grey-input border-0"
                  label="Subject"
                  labelClass="labelFont"
                />
              </div>

              <div className="col-lg-6 mb-4">
                <Input
                  type="text"
                  placeholder={
                    PreviewProfile?.Education?.specialization?.length === 0
                      ? ""
                      : PreviewProfile?.Education?.specialization?.length > 1
                      ? PreviewProfile?.Education?.specialization[0]
                          .specialization +
                        " +" +
                        String(
                          PreviewProfile?.Education?.specialization.length - 1
                        )
                      : PreviewProfile?.Education?.specialization[0]
                          .specialization
                  }
                  className="form-control grey-input border-0"
                  label="Specialization"
                  labelClass="labelFont"
                />
              </div>

              <div className="col-lg-12 mb-4">
                <div className="br mt-2"></div>
              </div>
              <p className="preview-margin">Subject of Interest</p>
              {PreviewProfile?.subjectOfInterest?.map((val, ind) => {
                return (
                  <div className="row" key={ind}>
                    <div className="col-lg-6 mb-4">
                      <Input
                        type="text"
                        placeholder={val?.interestedsubject?.subjectName}
                        className="form-control grey-input border-0"
                        label="Subject"
                        labelClass="labelFont"
                      />
                    </div>

                    <div className="col-lg-6 mb-4">
                      <Input
                        type="text"
                        placeholder={
                          val?.specialization?.length === 0
                            ? ""
                            : val?.specialization.length > 1
                            ? val?.specialization[0].specialization +
                              " +" +
                              String(val?.specialization.length - 1)
                            : val?.specialization[0].specialization
                        }
                        className="form-control grey-input border-0"
                        label="Specialization"
                        labelClass="labelFont"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: "40%" }}>
              <span className="pull-left pt-3">
                <Link to="#" onClick={handleGoBack} className="link">
                  <img src={LeftArrow} alt="not found" />
                </Link>
              </span>
              <Button
                title="Publish Profile"
                placement="auto"
                toolTipMsg={isProfilePublishable ? "" : unPublishToolTip}
                disabled={!isProfilePublishable}
                onClick={(e) => handleFeedback(e)}
              />
            </div>
          </div>
        </div>
        <UpArrowQuestion />
      </div>
    );
};

export default PreviewProfile;
