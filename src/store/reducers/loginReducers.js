import {
  LOGOUT_STATUS_SUCCESS,
  SET_LOGIN_USER_FAILURE,
  SET_LOGIN_USER_SUCCESS,
  SET_TOKEN_ON_REGISTRATION,
  SET_OTP,
} from "../actions/loginActions";

const initialState = {
  userLoginDetails: {
    token: "",
  },
  user: {},
  otp: ''
};

const LoginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_USER_SUCCESS:
      return {
        ...state,
        userLoginDetails: {
          token: action.payload.token,
        },
        user: action.payload.data,
      };
    case SET_LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_STATUS_SUCCESS:
      return {
        ...state,
        userLoginDetails: {
          token: "",
        },
        user: {},

      };
    case SET_OTP:
      return {
        ...state,
        otp: action.payload
      };
    case SET_TOKEN_ON_REGISTRATION:
      return {
        ...state,
        userLoginDetails: {
          token: action.payload.token
        },
        user: { _id: action.payload._id, mobileVerified: true, emailVerified: true },
      };
    default:
      return state;
  }
};
export default LoginReducer;
