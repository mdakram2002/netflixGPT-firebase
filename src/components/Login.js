/** @format */

import React from "react";
import Header from "./Header";
import body from "../assets/body.jpg";
import { useState, useRef } from "react";
import checkValidateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // handle checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleTextClick = () => {
    setIsChecked(!isChecked);
  };

  // Form Validation
  const handleBtnClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    } else {
      // SignIn Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src={body}
          alt="bodyImage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow flex items-center justify-center z-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col items-center justify-center w-4/12 xs:w-full sm:w-5/12 md:w-4/12 p-8 bg-black bg-opacity-80 rounded-lg space-y-4"
        >
          <h2 className="text-white font-bold text-3xl mb-3 self-start">
            {isSignInForm ? "Sign In" : " Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              ref={name}
              className="w-full p-2 m-2 text-white bg-black opacity-55 border border-gray-300 rounded-sm "
              type="text"
              placeholder="Enter Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full p-2 m-2 text-white bg-black opacity-55 border border-gray-300 rounded-sm "
            type="text"
            placeholder="Email or mobile number"
          />
          <input
            ref={password}
            className="w-full p-2 m-2 text-white bg-black opacity-55 border border-gray-300 rounded-sm"
            type="password"
            placeholder="Enter Password"
          />

          <p className="text-red-500 self-start font-semibold mb-2">
            {errorMessage}
          </p>

          <button
            onClick={handleBtnClick}
            className="w-full px-2 py-1 m-4 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : " Sign Up"}
          </button>
          <p className="flex w-full items-center justify-center text-gray-300 p4">
            OR
          </p>

          {/* Use a Sign-in code  & Forget Password */}
          <button className="flex w-full items-center justify-center text-gray-50 font-semibold p-2 border border-gray-600 opacity-85 rounded-sm ">
            Use a sign-in code
          </button>
          <button className="flex w-full items-center justify-center text-gray-50 font-semibold hover:underline hover:text-gray-400 ">
            Forget password?
          </button>

          {/* Handel the checkbox Area --------------- */}
          <div className="flex w-full space-x-2">
            <input
              className="text-white self-start"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p
              id="checkbox"
              className="text-white -mt-2 cursor-pointer"
              onClick={handleTextClick}
            >
              {" "}
              Remember me{" "}
            </p>
          </div>
          <div className="flex self-start">
            <p className="text-gray-400">New to Netflix?</p>
            <button
              onClick={toggleSignInForm}
              className="text-white font-semibold hover:underline hover:text-gray-500"
            >
              {isSignInForm ? "Sign Up" : " Already registered Sign in now."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
