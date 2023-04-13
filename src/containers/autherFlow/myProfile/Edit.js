/*import "../../../assets/scss/base_app.scss";
import "../../../assets/scss/modules/_header_app.scss";
import "../../../assets/scss/modules/_menu_app.scss";
import "../../../assets/scss/sections/_profile_app.scss";*/

import { affiliationTitle, checkUrl, verifyMsg } from "../../../utils";
import StateJson from "../../../constants/States.json";
import Select from "../../../../src/components/common/Select";
import SearchDropdownProfile from "../../../components/SearchDropdown/SearchDropdownProfile";
import { useState } from "react";
import { useEffect } from "react";
import { titleOptionsNew } from "../../../constants";
import active_info from "../../../svg/active-info-blue.svg";
import ToolTip from "../../../components/common/ToolTip";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyUrl } from "../../../store/apiCalls/profileDetails";
import { countryOptions } from "../../../constants/Countries";

const EditProfile = ({
  profileDetails = {},
  masterData = {},
  onProfileEdit,
  nationality,
}) => {
  const dispatch = useDispatch();
  const [countryArray, setCountryArray] = useState([]);
  const [userDetails, setUserDetails] = useState(profileDetails);
  const [isurlValid, setIsUrlValid] = useState(false);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    setUserDetails({
      ...userDetails,
      affiliation: {
        ...profileDetails?.affiliation,
        affiliations:
          profileDetails?.affiliation?.affiliations?.map((aff) => ({
            ...aff,
            specialization: aff.specialization.map((spec) => spec?._id),
          })) ?? [],
      },
      Education: {
        ...profileDetails?.Education,
        specialization:
          profileDetails?.Education?.specialization?.map((spec) => spec?._id) ??
          [],
      },
      subjectOfInterest:
        profileDetails?.subjectOfInterest?.map((sub) => ({
          ...sub,
          specialization: sub?.specialization?.map((spec) => spec?._id),
        })) ?? [],
      profileDetails,
    });
  }, [profileDetails]);

  
  const { Education, fullName, gender, title, workType, affiliation, secondaryEmail } =
  userDetails;

  useEffect(() => {
    onProfileEdit?.(userDetails, secondaryEmail);
  }, [userDetails, secondaryEmail]);

  useEffect(() => {
    setIsUrlValid(true);
    const details = getClonedDetails();
    const affiliation = details?.affiliation?.affiliations;
    let urlArray = [];
    affiliation?.map((item) => {
      urlArray.push(item?.url);
    });
    setUrl(urlArray);
  }, []);

  const handleAffiliationSpecializationChange = (e, index) => {
    const { value, checked } = e.target;
    const details = getClonedDetails();
    const affiliation = details?.affiliation?.affiliations;

    if (checked) {
      affiliation[index].specialization = affiliation[
        index
      ].specialization.filter((spec) => spec !== value?.value);
      setUserDetails(details);
      return;
    }

    if (
      !affiliation[index].specialization ||
      affiliation[index].specialization.length >= 3
    ) {
      return;
    }

    affiliation[index].specialization.push(value.value);

    setUserDetails(details);
  };

  const handleEducationSpecializationChange = (e) => {
    const { value, checked } = e.target;
    const details = getClonedDetails();
    let Education = details?.Education;

    if (checked) {
      Education.specialization = Education?.specialization.filter(
        (spec) => spec !== value?.value
      );
      setUserDetails(details);
      return;
    }

    if (!Education?.specialization || Education?.specialization.length >= 3) {
      return;
    }

    Education?.specialization?.push(value.value);
    setUserDetails(details);
  };

  const handleSOISpecializationChange = (e, index) => {
    const { value, checked } = e.target;
    const details = getClonedDetails();
    const subjectOfInterest = details.subjectOfInterest;

    if (checked) {
      subjectOfInterest[index].specialization = subjectOfInterest[
        index
      ].specialization.filter((spec) => spec !== value?.value);
      setUserDetails(details);
      return;
    }

    if (
      !subjectOfInterest[index].specialization ||
      subjectOfInterest[index].specialization.length >= 3
    ) {
      return;
    }

    subjectOfInterest[index].specialization.push(value.value);
    setUserDetails(details);
  };

  const getSpecializationOptions = (data = [], id) => {
    const record = data.find((a) => a._id === id);
    return record
      ? record.specializationId.map((a) => ({
          label: a?.specialization,
          value: a?._id,
        }))
      : [];
  };

  const getOptions = (id) => {
    const details = getClonedDetails();
    const specOpt = getSpecializationOptions(masterData?.subjectdata, id);
    const valOpt = Array.isArray(details?.Education?.otherSpecialization)
      ? details?.Education?.otherSpecialization?.map((a) => ({
        label: a?.specialization,
        value: a?._id
      })) : [];
    return [...specOpt, ...valOpt];
  };

  const getSpecOptions = (val = {}) => {
    const interestedSubjectId = val?.interestedsubject?._id
      ? val?.interestedsubject?._id
      : val?.interestedsubject;
    const specOpt = getSpecializationOptions(
      masterData?.subjectdata,
      interestedSubjectId
    );
    const valOpt = Array.isArray(val?.otherSpecialization)
      ? val?.otherSpecialization?.map((a) => ({
        label: a?.specialization,
        value: a?._id
      })) : [];
    return [...specOpt, ...valOpt];
  };

  const getAffiliationSpecOptions = (aff = {}, index) => {
    const details = getClonedDetails();
    const affiliations = details?.affiliation?.affiliations;
    const specOpt = getSpecializationOptions(
      masterData?.subjectdata,
      aff?.subject
    );
    const valOpt = Array.isArray(affiliations[index]?.otherSpecialization) ? affiliations[index]?.otherSpecialization.map((a) => ({
      label: a?.specialization,
      value: a?._id
    })): [];
    return [...specOpt, ...valOpt];
  };

  const handleChange = (e) => {
    const { type, value, name, checked } = e.target;
    if (type === "radio") {
      setUserDetails({ ...userDetails, [name]: checked ? value : "" });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const getClonedDetails = () => {
    return structuredClone(userDetails);
  };

  const handleAffiliationChange = (e, index) => {
    const { name, value } = e.target;
    const details = getClonedDetails();
    if (name === "affiliation_type") {
      details.affiliation.affiliation_type = e.target.checked
        ? e.target.value
        : "";
      const updatedAffiliation = {
        ...details,
        affiliation: {
          ...details?.affiliation,
          affiliations:
            details?.affiliation?.affiliations?.map((aff) => ({
              ...aff,
              city: "",
              department: "",
              name: "",
              order: "",
              pincode: "",
              specialization: [],
              state: "",
              subject: "",
              url: "",
            })) ?? [],
        },
      };
      setUserDetails(updatedAffiliation);
    } else if (name === "subject") {
      const affiliations = details?.affiliation?.affiliations;
      if (affiliations) {
        affiliations[index] = {
          ...details?.affiliation?.affiliations[index],
          [name]: masterData?.subjectdata.find((sub) => sub?._id === value),
          specialization: [],
        };
      }
      setUserDetails(details);
    } else if (name === "url") {
      setIsUrlValid(false);
      const affiliation = details?.affiliation?.affiliations;
      const updateUrlSection = affiliation?.map((item, ind) => {
        if (ind === index && affiliation) {
          affiliation[index] = {
            ...details?.affiliation?.affiliations[index],
            [name]: value,
          };
          return { ...item, verified: false };
        }
        return item;
      });
      setUserDetails({ ...details, updateUrlSection });
    } else {
      const affiliations = details?.affiliation?.affiliations;
      if (affiliations) {
        affiliations[index] = {
          ...details?.affiliation?.affiliations[index],
          [name]: value,
        };
      }
      setUserDetails(details);
    }
  };

  const handleEducationChange = (e) => {
    const details = getClonedDetails();
    details.Education[e.target.name] = e.target.value;
    details.Education.specialization = [];
    setUserDetails(details);
  };

  const getAffiliationOtherOptions = (data = {}, index) => {
    const details = getClonedDetails();
    const cloneAffiliationSection = { ...details?.affiliation?.affiliations[index] };
    cloneAffiliationSection.otherSpecialization = cloneAffiliationSection.otherSpecialization ?? [];
    cloneAffiliationSection.otherSpecialization.push(data);
    cloneAffiliationSection.specialization?.push(data?._id);
    const updatedOtherSpecialization = {
      ...details,
      affiliation: {
        ...userDetails?.affiliation,
        affiliations: [cloneAffiliationSection]
      }
    };
    setUserDetails(updatedOtherSpecialization);
  }

  const getEducationOtherOptions = (data = {}) => {
    const details = getClonedDetails();
    const cloneEducationSection = { ...details?.Education };
    cloneEducationSection.otherSpecialization =
      cloneEducationSection.otherSpecialization ?? [];
    cloneEducationSection.otherSpecialization.push(data);
    cloneEducationSection.specialization?.push(data?._id);
    const updatedOtherSpecialization = {
      ...details,
      Education: cloneEducationSection,
    };
    setUserDetails(updatedOtherSpecialization);
  };

  const getSOIOtherOptions = (data = {}, index) => {
    const details = getClonedDetails();
    const cloneSOISection = { ...details?.subjectOfInterest[index] };
    cloneSOISection.otherSpecialization =
      cloneSOISection.otherSpecialization ?? [];
    cloneSOISection.otherSpecialization.push(data);
    cloneSOISection.specialization?.push(data?._id);
    const updatedOtherSpecialization = {
      ...details,
      subjectOfInterest:[cloneSOISection]
  }
    setUserDetails(updatedOtherSpecialization);
  };

  const handleSubjectInterestChange = (ind, id) => {
    const details = getClonedDetails();
    details.subjectOfInterest[ind] = {
      ...details.subjectOfInterest[ind],
      interestedsubject: id,
      specialization: [],
    };
    setUserDetails(details);
  };

  const addAnotherSoi = () => {
    const details = getClonedDetails();
    details.subjectOfInterest = [
      ...details.subjectOfInterest,
      {
        interestedsubject: "",
        specialization: [],
      },
    ];

    if (details.subjectOfInterest.length > 3) {
      return;
    }

    setUserDetails(details);
  };

  const addAnotherAffiliation = () => {
    const details = getClonedDetails();
    details.affiliation.affiliations = [
      ...details?.affiliation?.affiliations,
      {
        city: "",
        department: "",
        name: "",
        order: "",
        pinCode: "",
        specialization: [],
        state: "",
        subject: "",
        url: "",
      },
    ];

    if (details?.affiliation?.affiliations.length > 3) {
      return;
    }

    setUserDetails(details);
  };

  const handleSelectChange = (name, value) => {
    setUserDetails({ ...userDetails, [name]: value });
  };

  const verifiedURL = async (sucess) => {
    const details = getClonedDetails();
    const affiliation = details?.affiliation?.affiliations;
    const verifyUrlSection = affiliation.map((item, ind) => {
      if (ind === index) {
        return {
          ...item,
          error: "",
          url: affiliation[ind]?.url,
          verified: true,
        };
      }
      return item;
    });
    setUserDetails({ ...details, verifyUrlSection });
    setIsUrlValid(true);
  };

  const onIconClick = async (e, index) => {
    e.preventDefault();
    const details = getClonedDetails();
    const affiliation = details?.affiliation?.affiliations;
    if (e.target.innerText === "Edit") {
      setIsUrlValid(false);
    } else {
      const verified = checkUrl(affiliation[index]?.url);
      if (verified) {
        dispatch({ type: "SET_LOADER", payload: true });
        try {
          const response = await verifyUrl({ url: affiliation[index]?.url });
          if (response?.status === 200) {
            setIsUrlValid(true);
            const affiliations = affiliation.map((item, ind) => {
              if (ind === index) {
                return { ...item, affiliations, error: "" };
              }
            });
            dispatch({ type: "SET_LOADER", payload: false });
          }
        } catch (error) {
          const editUrl = affiliation.map((item, ind) => {
            if (ind === index) {
              return { ...item, error: error?.response?.data?.message };
            }
            return item;
          });
          dispatch({ type: "SET_LOADER", payload: false });
          setUserDetails({ ...details, editUrl });
        }
      } else {
        const editUrl = affiliation.map((item, ind) => {
          if (ind === index) {
            return { ...item, error: "Please add a valid url" };
          }
          return item;
        });
        setUserDetails({ ...details, editUrl });
      }
    }
  };

  const HandleCancleVerifying = (e, index) => {
    e.preventDefault();
    setIsUrlValid(true);
    const affiliations = userDetails?.affiliation?.affiliations;
    const cancelUrl = affiliations.map((item, ind) => {
      if (ind === index) {
        return { ...item, verified: true, error: "" };
      }
      return item;
    });
    const affiliationUrl = affiliations.map((item, ind) => {
      if (ind === index) {
        return { ...item, url: url[ind], error: "" };
      }
      return item;
    });
    const affiliation = {
      ...userDetails.affiliation,
      affiliations: affiliationUrl,
    };
    setUserDetails({ ...userDetails, cancelUrl, affiliation });
  };

  const removesubjectOfIntrestField = () => {
    const details = getClonedDetails();
    const subjectOfInterest = details?.subjectOfInterest;
    const removedSubject = subjectOfInterest.pop();
    setUserDetails({
      ...details,
      removedSubject,
    });
  };

  const removeAffiliationField = () => {
    const details = getClonedDetails();
    const affiliation = details?.affiliation?.affiliations;
    const removedAffiliation = affiliation.pop();
    setUserDetails({
      ...details,
      removedAffiliation,
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    return setCountryArray(countryOptions.map((val) => val?.key).sort());
  };

  return (
    <div className="editProfilePage">
      <h1 className="labelHeading pb-36">Personal Details</h1>
      <div className="boxCover noStyle pt-0">
        <div className="fieldSet border-0">
          <ul>
            <li>
              <div className="fieldName mb-3">
                <div className="fieldWrap">
                  <div className="selectBox selectTitle">
                    <Select
                      selectedValue={title}
                      options={titleOptionsNew?.map((val) => val?.key)}
                      optionValues={titleOptionsNew?.map((val) => val?.value)}
                      labelClass={""}
                      label="Title"
                      name="title"
                      placeholder="Title"
                      handleChange={(e) => handleSelectChange("title", e)}
                      required={true}
                      mandatory={true}
                    />
                  </div>
                </div>
                <div className="fieldWrap">
                  <label className="labelForm">Full Name <span className="option-badge mandatory-span badge">Mandatory</span></label>
                  <div>
                    <input
                      onChange={handleChange}
                      name="fullName"
                      value={fullName}
                      className="fieldForm"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="genderfield">
              <div className="fieldWrap mb-3">
                <label className="labelForm">
                  Gender <div class="supTag">Private</div>
                </label>
                <div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={gender === "Male"}
                      />{" "}
                      <span>Male</span>
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                      />{" "}
                      <span>Female</span>{" "}
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        value="Gender Fluid"
                        type="radio"
                        name="gender"
                        checked={gender === "Gender Fluid"}
                      />{" "}
                      <span>Gender Fluid</span>{" "}
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        value="Others"
                        type="radio"
                        name="gender"
                        checked={gender === "Others"}
                      />{" "}
                      <span>Others</span>{" "}
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap emailField mb-3">
                <label className="labelForm">
                  Secondary Email ID <div class="supTag">Optional</div>
                </label>
                <div className="fieldCover">
                  <b className="icon-email" />
                  <input
                    onChange={handleChange}
                    name="secondaryEmail"
                    className="fieldForm"
                    value={secondaryEmail}
                    type="email"
                    placeholder="Add Email ID"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="labelHeading">Professional Details</h2>
      <div className="boxCover noStyle pt-0">
        <div className="fieldSet">
          <h3 className="labelSubHeading mb-3">Work Type
            &nbsp;
            <span className="option-badge mandatory-span badge">Mandatory</span>
          </h3>
          <ul>
            <li className="fullWidth">
              <div className="fieldWrap">
                <div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="workType"
                        value="Academic"
                        checked={workType === "Academic"}
                      />{" "}
                      <span>Academic</span>{" "}
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="workType"
                        value="Medical & Health Sciences"
                        checked={workType === "Medical & Health Sciences"}
                      />{" "}
                      <span>Medical &amp; Health Sciences</span>
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="workType"
                        value="Researcher"
                        checked={workType === "Researcher"}
                      />{" "}
                      <span>Researcher</span>{" "}
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="workType"
                        value="Professional"
                        checked={workType === "Professional"}
                      />{" "}
                      <span>Professional</span>{" "}
                    </label>
                  </div>
                  <div className="d-inline mx-4 ms-0">
                    <label className="styledRadio">
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="workType"
                        value="Student"
                        checked={workType === "Student"}
                      />{" "}
                      <span>Student</span>{" "}
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="fieldSet">
          {affiliation?.affiliations?.map((aff, index) => {
            return (
              <>
                <h3 className="labelSubHeading mb-3">
                  {affiliationTitle[index + 1]}
                  &nbsp;
                  {
                    index === 0 ? (
                      <span className="option-badge mandatory-span badge">Mandatory</span>
                    ) : (
                      <span className="option-badge mandatory-span badge">Optional</span>
                    )
                  }
                  <small className="affilSmall">
                    You can add upto 3 affiliations
                  </small>
                </h3>

                {index < 1 && (
                  <div className="">
                    <div className="fieldWrap mb-3">
                      <div className="fieldWrap">
                        <div>
                          <div className="d-inline mx-4 ms-0">
                            <label className="styledRadio">
                              <input
                                onClick={(e) => handleAffiliationChange(e)}
                                value="University"
                                type="radio"
                                name="affiliation_type"
                                checked={
                                  affiliation.affiliation_type === "University"
                                }
                              />
                              <span>University</span>{" "}
                            </label>
                          </div>
                          <div className="d-inline mx-4 ms-0">
                            <label className="styledRadio">
                              <input
                                onChange={(e) => handleAffiliationChange(e)}
                                value="Institute"
                                type="radio"
                                name="affiliation_type"
                                checked={
                                  affiliation.affiliation_type === "Institute"
                                }
                              />{" "}
                              <span>Institute</span>{" "}
                            </label>
                          </div>
                          <div className="d-inline mx-4 ms-0">
                            <label className="styledRadio">
                              <input
                                onChange={(e) => handleAffiliationChange(e)}
                                value="Company"
                                type="radio"
                                name="affiliation_type"
                                checked={
                                  affiliation.affiliation_type === "Company"
                                }
                              />{" "}
                              <span>Company</span>{" "}
                            </label>
                          </div>
                          <div className="d-inline mx-4 ms-0">
                            <label className="styledRadio">
                              <input
                                onChange={(e) => handleAffiliationChange(e)}
                                value="Hospital"
                                type="radio"
                                name="affiliation_type"
                                checked={
                                  affiliation.affiliation_type === "Hospital"
                                }
                              />{" "}
                              <span>Hospital</span>{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <ul>
                  <li className="aff-name-align">
                    <div className="fieldWrap mb-3">
                      {index === 0 ? (
                        affiliation?.affiliation_type === "Hospital" ? (
                          <label className="labelForm">
                            Name of Hospital
                            <small className="input-required">*</small>
                          </label>
                        ) : affiliation?.affiliation_type === "Institute" ? (
                          <label className="labelForm">Name of Institute <small className="input-required">*</small></label>
                        ) : affiliation?.affiliation_type === "Company" ? (
                          <label className="labelForm">Name of Company <small className="input-required">*</small></label>
                        ) : (
                          <label className="labelForm">Name of University <small className="input-required">*</small></label>
                        )
                      ) : (
                        index >= 1 && (
                          <label className="labelForm">
                            Name of University/School/Company
                          </label>
                        )
                      )}
                      <div>
                        <input
                          className="fieldForm"
                          type="text"
                          value={aff.name}
                          name="name"
                          onChange={(e) => handleAffiliationChange(e, index)}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="fieldWrap mb-3">
                      {index === 0 ? (
                        affiliation?.affiliation_type === "Hospital" ? (
                          <label className="labelForm">URL of Hospital <small className="input-required">*</small></label>
                        ) : affiliation?.affiliation_type === "Institute" ? (
                          <label className="labelForm">URL of Institute <small className="input-required">*</small></label>
                        ) : affiliation?.affiliation_type === "Company" ? (
                          <label className="labelForm">URL of Company <small className="input-required">*</small></label>
                        ) : (
                          <label className="labelForm">URL of University <small className="input-required">*</small></label>
                        )
                      ) : (
                        index >= 1 && (
                          <label className="labelForm">
                            URL of University/Institute/Others
                          </label>
                        )
                      )}
                      <div className="custom_input">
                        <div
                          className={
                            isurlValid ? "verifyIuuse " : "verifyIuuse active"
                          }
                        >
                          <div className="verifyInput">
                            <input
                              className="fieldForm"
                              type="url"
                              value={aff.url}
                              name="url"
                              onChange={(e) =>
                                handleAffiliationChange(e, index)
                              }
                            />
                            <div
                              className="input_post link"
                              dangerouslySetInnerHTML={{
                                __html: !isurlValid
                                  ? `<span class='verifiyLink'><a href='#'>Verify</a> </span>`
                                  : `<span class='verifiyLink activeCheck'><a href='#'>Edit</a> </span>`,
                              }}
                              onClick={(e) => onIconClick(e, index)}
                            />
                          {!isurlValid && (
                            <ToolTip
                              classNameTooltip="personaldetails-tooltip"
                              toolTipMessage={verifyMsg()}
                            >
                              <img
                                className="inner-link pe-cursor ps-1"
                                src={active_info}
                                alt="no img"
                              />
                            </ToolTip>
                          )}
                          </div>
                          {!isurlValid && (
                            <Link
                              to="#"
                              onClick={(e) => HandleCancleVerifying(e, index)}
                              className="link text-muted outer-link"
                            >
                              Cancel
                            </Link>
                          )}
                        </div>

                        {!isurlValid && (
                          <div className="label-error">
                            {userDetails?.editUrl?.[index]?.error}
                          </div>
                        )}

                        <p className="label m-0 text-start doNot verifyText">
                          Example: https://www.example.com
                          <span className="float-end">
                            Do not have a url?{" "}
                            <Link
                              to="#"
                              className="link-admin"
                              onClick={(e) => {
                                window.location.href =
                                  "mailto:contactus@vikramshilaedu.in";
                              }}
                            >
                              Contact Admin
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="fieldWrap mb-3">
                      {affiliation?.affiliation_type === "University" ||
                      affiliation?.affiliation_type === "Institute" ||
                      affiliation?.affiliation_type === "Hospital" ? (
                        <label className="labelForm">
                          Affiliated Department
                        </label>
                      ) : (
                        <label className="labelForm">Designation <small className="input-required">*</small></label>
                      )}
                      <div>
                        <input
                          className="fieldForm"
                          type="text"
                          value={aff.department}
                          name="department"
                          onChange={(e) => handleAffiliationChange(e, index)}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="primarySubjectList">
                    <div className="fieldWrap mb-3">
                      <div className="selectBox">
                        <Select
                          options={
                            masterData?.subjectdata?.map(
                              (a) => a?.subjectName
                            ) ?? []
                          }
                          optionValues={
                            masterData?.subjectdata?.map((a) => a._id) ?? []
                          }
                          name="subject"
                          placeholder="Primary Subject"
                          handleChange={(value) =>
                            handleAffiliationChange(
                              { target: { value: value, name: "subject" } },
                              index
                            )
                          }
                          selectedValue={aff?.subject?._id}
                          labelClass={aff?.subject ? "" : "hidden"}
                          label="Primary Subject"
                          mandatoryAsterisk={true}
                          // disabled={isurlValid ? false : true}
                          //   required={
                          //      isProfessional &&
                          //     (isRequired(workSectionValues?.subject) ||
                          //       isurlValid)
                          //   }
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="fieldWrap mb-3">
                      <div className="selectBox">
                        <SearchDropdownProfile
                          options={getAffiliationSpecOptions(
                            aff?.subject?._id
                              ? { subject: aff?.subject?._id }
                              : aff
                          ,index)}
                          index={index}
                          handleOtherOption={(data) =>
                            getAffiliationOtherOptions(data, index)
                          }
                          onChange={(e) =>
                            handleAffiliationSpecializationChange(e, index)
                          }
                          selectedValue={aff?.specialization}
                          labelClass={
                            aff?.specialization.length !== 0 ? "" : "hidden"
                          }
                          name="specialization"
                          placeholder={"Specilization"}
                          label="Specialization (include upto 3)"
                          disabled={!aff?.subject}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="fieldWrap mb-3">
                      <div className="selectBox">
                        {nationality === "outSideIndia" ? (
                          <Select
                            options={countryArray}
                            optionValues={countryArray}
                            name="state"
                            selectedValue={aff?.state}
                            labelClass={aff?.state ? "" : "hidden"}
                            label="Country"
                            handleChange={(value) =>
                              handleAffiliationChange(
                                { target: { value, name: "state" } },
                                index
                              )
                            }
                            placeholder="Select Country"
                            mandatoryAsterisk={true}
                          />
                        ) : (
                          <Select
                            options={Object.keys(StateJson)?.sort()}
                            name="state"
                            selectedValue={aff?.state}
                            labelClass={aff?.state ? "" : "hidden"}
                            label="State"
                            handleChange={(value) =>
                              handleAffiliationChange(
                                { target: { value, name: "state" } },
                                index
                              )
                            }
                            placeholder="Select State"
                            mandatoryAsterisk={true}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="selectBox">
                    <div className="fieldWrap mb-3">
                      {nationality === "outSideIndia" ? (
                        <div>
                          <label className="labelForm">City <small className="input-required">*</small></label>
                          <input
                            className="fieldForm"
                            type="text"
                            value={aff.city}
                            name="city"
                            onChange={(e) => handleAffiliationChange(e, index)}
                          />
                        </div>
                      ) : (
                        <Select
                          options={StateJson?.[aff?.state]?.sort()}
                          placeholder="Select City"
                          name="city"
                          selectedValue={aff?.city}
                          handleChange={(value) =>
                            handleAffiliationChange(
                              { target: { value, name: "city" } },
                              index
                            )
                          }
                          label="City"
                          labelClass={aff?.city ? "" : "hidden"}
                        />
                      )}
                    </div>
                    </div>
                  </li>
                  <li className="pinCode">
                    <div className="fieldWrap mb-3">
                      <label className="labelForm">Pin Code <small className="input-required">*</small></label>
                      <div>
                        <input
                          className="fieldForm"
                          type="number"
                          value={aff.pincode}
                          name="pincode"
                          onChange={(e) => handleAffiliationChange(e, index)}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </>
            );
          })}
          <div className="grp-add-remove">
            {affiliation?.affiliations?.length <= 2 ? (
              <div className="fieldMore pt-0">
                <a onClick={() => addAnotherAffiliation()}>+ Add Another Affiliation</a>
              </div>
            ) : null}
            {affiliation?.affiliations?.length > 1 ? (
              <Link to="#" onClick={removeAffiliationField} className="link removeLinlk">
                - Remove
              </Link>
            ) : null}
          </div>
        </div>

        <div className="fieldSet">
          <h3 className="labelSubHeading mb-3">
            Education{" "}
            <span className="option-badge mandatory-span badge">Mandatory</span>
            <br />
            <small className="affilSmall">
              (Highest degree earned)
            </small>
            {/* <small className="highestText">Highest degree earned</small> */}
          </h3>
          <ul>
            <li>
              <div className="fieldWrap mb-3">
                <div className="selectBox">
                  <Select
                    options={masterData?.qualificationdata?.map(
                      (val) => val.qualification
                    )}
                    optionValues={masterData?.qualificationdata?.map(
                      (val) => val._id
                    )}
                    name="qualification"
                    placeholder="Qualification"
                    handleChange={(value) =>
                      handleEducationChange({
                        target: { name: "qualification", value },
                      })
                    }
                    selectedValue={
                      Education?.qualification?._id || Education?.qualification
                    }
                    labelClass={Education?.qualification ? "" : "hidden"}
                    label="Qualification"
                    mandatoryAsterisk={true}
                    // required={activeTab === "professional"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap mb-3">
                <div className="selectBox">
                  <Select
                    options={masterData?.subjectdata?.map(
                      (val) => val.subjectName
                    )}
                    optionValues={masterData?.subjectdata?.map(
                      (val) => val._id
                    )}
                    name="subject"
                    placeholder="Subject"
                    handleChange={(value) =>
                      handleEducationChange({
                        target: { name: "subject", value },
                      })
                    }
                    selectedValue={
                      Education?.subject?._id || Education?.subject
                    }
                    labelClass={Education?.subject ? "" : "hidden"}
                    label="Subject Stream"
                    mandatoryAsterisk={true}
                    // required={activeTab === "professional"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap mb-3">
                <div className="selectBox">
                  <SearchDropdownProfile
                    options={getOptions(
                      Education?.subject?._id
                        ? Education?.subject?._id
                        : Education?.subject
                    )}
                    handleOtherOption={getEducationOtherOptions}
                    index={"Education"}
                    onChange={(e) => handleEducationSpecializationChange(e)}
                    selectedValue={Education?.specialization}
                    labelClass={
                      Education?.specialization?.length !== 0 ? "" : "hidden"
                    }
                    disabled={!Education?.subject}
                    name="specialization"
                    placeholder={"Specilization"}
                    label="Specialization (include upto 3)"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="fieldSet">
          <h3 className="labelSubHeading subject">Subject of Interest</h3>
            <small className="affilSmall">
              You can add upto 3
            </small>
          <ul>
            {userDetails?.subjectOfInterest?.map((interest, ind) => {
              return (
                <>
                  <li key={interest?.interestedsubject}>
                    <div className="fieldWrap mb-3">
                      <div className="selectBox">
                        <Select
                          options={masterData?.subjectdata?.map(
                            (val) => val.subjectName
                          )}
                          optionValues={masterData?.subjectdata?.map(
                            (val) => val._id
                          )}
                          name="interestedsubject"
                          placeholder="Subject"
                          handleChange={(value) =>
                            handleSubjectInterestChange(ind, value)
                          }
                          selectedValue={
                            interest?.interestedsubject?._id ||
                            interest?.interestedsubject
                          }
                          labelClass={
                            interest?.interestedsubject ? "" : "hidden"
                          }
                          label="Subject"
                          // required={activeTab === "professional"?true:false}
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="fieldWrap mb-3">
                      <div className="selectBox">
                        <SearchDropdownProfile
                          options={getSpecOptions(interest)}
                          handleOtherOption={(data) =>
                            getSOIOtherOptions(data, ind)
                          }
                          disabled={!interest?.interestedsubject}
                          index={ind}
                          onChange={(e) =>
                            handleSOISpecializationChange(e, ind)
                          }
                          selectedValue={interest?.specialization}
                          labelClass={
                            interest?.specialization?.length !== 0
                              ? ""
                              : "hidden"
                          }
                          name="specialization"
                          placeholder={"Specilization"}
                          label="Specialization (include upto 3)"
                        />
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="grp-add-remove">
            {userDetails?.subjectOfInterest?.length <= 2 ? (
              <div className="fieldMore pt-0">
                <a onClick={addAnotherSoi}>+ Add Another</a>
              </div>
            ) : null}
            {userDetails?.subjectOfInterest?.length > 1 ? (
              <Link
                to="#"
                onClick={removesubjectOfIntrestField}
                className="link removeLinlk"
              >
                - Remove Subject
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      </div>
  );
};

export default EditProfile;
