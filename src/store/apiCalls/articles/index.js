import ApiEndPoint from "../../../ApiEndpoints";
import Api from "../../../ApiConfig";

const baseURL = ApiEndPoint.AakashGanga;

export const saveArticleToDraft = (params) => {
    const { headers, payload } = params
    const finalUrl = baseURL + ApiEndPoint.SaveArticle
    return Api.postData(finalUrl, headers, payload);
};
export const getArticleById = (data) => {
    const { headers, params } = data
    const finalUrl = baseURL + ApiEndPoint.GetArticleById
    return Api.getData(finalUrl, headers, params);
}

export const updateArticle = (data) => {
    const { headers, params, payload } = data
    const finalUrl = baseURL + ApiEndPoint.UpdateArticle
    return Api.postData(finalUrl, headers, payload, params);
}

