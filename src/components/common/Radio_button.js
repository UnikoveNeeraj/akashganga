import PropTypes from "prop-types";
function RadioButton(Props) {
  const { labelClass = "form-check-label", label, name, id, handleChange,checked,handleClick, disabled,required} = Props;
  return (
    <div className="custom_radio">
      <div className="form-check pt-2 me-3">
        <input
          className="form-check-input"
          onChange={handleChange}
          type="radio"
          name={name}
          id={id}
          checked={checked}
          onClick={handleClick}
          disabled={disabled}
          required={required}
        />
        <label className={labelClass} htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  checked:PropTypes.bool,
  handleClick:PropTypes.func,
  disabled:PropTypes.bool,
  required:PropTypes.bool,
};

RadioButton.defaultProps = {
  label: "defaultlabel",
  name: "defaultId",
  id: "defaultId",
  checked:false,
  handleChange: () => null,
  handleClick:() => null,
  disabled:false,
  required:false
};

export default RadioButton;
