import PropTypes from "prop-types";
import { titleOptions, universitySchoolCompanyName } from "../../../constants"
import Input from "../../common/Input"
import Select from "../../common/Select"

const AutherAfflication = (props) => {
    const { masterData, handleChangeAfflications, afflicationValues, currentIndex } = props
    const getsup = (ind) => {

        if (ind === 2) {
            return 'nd'
        }
        else if (ind === 3) {

            return 'rd'
        }
        else if (ind === 1) {
            return 'st'
        }

        else {
            return 'th'
        }
    }
    return (
        <div className="row border p-3 mb-3">
            <div className="col-xl-6 col-lg-12 mb-3">
                <div className=""><label>{currentIndex + 1}  {getsup(currentIndex + 1) || 'st'} Author Name</label></div>
                <div className="title_with_name">
                    <div className="w-35 me-1">
                        <Select
                            handleChange={(e) => handleChangeAfflications(e, currentIndex)}
                            selectedValue={afflicationValues.authorDesignation}
                            options={titleOptions}
                            name="authorDesignation"
                            label=""
                        />
                    </div>
                    <div className="w-100">
                        <Input
                            name="authorName"
                            className={afflicationValues.authorName ? 'form-control active-input' : 'form-control grey-input'}
                            handleChange={(e) => handleChangeAfflications(e, currentIndex)}
                            type="text"
                            placeholder="Full Name"
                            // className="form-control grey-input"
                            label=""
                            value={afflicationValues.authorName}
                        />
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-3">
                <div className="">
                    <div className="mb-2"><label>Affiliated Department</label></div>
                    <Select
                        name='affiliatedDepartment'
                        handleChange={(e) => handleChangeAfflications(e, currentIndex)}
                        selectedValue={afflicationValues?.affiliatedDepartment}
                        placeholder='Select Affiliated Department'
                        options={masterData?.MasterData?.affiliateddata?.map((val => val.affiliated))}
                        // optionValues={masterData?.MasterData?.affiliateddata?.map((val => val._id))}
                        label=""
                    />
                </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-3">
                <div className="mb-2"><label>Affiliated Institute/University</label></div>
                <Select
                    name='affiliatedInstitude'
                    handleChange={(e) => handleChangeAfflications(e, currentIndex)}
                    options={universitySchoolCompanyName}
                    placeholder='Select Affiliated Institute/University'
                    label=""
                    selectedValue={afflicationValues?.affiliatedInstitude}

                />
            </div>
        </div>
    )
}
AutherAfflication.propTypes = {
    handleChangeAfflications: PropTypes.func,
    afflicationValues: PropTypes.object,
    masterData: PropTypes.object,
    currentIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

AutherAfflication.defaultProps = {

    handleChangeAfflications: () => null,
    afflicationValues: {},
    masterData: {}
};
export default AutherAfflication