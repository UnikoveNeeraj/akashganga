import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from "./Firebase";
const provider = new TwitterAuthProvider();
export const SignInWithTwitter = () => signInWithPopup(authentication,provider)