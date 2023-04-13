import React from "react";
import PropTypes from "prop-types";
import ToolTip from "./ToolTip";

function Button({ type, placement = "bottom", title, handleClick, disabled,form, toolTipMsg = "", ...rest}) {
  return (
    <button
      type={type}
      className={!disabled ? "custom_button" : "custom_button disabled"}
      onClick={handleClick}
      disabled={disabled}
      form={form}
      // title={toolTipMsg}
      {...rest}
    >
      {
        toolTipMsg ? (
          <ToolTip placement={placement} classNameTooltip='personaldetails-tooltip'  toolTipMessage={toolTipMsg}>
            <span>{title}</span>
          </ToolTip>
        ) : title
      }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  form:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Button.defaultProps = {
  type: "button",
  title: "Please enter Button Title",
  handleClick: () => null,
  disabled: false,
  form:null

};

export default Button;
