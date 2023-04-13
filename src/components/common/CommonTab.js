import React from "react";
import Tab from "react-bootstrap/Tab";
import { Nav, ProgressBar } from "react-bootstrap";
import rightArrow from "../../svg/arrow-right.svg";
import PropTypes from "prop-types";

const CommonTab = (props) => {
  const {
    propsCommonTab,
    activeTab,
    setActiveTab,
    isSection,
    isOnSelect,
    buttonBar,
    progressBarStatus
  } = props;

  return (
    <div className="col-lg-12">
      <Tab.Container
        id="controlled-tab-example"
        activeKey={activeTab}
        form="personal_details"
        // onSelect={(k) => setActiveTab(k)}
        onSelect={(k) => isOnSelect && setActiveTab(k)}
        className="mb-3 profile-details"
      >
        <div className="row">
          <div className="col-lg-7">
            <Nav className="mt-3">
              {propsCommonTab.map((el, ind) => {
                return (
                  <React.Fragment key={ind}>
                    <Nav.Item>
                      <Nav.Link eventKey={el.eventKey}>{el.title}</Nav.Link>
                    </Nav.Item>
                    {propsCommonTab.length - 1 === ind + 1 ? (
                      <Nav.Item>
                        <img
                          src={rightArrow}
                          className="mt-3 ms-2 me-3" 
                          alt="move"
                        />
                      </Nav.Item>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                );
              })}
            </Nav>
            <div className="d-flex align-items-center progress-container">
              Profile Completion
              <ProgressBar now={progressBarStatus} className="w-25 mx-2 my-3" />
              {progressBarStatus}%
            </div>
          </div>
          <div className={isSection ? "col-lg-5" : "d-none"}>
            <div>
              <p className="text-end mt-3">{buttonBar}</p>
            </div>
          </div>
        </div>
        {propsCommonTab.map((val, ind) => {
          return (
            <div key={ind}>
              <Tab.Content>
                <div>
                  <Tab.Pane eventKey={val.eventKey}>
                    {activeTab === val.eventKey ? val.propsComponent : ""}
                  </Tab.Pane>
                </div>
              </Tab.Content>
            </div>
          );
        })}
      </Tab.Container>
    </div>
  );
};
CommonTab.propTypes = {
  propsCommonTab: PropTypes.arrayOf(Object),
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
  isSection: PropTypes.bool,
  isOnSelect: PropTypes.bool,
  setShowDoLatterModal: PropTypes.func,
  progressBarStatus:PropTypes.string.isRequired
};

CommonTab.defaultProps = {
  propsCommonTab: [],
  activeTab: "",
  setActiveTab: () => null,
  isSection: false,
  isOnSelect: false,
  setShowDoLatterModal: () => null,
};

export default CommonTab;
