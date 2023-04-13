import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { fieldType } from "../../constants";
import ToolTip from "./ToolTip";
import { tooltipMsg } from "../../utils";
function Input(Props) {
  const {
    type,
    className,
    preIconClass,
    postIconClass,
    postTextClass,
    label,
    placeholder,
    handleChange,
    onIconClick,
    name,
    labelClass,
    value,
    title,
    pattern,
    onFocus,
    isInvalid = false,
    alt,
    readOnly,
    required,
    onKeyDown,
    labelIcon,
    profileIcon,
    errors,
    onMouseEnter,
    mandatory = false,
    showOptionalIcon = false,
    ref,
  } = Props;

  const inputClasses = isInvalid ? `error-border ${className}` : className;
  return (
    <div className="py-2 w-100">
      <label className={labelClass} >
        {label} {mandatory && <span className="option-badge mandatory-span badge">Mandatory</span>}
        {labelIcon && (
          <ToolTip placement="top" toolTipMessage={tooltipMsg()}>
            <img className="pe-cursor" alt="not found" src={labelIcon} />
          </ToolTip>
        )}
        {profileIcon && (
          <ToolTip placement="bottom" toolTipMessage={tooltipMsg()}>
            <img className="pe-cursor" alt="not found" src={profileIcon} />
          </ToolTip>
        )}
      </label>
      <div className="custom_input">
        {preIconClass && (
          <span className={value ? "input_pre-active" : "input_pre"}>
            <img src={preIconClass} alt={alt} />
          </span>
        )}

        <input
          type={type === "otp" ? "tel" : type}
          name={name}
          className={inputClasses}
          value={value}
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
          key={name}
          maxLength={fieldType[type] ?? null}
          onFocus={onFocus}
          pattern={pattern}
          title={title}
          readOnly={readOnly}
          required={required}
          onKeyDown={onKeyDown}
          ref={ref?? null}
          // onMouseEnter={onMouseEnter}
        />
        
        {postTextClass && (
          <div className="input_post link"  onClick={onIconClick} dangerouslySetInnerHTML={{__html:postTextClass }}/>
          //   {postTextClass}
          // </p>
        )}
        
        {postIconClass && (
          <span className="input_post" onClick={onIconClick}>
            <img src={postIconClass} alt={alt} />
          </span>
        )}

        {
          showOptionalIcon &&
          <span className="option-badge mandatory-span badge optional-placement">Optional</span>
        }
      </div>
      <div className="label-error">{errors}</div>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  preIconClass: PropTypes.string,
  postIconClass: PropTypes.string,
  labelClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  onIconClick: PropTypes.func,
  onFocus: PropTypes.func,
  readOnly: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
  required: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
  alt: PropTypes.string,
  onKeyDown: PropTypes.func,
  labelIcon: PropTypes.string,
  errors: PropTypes.string,
  postTextClass:PropTypes.string,
  onMouseEnter:PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  className: "form-control grey-input with_icon",
  preIconClass: "",
  postIconClass: "",
  label: "label",
  placeholder: "",
  handleChange: () => null,
  onIconClick: () => null,
  name: "",
  labelClass: "hidden",
  value: "",
  alt: "no-img",
  pattern: null,
  title: null,
  readOnly: false,
  required: false,
  onFocus: () => null,
  onKeyDown: () => null,
  labelIcon: "",
  errors: "",
  propTypes:"",
  onMouseEnter:()=>null
};

export default Input;
