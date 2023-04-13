// @flow
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Input from "../common/Otp_input";
import useOTP from "./useOTP";

const OtpInput = ({
  OTPLength,
  disabled,
  autoFocus,
  value,
  onChange,
  otpType,
  className,
  inputClassName,
  inputStyles,
  style,
  label
}) => {
  const {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus
  } = useOTP({
    autoFocus,
    value,
    otpType,
    onChange,
    OTPLength,
  });
  // Needs to be memorized
  const renderInputs = useMemo(() => {
    const otp = getOtpValue();
    const inputs = [];

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < OTPLength; index++) {

      inputs.push(
        <Input
          key={index}
          className={inputClassName}
          inputStyles={inputStyles}
          focus={activeInput === index}
          value={otp[index]}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onInput={handelOnInput}
          onPaste={handleOnPaste}
          onInputFocus={onInputFocus}
          index={index}
          disabled={disabled}
          autoFocus={autoFocus}
          data-testid="input"
          otpType={otpType}
        />
      );
    }

    return inputs;
  }, [
    getOtpValue,
    OTPLength,
    inputClassName,
    inputStyles,
    activeInput,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
    disabled,
    autoFocus,
    otpType
  ]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", position: "relative", ...style }}
        className={`${className}`}
        data-testid="otp-input-root"
      >
        <label className="p-0" style={{ position: "absolute", left: '4px', top: '-23px' }}>{label}</label>
        {renderInputs}
      </div>
    </>
  );
};

OtpInput.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  OTPLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  otpType: PropTypes.oneOf(["number", "alpha", "alphanumeric", "any"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputStyles: PropTypes.object,
  style: PropTypes.object,
  label: PropTypes.string
};

OtpInput.defaultProps = {
  className: "",
  inputClassName: "H1DesktopBlack",
  OTPLength: 6,
  onChange: () => null,
  disabled: false,
  autoFocus: true,
  value: "",
  otpType: "number",
  inputStyles: {},
  style: {},
  label: ""

};

export default OtpInput;