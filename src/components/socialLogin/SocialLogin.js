import { SignInWithGoogle } from "../../FirebaseConnection/GoogleAuth";
import { SignInWithFacebook } from "../../FirebaseConnection/FacebooAuth";
import PropTypes from "prop-types";
import "./SocialLogin.scss";
import { genericError } from "../../utils";
import { OnFetchingDetails, OnGettingToken, OnLinkedinAuth } from "./queries";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useCallback, useEffect, useState } from "react";
import { ImAmazon } from "react-icons/im";
import { Link } from "react-router-dom";
import Google from "../../svg/google.svg";
import Facebook from "../../svg/facebook.svg";
import Orcid from "../../svg/orcid.svg";
import Amazon from "../../svg/amazon.svg";
import Linkedin from "../../svg/linkedin.svg";
import Twitter from "../../svg/twitter.svg";
import Apple from "../../svg/apple.svg";
import Instagram from "../../svg/instagram.svg";
import { SignInWithTwitter } from "../../FirebaseConnection/TwitterAuth";
import {
    LoginSocialGoogle,
    LoginSocialAmazon,
    LoginSocialFacebook,
    LoginSocialGithub,
    LoginSocialInstagram,
    LoginSocialLinkedin,
    LoginSocialMicrosoft,
    LoginSocialPinterest,
    LoginSocialApple,
} from 'reactjs-social-login';

const REDIRECT_URI = "http://localhost:3000/amazon";
export default function SocialLogin(props) {
    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState("");
    const { handleSocialLogin } = props
    const [authCode, setAuthCode] = useState("")

    const loginWithGoogle = () => {
        SignInWithGoogle()
            .then((result) => {
                handleSocialLogin(result)
            })
            .catch((error) => {

                genericError(error)
            });
    };
    const loginWithFacebook = () => {
        SignInWithFacebook()
            .then((result) => {
                handleSocialLogin(result)
            })
            .catch((error) => {
                genericError(error)
            });
    };
    const loginWithTwitter = () => {
        SignInWithTwitter().then((result) => {

            handleSocialLogin(result)

        }).catch((er) => {

            genericError(er)
        })

    }

    const onLoginStart = useCallback(() => {
        // alert('login start');
    }, []);

    const getToken = async (token) => {
        const contents = JSON.parse(token?.data?.contents)
        fetchLinkedInProfileDetails(contents?.access_token)
    }

    const getDetails = (details) => {
        const reqBody = {}
        const contents = JSON.parse(details?.data?.contents)
        reqBody.displayName = `${contents?.firstName?.localized?.en_US} ${contents?.lastName?.localized?.en_US}`
        reqBody.uid = contents.id
        const parm = {
            reqBody: reqBody,
            token: details?.token
        }
        fetchLinkedInEmail(parm)
    }

    const loginWithLinkedin = (data) => {
        const profileDetails = data?.profileDetails
        const contents = JSON.parse(data?.data?.contents)
        const error = { message: 'Your email is not authenticated with us please try mannual login.' }
        profileDetails.email = contents?.elements?.[0]?.['handle~'].emailAddress
        if (profileDetails?.email) {
            return handleSocialLogin({ user: profileDetails })
        }
        return genericError(error)
    }

    const { mutate: fetchLinkedInToken } = OnGettingToken(getToken);
    const { mutate: fetchLinkedInProfileDetails } = OnFetchingDetails(getDetails);
    const { mutate: fetchLinkedInEmail } = OnLinkedinAuth(loginWithLinkedin);

    useEffect(() => {
        if (authCode) {
            fetchLinkedInToken(authCode)
        }
        // eslint-disable-next-line
    }, [authCode])

    const { linkedInLogin } = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: `${window.location.origin}/linkedin`,
        scope: ['r_liteprofile', 'r_emailaddress'],
        onSuccess: (code) => {
            setAuthCode(code)
        },
        onError: (error) => {
            error.mesaage = error.errorMessage
            genericError(error)
        },
    });
    return (
        <div className="social-page">
            <div className="row">
                <div className="col-xl-6 col-lg-12">
                    <div className="social_row" onClick={loginWithFacebook}>
                        <img src={Facebook} alt="Facebook" className="me-2" />
                        <Link to="#" className="link f-600">Facebook</Link>
                    </div>

                    <div className="social_row" onClick={loginWithGoogle}>
                        <img src={Google} alt="Google" className="me-2" />
                        <Link to="#" className="link f-600">Google</Link>
                    </div>
                    {/* <div className="social_row social_disabled">
                        <img src={Orcid} alt="Orcid" className="me-2" />
                        <Link to="#" className="link f-600">ORCiD</Link>
                    </div> */}
                    {/* <div className="social_row social_disabled">
                        <img src={Amazon} alt="Amazon" className="me-2" />
                        <Link to="#" className="link f-600">Amazon</Link>
                    </div> */}
                </div>
                <div className="col-xl-6 col-lg-12">
                    <LoginSocialAmazon
                        client_id={process.env.REACT_APP_AMAZON_APP_ID || ''}
                        redirect_uri={REDIRECT_URI}
                        onResolve={({ provider, data }) => {
                            setProvider(provider);
                            setProfile(data);
                            handleSocialLogin({
                                user: {
                                    ...data,
                                    displayName: data.name,
                                    uid: data.user_id,
                                }
                            })
                        }}
                        onReject={(err) => {
                            console.log(err);
                        }}
                        onLoginStart={onLoginStart}
                    >
                        <div className="social_row">
                            {/* <img src={Instagram} alt="Instagram" className="me-2" /> */}
                            <ImAmazon />
                            <span className="link ps-2">Amazon</span>
                        </div>
                    </LoginSocialAmazon>
                    <div className="social_row" onClick={linkedInLogin}>
                        <img src={Linkedin} alt="LinkedIn" className="me-2" />
                        <span className="link">LinkedIn</span>
                    </div>
                    <div className="social_row" onClick={loginWithTwitter}>
                        <img src={Twitter} alt="Twitter" className="me-2" />
                        <span className="link">Twitter</span>

                    </div>
                    {/* <div className="social_row social_disabled">
                        <img src={Apple} alt="Apple" className="me-2" />
                        <span className="link">Apple</span>

                    </div> */}
                    <LoginSocialInstagram
                        client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ''}
                        client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ''}
                        redirect_uri={REDIRECT_URI}
                        onLoginStart={onLoginStart}
                        onResolve={({ provider, data }) => {
                            setProvider(provider);
                            setProfile(data);
                        }}
                        onReject={(err) => {
                            console.log(err);
                        }}
                    >
                        <div className="social_row">
                            <img src={Instagram} alt="Instagram" className="me-2" />
                            <span className="link">Instagram</span>
                        </div>
                    </LoginSocialInstagram>
                </div>
            </div>
        </div>
    )
}
SocialLogin.propTypes = {
    handleSocialLogin: PropTypes.func,
};

SocialLogin.defaultProps = {
    handleSocialLogin: () => null,

};