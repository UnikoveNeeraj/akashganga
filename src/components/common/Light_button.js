import React from "react";
import PropTypes from "prop-types";

function LightButton(props) {
  const { title, handleClick, form, className } = props;
  return (
    <>
      <button
        onClick={handleClick}
        form={form}
        id={title}
        className={"light_btn " + className}
      >
        {title}
      </button>
    </>
  );
}

LightButton.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
  form: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LightButton.defaultProps = {
  title: "How it works",
  handleClick: () => null,
  form: null,
};

export default LightButton;
