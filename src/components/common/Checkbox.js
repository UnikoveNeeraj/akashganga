import PropTypes from "prop-types";
function Checkbox(Props) {
    const { className, checked, name, id, onClick , onRadioChange,disabled, value } = Props;
    return (
        <input type="checkbox" className={className} id={id} disabled={disabled} checked={checked} name={name} onClick={onClick} onChange={onRadioChange} value={value} />
    );
}

Checkbox.propTypes = {
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    checked: PropTypes.bool,
    onRadioChange:PropTypes.func,
    disabled:PropTypes.bool,
};

Checkbox.defaultProps = {
    name: "defaultId",
    id: "defaultId",
    checked: false,
    onClick: () => null,
    onRadioChange: () => null ,
    disabled:false
};

export default Checkbox;
