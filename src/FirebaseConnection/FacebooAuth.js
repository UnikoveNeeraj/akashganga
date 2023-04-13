import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "./Firebase";

const  provider = new FacebookAuthProvider();
 
export const SignInWithFacebook = () => signInWithPopup(authentication, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });