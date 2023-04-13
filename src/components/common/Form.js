import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Form(Props) {
  const { onSubmit, children, id } = Props;
  return <form id={id} onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  id: PropTypes.string,
};

Form.defaultProps = {
  onSubmit: () => null,
  id: ''
};

export default Form;
