import React from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import "./index.scss";
function SelectComponent(Props) {
  const {
    handleChange,
    options,
    optionValues,
    name,
    selectedValue,
    disabled,
    label,
    labelClass,
    required,
    placeholder,
    activeWithoutValue,
    mandatory = false,
    mandatoryAsterisk = false
  } = Props;
  
  const optionsData = () => {
    // {options.map((val, ind) => (
    //   <option
    //     hidden={!placeholder && ind === 0}
    //     value={
    //       !placeholder && ind === 0
    //         ? ""
    //         : !!optionValues
    //         ? optionValues[ind]
    //         : val
    //     }
    //     key={val}
    //   >
    //     {val}
    //   </option>
    // ))}

    return options.map((val, ind) => {
      return {
        value: !!optionValues ? optionValues[ind] : val,
        label: val
      }
    })
  }

  const selectClasses = "" // (selectedValue || activeWithoutValue) ? "form-select select-active" : "form-select select-disable"
  const handleFieldChange = (data) => {
    handleChange(data.value)
  }

  const selectedOptionValue = optionsData().find(a => a.value == selectedValue) || null;
  return (
    <div className="">
      {labelClass!=='none' &&<label className={labelClass}>{label} {mandatory && <span className="option-badge mandatory-span badge pl-0">Mandatory</span>} {mandatoryAsterisk && <small className="input-required">*</small>} </label>}
      <Select
        classNamePrefix="reactSelect" 
        placeholder={placeholder || "Select"}  
        required={required}
        isDisabled={disabled}
        className={'reactSelect-container ' + selectClasses}
        onChange={handleFieldChange}
        name={name}
        isSearchable={false} 
        options={optionsData()}
        value={selectedOptionValue}
        multiple={false}
      />

      {/* <select
        required={required}
        disabled={disabled}
        className={
          selectedValue || activeWithoutValue
            ? "form-select select-active"
            : "form-select select-disable"
        }
        onChange={handleChange}
        name={name}
        value={selectedValue}
      >
        {placeholder && (
          <option value="" key={placeholder}>
            {placeholder}
          </option>
        )}
        {options.map((val, ind) => (
          <option
            hidden={!placeholder && ind === 0}
            value={
              !placeholder && ind === 0
                ? ""
                : !!optionValues
                ? optionValues[ind]
                : val
            }
            key={val}
          >
            {val}
          </option>
        ))}
      </select> */}
    </div>
  );
}

SelectComponent.propTypes = {
  handleChange: PropTypes.func,
  selectedvalue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  selectedValue: PropTypes.string,
  disabled: PropTypes.bool,
  labelClass: PropTypes.string,
  label: PropTypes.string,
  required:PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
  placeholder: PropTypes.string,
  activeWithoutValue: PropTypes.bool,
};

SelectComponent.defaultProps = {
  handleChange: () => null,
  selectedvalue: "",
  options: [],
  name: "",
  selectedValue: "",
  disabled: false,
  labelClass: "hidden",
  label: "label",
  required: false,
  placeholder: "",
  activeWithoutValue: false,
};

export default SelectComponent;
