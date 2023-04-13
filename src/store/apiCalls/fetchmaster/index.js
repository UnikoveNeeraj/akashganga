import ApiEndPoint from "../../../ApiEndpoints";
import Api from "../../../ApiConfig";

const baseURL = ApiEndPoint.AakashGanga;

export const getAllMasterData = (headers, params) => {
    const finalUrl = baseURL + ApiEndPoint.GetAllMasterData
    return Api.getData(finalUrl, {}, {});
};
