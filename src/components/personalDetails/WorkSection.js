import PropTypes from "prop-types";
import Input from "../common/Input";
import RadioButton from "../common/Radio_button";
import Select from "../common/Select";
import disable_link from "../../svg/disable_link.svg";
import active_link from "../../svg/active_link.svg";
import active_check from "../../svg/verifiedCheck.svg";
import active_info from "../../svg/active-info.svg";
import { Link } from "react-router-dom";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { GetUrlverified } from "../../containers/autherFlow/personalDetails/queries";
import { checkUrl, getSpecializationOptions, tooltipMsg, verifyMsg } from "../../utils";
import { useEffect, useState } from "react";
import ToolTip from "../common/ToolTip";
import { countryOptions } from "../../constants/Countries";

function WorkSection(props) {
  const {
    val,
    ind,
    handleChange,
    StateJson,
    activeTab,
    heading,
    Sectionindex,
    otherSpecialization = [],
    workSectionValues,
    masterData,
    specializationsData,
    setWorkSection,
    workSection,
    profileDetails,
    errorObj = {}
  } = props;
  const [countryArray, setCountryArray] = useState([]);
  const [isurlValid, setIsUrlValid] = useState(workSectionValues?.URL ?? false);
  const [url, setUrl] = useState(workSectionValues?.URL);
  const verifiedURl = async (sucess) => {
    const cloneWorkSection = [...workSection];
    const verifyUrlpdateWorkSection = cloneWorkSection.map((item, index) => {
      if (ind === index) {
        return { ...item, error: "", URL: url, verified: true };
      }
      return item;
    });
    setWorkSection(verifyUrlpdateWorkSection);
    setIsUrlValid(true);
    props.setValidationError(ind);
  };
  
  const { mutate: verifyURL } = GetUrlverified(
    verifiedURl,
    setWorkSection,
    workSection,
    ind
  );
  useEffect(() => {
    setUrl(workSectionValues?.URL)
    setIsUrlValid(!workSectionValues?.URL ? false : true)
  }, [workSectionValues?.URL])
  
  const onIconClick = (e) => {
    if (e.target.innerText === "Edit") {
      setIsUrlValid(false);
    } else {
      const verified = checkUrl(url);
      if (verified) {
        verifyURL({ url: url });
      } else {
        const cloneWorkSection = [...workSection];
        const updateWorkSection = cloneWorkSection.map((item, index) => {
          if (ind === index) {
            return { ...item, error: "Please add a valid url" };
          }
          return item;
        });
        setWorkSection(updateWorkSection);
      }
    }
  };

  const handleSelectValue = (value, Sectionindex, name) => {
    props.handleSelectChange(value, Sectionindex, name)
  }

  const handleUrlChange = (e, ind) => {
    setIsUrlValid(false);
    if(workSectionValues.verified) {
      const cloneWorkSection = [...workSection];
      const updateWorkSection = cloneWorkSection.map((item, index) => {
        if (ind === index) {
          return { ...item, verified: false };
        }
        return item;
      });
      setWorkSection(updateWorkSection)
    }
    setUrl(e.target.value);
  };

  const HandleCancleVerifying = () => {
    setIsUrlValid(true)
    setUrl(workSectionValues?.URL)
    const cloneWorkSection = [...workSection];
        const updateWorkSection = cloneWorkSection.map((item, index) => {
          if (ind === index) {
            return { ...item, verified: true, error: "" };
          }
          return item;
        });
    setWorkSection(updateWorkSection)
  }
  
  const isProfessional = activeTab === 'professional';
  const isRequired = (value = "") =>   {
    return ((Sectionindex === 0) || (workSectionValues?.url || workSectionValues?.universitySchoolCompany)) ? true : false;
  }

  const getSpecOptions = () => {
    const specOptions = getSpecializationOptions(masterData?.MasterData?.subjectdata, workSectionValues?.subject)
    return [...specOptions, ...otherSpecialization.map(a => a.specialization)];
  }

  const getClasses = (classes = "", name = '') => {
    return errorObj[name] ? `errored ${classes}` : classes;
  }

  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = () => {
    return setCountryArray(countryOptions.map((val) => val?.key).sort())
  }

  return (
    <>
    <div className="dividerBox  row">
      <div className="col-pd col-6">
        <p className="mb-1">
          {heading === "Primary Affiliation" ? <> {heading} <span className="option-badge mandatory-span badge">Mandatory</span></> : <> {heading} <span className="option-badge badge">Optional</span></>}
        </p>
        {heading === "Secondary Affiliation" && <p className="secondaryAff-subtext">Add more affiliations to build a robust profile</p>}
      </div>
      <div className="col-6 text-right">
        {
          heading !== "Primary Affiliation" ? (
            <Link style={{justifyContent: 'right'}} onClick={(e) => {e.preventDefault(); props.removeField(Sectionindex)}}>
              - Remove Affiliation
            </Link>
          ) : null
        }
      </div>
      <div className="col-pd row col-lg-11">
        {workSectionValues.heading === "Primary Affiliation" && (
          <div className="col-lg-8 mb-4">
            <div className={getClasses("d-flex gender_row", 'affiliationType')}>
              <RadioButton
                label="University"
                name="affiliationType"
                id="University"
                checked={workSectionValues.affiliationType === "University"}
                handleChange={(e) => handleChange(e, Sectionindex)}
                required={isProfessional}
              />
              <RadioButton
                label="Institute"
                name="affiliationType"
                id="Institute"
                checked={workSectionValues.affiliationType === "Institute"}
                handleChange={(e) => handleChange(e, Sectionindex)}
                required={isProfessional}
              />
              <RadioButton
                label="Company"
                name="affiliationType"
                id="Company"
                checked={workSectionValues.affiliationType === "Company"}
                handleChange={(e) => handleChange(e, Sectionindex)}
                required={isProfessional}
              />
              <RadioButton
                label="Hospital"
                name="affiliationType"
                id="Hospital"
                checked={workSectionValues.affiliationType === "Hospital"}
                handleChange={(e) => handleChange(e, Sectionindex)}
                required={isProfessional}
              />
            </div>
          </div>
        )}
        {((Sectionindex === 0 && workSectionValues.affiliationType) ||
          Sectionindex !== 0) && (
            <>
            <div className="dividerInput row sdsd">
              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", 'universitySchoolCompany')}>
                  <Input
                    className={
                      workSectionValues?.universitySchoolCompany
                        ? "form-control active-input"
                        : "form-control grey-input"
                    }
                    labelClass={
                      workSectionValues?.universitySchoolCompany ? "" : "hidden"
                    }
                    label={
                      !workSectionValues.affiliationType
                        ? "Name of University/institute/company/hospital*" 
                        : "Name of " + workSectionValues.affiliationType + "*"
                    }
                    placeholder={
                      !workSectionValues.affiliationType
                        ? "Name of University/institute/company/hospital*"
                        : "Name of " + workSectionValues.affiliationType + "*"
                    }
                    name="universitySchoolCompany"
                    type="text"
                    value={workSectionValues?.universitySchoolCompany}
                    handleChange={(e) => handleChange(e, Sectionindex)}
                    required={isProfessional && isRequired(workSectionValues?.universitySchoolCompany)}
                  />
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className={(workSectionValues?.error) ? getClasses("form-group mb-4 position-relative verify-link op", 'url') : getClasses("form-group mb-4 position-relative verify-link", 'url')}>
                  <Input
                    type="text"
                    errors={workSectionValues?.error}
                    className={
                      url
                        ? "form-control active-input with_icon"
                        : "form-control grey-input with_icon"
                    }
                    placeholder={
                      !workSectionValues.affiliationType
                        ? "URL of university/company/others*"
                        : "URL of " + workSectionValues.affiliationType + "*"
                    }
                    name="URL"
                    handleChange={(e) => handleUrlChange(e, Sectionindex)}
                    label={
                      !workSectionValues.affiliationType
                        ? "URL of university/company/others*"
                        : "URL of " + workSectionValues.affiliationType + "*"
                    }
                    value={url}
                    labelClass={url ? "" : "hidden"}
                    postIconClass={val.verified ? active_check : null}
                    preIconClass={url ? active_link : disable_link}
                    postTextClass={!isurlValid ? `<span style='padding: 0 18px;'><Link to='#' >Verify</Link> </span>` : `<span style='padding: 0px 25px 0px 0px;'><Link to='#' >EDIT</Link> </span>`}
                    onIconClick={onIconClick}
                    // readOnly={isurlValid}
                    required={isProfessional && isRequired(url)}
                  />
                  {!isurlValid &&<ToolTip  classNameTooltip='personaldetails-tooltip' toolTipMessage={verifyMsg()}><img className="inner-link pe-cursor ps-1" src={active_info} alt='no img' /></ToolTip>}
                  {!isurlValid &&
                    <Link to="#" onClick={HandleCancleVerifying} className="link text-muted outer-link">Cancel</Link>
                  }
                  <p className="label m-0 text-start doNot">Example: https://www.example.com<span className="float-end">Do not have a url?{" "}
                    <Link
                      to="#"
                      className="link-admin"
                      onClick={(e) => {
                        window.location.href = "mailto:contactus@vikramshilaedu.in";
                      }}
                    >
                      Contact Admin
                    </Link></span></p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", "affiliatedDepartment")}>
                  <Input
                    className={
                      workSectionValues?.affiliatedDepartment
                        ? "form-control active-input"
                        : "form-control grey-input"
                    }
                    labelClass={
                      workSectionValues?.affiliatedDepartment ? "" : "hidden"
                    }
                    label={workSectionValues.affiliationType === 'Company' ? 'Designation*' : 'Affiliated Department*'}
                    // placeholder="Affiliated Department"
                    placeholder={workSectionValues.affiliationType === 'Company' ? 'Designation*' : 'Affiliated Department*'}
                    name="affiliatedDepartment"
                    type="text"
                    value={workSectionValues?.affiliatedDepartment}
                    handleChange={(e) => handleChange(e, Sectionindex)}
                    required={isProfessional && (isRequired(workSectionValues?.affiliatedDepartment) || isurlValid)}
                    readOnly={!isurlValid}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", "subject")}>
                  <Select
                    options={masterData?.MasterData?.subjectdata?.map(
                      (val) => val.subjectName
                    )}
                    name="subject"
                    placeholder="Primary Subject*"
                    handleChange={(value) => handleSelectValue(value, Sectionindex, 'subject')}
                    selectedValue={workSectionValues?.subject}
                    labelClass={workSectionValues?.subject ? "" : "hidden"}
                    label="Primary Subject*"
                    disabled={isurlValid ? false : true}
                    required={isProfessional && (isRequired(workSectionValues?.subject) || isurlValid)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="selectBox">
                <div className={getClasses("form-group mb-4 position-relative", "specialization")}>
                  <SearchDropdown
                    options={getSpecOptions(ind)}
                    handleOtherOption={(data) => props.handleOthers(data, ind)}
                    disabled={!isurlValid}
                    index={ind}
                    onChange={handleChange}
                    selectedValue={workSectionValues?.specialization}
                    labelClass={
                      workSectionValues?.specialization.length !== 0
                        ? ""
                        : "hidden"
                    }
                    name="specialization"
                    placeholder={
                      val?.specialization.length === 0
                        ? "Specialization*"
                        : val?.specialization.length > 1
                          ? val?.specialization[0] +
                          " +" +
                          String(val?.specialization.length - 1)
                          : val?.specialization[0]
                    }
                    label="Specialization (include upto 3)"
                    required={isProfessional && isRequired()}
                  />
                </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", "state")}>
                  {
                    profileDetails?.nationality === "outSideIndia" ? (  
                      <Select
                        options={countryArray}
                        optionValues={countryArray}
                        name="state"
                        selectedValue={workSectionValues?.state}
                        labelClass={workSectionValues?.state ? "" : "hidden"}
                        label="Country*"
                        handleChange={(value) => {
                          handleSelectValue(value, Sectionindex, 'state'),
                          getCountries
                        }}
                        required={isProfessional && (isRequired() || isurlValid)}
                        placeholder="Select Country*"
                        disabled={isurlValid ? false : true}
                      />
                    ) : (
                      <Select
                        options={Object.keys(StateJson)?.sort()}
                        name="state"
                        selectedValue={workSectionValues?.state}
                        labelClass={workSectionValues?.state ? "" : "hidden"}
                        label="State*"
                        handleChange={(value) => handleSelectValue(value, Sectionindex, 'state')}
                        required={isProfessional && (isRequired() || isurlValid)}
                        placeholder="Select State*"
                        disabled={isurlValid ? false : true}
                      />
                    )
                  }
                </div>
              </div>

              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", "city")}>
                  {
                    profileDetails?.nationality === "outSideIndia" ? (
                      <Input
                        className={
                          workSectionValues?.city
                            ? "form-control active-input"
                            : "form-control grey-input"
                        }
                        labelClass={workSectionValues?.city ? "" : "hidden"}
                        label="City*"
                        placeholder="City*"
                        name="city"
                        type="text"
                        value={workSectionValues?.city}
                        handleChange={(e) => handleChange(e, Sectionindex)}
                        required={isProfessional && (isRequired() || isurlValid)}
                        readOnly={!isurlValid}
                      />
                    ) : (
                      <Select
                        options={StateJson?.[workSectionValues?.state]?.sort()}
                        disabled={
                          (workSectionValues?.state ? false : true) && !isurlValid
                        }
                        placeholder="Select City*"
                        name="city"
                        selectedValue={workSectionValues?.city}
                        handleChange={(value) => handleSelectValue(value, Sectionindex, 'city')}
                        label="City*"
                        labelClass={workSectionValues?.city ? "" : "hidden"}
                        required={isProfessional && (isRequired() || isurlValid)}
                      />
                    )
                  }
                </div>
              </div>

              <div className="col-lg-6">
                <div className={getClasses("form-group mb-4", "pincode")}>
                  <Input
                    className={
                      workSectionValues?.pincode
                        ? "form-control active-input"
                        : "form-control grey-input"
                    }
                    labelClass={workSectionValues?.pincode ? "" : "hidden"}
                    label="Pin Code*"
                    placeholder="Pin Code*"
                    name="pincode"
                    type="pin"
                    value={workSectionValues?.pincode}
                    handleChange={(e) => handleChange(e, Sectionindex)}
                    required={isProfessional && (isRequired() || isurlValid)}
                    readOnly={!isurlValid}
                  />
                </div>
              </div>
              </div>
            </>
          )}
      </div>
      </div>
    </>
  );
}
WorkSection.propTypes = {
  profileDetails: PropTypes.shape({
    pincode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    city: PropTypes.string,
    universitySchoolCompany: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  StateJson: PropTypes.object,
  activeTab: PropTypes.string,
  heading: PropTypes.string,
  workSectionValues: PropTypes.object,
  masterData: PropTypes.object,
  };

WorkSection.defaultProps = {
  handleChange: () => null,
  profileDetails: {},
  StateJson: {},
  activeTab: "",
  heading: "",
  workSectionValues: {},
  masterData: {},
};

export default WorkSection;
