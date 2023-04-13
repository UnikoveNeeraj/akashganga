import { GET_PROFILE_DETAILS } from "../actions/profileActions";

  const initialState = {
    userLoginDetails: {
      token: "",
    },
    user: {},
  };
  
  const ProfileReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_PROFILE_DETAILS:
        return {
          ...state,
          user: action.payload.data,
        };
      default:
        return state;
    }
  };
  export default ProfileReducer;
  