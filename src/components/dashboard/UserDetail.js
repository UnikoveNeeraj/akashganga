import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";
import {
  getProfileDetails,
  getProfilePercentage,
} from "../../store/apiCalls/profileDetails";

const UserDetail = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dismissShow, setDismissShow] = useState(true);
  const { id } = jwt_decode(localStorage.usertoken);
  const headers = { Authorization: `Bearer ${localStorage?.usertoken}` };
  const [profileDetails, setProfileDetails] = useState({});
  const [profileDetailsPer, setProfileDetailsPer] = useState(100);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    fetchProfileData();
    fetchProfilePer();
  }, []);

  const fetchProfileData = () => {
    const fetchdata = async () => {
      const params = { id: id };
      return getProfileDetails(headers, params);
    };

    fetchdata()
      .then((userData) => {
        if (userData.status === 200 && userData?.data?.data) {
          setProfileDetails(userData?.data?.data);
          setUserName(userData?.data?.data?.fullName.trim());
        }
      })
      .catch((err) => console.log(err));
    if (localStorage.getItem("dismissSet") !== null) {
      localStorage.setItem("dismissSet", null);
    }
  };
  const fetchProfilePer = () => {
    const fetchdata = async () => {
      const params = { userId: id };
      return getProfilePercentage(headers, params);
    };

    fetchdata()
      .then((userDataPer) => {
        if (userDataPer.status === 200 && userDataPer?.data?.percentage) {
        //  var perc = userDataPer.data.percentage.substring(0, userDataPer.data.percentage.length - 1);
          setProfileDetailsPer(userDataPer.data.percentage);
        }
      })
      .catch((err) => console.log(err));
    if (localStorage.getItem("dismissSet") !== null) {
      localStorage.setItem("dismissSet", null);
    }
  };
  const onCompleteProfile = () => {
    navigate("/myprofile");
  };
  const dismiss = () => {
    localStorage.setItem("dismissSet", 1);
    setDismissShow(false);
  };
  return (
    <>
      {localStorage.getItem("dismissSet") === null && profileDetailsPer != 100 && (
        <div className="profileSetupWrap">
          <p>
            <b>{profileDetailsPer}% Profile Setup Complete</b>
            <span>
              Please complete your profile to submit your article for
              publication.
            </span>
          </p>
          <div className="profileSetupBtn">
            <button className="button-link" onClick={dismiss}>
              Dismiss
            </button>
            <button
              className="button button-primary"
              onClick={onCompleteProfile}
            >
              Complete Profile
            </button>
          </div>
        </div>
      )}
      <p className="welcome">Welcome, {userName.charAt(0).toUpperCase() + userName.slice(1)}!</p>
    </>
  );
};

export default UserDetail;
