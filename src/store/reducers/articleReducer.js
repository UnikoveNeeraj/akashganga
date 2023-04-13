import { GET_ARTICLE } from "../actions/articleActions";

  const initialState = {
    articles: []
  };
  
  const ArticleReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_ARTICLE:
        return {
          articles:action.payload?.data,
        };
      default:
        return state;
    }
  };
  export default ArticleReducer;
  