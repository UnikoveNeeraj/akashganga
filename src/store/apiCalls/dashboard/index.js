import ApiEndPoint from "../../../ApiEndpoints";
import Api from "../../../ApiConfig";

const baseURL = ApiEndPoint.AakashGanga;

export const getAricleDetails = (headers, params) => {
    const finalUrl = baseURL + ApiEndPoint.GetArticleByUserId
    return Api.getData(finalUrl, headers, params).catch((error) => {return error});
};

