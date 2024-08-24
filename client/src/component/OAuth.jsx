import { Button } from "flowbite-react";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import {
  userFailure,
  userStart,
  userSuccess,
} from "../Redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    dispatch(userStart());
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const resFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: resFromGoogle.user.displayName,
          email: resFromGoogle.user.email,
          googlePhoto: resFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === false) {
        return dispatch(userFailure(data.message));
      }

      if (data.status === true) {
        dispatch(userSuccess(data));
        navigate("/");
      }
    } catch (error) {
      return dispatch(userFailure(error.message));
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      className="border-none"
      onClick={handleGoogleClick}
    >
      <div className="flex justify-content items-center space-x-3">
        <FaGoogle />
        <span className="font-semibold tracking-wider">
          Continue with Google
        </span>
      </div>
    </Button>
  );
};

export default OAuth;
