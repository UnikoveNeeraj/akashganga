import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from "./Firebase";

const  provider = new  GoogleAuthProvider();
 
export const SignInWithGoogle=()=>signInWithPopup(authentication,provider)