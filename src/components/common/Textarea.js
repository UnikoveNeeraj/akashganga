import React from "react";
import PropTypes from "prop-types";

const Textarea = (props) => {
    const { rows, className, placeholder,onChange,value,name } = props;
    return (
        <>
            <textarea
            name={name}
                rows={rows}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

Textarea.propTypes = {
    rows: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    name:PropTypes.string,
};

Textarea.defaultProps = {
    rows: "",
    className: "",
    placeholder: "",
    value:'',
    onChange:()=>null,
    name:''
};

export default Textarea