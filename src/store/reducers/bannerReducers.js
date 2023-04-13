import { SET_BANNER_FIRST_TIME } from "../actions/bannerActions";

  const initialState = {
    bannerShow: true,
  };
  
  const BannerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_BANNER_FIRST_TIME:
        return {
          bannerShow: action.payload,
        };
      default:
        return state;
    }
  };
  export default BannerReducer;
  