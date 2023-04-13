import ApiEndPoint from "../../../ApiEndpoints";
import Api from "../../../ApiConfig";

const baseURL = ApiEndPoint.AakashGanga;

export const getProfileDetails = (headers, params) => {
    const finalUrl = baseURL + ApiEndPoint.GetUserById
    return Api.getData(finalUrl, headers, params).catch((error) => {return error});
};
export const getProfilePercentage = (headers,params) => {
    const finalUrl = baseURL + ApiEndPoint.GetPercentage
    return Api.getData(finalUrl,headers,params).catch((error) => {return error});
};
export const updateProfileDetails = (queryParams) => {
    const { params, data, headers } = queryParams;
    const finalUrl = baseURL + ApiEndPoint.Profile_update
    return Api.putData(finalUrl, headers, params, data);
};

export const subscribeNotification = (data) => {
    const finalUrl = baseURL + ApiEndPoint.SUBSCRIBE
    return Api.postData(finalUrl, {}, data,{}).catch((error) => {return error});
}

export const submitFeedback = (queryParams) => {
    const { data, headers , id} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.SubmitFeedback
    return Api.postData(finalUrl, headers, data,{id}).catch((error) => {return error});
}

export const createOtherSpecialization = (queryParams) => {
    const { data, headers } = queryParams;
    const finalUrl = baseURL + ApiEndPoint.ADD_SPECIALIZATION
    return Api.postData(finalUrl, headers, data, {}).catch((error) => {return error});
}


export const updateMobileNumberOTPVerify = (queryParams) => {
    const { data, headers , id} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.UPDATEMOBILEOTPVERIFY
    return Api.postData(finalUrl, headers, data,{id}).catch((error) => {
        return error.response;
    });
}


export const startSimilarityCheck = (queryParams) => {
    const { data, headers} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.START_SIMILARITY
    return Api.postData(finalUrl, headers, data, {});
}

export const UploadArticleContent = (queryParams) => {
    const { data, headers , userId} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.ARTICLE_UPLOAD
    return Api.postData(finalUrl, headers, data, {userId});
}

export const downloadSimiliratyReport = (queryParams) => {
    const { data, headers} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.DOWNLOAD_SIMILARITY_REPORT
    return Api.postData(finalUrl, headers, data, {});
}


export const UploadMedia = (body) => {
    const finalUrl = baseURL + ApiEndPoint.UploadMedia
    return Api.postData(finalUrl, {},body,{});
}

export const updateMobileNumber = (queryParams) => {
    const { data, headers , id} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.UPDATEMOBILE
    return Api.postData(finalUrl, headers, data,{id});
}

export const updateProfilePassword = (queryParams) => {
    const { data, headers , id} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.UPDATEPROFILEPASSWORD
    return Api.postData(finalUrl, headers, data,{id});
}


export const changePassword = (queryParams) => {
    const { data, headers ,id} = queryParams;
    const finalUrl = baseURL + ApiEndPoint.ChangePassword
    return Api.postData(finalUrl, headers, data,{id});
}
export const getSpecialization = (params) => {
    const finalUrl = `${baseURL}${ApiEndPoint.GetSpecialtiozation}/${params}`
    return Api.getData(finalUrl, {}, {});
}
export const verifyUrl = (url) => {
    const finalUrl = baseURL + ApiEndPoint.VerifyUrl
    return Api.postData(finalUrl, {},url,{});
}
export const removeProfilePicture =(headers)=>{
    const finalUrl =baseURL + ApiEndPoint.RemoveProfilePicture
    return Api.getData(finalUrl,headers,{}).catch((error) => {return error})
}