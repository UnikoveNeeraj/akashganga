import AffiliationRecord from "./AffiliationRecord";
import { getQualificationWithId } from "../../../utils";

const Details = ({
  masterData = {},
  getSubject = () => {},
  profileDetails = {},
  nationality
}) => {
  const getSpecializationData = (records = []) => {
    const value = records.length > 0 ? `${records[0].specialization}` : "";
    return value + (records.length > 1 ? ` +${records.length - 1}` : "");
  };

  return (
    <>
      <h1 className="labelHeading">Personal Details</h1>
      <div className="boxCover noStyle pt-0">
        <div className="fieldSet border-0">
          <ul className="personalDetails">
            <li>
              <div className="fieldName">
                <div className="fieldWrap">
                  <label className="labelForm">Title</label>
                  <div>
                    <p className="fieldForm">{profileDetails.title}</p>
                  </div>
                </div>
                <div className="fieldWrap">
                  <label className="labelForm">Full Name</label>
                  <div>
                    <p className="fieldForm">{profileDetails.fullName}</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap">
                <label className="labelForm">
                  Gender <div className="supTag">Private</div>
                </label>
                <div>
                  <p className="fieldForm">{profileDetails.gender}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="labelHeading">Professional Details</h2>
      <div className="boxCover noStyle pt-0">
        <div className="fieldSet pb-36">
          <h3 className="labelSubHeading mb-3">Work Type</h3>
          <ul>
            <li>
              <div className="fieldWrap">
                <div>
                  <p className="fieldForm">{profileDetails.workType}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {profileDetails.affiliation?.affiliations?.map(
          (affliationRecord, index) => {
            return (
              <AffiliationRecord
                key={affliationRecord._id}
                getSubject={getSubject}
                affiliationType={profileDetails?.affiliation?.affiliation_type}
                data={affliationRecord}
                dataKey={index + 1}
                nationality={nationality}
              />
            );
          }
        )}
        <div className="fieldSet">
          <h3 className="labelSubHeading mb-3">Education</h3>
          <ul>
            <li>
              <div className="fieldWrap mb-3">
                <label className="labelForm">Qualification</label>
                <div>
                  <p className="fieldForm">
                    {getQualificationWithId(
                      masterData.qualificationdata,
                      profileDetails?.Education?.qualification?._id
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap mb-3">
                <label className="labelForm">Subject Stream</label>
                <div>
                  <p className="fieldForm">
                    {getSubject(profileDetails?.Education?.subject?._id)}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="fieldWrap mb-3">
                <label className="labelForm">Specialization</label>
                <div>
                  <p className="fieldForm">
                    {getSpecializationData(
                      profileDetails?.Education?.specialization
                    )}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="fieldSet">
          <h3 className="labelSubHeading subjectHead">Subject of Interest</h3>
          <ul>
            {profileDetails?.subjectOfInterest?.map((interest) => {
              return (
                <>
                  <li key={interest?.interestedsubject?._id}>
                    <div className="fieldWrap mb-3">
                      <label className="labelForm">Subject Stream</label>
                      <div>
                        <p className="fieldForm">
                          {interest?.interestedsubject?.subjectName}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="fieldWrap mb-3">
                      <label className="labelForm">Specialization</label>
                      <div>
                        <p className="fieldForm">
                          {getSpecializationData(interest?.specialization)}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Details;
