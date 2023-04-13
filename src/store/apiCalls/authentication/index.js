import axios from "axios";
import Api from "../../../ApiConfig";
import ApiEndPoint from "../../../ApiEndpoints";

const baseURL = ApiEndPoint.AakashGanga;
export const registerNewUser = (data) => {
  const finalUrl = baseURL + ApiEndPoint.Registration
  return Api.postData(finalUrl, {}, data).catch((err) => {return err});
};

export const getEmailVerified = (headers) => {
  const finalUrl = baseURL + ApiEndPoint.VerifyUser
  return Api.getData(finalUrl, headers, {});
};

export const loginUser = (data) => {
  const finalUrl = baseURL + ApiEndPoint.UserLogin
  return Api.postData(finalUrl, {}, data);
};

export const socialLogin = (data) => {
  const finalUrl = baseURL + ApiEndPoint.Social
  return Api.postData(finalUrl, {}, data);
};

export const forgotPassword = (data) => {
  const finalUrl = baseURL + ApiEndPoint.ForgotPassword;
  return Api.postData(finalUrl, {}, data);
};

export const resetPassword = (queryParams) => {
  const { passwords, header } = queryParams
  const finalUrl = baseURL + ApiEndPoint.ResetPassword
  return Api.postData(finalUrl, header, passwords);
};

export const verifyOTP = (data) => {
  const finalUrl = baseURL + ApiEndPoint.Verifyotp
  return Api.postData(finalUrl, {}, data);
};
export const resendOtpForVerification =(params)=>{
  const finalUrl = baseURL + ApiEndPoint.ResendOtpForVerification
  return Api.getData(finalUrl, {}, params);

}
const linkedinBase = `https://api.allorigins.win/get?url=`
export const linkedInAuthentication =async (data) => {
  const{reqBody,token}=data
  const linkedinFetchEmail = `https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,handle~))&oauth2_access_token=${token}`
  const returnData= await axios(linkedinBase + encodeURIComponent(linkedinFetchEmail))
return {...returnData,profileDetails:reqBody}
};
export const LinkedinTokenAuth = (code) => {

  const linkedinFetchTokenUrl = `https://api.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&client_secret=${process.env.REACT_APP_LINKEDIN_CLIENT_SECRET}&code=${code}&redirect_uri=${window.location.origin}/linkedin`
  return axios.get(linkedinBase + encodeURIComponent(linkedinFetchTokenUrl))
}
export const LinkedinProfileDetails = async(token) => {
  const linkedinFetchTokenUrl = `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,emailAddress,accessToken,profilePicture(displayImage~:playableStreams))&oauth2_access_token=${token}`
  const returnData = await axios.get(linkedinBase + encodeURIComponent(linkedinFetchTokenUrl))
  return {...returnData,token:token}
}
