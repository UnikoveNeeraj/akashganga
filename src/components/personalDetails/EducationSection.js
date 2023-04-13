import PropTypes from "prop-types";
import { useState } from "react";
import { qualification } from "../../constants";
import { getSpecializationOptions } from "../../utils";
import Input from "../common/Input";
import Select from "../common/Select";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

function EducationSection(props) {
  const {
    handleChange,
    activeTab,
    masterData,
    errorObj = {},
    specializationsData,
    handleSelectChange = () => {},
    educationSection,
    handleOthers = () => {}
  } = props;

  const getOptions = () => {
    const optionData = getSpecializationOptions(masterData?.MasterData?.subjectdata, (educationSection?.subject?.subjectName || educationSection?.subject))
    return educationSection?.otherSpecialization?.specialization ? [...optionData, educationSection.otherSpecialization?.map(a => a.specialization)] : optionData;
  }

  const getClasses = (classes = "", name = '') => {
    return errorObj[name] ? `errored ${classes}` : classes;
  }

  return (
    <div className="col-lg-11 col-pd">
    <div className="row">
      <div className="col-lg-6">
        <div className={getClasses("form-group mb-4", 'qualification')}>
          <Select
            options={masterData?.MasterData?.qualificationdata?.map(
              (val) => val.qualification
            )}
            name="qualification"
            placeholder="Qualification*"
            handleChange={(value) => handleSelectChange(value, "qualification")}
            selectedValue={
              educationSection?.qualification?.qualification ||
              educationSection?.qualification
            }
            labelClass={educationSection?.qualification ? "" : "hidden"}
            label="Qualification*"
            required={activeTab === "professional"}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className={getClasses("form-group mb-4", 'subject')}>
          <Select
            options={masterData?.MasterData?.subjectdata?.map(
              (val) => val.subjectName
            )}
            name="subject"
            placeholder="Subject*"
            handleChange={(value) => handleSelectChange(value, "subject")}
            selectedValue={
              educationSection?.subject?.subjectName ||
              educationSection?.subject
            }
            labelClass={educationSection?.subject ? "" : "hidden"}
            label="Subject*"
            required={activeTab === "professional"}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className={getClasses("form-group mb-4", 'specialization')}>
          <div className="selectBox">
            <SearchDropdown
              options={getOptions()}
              disabled={!educationSection?.subject}
              index={"Education"}
              keyName="Education"
              handleOtherOption={handleOthers}
              onChange={handleChange}
              selectedValue={educationSection?.specialization}
              labelClass={
                educationSection?.specialization?.length !== 0 ? "" : "hidden"
              }
              name="specialization"
              placeholder={
                educationSection?.specialization?.length === 0 ||
                !educationSection?.specialization
                  ? "Specialization*"
                  : educationSection?.specialization?.length > 1
                  ? educationSection?.specialization[0] +
                    " +" +
                    String(educationSection?.specialization.length - 1)
                  : educationSection?.specialization[0]
              }
              label="Specialization (include upto 3)"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

EducationSection.propTypes = {
  profileDetails: PropTypes.shape({
    qualification: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    stream: PropTypes.string,
    specialization: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  }),
  handleChange: PropTypes.func,
  activeTab: PropTypes.string,
  masterData: PropTypes.object,
  specializationsData: PropTypes.array,
};

EducationSection.defaultProps = {
  handleChange: () => null,
  profileDetails: {},
  activeTab: "",
  masterData: {},
  specializationsData: [],
};

export default EducationSection;
