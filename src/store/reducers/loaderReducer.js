import { SET_LOADER } from "../actions/LoaderActions";

  const initialState = {
  
    loader: false,
  };
  
  const LoaderReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_LOADER:
        return {
          loader: action.payload,
        };
      default:
        return state;
    }
  };
  export default LoaderReducer;
  