import React from "react";
import Select from "../common/Select";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { getSpecializationOptions } from "../../utils";

const SubjectOfIntrestSection = ({
  subjectOfIntrestSection,
  masterData,
  handleSubjectOfIntrestChange,
  handleSelectChange = () => {},
  activeTab,
  errorObj = {},
  handleOthers = () => {}
}) => {
  const handleSubjectSelectChange = (value, sectionId, type) => {
    handleSelectChange(value, type, sectionId)
  }

  const getClasses = () => {
    return "form-group mb-4";
  }
  
  const getSpecOptions = (val = {}) => {
    const specOpt = getSpecializationOptions(masterData?.MasterData?.subjectdata, val?.subject)
    console.log(subjectOfIntrestSection)
    const valOpt = Array.isArray(val.otherSpecialization) ? val.otherSpecialization.map(a => a.specialization) : [];
    return [...specOpt, ...valOpt];
  }

  return (
    <div className="col-lg-11 col-pd">
    <div className="row">
      <p>Subject of Interest</p>
      <p className="txtSmall mb-36">You can add upto 3</p>
      {subjectOfIntrestSection.map((val, ind) => {
        return (
          <div key={ind} className='row'>
            <div className="col-lg-6">
              <div className={getClasses()}>
                <Select
                  options={masterData?.MasterData?.subjectdata?.map(
                    (val) => val.subjectName
                  )}
                  name="interestedsubject"
                  placeholder="Subject"
                  handleChange={(value) => handleSubjectSelectChange(value, ind, "interestedsubject")}
                  selectedValue={val?.subject}
                  labelClass={val?.subject ? "" : "hidden"}
                  label="Subject"
                  required={activeTab === "professional"?true:false}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={getClasses()}>
                <div className="position-relative">
                  <SearchDropdown
                    options={getSpecOptions(val)}
                    disabled={!val?.subject}
                    index={ind}
                    keyName="subject"
                    onChange={(e) => handleSubjectOfIntrestChange(e, ind)}
                    selectedValue={val?.specialization}
                    labelClass={
                      val?.specialization.length !== 0 ? "" : "hidden"
                    }
                    handleOtherOption={(data) => handleOthers(data, ind) }
                    name="Interested Specialization"
                    placeholder={
                      val?.specialization?.length === 0
                        ? "Specialization"
                        : val?.specialization.length > 1
                          ? val?.specialization[0] +
                          " +" +
                          String(val?.specialization.length - 1)
                          : val?.specialization[0]
                    }
                    label="Specialization (include upto 3)"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default SubjectOfIntrestSection;
