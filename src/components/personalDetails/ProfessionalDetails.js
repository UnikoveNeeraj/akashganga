import PropTypes from "prop-types";
import RadioButton from "../common/Radio_button";

function ProfessionalDetails(props) {
    const { handleChangeRadioButton, profileDetails,activeTab, } = props;
    return (
        <div className="">
            <div className="rowManageHead">
                <div className="heading mb-1">Professional Details</div>
                <p className="txtSmall mb-36">Tell us about yourself in detail</p>
            </div>
            <div className="br pt-3"></div>
            <div className="col-lg-12">
            <div className="rowManage">
                
                <p className="m-0">Work Type <span className="option-badge mandatory-span badge">Mandatory</span></p>
                <div className={props.errored ? "errored d-flex gender_row" : "d-flex gender_row"}>
                    <RadioButton
                        label="Academic"
                        name="workType"
                        id="Academic"
                        checked={profileDetails.workType === 'Academic'}
                        handleChange={(e) => handleChangeRadioButton(e)}
                        required={activeTab==="professional"}
                     />
                    <RadioButton
                        label="Medical & Health Sciences"
                        name="workType"
                        id="Medical&HealthSciences"
                        checked={profileDetails.workType === 'Medical&HealthSciences'}
                        handleChange={(e) => handleChangeRadioButton(e)}
                        required={activeTab==="professional"}
                    />
                    <RadioButton
                        label="Researcher"
                        name="workType"
                        id="Researcher"
                        checked={profileDetails.workType === 'Researcher'}
                        handleChange={(e) => handleChangeRadioButton(e)}
                        required={activeTab==="professional"}
                    />
                    <RadioButton
                        label="Professional"
                        name="workType"
                        id="Professional"
                        checked={profileDetails.workType === 'Professional'}
                        handleChange={(e) => handleChangeRadioButton(e)}
                        required={activeTab==="professional"}
                    />
                    <RadioButton
                        label="Student"
                        name="workType"
                        id="Student"
                        checked={profileDetails.workType === 'Student'}
                        handleChange={(e) => handleChangeRadioButton(e)}
                        required={activeTab==="professional"}
                    />
                </div>
                </div>
            </div>
        </div>
    );
}

ProfessionalDetails.propTypes = {
    profileDetails: PropTypes.shape({
        workType:  PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
        workCategories: PropTypes.string
    }),
    handleChangeRadioButton: PropTypes.func,
    handleChange: PropTypes.func,
    masterData: PropTypes.object,
    activeTab:PropTypes.string
};

ProfessionalDetails.defaultProps = {
    handleChangeRadioButton: () => null,
    handleChange: () => null,
    profileDetails: {},
    masterData: {},
    activeTab:""
};

export default ProfessionalDetails;
