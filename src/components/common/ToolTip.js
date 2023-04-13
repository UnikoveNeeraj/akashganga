
import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ToolTip = (props) => {
    const { placement = "bottom", children, toolTipMessage, classNameTooltip } = props
    return (
        <OverlayTrigger
            key={placement}
            placement={placement}
            // show={true}
            overlay={
                <Tooltip id={`tooltip-${placement}`} className={classNameTooltip}>
                    {toolTipMessage}
                </Tooltip>
            }
        >
            {children}
        </OverlayTrigger>
    )
}
ToolTip.propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string,
    toolTipMessage: PropTypes.string,
    classNameTooltip: PropTypes.string
};

ToolTip.defaultProps = {
    placement: 'top',
    toolTipMessage: '',
    classNameTooltip: ''
};

export default ToolTip