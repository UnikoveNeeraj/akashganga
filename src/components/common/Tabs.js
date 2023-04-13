import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {
    const { TabsHeading,onTabClick } = props;
    return (
        <>
            <ul
                className="nav nav-pills mb-3 profile-stepper"
                id="pills-tab"
                role="tablist"
            >
                {TabsHeading.map((val, ind) => {
                    return (
                        <li onClick={(e)=>onTabClick(e.target.name)} name={val} key={val} className="nav-item" role="presentation">
                            <button
                                key={ind}
                                name={val}
                                className={ind !== 0 ? "nav-link" : "nav-link active"}
                                id={`pills-${val.replace(/\s+/g, "")}-tab`}
                                data-bs-toggle="pill"
                                data-bs-target={`#pills-${val.replace(/\s+/g, "")}`}
                                type="button"
                                role="tab"
                                aria-controls={`#pills-${val.replace(/\s+/g, "")}`}
                                aria-selected="true"
                            >
                                {val}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
Tabs.propTypes = {
    TabsHeading: PropTypes.arrayOf(PropTypes.string),
    onTabClick:PropTypes.func,
};

Tabs.defaultProps = {
    TabsHeading: [],
    onTabClick:()=>null
};
export default Tabs;