import { affiliationTitle } from "../../../utils/index";

const AffiliationRecord = ({
  data = {},
  dataKey = 1,
  affiliationType = "",
  nationality,
  getSubject = () => {},
}) => {
  if (!data?._id) {
    return null;
  }
  const {
    city,
    department,
    name,
    pincode,
    specialization = [],
    state,
    subject,
    url,
    _id,
  } = data;

  const specializationData = () => {
    const value =
      specialization.length > 0 ? `${specialization[0].specialization}` : "";
    return (
      value +
      (specialization.length > 1 ? ` +${specialization.length - 1}` : "")
    );
  };

  return (
    <div key={data._id} className="fieldSet pb-3 mb-1">
      <h3 className="labelSubHeading mb-3">{affiliationTitle[dataKey]}</h3>
      <ul>
        {dataKey < 2 && (
          <>
            <li>
              <div className="fieldWrap mb-4">
                <div>
                  <p className="fieldForm">{affiliationType}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="fieldCol"></div>
            </li>
          </>
        )}
        <li>
          <div className="fieldWrap mb-3">
            {
              affiliationType === "University" ? (
                <label className="labelForm">Name of University</label>
              ) : affiliationType === "Institute" ? (
                <label className="labelForm">Name of Institute</label>
              ) : affiliationType === "Company" ? (
                <label className="labelForm">Name of Company</label>
              ) : (
                <label className="labelForm">Name of Hospital</label>
              )
            }
            <div>
              <p className="fieldForm">{name}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            {
              affiliationType === "University" ? (
                <label className="labelForm">URL of University</label>
              ) : affiliationType === "Institute" ? (
                <label className="labelForm">URL of Institute</label>
              ) : affiliationType === "Company" ? (
                <label className="labelForm">URL of Company</label>
              ) : (
                <label className="labelForm">URL of Hospital</label>
              )
            }
            <div>
              <p className="fieldForm urlIcon">{url}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            { 
              affiliationType === "Company" ? (
                <label className="labelForm">Designation</label>
              ) : (
                <label className="labelForm">Affiliated Department</label>
              )
            }
            <div>
              <p className="fieldForm">{department}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            <label className="labelForm">Primary Subject</label>
            <div>
              <p className="fieldForm">{subject?.subjectName}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            <label className="labelForm">Specialization</label>
            <div>
              <p className="fieldForm">{specializationData()}</p>
            </div>
          </div>
        </li>
        
        <li>
          <div className="fieldWrap mb-3">
            <label className="labelForm">{nationality === "outSideIndia" ? "Country" : "State"}</label>
            <div>
              <p className="fieldForm">{state}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            <label className="labelForm">City</label>
            <div>
              <p className="fieldForm">{city}</p>
            </div>
          </div>
        </li>
        <li>
          <div className="fieldWrap mb-3">
            <label className="labelForm">Pin Code</label>
            <div>
              <p className="fieldForm">{pincode || ""}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AffiliationRecord;
