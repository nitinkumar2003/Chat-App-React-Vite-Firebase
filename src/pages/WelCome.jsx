import React from "react";

import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../component/firebase";
const WelCome = () => {


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("provider", provider)
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider);
};

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-green">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white"> Welcome to  React + Vite Chat</h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center leading-9 tracking-tight text-white"> Sign in with Google to chat with with your fellow React Developers.</h2>
          <img className="mx-auto h-10 w-auto cursor-pointer" src="./img/btn_google_sign_in.png" alt="Google Sign In" onClick={()=>googleSignIn()} />
        </div>

      </div>
    </>
  )
}

export default WelCome;
