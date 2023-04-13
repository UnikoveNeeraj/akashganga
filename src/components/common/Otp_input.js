import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import"./index.scss"

const inputDefaultStyles = {
  width: 35,
  height: 35,
  textAlign: "center",
  // marginLeft: 20
};

/**
 * This is react stateless component
 * Renders an input box
 * @param {Object} {
 *   focus,
 *   autoFocus,
 *   disabled,
 *   value,
 *   secure,
 *   ...rest
 * }
 * @returns
 */
const Input = ({
  focus,
  autoFocus,
  disabled,
  value,
  onInputFocus,
  index,
  inputStyles,
  otpType,
  className,
  ...rest
}) => {
  const input = useRef(null);
  const componentMounted = useRef(false);
  useEffect(() => {
    // When component mounts
    if (autoFocus && focus) {
      input.current.focus();
    }
  }, []);

  useEffect(() => {
    // When component focus updates
    if (componentMounted.current && focus) {
      input.current.focus();
    }
    componentMounted.current = true;
  }, [focus]);

  const handelInputFocus = event => onInputFocus(index, event);
  let inputType = "tel";

  return (
    <input
      style={{ ...inputDefaultStyles, ...inputStyles }}
      type={inputType}
      autoFocus
      maxLength="1"
      ref={input}
      disabled={disabled}
      onFocus={handelInputFocus}
      value={value || ""}
      {...rest}
      className={className}
    />
  );
};

Input.propTypes = {
  focus: PropTypes.bool,
  autoFocus: PropTypes.bool,
  numInputs: PropTypes.number,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  inputStyles: PropTypes.object,
  className: PropTypes.string,
  otpType: PropTypes.oneOf(["number", "alpha", "alphanumeric", "any"])
};

export default React.memo(Input);