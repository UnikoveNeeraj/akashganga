import { combineReducers } from 'redux';
import LoginReducer from './loginReducers';
import ProfileReducer from './profileReducers';
import LoaderReducer from './loaderReducer';
import MasterDataReducer from './masterDataReducers';
import ArticleReducer from './articleReducer';
import BannerReducer from './bannerReducers';

const appReducer = combineReducers({
    LoginReducer,
    ProfileReducer,
    LoaderReducer,
    MasterDataReducer,
    ArticleReducer,
    BannerReducer
});

// reset the state of a redux store
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
